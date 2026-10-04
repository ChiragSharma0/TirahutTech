import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function Logo() {
  return (
    <Link to="/" className="logo" aria-label="Tirahut Tech home">
      {/* Brand mark, traced from the logo artwork (public/img/logo.png). */}
      <svg viewBox="32 80 360 314" width="38" height="33" aria-hidden="true" strokeLinejoin="round" strokeWidth="9">
        <path d="M212 90 306 242 262 255 212 178 162 255 118 242Z" fill="#F47A20" stroke="#F47A20" />
        <path d="M104 271 150 280 122 337 198 337 198 384 42 384Z" fill="#137B7E" stroke="#137B7E" />
        <path d="M320 271 274 280 302 337 226 337 226 384 382 384Z" fill="#137B7E" stroke="#137B7E" />
      </svg>
      <span>
        <strong>TIRAHUT</strong>
        <small>TECH</small>
      </span>
    </Link>
  )
}

export function Eyebrow({ children }) {
  return <p className="eyebrow">{children}</p>
}

export function Button({ variant = 'primary', children, to = '/contact', small }) {
  return (
    <Link to={to} className={`btn btn-${variant}${small ? ' btn-sm' : ''}`}>
      {children}
      <ArrowRight size={small ? 14 : 16} />
    </Link>
  )
}

export function Mountains({ className, colors = ['#0d2a2e', '#0a1f23', '#06151a'] }) {
  return (
    <svg className={className} viewBox="0 0 1440 400" preserveAspectRatio="none" aria-hidden="true">
      <path fill={colors[0]} d="M0 260 120 170 210 220 330 110 450 210 560 150 700 60 820 180 930 120 1060 200 1180 90 1300 170 1440 120V400H0Z" />
      <path fill={colors[1]} d="M0 310 140 230 260 290 380 200 520 280 650 210 780 300 900 230 1040 290 1160 220 1300 280 1440 230V400H0Z" />
      <path fill={colors[2]} d="M0 360 160 310 300 350 460 300 620 345 780 305 940 350 1100 310 1260 350 1440 315V400H0Z" />
    </svg>
  )
}

const HERO_MOUNTAINS = {
  default: ['#0f2c31', '#0b2125', '#081a1e'],
  sunset: ['#3a2a22', '#221b19', '#120f0f'],
}

/**
 * Banner at the top of every inner page.
 * variant: default | grid (blueprint, centred) | sunset (warm) | light
 * visual: optional element shown beside the copy (makes a two-column hero)
 */
export function PageHero({ eyebrow, title, accent, lead, children, variant = 'default', visual }) {
  const mountains = HERO_MOUNTAINS[variant]
  return (
    <section className={`page-hero ph-${variant}${visual ? ' ph-split' : ''}`}>
      <div className="ph-bg" />
      {mountains && <Mountains className="hero-mountains" colors={mountains} />}
      <div className="container page-hero-inner">
        <div className="ph-copy">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1>
            {title} {accent && <span className="o">{accent}</span>}
          </h1>
          {lead && <p className="lead">{lead}</p>}
          {children}
        </div>
        {visual && <div className="ph-visual" aria-hidden="true">{visual}</div>}
      </div>
    </section>
  )
}

export function Initials({ name, img }) {
  if (img) return <img className="avatar" src={img} alt="" width="36" height="36" loading="lazy" />
  return <span className="avatar">{name.split(' ').map((w) => w[0]).join('')}</span>
}
