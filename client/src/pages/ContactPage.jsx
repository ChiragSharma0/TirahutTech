import { useState } from 'react'
import { Mail, Phone, MapPin, Send, ChevronDown } from 'lucide-react'
import { Eyebrow, PageHero } from '../components/Shared'
import Seo from '../components/Seo'
import { CONTACT, SERVICES } from '../data'
import { track, visitorId } from '../track'

const BUDGETS = ['Under ₹1 lakh', '₹1 – 5 lakh', '₹5 – 15 lakh', '₹15 lakh+', 'Not sure yet']

const FAQS = [
  ['How long does a typical project take?', 'Small automations can be live in 1–2 weeks. Most custom applications take 6–12 weeks, depending on scope. We give you a clear timeline after the first conversation.'],
  ['How much does it cost?', 'It depends on what you need. After understanding your goals, we share a fixed quote or a phased plan so you always know what you are paying for.'],
  ['Do you work with startups?', 'Yes — from early-stage startups validating an idea to established companies modernising their systems.'],
  ['What happens after launch?', 'We offer ongoing support and maintenance plans, and we stay available for improvements as your business grows.'],
  ['Who owns the code?', 'You do. Once the project is paid for, the code, designs and documentation are yours.'],
]

const INFO = [
  [Mail, 'Email us', CONTACT.email, `mailto:${CONTACT.email}`],
  [Phone, 'Call us', CONTACT.phone, `tel:${CONTACT.phone.replace(/\s/g, '')}`],
  [MapPin, 'Address', CONTACT.address, null, CONTACT.landmark],
]

const EMPTY = { name: '', email: '', phone: '', company: '', service: '', budget: '', message: '', website: '' }

export default function ContactPage() {
  const [form, setForm] = useState(EMPTY)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [error, setError] = useState('')
  const [started, setStarted] = useState(false)
  const update = (e) => { start(); setForm({ ...form, [e.target.name]: e.target.value }) }

  function start() {
    if (started) return
    setStarted(true)
    track('form_start', { form: 'contact' })
  }

  async function submit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/forms/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, visitor: visitorId, path: location.pathname }),
      })
      if (!res.ok) throw new Error((await res.json().catch(() => ({}))).error || 'Something went wrong')
      track('form_submit', { form: 'contact', service: form.service })
      setForm(EMPTY)
      setStatus('sent')
    } catch (err) {
      setError(err.message)
      setStatus('error')
    }
  }

  return (
    <>
      <Seo
        title="Contact Us"
        description="Reach out to Tirahut Tech for any queries or support. Email tirahuttech@gmail.com or call +91 8130654209. Based in Greater Noida, India, working with clients worldwide."
        keywords="contact tirahut tech, software development company contact, hire developers india, greater noida it company"
      />
      <PageHero
        variant="contact"
        eyebrow="Contact"
        title="Let's build something"
        accent="that works."
        lead="Reach out to us for any queries or support. We’d love to hear from you!"
      />

      <section className="light contact-section">
        <div className="container contact-grid">
          <form className="contact-form" onSubmit={submit} onFocus={start}>
            <h2>Start a project</h2>
            <div className="field-row">
              <label>Your name*<input name="name" required value={form.name} onChange={update} placeholder="Amit Verma" /></label>
              <label>Email*<input name="email" type="email" required value={form.email} onChange={update} placeholder="you@company.com" /></label>
            </div>
            <div className="field-row">
              <label>Phone<input name="phone" type="tel" value={form.phone} onChange={update} placeholder="+91 (optional)" autoComplete="tel" /></label>
              <label>Company<input name="company" value={form.company} onChange={update} placeholder="Company name (optional)" /></label>
            </div>
            <div className="field-row">
              <label>Service
                <select name="service" value={form.service} onChange={update}>
                  <option value="">Select a service</option>
                  {SERVICES.map((s) => <option key={s.slug}>{s.title}</option>)}
                </select>
              </label>
              <label>Budget
                <select name="budget" value={form.budget} onChange={update}>
                  <option value="">Select a range</option>
                  {BUDGETS.map((b) => <option key={b}>{b}</option>)}
                </select>
              </label>
            </div>
            <label>Tell us about your project*
              <textarea name="message" required rows="5" value={form.message} onChange={update} placeholder="What are you trying to solve?" />
            </label>
            {/* Honeypot: hidden from people, bots fill it in and get silently dropped. */}
            <input name="website" value={form.website} onChange={update} className="hp" tabIndex="-1" autoComplete="off" aria-hidden="true" />
            <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send Message'} <Send size={16} />
            </button>
            {status === 'sent' && <p className="form-note" role="status">Thanks! We've received your message and will reply within one working day.</p>}
            {status === 'error' && (
              <p className="form-note error" role="alert">
                {error}. You can also email us at <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
              </p>
            )}
          </form>

          <aside className="contact-info">
            <h3>Talk to us directly</h3>
            <p className="info-lead">Prefer email or a call? Reach out any time — a real person will reply.</p>
            {INFO.map(([Icon, label, value, href, extra]) => (
              <div key={label} className="info-card">
                <span className="service-icon"><Icon size={18} /></span>
                <div>
                  <small>{label}</small>
                  {href ? <a href={href}>{value}</a> : <p>{value}</p>}
                  {extra && <p className="info-extra">{extra}</p>}
                </div>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section className="dark section">
        <div className="container faq-wrap">
          <div>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="section-title">Questions we often get.</h2>
          </div>
          <div className="faq">
            {FAQS.map(([q, a]) => (
              <details key={q}>
                <summary>{q} <ChevronDown size={18} /></summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
