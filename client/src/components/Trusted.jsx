import { Eyebrow } from './Shared'
import { INDUSTRIES } from '../data'

export default function Trusted() {
  return (
    <section className="trusted light">
      <div className="container trusted-inner">
        <div>
          <Eyebrow>Trusted by businesses across industries</Eyebrow>
          <h3>
            From <span className="o underline">startups</span> to established enterprises,
            <br />
            we help businesses grow with technology.
          </h3>
        </div>
        <ul className="industries">
          {INDUSTRIES.map(({ Icon, label }) => (
            <li key={label}>
              <Icon size={22} strokeWidth={1.6} />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
