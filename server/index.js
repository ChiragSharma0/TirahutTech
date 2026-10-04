// Tirahut Tech tracking + forms server. Zero runtime deps except the optional GA4 client.
import { createServer } from 'node:http'
import { DatabaseSync } from 'node:sqlite'
import { readFile } from 'node:fs/promises'
import { join, extname, normalize } from 'node:path'
import { timingSafeEqual } from 'node:crypto'
import { gaReport } from './ga.js'

const PORT = Number(process.env.PORT || 8787)
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || ''
const DB_PATH = process.env.DB_PATH || join(import.meta.dirname, 'data.db')
const STATIC_DIR = join(import.meta.dirname, '../client/dist')
const MAX_BODY = 64 * 1024

const EVENT_TYPES = new Set(['pageview', 'leave', 'click', 'scroll', 'form_start', 'form_submit', 'prompt_shown', 'prompt_dismissed'])
const FORMS = new Set(['contact', 'callback'])

export const db = new DatabaseSync(DB_PATH)
db.exec(`
  CREATE TABLE IF NOT EXISTS events (
    id INTEGER PRIMARY KEY, ts INTEGER NOT NULL, type TEXT NOT NULL,
    visitor TEXT, session TEXT, path TEXT, data TEXT
  );
  CREATE INDEX IF NOT EXISTS events_ts ON events(ts);
  CREATE TABLE IF NOT EXISTS submissions (
    id INTEGER PRIMARY KEY, ts INTEGER NOT NULL, form TEXT NOT NULL,
    name TEXT, email TEXT, company TEXT, service TEXT, budget TEXT, message TEXT,
    visitor TEXT, path TEXT
  );
  CREATE INDEX IF NOT EXISTS events_visitor ON events(visitor);
`)
// Columns added after the first release — add them to existing databases.
if (!db.prepare('PRAGMA table_info(submissions)').all().some((c) => c.name === 'phone')) {
  db.exec('ALTER TABLE submissions ADD COLUMN phone TEXT; ALTER TABLE submissions ADD COLUMN consent INTEGER;')
}

const insertEvent = db.prepare('INSERT INTO events (ts, type, visitor, session, path, data) VALUES (?, ?, ?, ?, ?, ?)')
const insertSubmission = db.prepare(
  `INSERT INTO submissions (ts, form, name, email, phone, consent, company, service, budget, message, visitor, path)
   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
)

// ---------- helpers ----------
const str = (v, max = 200) => (typeof v === 'string' ? v.slice(0, max) : '')

function send(res, status, body) {
  if (status === 204) return res.writeHead(204).end()
  res.writeHead(status, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(body))
}

async function readJson(req) {
  let size = 0
  const chunks = []
  for await (const c of req) {
    size += c.length
    if (size > MAX_BODY) throw Object.assign(new Error('Body too large'), { status: 413 })
    chunks.push(c)
  }
  try {
    return JSON.parse(Buffer.concat(chunks).toString() || '{}')
  } catch {
    throw Object.assign(new Error('Invalid JSON'), { status: 400 })
  }
}

function isAdmin(req) {
  const given = Buffer.from((req.headers.authorization || '').replace(/^Bearer /, ''))
  const want = Buffer.from(ADMIN_TOKEN)
  return ADMIN_TOKEN.length > 0 && given.length === want.length && timingSafeEqual(given, want)
}

// ponytail: in-memory per-IP limit, resets on restart; use a shared store if running several instances
const hits = new Map()
function rateLimited(ip, limit) {
  const now = Date.now()
  const h = hits.get(ip)
  if (!h || now - h.start > 60_000) {
    hits.set(ip, { start: now, n: 1 })
    return false
  }
  return ++h.n > limit
}

// ---------- handlers ----------
function collect(body) {
  const events = Array.isArray(body.events) ? body.events.slice(0, 50) : []
  const now = Date.now()
  db.exec('BEGIN')
  for (const e of events) {
    if (!EVENT_TYPES.has(e?.type)) continue
    const data = e.data && typeof e.data === 'object' ? JSON.stringify(e.data).slice(0, 2000) : null
    insertEvent.run(now, e.type, str(body.visitor, 64), str(body.session, 64), str(e.path, 300), data)
  }
  db.exec('COMMIT')
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^\+?\d{7,15}$/
const invalid = (msg) => Object.assign(new Error(msg), { status: 422 })

function submitForm(form, body) {
  if (body.website) return // honeypot field: bots fill it, people never see it
  const name = str(body.name, 120).trim()
  const email = str(body.email, 200).trim()
  const phone = str(body.phone, 30).replace(/[\s\-().]/g, '')
  const message = str(body.message, 5000).trim()
  if (form === 'contact' && (!name || !EMAIL_RE.test(email) || !message)) {
    throw invalid('Name, a valid email and a message are required')
  }
  if (form === 'callback' && (!PHONE_RE.test(phone) || body.consent !== true)) {
    throw invalid('A valid phone number and your permission to call are required')
  }
  insertSubmission.run(
    Date.now(), form, name, email, phone, body.consent === true ? 1 : 0, str(body.company, 200),
    str(body.service, 120), str(body.budget, 60), message, str(body.visitor, 64), str(body.path, 300),
  )
}

export function stats(days) {
  const since = Date.now() - days * 86_400_000
  const q = (sql, ...args) => db.prepare(sql).all(since, ...args)
  const one = (sql) => db.prepare(sql).get(since)
  const day = "date(ts / 1000, 'unixepoch')"
  return {
    days,
    totals: {
      ...one(`SELECT COUNT(DISTINCT visitor) visitors, COUNT(DISTINCT session) sessions,
                SUM(type = 'pageview') pageviews, SUM(type = 'click') clicks
              FROM events WHERE ts >= ?`),
      avgSeconds: Math.round(
        one(`SELECT AVG(json_extract(data, '$.seconds')) v FROM events WHERE ts >= ? AND type = 'leave'`).v || 0,
      ),
      submissions: one('SELECT COUNT(*) v FROM submissions WHERE ts >= ?').v,
      liveNow: db.prepare('SELECT COUNT(DISTINCT visitor) v FROM events WHERE ts >= ?').get(Date.now() - 5 * 60_000).v,
    },
    daily: q(`SELECT ${day} date, SUM(type = 'pageview') pageviews, COUNT(DISTINCT visitor) visitors
              FROM events WHERE ts >= ? GROUP BY date ORDER BY date`),
    pages: q(`SELECT path, SUM(type = 'pageview') views,
                ROUND(AVG(CASE WHEN type = 'leave' THEN json_extract(data, '$.seconds') END)) avgSeconds,
                MAX(CASE WHEN type = 'scroll' THEN json_extract(data, '$.depth') END) maxScroll
              FROM events WHERE ts >= ? GROUP BY path HAVING views > 0 ORDER BY views DESC LIMIT 15`),
    scroll: q(`SELECT json_extract(data, '$.depth') depth, COUNT(*) n
               FROM events WHERE ts >= ? AND type = 'scroll' GROUP BY depth ORDER BY depth`),
    clicks: q(`SELECT json_extract(data, '$.label') label, json_extract(data, '$.href') href, COUNT(*) n
               FROM events WHERE ts >= ? AND type = 'click' GROUP BY label, href ORDER BY n DESC LIMIT 15`),
    // Referrer is only sent on a session's first page view, so count sessions, not page views.
    referrers: q(`SELECT COALESCE(NULLIF(ref, ''), 'Direct') source, COUNT(*) n FROM (
                    SELECT session, MAX(json_extract(data, '$.referrer')) ref
                    FROM events WHERE ts >= ? AND type = 'pageview' GROUP BY session
                  ) GROUP BY source ORDER BY n DESC LIMIT 10`),
    devices: q(`SELECT json_extract(data, '$.device') device, COUNT(DISTINCT visitor) n
                FROM events WHERE ts >= ? AND type = 'pageview' GROUP BY device ORDER BY n DESC`),
    forms: q(`SELECT json_extract(data, '$.form') form, SUM(type = 'prompt_shown') shown, SUM(type = 'prompt_dismissed') dismissed,
                SUM(type = 'form_start') started, SUM(type = 'form_submit') submitted
              FROM events WHERE ts >= ? AND type IN ('prompt_shown', 'prompt_dismissed', 'form_start', 'form_submit') GROUP BY form`),
  }
}

// ---------- static site (production) ----------
const MIME = { '.html': 'text/html', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.xml': 'application/xml', '.txt': 'text/plain', '.json': 'application/json', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.ico': 'image/x-icon', '.webp': 'image/webp' }

async function serveStatic(res, pathname) {
  const file = normalize(join(STATIC_DIR, pathname)).startsWith(STATIC_DIR) ? join(STATIC_DIR, pathname) : null
  for (const f of [file, join(STATIC_DIR, 'index.html')]) { // fall back to index.html for client-side routes
    if (!f) continue
    try {
      const body = await readFile(f)
      res.writeHead(200, { 'Content-Type': MIME[extname(f)] || 'application/octet-stream' })
      return res.end(body)
    } catch { /* try next */ }
  }
  send(res, 404, { error: 'Not found' })
}

// ---------- router ----------
export const server = createServer(async (req, res) => {
  const url = new URL(req.url, 'http://x')
  const ip = req.headers['x-forwarded-for']?.split(',')[0].trim() || req.socket.remoteAddress
  const route = `${req.method} ${url.pathname}`

  try {
    if (route === 'POST /api/events') {
      if (rateLimited(`e:${ip}`, 120)) return send(res, 429, { error: 'Too many requests' })
      collect(await readJson(req))
      return send(res, 204, {})
    }
    const form = url.pathname.match(/^\/api\/forms\/(\w+)$/)?.[1]
    if (req.method === 'POST' && FORMS.has(form)) {
      if (rateLimited(`f:${ip}`, 5)) return send(res, 429, { error: 'Too many submissions, try again in a minute' })
      submitForm(form, await readJson(req))
      return send(res, 201, { ok: true })
    }
    if (url.pathname.startsWith('/api/admin/')) {
      if (!isAdmin(req)) return send(res, 401, { error: 'Unauthorized' })
      const days = Math.min(Math.max(Number(url.searchParams.get('days')) || 30, 1), 365)
      if (route === 'GET /api/admin/stats') return send(res, 200, stats(days))
      if (route === 'GET /api/admin/submissions') {
        return send(res, 200, db.prepare(`
          SELECT s.*, (SELECT COUNT(DISTINCT session) FROM events e WHERE e.visitor = s.visitor) visits,
                      (SELECT MIN(ts) FROM events e WHERE e.visitor = s.visitor) firstSeen
          FROM submissions s ORDER BY s.ts DESC LIMIT 200`).all())
      }
      if (route === 'GET /api/admin/ga') return send(res, 200, await gaReport(days))
    }
    if (url.pathname.startsWith('/api/')) return send(res, 404, { error: 'Not found' })
    if (req.method === 'GET') return serveStatic(res, url.pathname)
    send(res, 405, { error: 'Method not allowed' })
  } catch (err) {
    if (!err.status) console.error(err)
    send(res, err.status || 500, { error: err.status ? err.message : 'Server error' })
  }
})

if (process.argv[1] === import.meta.filename) {
  if (!ADMIN_TOKEN) console.warn('ADMIN_TOKEN is not set — the dashboard API is locked until you set it.')
  server.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`))
}
