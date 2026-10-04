import { Button, PageHero } from '../components/Shared'
import Seo from '../components/Seo'

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you're looking for doesn't exist or has moved." />
      <PageHero eyebrow="404" title="This page took a" accent="wrong turn." lead="The page you're looking for doesn't exist or has moved.">
        <div className="btn-row">
          <Button to="/">Back to Home</Button>
          <Button variant="outline" to="/contact">Contact Us</Button>
        </div>
      </PageHero>
    </>
  )
}
