import { Quote } from 'lucide-react'
import { Eyebrow, Initials } from './Shared'
import { STATS, TESTIMONIALS } from '../data'

// Isometric cube cluster, drawn back-to-front so nearer cubes overlap farther ones.
const CUBES = [
  [0, 0, 0, 't'], [1, 0, 0, 't'], [0, 1, 0, 't'], [2, 0, 0, 'o'], [1, 1, 0, 't'], [0, 2, 0, 'o'],
  [2, 1, 0, 't'], [1, 2, 0, 't'], [2, 2, 0, 't'],
  [0, 0, 1, 't'], [1, 0, 1, 'o'], [0, 1, 1, 't'], [1, 1, 1, 't'],
  [0, 0, 2, 't'], [0, 0, 3, 'o'], [1, 0, 2, 't'],
  [2, 2, 1, 'o'],
]

export function IsoCubes() {
  const s = 22
  const shade = { t: ['#2dd4bf', '#0f766e', '#115e59'], o: ['#fdba74', '#f97316', '#c2410c'] }
  return (
    <svg viewBox="0 0 220 220" className="iso" aria-hidden="true">
      <ellipse cx="110" cy="182" rx="95" ry="26" fill="#2dd4bf" opacity=".12" />
      {CUBES.map(([x, y, z, c], i) => {
        const cx = 110 + (x - y) * s * 0.87
        const cy = 150 + (x + y) * s * 0.5 - z * s
        const [top, left, right] = shade[c]
        const h = s * 0.87
        return (
          <g key={i} stroke="#0b1f22" strokeWidth=".8">
            <path d={`M${cx} ${cy - s}l${h} ${s / 2}-${h} ${s / 2}-${h}-${s / 2}z`} fill={top} />
            <path d={`M${cx - h} ${cy - s / 2}l${h} ${s / 2}v${s}l-${h}-${s / 2}z`} fill={left} />
            <path d={`M${cx + h} ${cy - s / 2}l-${h} ${s / 2}v${s}l${h}-${s / 2}z`} fill={right} />
          </g>
        )
      })}
    </svg>
  )
}

export function TestimonialGrid() {
  return (
    <div className="t-grid">
      {TESTIMONIALS.map((t) => (
        <figure key={t.name} className="t-card">
          <Quote size={18} className="t-quote" />
          <blockquote>"{t.quote}"</blockquote>
          <figcaption>
            <Initials name={t.name} img={t.img} />
            <span><b>{t.name}</b><small>{t.role}</small></span>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

export function StatList() {
  return (
    <ul className="stats">
      {STATS.map(([n, l]) => (
        <li key={l}><b>{n}</b><span>{l}</span></li>
      ))}
    </ul>
  )
}

export default function Proof() {
  return (
    <section className="proof dark">
      <div className="container proof-inner">
        <div className="numbers">
          <div className="numbers-head">
            <div>
              <Eyebrow>By the numbers</Eyebrow>
              <h2>Businesses that build with Tirahut.</h2>
              <span className="rule" />
            </div>
            <IsoCubes />
          </div>
          <StatList />
        </div>
        <div className="testimonials">
          <Eyebrow>What our clients say</Eyebrow>
          <h2>Trusted. By the people we work with.</h2>
          <TestimonialGrid />
        </div>
      </div>
    </section>
  )
}
