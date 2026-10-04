import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Eyebrow } from './Shared'
import { PROJECTS } from '../data'

export function Screenshot({ kind }) {
  if (kind === 'store') {
    return (
      <div className="shot shot-store">
        <div className="shot-side">
          <b>Kamigami</b>
          <i /><i /><i /><i /><i />
        </div>
        <div className="shot-hero">
          <div className="shot-hero-text">
            <span>NEW DROP</span>
            <strong>Legends of the<br />Collection</strong>
            <em>Shop Now</em>
          </div>
          <div className="shot-figure" />
        </div>
        <div className="shot-cards"><i /><i /><i /><i /></div>
      </div>
    )
  }
  return (
    <div className={`shot shot-${kind}`}>
      <div className="shot-bar"><i /><i /><i /></div>
      <div className="shot-body">
        <div className="shot-col"><i /><i /><i /><i /></div>
        <div className="shot-content">
          <div className="shot-kpis"><i /><i /><i /><i /></div>
          <div className="shot-chart" />
          <div className="shot-rows"><i /><i /><i /><i /></div>
        </div>
      </div>
    </div>
  )
}

export function ProjectCard({ p, featured = p.featured, showDesc }) {
  return (
    <Link to="/work" className={`project-card${featured ? ' featured' : ''}`}>
      <Screenshot kind={p.shot} />
      <div className="project-meta">
        <div>
          <h4>{p.name}</h4>
          <p>{p.type}</p>
          {showDesc && <p className="project-desc">{p.desc}</p>}
          <ul>{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
        </div>
        <span className="round-arrow"><ArrowRight size={14} /></span>
      </div>
    </Link>
  )
}

export default function Projects() {
  return (
    <section className="projects light">
      <div className="cube cube-l" /><div className="cube cube-r" />
      <div className="container">
        <div className="section-head">
          <div>
            <Eyebrow>Featured work</Eyebrow>
            <h2>Projects we're proud of.</h2>
            <p className="muted">Real solutions. Real businesses. Real impact.</p>
          </div>
          <Link to="/work" className="text-link">View All Projects <ArrowRight size={14} /></Link>
        </div>
        <div className="project-grid">
          {PROJECTS.slice(0, 5).map((p) => <ProjectCard key={p.name} p={p} />)}
        </div>
      </div>
    </section>
  )
}
