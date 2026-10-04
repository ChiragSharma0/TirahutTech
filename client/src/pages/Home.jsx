import Seo from '../components/Seo'
import Hero from '../components/Hero'
import Trusted from '../components/Trusted'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Pillars from '../components/Pillars'
import Process from '../components/Process'
import Proof from '../components/Proof'

export default function Home() {
  return (
    <>
      <Seo
        title="Custom Software, Web & App Development Agency"
        description="Tirahut Tech helps businesses scale with custom software development, web and mobile app solutions, automation systems, and dedicated development teams."
        keywords="custom software development company, web development agency, mobile app development company, business automation solutions, dedicated development team"
      />
      <Hero />
      <Trusted />
      <Services />
      <Projects />
      <Pillars />
      <Process />
      <Proof />
    </>
  )
}
