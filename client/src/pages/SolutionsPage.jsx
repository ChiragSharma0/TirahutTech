import { Link } from 'react-router-dom'
import { ArrowRight, Boxes, ShoppingBag, Workflow, UserRound, Handshake, Receipt, X, Check } from 'lucide-react'
import { Button, Eyebrow, PageHero } from '../components/Shared'
import Seo from '../components/Seo'
import { INDUSTRIES, PRODUCTS } from '../data'

// The old site's products (CRM, HRM, ERP) plus its automation and e-commerce offers.
const PRODUCT_ICONS = { CRM: Handshake, HRM: UserRound, ERP: Boxes }
const SOLUTIONS = [
  ...PRODUCTS.map(([name, what, extra]) => [PRODUCT_ICONS[name], `${name}: ${what}`, extra]),
  [Workflow, 'Business Process Automation', 'RPA • CRM automation • Data-entry automation'],
  [Receipt, 'Billing & Invoicing', 'Automated invoices • Payment reminders • Financial reports'],
  [ShoppingBag, 'E-Commerce Platforms', 'Secure payments • Admin panel • B2C, B2B & marketplaces'],
]
// Lead tile first: ERP is the broadest product.
SOLUTIONS.unshift(...SOLUTIONS.splice(2, 1))

const BEFORE = [
  'Data copied by hand between spreadsheets',
  'Reports built manually every week',
  'Orders and stock tracked in different tools',
  'Customers waiting on email replies',
  'Nobody sure which numbers are current',
]
const AFTER = [
  'Systems that sync data automatically',
  'Live dashboards, always up to date',
  'One platform for orders, stock and billing',
  'Self-service portals and instant answers',
  'One source of truth for the whole team',
]

export default function SolutionsPage() {
  return (
    <>
      <Seo
        title="Business Software Solutions: CRM, HRM & ERP"
        description="Business tools that boost growth: CRM, HRM and ERP software, billing automation, business process automation and e-commerce platforms for retail, healthcare, education, manufacturing and more."
        keywords="crm software, hrm software, erp software, billing automation, business automation, industry software solutions"
      />
      <PageHero
        variant="grid"
        eyebrow="Solutions"
        title="Built for your industry,"
        accent="shaped by your process."
        lead="Every business runs differently. We combine proven building blocks with custom work to solve the problems specific to your field."
      >
        <ul className="ph-chips">
          {INDUSTRIES.map(({ Icon, label }) => (
            <li key={label}><Icon size={16} /> {label}</li>
          ))}
        </ul>
      </PageHero>

      <section className="light section">
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>Industries we serve</Eyebrow>
              <h2>Solutions for every kind of business.</h2>
            </div>
          </div>
          <div className="industry-list">
            {INDUSTRIES.map(({ Icon, label, desc, examples }, i) => (
              <article key={label} className="industry-row">
                <span className="industry-index">{String(i + 1).padStart(2, '0')}</span>
                <div className="industry-icon"><Icon size={26} strokeWidth={1.6} /></div>
                <div>
                  <h4>{label}</h4>
                  <p className="muted">{desc}</p>
                </div>
                <ul className="chips light-chips">{examples.map((e) => <li key={e}>{e}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dark section compare-section">
        <div className="container">
          <div className="center-head">
            <Eyebrow>The difference</Eyebrow>
            <h2 className="section-title">From busywork to business systems.</h2>
          </div>
          <div className="compare">
            <div className="compare-col before">
              <h4>Before</h4>
              <ul>{BEFORE.map((b) => <li key={b}><X size={16} /> {b}</li>)}</ul>
            </div>
            <div className="compare-arrow"><ArrowRight size={26} /></div>
            <div className="compare-col after">
              <h4>After Tirahut</h4>
              <ul>{AFTER.map((a) => <li key={a}><Check size={16} /> {a}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className="light section">
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>What we build</Eyebrow>
              <h2>Business tools that boost growth.</h2>
              <p className="muted">Explore our high-performance software products tailored for businesses of all sizes.</p>
            </div>
            <Link to="/work" className="text-link">See them in action <ArrowRight size={14} /></Link>
          </div>
          <div className="bento">
            {SOLUTIONS.map(([Icon, title, desc], i) => (
              <article key={title} className={`bento-item b${i}`}>
                <Icon size={i === 0 ? 34 : 24} strokeWidth={1.6} />
                <h5>{title}</h5>
                <p>{desc}</p>
              </article>
            ))}
          </div>
          <div className="center-cta">
            <Button to="/contact">Book a Free Product Demo</Button>
          </div>
        </div>
      </section>
    </>
  )
}
