import { useEffect, useState } from 'react'
import { RefreshCw, LogOut, Users, MousePointerClick, Eye, Timer, Inbox, Radio, Activity } from 'lucide-react'
import { Logo } from '../components/Shared'
import { formatDate } from '../data'
import './admin.css'

const TOKEN_KEY = 'th_admin_token'
const RANGES = [7, 30, 90]

const getToken = () => {
  try { return sessionStorage.getItem(TOKEN_KEY) || '' } catch { return '' }
}

const fmt = (n) => (n ?? 0).toLocaleString('en-IN')
const duration = (s) => (s >= 60 ? `${Math.floor(s / 60)}m ${s % 60}s` : `${s || 0}s`)

// Fill in days with no traffic so the time axis is continuous.
function fillDays(daily, days) {
  const byDate = Object.fromEntries(daily.map((d) => [d.date, d]))
  return Array.from({ length: days }, (_, i) => {
    const date = new Date(Date.now() - (days - 1 - i) * 86_400_000).toISOString().slice(0, 10)
    return byDate[date] || { date, pageviews: 0, visitors: 0 }
  })
}

function Tile({ Icon, label, value, hint }) {
  return (
    <div className="tile">
      <span className="tile-label"><Icon size={15} /> {label}</span>
      <b>{value}</b>
      {hint && <small>{hint}</small>}
    </div>
  )
}

function DailyChart({ data }) {
  const [hover, setHover] = useState(null)
  const max = Math.max(1, ...data.map((d) => d.pageviews))
  const h = data[hover]
  return (
    <div className="daily">
      <div className="daily-plot" onMouseLeave={() => setHover(null)}>
        {[1, 0.5].map((f) => (
          <div key={f} className="gridline" style={{ bottom: `${f * 100}%` }}><span>{fmt(max * f)}</span></div>
        ))}
        {data.map((d, i) => (
          <div key={d.date} className={`col${hover === i ? ' on' : ''}`} onMouseEnter={() => setHover(i)}>
            <i style={{ height: `${(d.pageviews / max) * 100}%` }} />
          </div>
        ))}
        {h && (
          <div className="tip" style={{ left: `${((hover + 0.5) / data.length) * 100}%` }}>
            <small>{formatDate(h.date)}</small>
            <b>{fmt(h.pageviews)} page views</b>
            <span>{fmt(h.visitors)} visitors</span>
          </div>
        )}
      </div>
      <div className="daily-axis">
        <span>{formatDate(data[0].date)}</span>
        <span>{formatDate(data.at(-1).date)}</span>
      </div>
    </div>
  )
}

function Bars({ rows, format = fmt }) {
  if (!rows.length) return <p className="empty">No data yet.</p>
  const max = Math.max(1, ...rows.map((r) => r.value))
  return (
    <ul className="bars">
      {rows.map((r) => (
        <li key={r.label} title={`${r.label}: ${format(r.value)}`}>
          <span className="bar-label">{r.label}</span>
          <span className="bar-track"><i style={{ width: `${(r.value / max) * 100}%` }} /></span>
          <span className="bar-value">{format(r.value)}</span>
        </li>
      ))}
    </ul>
  )
}

function Panel({ title, children, wide }) {
  return (
    <section className={`panel${wide ? ' wide' : ''}`}>
      <h3>{title}</h3>
      {children}
    </section>
  )
}

function Login({ onLogin, error }) {
  const [value, setValue] = useState('')
  return (
    <div className="admin-login">
      <form onSubmit={(e) => { e.preventDefault(); onLogin(value.trim()) }}>
        <Logo />
        <h1>Dashboard</h1>
        <label>Admin token<input type="password" value={value} onChange={(e) => setValue(e.target.value)} autoFocus required /></label>
        {error && <p className="admin-error" role="alert">{error}</p>}
        <button className="btn btn-primary">Sign in</button>
      </form>
    </div>
  )
}

function GaSection({ ga }) {
  if (!ga) return null
  if (ga.error) return <Panel title="Google Analytics" wide><p className="admin-error">{ga.error}</p></Panel>
  if (!ga.configured) {
    return (
      <Panel title="Google Analytics" wide>
        <p className="empty">
          Not connected. Set <code>GA_PROPERTY_ID</code> and <code>GOOGLE_APPLICATION_CREDENTIALS</code> in
          <code>server/.env</code> to show GA4 reports here, and <code>VITE_GA_ID</code> in <code>client/.env</code> to send data to GA4.
        </p>
      </Panel>
    )
  }
  const t = ga.totals
  return (
    <>
      <h2 className="admin-h2">Google Analytics 4</h2>
      <div className="tiles">
        <Tile Icon={Users} label="Active users" value={fmt(t.activeUsers)} />
        <Tile Icon={Activity} label="Sessions" value={fmt(t.sessions)} />
        <Tile Icon={Eye} label="Page views" value={fmt(t.screenPageViews)} />
        <Tile Icon={Timer} label="Avg session" value={duration(Math.round(t.averageSessionDuration || 0))} />
        <Tile Icon={LogOut} label="Bounce rate" value={`${Math.round((t.bounceRate || 0) * 100)}%`} />
      </div>
      <div className="panels">
        <Panel title="Countries"><Bars rows={ga.countries.map((r) => ({ label: r.country, value: r.activeUsers }))} /></Panel>
        <Panel title="Sources"><Bars rows={ga.sources.map((r) => ({ label: r.sessionSource, value: r.sessions }))} /></Panel>
        <Panel title="Top pages (GA4)"><Bars rows={ga.pages.map((r) => ({ label: r.pagePath, value: r.screenPageViews }))} /></Panel>
      </div>
    </>
  )
}

async function fetchAll(token, days) {
  const get = (path) =>
    fetch(path, { headers: { Authorization: `Bearer ${token}` } }).then(async (r) => {
      if (r.status === 401) throw new Error('unauthorized')
      if (!r.ok) throw new Error((await r.json().catch(() => ({}))).error || `Request failed (${r.status})`)
      return r.json()
    })
  const [stats, submissions] = await Promise.all([get(`/api/admin/stats?days=${days}`), get('/api/admin/submissions')])
  // GA failures (bad key, no access) shouldn't hide our own stats.
  const ga = await get(`/api/admin/ga?days=${days}`).catch((e) => ({ error: `Google Analytics: ${e.message}` }))
  return { stats, submissions, ga }
}

export default function AdminPage() {
  const [token, setToken] = useState(getToken)
  const [days, setDays] = useState(30)
  const [data, setData] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [tick, setTick] = useState(0) // bump to refetch

  useEffect(() => {
    if (!token) return
    let stale = false // ignore responses for a range the user already switched away from
    fetchAll(token, days)
      .then((d) => {
        if (stale) return
        setData(d)
        setError('')
      })
      .catch((e) => {
        if (stale) return
        if (e.message === 'unauthorized') {
          try { sessionStorage.removeItem(TOKEN_KEY) } catch { /* private mode */ }
          setToken('')
          setError('That token was not accepted.')
        } else setError(e.message)
      })
      .finally(() => !stale && setLoading(false))
    return () => { stale = true }
  }, [token, days, tick])

  const refresh = () => { setLoading(true); setTick((n) => n + 1) }

  function login(t) {
    try { sessionStorage.setItem(TOKEN_KEY, t) } catch { /* private mode */ }
    setError('')
    setToken(t)
  }

  function logout() {
    try { sessionStorage.removeItem(TOKEN_KEY) } catch { /* private mode */ }
    setToken('')
    setData(null)
  }

  if (!token) return <Login onLogin={login} error={error} />

  const s = data?.stats
  const t = s?.totals
  const pv = t?.pageviews || 0
  const funnel = s?.forms.find((f) => f.form === 'contact')
  const callback = s?.forms.find((f) => f.form === 'callback')

  return (
    <div className="admin">
      <header className="admin-bar">
        <Logo />
        <div className="admin-controls">
          <div className="seg" role="group" aria-label="Date range">
            {RANGES.map((r) => (
              <button key={r} className={days === r ? 'on' : ''} onClick={() => setDays(r)}>{r} days</button>
            ))}
          </div>
          <button className="icon-btn" onClick={refresh} aria-label="Refresh" disabled={loading}><RefreshCw size={16} className={loading ? 'spin' : ''} /></button>
          <button className="icon-btn" onClick={logout} aria-label="Sign out"><LogOut size={16} /></button>
        </div>
      </header>

      <main className="admin-main">
        {error && <p className="admin-error" role="alert">{error}</p>}
        {!s ? <p className="empty">Loading…</p> : (
          <>
            <h2 className="admin-h2">Your site · last {days} days</h2>
            <div className="tiles">
              <Tile Icon={Users} label="Visitors" value={fmt(t.visitors)} hint={`${fmt(t.sessions)} sessions`} />
              <Tile Icon={Eye} label="Page views" value={fmt(pv)} hint={t.sessions ? `${(pv / t.sessions).toFixed(1)} per session` : ''} />
              <Tile Icon={Timer} label="Avg time on page" value={duration(t.avgSeconds)} />
              <Tile Icon={MousePointerClick} label="Clicks" value={fmt(t.clicks)} />
              <Tile Icon={Inbox} label="Leads" value={fmt(t.submissions)} />
              <Tile Icon={Radio} label="Live now" value={fmt(t.liveNow)} hint="active in last 5 min" />
            </div>

            <div className="panels">
              <Panel title="Page views per day" wide><DailyChart data={fillDays(s.daily, days)} /></Panel>

              <Panel title="Top pages" wide>
                {s.pages.length ? (
                  <table className="admin-table">
                    <thead><tr><th>Page</th><th>Views</th><th>Avg time</th><th>Deepest scroll</th></tr></thead>
                    <tbody>
                      {s.pages.map((p) => (
                        <tr key={p.path}>
                          <td>{p.path}</td><td>{fmt(p.views)}</td><td>{duration(p.avgSeconds)}</td><td>{p.maxScroll ? `${p.maxScroll}%` : '—'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : <p className="empty">No visits yet.</p>}
              </Panel>

              <Panel title="Traffic sources (sessions)"><Bars rows={s.referrers.map((r) => ({ label: r.source, value: r.n }))} /></Panel>
              <Panel title="Devices"><Bars rows={s.devices.map((r) => ({ label: r.device || 'unknown', value: r.n }))} /></Panel>
              <Panel title="Scroll depth reached">
                <Bars
                  rows={s.scroll.map((r) => ({ label: `${r.depth}% of page`, value: pv ? Math.round((r.n / pv) * 100) : 0 }))}
                  format={(v) => `${v}% of views`}
                />
              </Panel>

              <Panel title="Most clicked">
                <Bars rows={s.clicks.map((c) => ({ label: c.label || c.href || '(no text)', value: c.n }))} />
              </Panel>
              <Panel title="Contact form funnel">
                {funnel ? (
                  <>
                    <Bars rows={[{ label: 'Started filling', value: funnel.started }, { label: 'Submitted', value: funnel.submitted }]} />
                    <p className="funnel-rate">
                      <b>{funnel.started ? Math.round((funnel.submitted / funnel.started) * 100) : 0}%</b> of people who started the form sent it
                    </p>
                  </>
                ) : <p className="empty">No form activity yet.</p>}
              </Panel>
              <Panel title="Returning-visitor call prompt">
                {callback?.shown ? (
                  <>
                    <Bars rows={[
                      { label: 'Shown', value: callback.shown },
                      { label: 'Dismissed', value: callback.dismissed },
                      { label: 'Requested a call', value: callback.submitted },
                    ]} />
                    <p className="funnel-rate">
                      <b>{Math.round((callback.submitted / callback.shown) * 100)}%</b> of returning visitors who saw it asked for a call
                    </p>
                  </>
                ) : <p className="empty">Not shown to anyone yet — it appears on a visitor's 3rd visit.</p>}
              </Panel>
            </div>

            <h2 className="admin-h2">Leads</h2>
            <section className="panel wide">
              {data.submissions.length ? (
                <div className="table-scroll">
                  <table className="admin-table">
                    <thead><tr><th>Date</th><th>Type</th><th>Name</th><th>Contact</th><th>Visits</th><th>Details</th></tr></thead>
                    <tbody>
                      {data.submissions.map((r) => (
                        <tr key={r.id}>
                          <td className="nowrap">{new Date(r.ts).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}</td>
                          <td><span className={`tag tag-${r.form}`}>{r.form === 'callback' ? 'Call request' : 'Enquiry'}</span></td>
                          <td>{r.name || '—'}</td>
                          <td className="contact-cell">
                            {r.phone && (
                              <span>
                                <a href={`tel:${r.phone}`}>{r.phone}</a>
                                {' · '}
                                <a href={`https://wa.me/${r.phone.replace(/^\+/, '')}`} target="_blank" rel="noreferrer">WhatsApp</a>
                                {r.consent ? <small> (OK to contact)</small> : null}
                              </span>
                            )}
                            {r.email && <a href={`mailto:${r.email}`}>{r.email}</a>}
                          </td>
                          <td title={r.firstSeen ? `First visit ${new Date(r.firstSeen).toLocaleDateString('en-IN')}` : ''}>{r.visits || '—'}</td>
                          <td className="msg">
                            {[r.company, r.service, r.budget].filter(Boolean).join(' · ')}
                            {r.message && <div>{r.message}</div>}
                            {!r.company && !r.service && !r.budget && !r.message && '—'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : <p className="empty">No leads yet.</p>}
            </section>

            <GaSection ga={data.ga} />
          </>
        )}
      </main>
    </div>
  )
}
