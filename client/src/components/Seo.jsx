import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE = 'Tirahut Tech'
const ORIGIN = 'https://tirahuttech.com'
const IMAGE = `${ORIGIN}/img/logo.jpg`

// Update a head tag in place (index.html ships defaults for crawlers that don't run JS).
function upsert(tag, key, value, attrs) {
  let el = document.head.querySelector(`${tag}[${key}="${value}"]`)
  if (!el) {
    el = document.createElement(tag)
    el.setAttribute(key, value)
    document.head.appendChild(el)
  }
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v)
}

/** Per-page title, description, keywords, canonical, Open Graph and Twitter tags. */
export default function Seo({ title, description, keywords }) {
  const { pathname } = useLocation()
  useEffect(() => {
    const url = ORIGIN + pathname
    document.title = `${title} | ${SITE}`
    upsert('meta', 'name', 'description', { content: description })
    if (keywords) upsert('meta', 'name', 'keywords', { content: keywords })
    upsert('link', 'rel', 'canonical', { href: url })
    upsert('meta', 'property', 'og:title', { content: title })
    upsert('meta', 'property', 'og:description', { content: description })
    upsert('meta', 'property', 'og:url', { content: url })
    upsert('meta', 'property', 'og:image', { content: IMAGE })
    upsert('meta', 'name', 'twitter:title', { content: title })
    upsert('meta', 'name', 'twitter:description', { content: description })
  }, [title, description, keywords, pathname])
  return null
}
