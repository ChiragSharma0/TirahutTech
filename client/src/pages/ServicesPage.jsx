import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Check, Package, Users, LifeBuoy } from 'lucide-react'
import { Button, Eyebrow, PageHero } from '../components/Shared'
import Process from '../components/Process'
import Seo from '../components/Seo'
import { SERVICES } from '../data'

// Technologies from the old service pages, grouped.
const STACK = [
  ['Frontend', ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Angular', 'Vue.js']],
  ['Mobile', ['Flutter', 'React Native', 'Kotlin', 'Swift']],
  ['Backend & Data', ['Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'Firebase']],
  ['Commerce & Automation', ['Stripe', 'Shopify', 'UiPath', 'Docker']],
  ['Marketing', ['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'Mailchimp', 'YouTube Ads']],
]

const MODELS = [
  { Icon: Package, title: 'Fixed-scope project', desc: 'A clear brief, a fixed quote and a delivery date. Best for well-defined websites, apps and automations.', points: ['Detailed proposal', 'Milestone payments', 'Handover & docs'] },
  { Icon: Users, title: 'Dedicated team', desc: 'Developers and engineers who work as part of your team. Best for evolving products and long roadmaps.', points: ['Flexible scope', 'Weekly demos', 'Scale up or down'], highlight: true },
  { Icon: LifeBuoy, title: 'Support retainer', desc: 'Round-the-clock maintenance, monitoring and improvements for systems already in use.', points: ['24/7 support', 'Monthly updates', 'Health reports'] },
]

function ServiceOrbit() {
  return (
    <div className="orbit-visual">
      <div className="orbit-ring" />
      <div className="orbit-ring r2" />
      <div className="orbit-core"><span>6</span><small>services</small></div>
      <div className="orbit-spin">
        {SERVICES.map(({ slug, Icon }, i) => (
          <span key={slug} className="orbit-node" style={{ '--a': `${i * 60}deg` }}>
            <Icon size={22} />
          </span>
        ))}
      </div>
    </div>
  )
}

export default function ServicesPage() {
  const { hash } = useLocation()
  const [picked, setActive] = useState(null)
  // Homepage cards link to /services#slug — open that tab until the visitor picks another.
  const fromHash = SERVICES.find((s) => s.slug === hash.slice(1))?.slug
  const active = picked ?? fromHash ?? SERVICES[0].slug

  const current = SERVICES.find((s) => s.slug === active)
  const CurrentIcon = current.Icon
  const index = SERVICES.indexOf(current)

  return (
    <>
      <Seo
        title="Software, Web, App & Marketing Services"
        description="Empowering businesses with professional digital solutions that drive measurable growth: web development, app development, automation, e-commerce, custom software and SEO & marketing."
        keywords="web development services, app development services, business automation, ecommerce development, custom software development, seo and digital marketing"
      />
      <PageHero
        eyebrow="Our services"
        title="Everything you need to"
        accent="build, automate & scale."
        lead="Professional digital solutions that drive measurable growth — from the first idea to launch and long-term support."
        visual={<ServiceOrbit />}
      >
        <div className="btn-row">
          <Button to="/contact">Start a Project</Button>
          <Button variant="outline" to="/work">See Our Work</Button>
        </div>
      </PageHero>

      <section className="light section">
        <div className="container">
          <Eyebrow>What we do</Eyebrow>
          <h2>Pick a service to explore.</h2>
          <div className="explorer">
            <div className="explorer-tabs" role="tablist" aria-label="Services">
              {SERVICES.map(({ slug, Icon, title }, i) => (
                <button
                  key={slug} id={slug} role="tab" aria-selected={active === slug}
                  className={active === slug ? 'on' : ''} onClick={() => setActive(slug)}
                >
                  <span className="tab-num">0{i + 1}</span>
                  <Icon size={18} />
                  {title}
                </button>
              ))}
            </div>
            <div className="explorer-panel" role="tabpanel" key={active}>
              <div className="panel-glow" />
              <span className="panel-num">0{index + 1}</span>
              <div className="detail-icon"><CurrentIcon size={28} /></div>
              <h3>{current.title}</h3>
              <p>{current.desc}</p>
              <ul className="check-list dark-checks">
                {current.points.map((pt) => <li key={pt}><Check size={15} /> {pt}</li>)}
              </ul>
              <Button small to="/contact">Discuss {current.title} Work</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="dark section stack-section">
        <div className="container">
          <div className="center-head">
            <Eyebrow>How we engage</Eyebrow>
            <h2 className="section-title">Ways to work with us.</h2>
          </div>
          <div className="models">
            {MODELS.map(({ Icon, title, desc, points, highlight }) => (
              <article key={title} className={`model${highlight ? ' highlight' : ''}`}>
                {highlight && <span className="model-badge">Most popular</span>}
                <Icon size={28} className="model-icon" />
                <h4>{title}</h4>
                <p>{desc}</p>
                <ul>{points.map((pt) => <li key={pt}><Check size={14} /> {pt}</li>)}</ul>
              </article>
            ))}
          </div>

          <div className="toolkit">
            <h4>Our toolkit</h4>
            {STACK.map(([group, tools]) => (
              <div key={group} className="toolkit-row">
                <span>{group}</span>
                <ul className="chips">{tools.map((t) => <li key={t}>{t}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Process />
    </>
  )
}
