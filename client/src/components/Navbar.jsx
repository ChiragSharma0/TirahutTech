import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'
import { Logo } from './Shared'
import { NAV_LINKS } from '../data'

// Pages whose banner is light, so the nav switches to dark text.
const LIGHT_HERO = ['/about', '/blog']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  return (
    <header className={`nav${LIGHT_HERO.includes(pathname) ? ' on-light' : ''}`}>
      <div className="container nav-inner">
        <Logo />
        <nav className={`nav-links${open ? ' open' : ''}`}>
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}>
              {label}
            </NavLink>
          ))}
        </nav>
        <Link to="/contact" className="btn btn-pill">
          Let's Talk <ArrowRight size={14} />
        </Link>
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}
