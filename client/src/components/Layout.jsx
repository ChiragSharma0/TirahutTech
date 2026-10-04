import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Cta from './Cta'
import Footer from './Footer'
import { trackPage } from '../track'
import CallbackPrompt from './CallbackPrompt'

// Scroll to the top on page change, or to the #section when the link has a hash.
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    const el = hash && document.getElementById(hash.slice(1))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    else window.scrollTo(0, 0)
  }, [pathname, hash])
  useEffect(trackPage, [pathname])
  return null
}

export default function Layout() {
  const { pathname } = useLocation()
  return (
    <>
      <ScrollManager />
      <Navbar />
      <main>
        <Outlet />
        {pathname !== '/contact' && <Cta />}
      </main>
      <Footer />
      <CallbackPrompt />
    </>
  )
}
