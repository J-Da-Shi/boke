import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../../assets/react.svg'
import { getSummary, listCategories, listPosts, listTags } from '../../api/client'
import type { BlogPostPreview, CategorySummary, SiteSummary } from '../../api/types'
import { fallbackCategories, fallbackPosts, fallbackSummary, fallbackTags } from '../../data/fallback'
import './index.css'

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date(date))

const Home = () => {
  const [posts, setPosts] = useState<BlogPostPreview[]>(fallbackPosts)
  const [categories, setCategories] = useState<CategorySummary[]>(fallbackCategories)
  const [tags, setTags] = useState<string[]>(fallbackTags)
  const [summary, setSummary] = useState<SiteSummary>(fallbackSummary)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    let mounted = true
    setIsLoading(true)

    Promise.all([listPosts(), getSummary(), listCategories(), listTags()])
      .then(([nextPosts, nextSummary, nextCategories, nextTags]) => {
        if (!mounted) return
        setPosts(nextPosts)
        setSummary(nextSummary)
        setCategories(nextCategories)
        setTags(nextTags)
      })
      .catch(() => {
        if (!mounted) return
        setPosts(fallbackPosts)
        setSummary(fallbackSummary)
        setCategories(fallbackCategories)
        setTags(fallbackTags)
      })
      .finally(() => {
        if (mounted) setIsLoading(false)
      })

    return () => {
      mounted = false
    }
  }, [])

  return (
    <main className="home-page">
      <div className="kaze-layout">
        <aside className="profile-sidebar">
          <section className="profile-card">
            <div className="profile-cover" />
            <img className="profile-avatar" src={logoImg} alt="Div 里有光" />
            <h1>Div 里有光</h1>
            <p>前端、后端与工程实践笔记。把日常问题写清楚，把可复用的经验留下来。</p>
            <div className="profile-stats">
              <Link to="/blog">
                <strong>{summary.posts}</strong>
                <span>文章</span>
              </Link>
              <Link to="/blog">
                <strong>{summary.categories}</strong>
                <span>分类</span>
              </Link>
              <Link to="/blog">
                <strong>{summary.tags}</strong>
                <span>标签</span>
              </Link>
            </div>
          </section>

          <section className="sidebar-card">
            <h2>分类</h2>
            <div className="category-list">
              {categories.map((category) => (
                <Link key={category.name} to={`/blog?category=${encodeURIComponent(category.name)}`}>
                  <span>{category.name}</span>
                  <strong>{category.count}</strong>
                </Link>
              ))}
            </div>
          </section>

          <section className="sidebar-card">
            <h2>标签</h2>
            <div className="tag-cloud">
              {tags.map((tag) => (
                <Link key={tag} to={`/blog?tag=${encodeURIComponent(tag)}`}>
                  {tag}
                </Link>
              ))}
            </div>
          </section>
        </aside>

        <section className="feed-column">
          <section className="site-card intro-card">
            <div>
              <span className="sync-label" aria-live="polite">
                {isLoading ? '同步后端数据中' : 'Latest Posts'}
              </span>
              <h2>近期文章</h2>
              <p>一个面向阅读的技术博客：首页负责快速扫描，文章页负责安静阅读，分类和标签用于回到上下文。</p>
            </div>
            <Link to="/blog">查看全部</Link>
          </section>

          <div className="post-list">
            {posts.map((post, index) => (
              <article key={post.id} className="post-item">
                <div className="post-index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="post-body">
                  <div className="post-meta-line">
                    <span>{formatDate(post.publishedAt)}</span>
                    <Link to={`/blog?category=${encodeURIComponent(post.category)}`}>{post.category}</Link>
                    <span>{post.readTime}</span>
                  </div>
                  <Link className="post-title-link" to={`/blog?post=${post.slug}`}>
                    <h3>{post.title}</h3>
                  </Link>
                  <p>{post.excerpt}</p>
                  <div className="post-item-footer">
                    <div className="post-tags">
                      {post.tags.map((tag) => (
                        <Link key={tag} to={`/blog?tag=${encodeURIComponent(tag)}`}>
                          #{tag}
                        </Link>
                      ))}
                    </div>
                    <Link className="read-more" to={`/blog?post=${post.slug}`} aria-label={`阅读全文：${post.title}`}>
                      阅读全文
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home
