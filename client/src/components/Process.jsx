import { ArrowRight } from 'lucide-react'
import { Eyebrow } from './Shared'
import { PROCESS } from '../data'

export default function Process() {
  return (
    <section className="process light">
      <div className="container process-inner">
        <div className="process-copy">
          <Eyebrow>Our process</Eyebrow>
          <h2>A simple, transparent process.</h2>
          <p className="muted">We keep things clear — from the first conversation to the final delivery.</p>
        </div>
        <ol className="steps">
          {PROCESS.map(({ Icon, title, desc }, i) => (
            <li key={title}>
              <div className="step-top">
                <Icon size={22} strokeWidth={1.6} className="step-icon" />
                {i < PROCESS.length - 1 && <ArrowRight size={14} className="step-arrow" />}
              </div>
              <span className="step-num">0{i + 1}</span>
              <h5>{title}</h5>
              <p>{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
