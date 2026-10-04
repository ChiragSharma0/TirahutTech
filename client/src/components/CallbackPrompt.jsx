import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { PhoneCall, X } from 'lucide-react'
import { track, visitCount, visitorId } from '../track'

const MIN_VISITS = 3
const DELAY_MS = 6000
const SNOOZE_DAYS = 30
const KEY = 'th_callback' // 'done' after a request, or the time "No thanks" was clicked

function shouldOffer() {
  if (visitCount < MIN_VISITS) return false
  try {
    const v = localStorage.getItem(KEY)
    return !v || (v !== 'done' && Date.now() - Number(v) > SNOOZE_DAYS * 86_400_000)
  } catch {
    return false
  }
}

let offered = false // once per page load

const remember = (v) => { try { localStorage.setItem(KEY, v) } catch { /* storage blocked */ } }

export default function CallbackPrompt() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', consent: false, website: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [error, setError] = useState('')
  const [started, setStarted] = useState(false)

  // Offer once per page load, after a short pause, and never on the contact page.
  useEffect(() => {
    if (offered || pathname === '/contact' || !shouldOffer()) return
    const t = setTimeout(() => {
      offered = true
      setOpen(true)
      track('prompt_shown', { form: 'callback' })
    }, DELAY_MS)
    return () => clearTimeout(t)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && dismiss()
    addEventListener('keydown', onKey)
    return () => removeEventListener('keydown', onKey)
  })

  if (!open) return null

  function dismiss() {
    if (status !== 'sent') {
      remember(String(Date.now()))
      track('prompt_dismissed', { form: 'callback' })
    }
    setOpen(false)
  }

  const update = (e) => {
    const { name, type, checked, value } = e.target
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value })
  }

  async function submit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/forms/callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, visitor: visitorId, path: location.pathname }),
      })
      if (!res.ok) throw new Error((await res.json().catch(() => ({}))).error || 'Something went wrong')
      track('form_submit', { form: 'callback' })
      remember('done')
      setStatus('sent')
    } catch (err) {
      setError(err.message)
      setStatus('error')
    }
  }

  return (
    <aside className="callback" role="dialog" aria-labelledby="callback-title">
      <button className="callback-close" onClick={dismiss} aria-label="Close"><X size={16} /></button>
      <div className="callback-head">
        <span className="callback-icon"><PhoneCall size={18} /></span>
        <h2 id="callback-title">Welcome back!</h2>
      </div>

      {status === 'sent' ? (
        <p className="callback-done" role="status">Thanks! We'll call you within one working day.</p>
      ) : (
        <form onSubmit={submit} onFocus={() => { if (!started) { setStarted(true); track('form_start', { form: 'callback' }) } }}>
          <p>Want a quick call about your project? Leave your number and we'll ring you.</p>
          <input name="name" value={form.name} onChange={update} placeholder="Your name (optional)" aria-label="Your name" autoComplete="name" />
          <input name="phone" type="tel" value={form.phone} onChange={update} placeholder="Phone number" aria-label="Phone number" autoComplete="tel" required pattern="[+\d\s\-().]{7,20}" />
          <input name="website" value={form.website} onChange={update} className="hp" tabIndex="-1" autoComplete="off" aria-hidden="true" />
          <label className="callback-consent">
            <input type="checkbox" name="consent" checked={form.consent} onChange={update} required />
            It's OK to call or WhatsApp me about my project.
          </label>
          {status === 'error' && <p className="callback-error" role="alert">{error}</p>}
          <div className="callback-actions">
            <button type="submit" className="btn btn-primary btn-sm" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Request a call'}
            </button>
            <button type="button" className="callback-skip" onClick={dismiss}>No thanks</button>
          </div>
        </form>
      )}
    </aside>
  )
}
