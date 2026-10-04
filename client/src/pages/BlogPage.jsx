import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Search } from 'lucide-react'
import { Eyebrow } from '../components/Shared'
import { POSTS, formatDate } from '../data'
import Seo from '../components/Seo'

const CATEGORIES = ['All', ...new Set(POSTS.map((p) => p.category))]

export function PostThumb({ post }) {
  return (
    <div className={`post-thumb ${post.tone}`}>
      <span>{post.category}</span>
    </div>
  )
}

export function PostCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className="post-card">
      <PostThumb post={post} />
      <div className="post-body">
        <small>{formatDate(post.date)} · {post.read}</small>
        <h4>{post.title}</h4>
        <p className="muted">{post.excerpt}</p>
        <span className="text-link">Read article <ArrowRight size={14} /></span>
      </div>
    </Link>
  )
}

export default function BlogPage() {
  const [cat, setCat] = useState('All')
  const [query, setQuery] = useState('')
  const featured = POSTS.find((p) => p.featured)
  const picks = POSTS.filter((p) => p !== featured).slice(0, 3)

  const q = query.trim().toLowerCase()
  const showMagazine = !q && cat === 'All'
  const filtered = POSTS.filter(
    (p) => (cat === 'All' || p.category === cat) && (!q || `${p.title} ${p.excerpt}`.toLowerCase().includes(q)),
  ).filter((p) => !(showMagazine && p === featured))

  return (
    <>
      <Seo
        title="Blog: Insights on Software, Automation & Growth"
        description="Insights, updates, and ideas from our team to help your business grow: practical writing on software, automation, cloud and design."
        keywords="software development blog, business automation tips, web development insights, tirahut tech blog"
      />
      <section className="blog-hero">
        <div className="container blog-hero-inner">
          <div>
            <Eyebrow>The Tirahut Journal</Eyebrow>
            <h1>Ideas, guides and lessons <span className="o">from the build.</span></h1>
          </div>
          <label className="search">
            <Search size={18} />
            <input type="search" placeholder="Search articles…" value={query} onChange={(e) => setQuery(e.target.value)} />
          </label>
        </div>
      </section>

      <section className="light section blog-main">
        <div className="container">
          {showMagazine && (
            <div className="magazine">
              <Link to={`/blog/${featured.slug}`} className="mag-lead">
                <PostThumb post={featured} />
                <div className="mag-lead-copy">
                  <small>Featured · {formatDate(featured.date)} · {featured.read}</small>
                  <h2>{featured.title}</h2>
                  <p>{featured.excerpt}</p>
                </div>
              </Link>
              <div className="mag-side">
                <h5>Editor's picks</h5>
                {picks.map((p, i) => (
                  <Link key={p.slug} to={`/blog/${p.slug}`} className="mag-item">
                    <span className="mag-num">{i + 1}</span>
                    <div>
                      <small>{p.category}</small>
                      <h4>{p.title}</h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="section-head blog-head">
            <h2>{q ? `Results for “${query.trim()}”` : 'All articles'}</h2>
            <div className="tabs" role="tablist">
              {CATEGORIES.map((c) => (
                <button key={c} role="tab" aria-selected={cat === c} className={cat === c ? 'on' : ''} onClick={() => setCat(c)}>
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div className="post-grid">
            {filtered.map((p) => <PostCard key={p.slug} post={p} />)}
          </div>
          {filtered.length === 0 && <p className="muted empty">No articles match your search yet.</p>}
        </div>
      </section>
    </>
  )
}
