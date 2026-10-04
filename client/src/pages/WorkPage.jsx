import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Eyebrow, Initials, PageHero } from '../components/Shared'
import { Screenshot } from '../components/Projects'
import { StatList } from '../components/Proof'
import { PROJECTS, TESTIMONIALS } from '../data'
import Seo from '../components/Seo'

const FILTERS = ['All', ...new Set(PROJECTS.map((p) => p.category))]

function QuoteCarousel() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % TESTIMONIALS.length), 6000)
    return () => clearInterval(id)
  }, [])
  const t = TESTIMONIALS[i]
  return (
    <div className="carousel">
      <span className="big-quote">“</span>
      <blockquote key={i}>{t.quote}</blockquote>
      <div className="carousel-who">
        <Initials name={t.name} img={t.img} />
        <span><b>{t.name}</b><small>{t.role}</small></span>
      </div>
      {TESTIMONIALS.length > 1 && (
        <div className="dots">
          {TESTIMONIALS.map((x, n) => (
            <button key={x.name} aria-label={`Show testimonial ${n + 1}`} className={n === i ? 'on' : ''} onClick={() => setI(n)} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function WorkPage() {
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)

  return (
    <>
      <Seo
        title="Our Work: Projects & Case Studies"
        description="Real solutions. Real businesses. Real impact. A selection of e-commerce platforms, polling web apps, HR portals, automation and AI projects built by Tirahut Tech."
        keywords="software development portfolio, web app case studies, ecommerce projects, automation projects, tirahut tech work"
      />
      <PageHero
        variant="sunset"
        eyebrow="Our work"
        title="Real systems."
        accent="Real impact."
        lead="A selection of products we've designed, built and shipped for businesses like yours."
      >
        <StatList />
      </PageHero>

      <section className="light section">
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>Case studies</Eyebrow>
              <h2>Projects we're proud of.</h2>
            </div>
            <div className="tabs" role="tablist">
              {FILTERS.map((f) => (
                <button key={f} role="tab" aria-selected={filter === f} className={filter === f ? 'on' : ''} onClick={() => setFilter(f)}>
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className="case-list">
            {shown.map((p, i) => (
              <article key={p.name} className={`case${i % 2 ? ' flip' : ''}`}>
                <div className="case-shot"><Screenshot kind={p.shot} /></div>
                <div className="case-copy">
                  <span className="case-cat">{p.category}</span>
                  <h3>{p.name}</h3>
                  <p className="case-type">{p.type}</p>
                  <p className="muted">{p.desc}</p>
                  <ul className="chips light-chips">{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
                  <Link to="/contact" className="text-link">Build something similar <ArrowRight size={14} /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dark section quote-section">
        <div className="container">
          <div className="center-head">
            <Eyebrow>What our clients say</Eyebrow>
          </div>
          <QuoteCarousel />
        </div>
      </section>
    </>
  )
}
