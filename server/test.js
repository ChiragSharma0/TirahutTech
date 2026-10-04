// Smoke test: node --test test.js  (uses a throwaway in-memory database)
process.env.DB_PATH = ':memory:'
process.env.ADMIN_TOKEN = 'test-token'
const { server } = await import('./index.js')
import { test, after } from 'node:test'
import assert from 'node:assert/strict'

await new Promise((r) => server.listen(0, r))
const base = `http://localhost:${server.address().port}`
after(() => server.close())

const post = (path, body) =>
  fetch(base + path, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
const admin = (path) => fetch(base + path, { headers: { Authorization: 'Bearer test-token' } }).then((r) => r.json())

test('events, forms and stats round-trip', async () => {
  const r = await post('/api/events', {
    visitor: 'v1', session: 's1',
    events: [
      { type: 'pageview', path: '/', data: { referrer: 'google.com', device: 'desktop' } },
      { type: 'click', path: '/', data: { label: 'Start a Project', href: '/contact' } },
      { type: 'scroll', path: '/', data: { depth: 75 } },
      { type: 'leave', path: '/', data: { seconds: 42 } },
      { type: 'bogus', path: '/' },
    ],
  })
  assert.equal(r.status, 204)

  assert.equal((await post('/api/forms/contact', { name: 'A', email: 'bad', message: 'hi' })).status, 422)
  assert.equal((await post('/api/forms/contact', { name: 'Amit', email: 'a@b.co', message: 'Need a website' })).status, 201)

  assert.equal((await fetch(`${base}/api/admin/stats`)).status, 401)
  const s = await admin('/api/admin/stats?days=7')
  assert.equal(s.totals.visitors, 1)
  assert.equal(s.totals.pageviews, 1)
  assert.equal(s.totals.avgSeconds, 42)
  assert.equal(s.totals.submissions, 1)
  assert.deepEqual(s.clicks[0], { label: 'Start a Project', href: '/contact', n: 1 })
  assert.equal(s.pages[0].maxScroll, 75)
  assert.deepEqual(s.referrers, [{ source: 'google.com', n: 1 }])

  // Callback requests need a valid phone and explicit consent.
  assert.equal((await post('/api/forms/callback', { phone: '98765 43210' })).status, 422)
  assert.equal((await post('/api/forms/callback', { phone: '12', consent: true })).status, 422)
  assert.equal((await post('/api/forms/callback', { phone: '+91 98765-43210', consent: true, visitor: 'v1' })).status, 201)
  assert.equal((await post('/api/forms/nope', {})).status, 404)

  const subs = await admin('/api/admin/submissions')
  assert.equal(subs[0].form, 'callback')
  assert.equal(subs[0].phone, '+919876543210')
  assert.equal(subs[0].visits, 1)
  assert.equal(subs[1].message, 'Need a website')
  assert.deepEqual(await admin('/api/admin/ga'), { configured: false })
})
