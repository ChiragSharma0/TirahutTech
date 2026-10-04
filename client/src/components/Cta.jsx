import { Link } from 'react-router-dom'
import { Play } from 'lucide-react'
import { Button, Mountains } from './Shared'

export default function Cta() {
  return (
    <section className="cta">
      <div className="cta-sky" />
      <Mountains className="cta-mountains" colors={['#2a2320', '#17191a', '#0b1214']} />
      <div className="container cta-inner">
        <div>
          <h2>Have a business problem<br />worth solving?</h2>
          <p>Let's turn it into a working system.</p>
        </div>
        <div className="cta-actions">
          <Button small to="/contact">Start a Conversation</Button>
          <Link to="/work" className="watch"><span><Play size={12} fill="currentColor" /></span> Watch Intro</Link>
        </div>
      </div>
    </section>
  )
}
