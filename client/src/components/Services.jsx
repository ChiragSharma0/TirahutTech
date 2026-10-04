import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button, Eyebrow, Mountains } from './Shared'
import { SERVICES } from '../data'

export default function Services() {
  return (
    <section className="services dark">
      <Mountains className="section-mountains" colors={['#0c2327', '#091b1f', '#071518']} />
      <div className="container services-inner">
        <div className="services-copy">
          <Eyebrow>Our services</Eyebrow>
          <h2>End-to-end tech solutions for your vision.</h2>
          <p>Whether you need a custom platform, automation or a complete IT setup — we've got you covered.</p>
          <Button variant="outline-teal" small to="/services">Explore All Services</Button>
        </div>
        <div className="service-grid">
          {SERVICES.map(({ slug, Icon, title, desc }) => (
            <Link to={`/services#${slug}`} key={slug} className="service-card">
              <div className="service-icon"><Icon size={22} /></div>
              <h4>{title}</h4>
              <p>{desc}</p>
              <ArrowRight size={14} className="card-arrow" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
