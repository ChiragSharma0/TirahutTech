import { CodeXml, Settings, Cloud } from 'lucide-react'
import { Button, Eyebrow } from './Shared'

const PILLARS = [
  { key: 'build', Icon: CodeXml, title: 'BUILD', desc: 'Custom software designed around your business.', tone: 'teal' },
  { key: 'automate', Icon: Settings, title: 'AUTOMATE', desc: 'Remove repetitive work through automation and AI.', tone: 'orange' },
  { key: 'scale', Icon: Cloud, title: 'SCALE', desc: 'Infrastructure and technology that grows with you.', tone: 'teal' },
]

export default function Pillars() {
  return (
    <section className="pillars dark">
      <div className="pillars-bg" />
      <div className="container pillars-inner">
        <div className="pillars-copy">
          <Eyebrow>The Tirahut Trinity</Eyebrow>
          <h2>Three pillars.<br />One vision.</h2>
          <p>We combine strategy, technology and execution to build solutions that last.</p>
          <Button variant="outline-orange" small to="/about">Learn More</Button>
        </div>
        <div className="pillars-visual">
          <div className="orbit orbit-1" />
          <div className="orbit orbit-2" />
          <div className="orbit orbit-3" />
          {PILLARS.map(({ key, Icon, title, desc, tone }) => (
            <div key={key} className={`pillar pillar-${key} ${tone}`}>
              <div className="box">
                <div className="face f-front">
                  <Icon size={40} strokeWidth={1.8} className="box-icon" />
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
                <div className="face f-top" />
                <div className="face f-left" />
                <div className="face f-right" />
              </div>
              <div className="pillar-rock" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
