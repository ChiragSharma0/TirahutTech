import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Eyebrow, PageHero } from '../components/Shared'
import { PostCard } from './BlogPage'
import NotFound from './NotFound'
import { POSTS, formatDate } from '../data'
import Seo from '../components/Seo'

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = POSTS.find((p) => p.slug === slug)
  if (!post) return <NotFound />
  const related = POSTS.filter((p) => p !== post).slice(0, 3)

  return (
    <>
      <Seo title={post.title} description={post.excerpt} keywords={post.category.toLowerCase()} />
      <PageHero eyebrow={post.category} title={post.title} lead={`${formatDate(post.date)} · ${post.read}`} />

      <section className="light section">
        <div className="container">
          <article className="article">
            <Link to="/blog" className="text-link back-link"><ArrowLeft size={14} /> All articles</Link>
            <p className="article-lead">{post.excerpt}</p>
            {post.body.map((para, i) => <p key={i}>{para}</p>)}
          </article>

          <div className="related">
            <Eyebrow>Keep reading</Eyebrow>
            <div className="post-grid">
              {related.map((p) => <PostCard key={p.slug} post={p} />)}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
