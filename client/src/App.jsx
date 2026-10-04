import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes, useParams } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import SolutionsPage from './pages/SolutionsPage'
import WorkPage from './pages/WorkPage'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import ContactPage from './pages/ContactPage'
import NotFound from './pages/NotFound'

const AdminPage = lazy(() => import('./pages/AdminPage')) // kept out of the public bundle

// Old-site URLs (/services/<slug>, /service/<slug>) open the matching tab on /services.
function LegacyServiceRedirect() {
  const { slug } = useParams()
  return <Navigate to={slug ? `/services#${slug}` : '/services'} replace />
}

export default function App() {
  return (
    <Routes>
      <Route path="admin" element={<Suspense><AdminPage /></Suspense>} />
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="services/:slug" element={<LegacyServiceRedirect />} />
        <Route path="service/:slug?" element={<LegacyServiceRedirect />} />
        <Route path="our-package" element={<Navigate to="/services" replace />} />
        <Route path="solutions" element={<SolutionsPage />} />
        <Route path="work" element={<WorkPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:slug" element={<BlogPostPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
