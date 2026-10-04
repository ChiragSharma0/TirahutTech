import { Target, Eye } from 'lucide-react'
import { Button, Eyebrow, PageHero } from '../components/Shared'
import Seo from '../components/Seo'
import Pillars from '../components/Pillars'
import { IsoCubes, StatList } from '../components/Proof'

const VALUES = [
  ['Engineering-led solutions', 'Robust software and systems, engineered to scale and built to last.'],
  ['A highly proficient team', 'Experienced developers and engineers who take ownership of every outcome.'],
  ['Strategic, systems thinking', 'Clear planning that ties every technical decision to your long-term goals.'],
  ['Proven, reliable delivery', 'Consistent, measurable results through dependable execution.'],
]

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Us: Innovative Software & IT Solutions"
        description="Tirahut Tech partners with organizations to design, build, and scale technology that delivers real business impact across software development, automation, digital platforms, and IT services."
        keywords="about tirahut tech, software company india, it solutions company, software development team, greater noida software company"
      />
      <PageHero
        variant="light"
        eyebrow="About us"
        title="Made in India."
        accent="Made for the world."
        lead="Tirahut Tech is an innovative software and IT solutions company helping businesses grow through technology — from strategy to execution."
        visual={<IsoCubes />}
      >
        <StatList />
      </PageHero>

      <section className="light section about-story-section">
        <div className="container about-story">
          <h2 className="pull">
            We help businesses grow — <span className="o">through technology.</span>
          </h2>
          <div>
            <Eyebrow>Our story</Eyebrow>
            <p className="muted">
              Tirahut Tech partners with organizations to design, build and scale technology that delivers real business
              impact. We work across software development, automation, digital platforms and IT services, creating solutions
              that are practical, scalable and ready for what comes next.
            </p>
            <p className="muted">
              And we go beyond delivery. With data-driven decisions, deep technical expertise and dedicated technology teams, we
              help businesses streamline operations, strengthen their digital presence and adapt with confidence as markets change.
            </p>
            <Button to="/contact">Work With Us</Button>
          </div>
        </div>
      </section>

      <section className="dark mv-band">
        <div className="container mv-grid">
          <article>
            <Target size={30} className="mv-icon" />
            <h3>Our mission</h3>
            <p>To build meaningful digital experiences that create real impact and measurable success — for startups, growing companies and enterprises alike.</p>
          </article>
          <article>
            <Eye size={30} className="mv-icon orange" />
            <h3>Our vision</h3>
            <p>Technology and systems made to last: long-term, scalable solutions that keep growing with your business.</p>
          </article>
        </div>
      </section>

      <Pillars />

      <section className="light section">
        <div className="container values-wrap">
          <div>
            <Eyebrow>What sets us apart</Eyebrow>
            <h2>How we work.</h2>
            <p className="muted">Four principles behind every project we take on.</p>
          </div>
          <ol className="values-list">
            {VALUES.map(([title, desc], i) => (
              <li key={title}>
                <span className="value-num">0{i + 1}</span>
                <div>
                  <h4>{title}</h4>
                  <p className="muted">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
