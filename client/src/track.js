// Visit & behaviour tracking. Sends events to our server (/api/events) and, when
// VITE_GA_ID is set, mirrors them to Google Analytics 4.
const GA_ID = import.meta.env.VITE_GA_ID
const DNT = navigator.doNotTrack === '1' || window.doNotTrack === '1'

function storedId(storage, key) {
  try {
    let v = storage.getItem(key)
    if (!v) storage.setItem(key, (v = crypto.randomUUID()))
    return v
  } catch {
    return 'anon'
  }
}
const visitor = storedId(localStorage, 'th_visitor')
const session = storedId(sessionStorage, 'th_session')

// Visits to the site from this browser. A new visit starts after 30+ minutes away
// (same rule as Google Analytics). Stays in the browser; never sent anywhere.
const touch = () => { try { localStorage.setItem('th_last', String(Date.now())) } catch { /* storage blocked */ } }
export const visitCount = (() => {
  try {
    let n = Number(localStorage.getItem('th_visits') || 0)
    if (Date.now() - Number(localStorage.getItem('th_last') || 0) > 30 * 60_000) localStorage.setItem('th_visits', String(++n))
    touch()
    return n
  } catch {
    return 0
  }
})()

if (GA_ID && !DNT) {
  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(s)
  window.dataLayer = window.dataLayer || []
  window.gtag = function () { window.dataLayer.push(arguments) }
  window.gtag('js', new Date())
  window.gtag('config', GA_ID, { send_page_view: false }) // we send page_view on route change
}

let queue = []
let timer

function flush() {
  clearTimeout(timer)
  if (!queue.length) return
  const body = JSON.stringify({ visitor, session, events: queue })
  queue = []
  if (!navigator.sendBeacon?.('/api/events', new Blob([body], { type: 'application/json' }))) {
    fetch('/api/events', { method: 'POST', body, headers: { 'Content-Type': 'application/json' }, keepalive: true }).catch(() => {})
  }
}

const off = () => DNT || location.pathname.startsWith('/admin')

export function track(type, data = {}) {
  touch()
  if (off()) return
  queue.push({ type, path: location.pathname, data })
  window.gtag?.('event', type === 'pageview' ? 'page_view' : type, type === 'pageview' ? { page_path: location.pathname } : data)
  if (queue.length >= 10) flush()
  else { clearTimeout(timer); timer = setTimeout(flush, 2000) }
}

// ---------- page views, time on page, scroll depth ----------
let current = null // { path, start, depths }
let firstView = true

function leave() {
  if (!current) return
  queue.push({ type: 'leave', path: current.path, data: { seconds: Math.round((Date.now() - current.start) / 1000) } })
  current = null
}

const device = () => (innerWidth < 768 ? 'mobile' : innerWidth < 1100 ? 'tablet' : 'desktop')

function externalReferrer() {
  try {
    const host = new URL(document.referrer).hostname
    return host === location.hostname ? '' : host
  } catch {
    return ''
  }
}

export function trackPage() {
  if (off()) return
  leave()
  current = { path: location.pathname, start: Date.now(), depths: new Set() }
  track('pageview', { referrer: firstView ? externalReferrer() : '', device: device() })
  firstView = false
}

let ticking = false
addEventListener('scroll', () => {
  if (ticking || !current) return
  ticking = true
  requestAnimationFrame(() => {
    ticking = false
    const pct = ((scrollY + innerHeight) / document.documentElement.scrollHeight) * 100
    for (const d of [25, 50, 75, 100]) {
      if (pct >= d - 1 && current && !current.depths.has(d)) {
        current.depths.add(d)
        track('scroll', { depth: d })
      }
    }
  })
}, { passive: true })

// ---------- clicks on links & buttons ----------
addEventListener('click', (e) => {
  const el = e.target.closest?.('a, button')
  if (!el) return
  const label = (el.getAttribute('aria-label') || el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 80)
  track('click', { label, href: el.getAttribute('href') || '' })
}, { capture: true })

// Send what's left when the tab is hidden or closed.
addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') { leave(); flush() }
  else if (!current && !off()) current = { path: location.pathname, start: Date.now(), depths: new Set() }
})
addEventListener('pagehide', () => { leave(); flush() })

export const visitorId = visitor
