import { Link } from 'react-router-dom'
import { Logo } from './Shared'
import SocialLinks from './SocialLinks'
import { NAV_LINKS } from '../data'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <Logo />
        <nav>
          {NAV_LINKS.slice(1).map(({ label, to }) => <Link key={to} to={to}>{label}</Link>)}
        </nav>
        <SocialLinks />
      </div>
      <div className="container footer-bottom">
        <small>© {YEAR} Tirahut Tech. All rights reserved.</small>
        <nav>
          <a href="#">Privacy</a><a href="#">Terms</a><a href="/sitemap.xml">Sitemap</a>
        </nav>
      </div>
    </footer>
  )
}
