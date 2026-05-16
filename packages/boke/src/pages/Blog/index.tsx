import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github.css'
import { getPost, listCategories, listPosts, listTags } from '../../api/client'
import type { BlogPost, BlogPostPreview, CategorySummary } from '../../api/types'
import { fallbackCategories, fallbackPosts, fallbackTags } from '../../data/fallback'
import './index.css'

const filterFallbackPosts = (params: URLSearchParams): BlogPostPreview[] => {
  const search = params.get('search')?.toLowerCase()
  const category = params.get('category')
  const tag = params.get('tag')

  return fallbackPosts.filter((post) => {
    const matchesSearch = search
      ? [post.title, post.excerpt, post.category, ...post.tags].some((item) => item.toLowerCase().includes(search))
      : true
    const matchesCategory = category ? post.category === category : true
    const matchesTag = tag ? post.tags.includes(tag) : true

    return matchesSearch && matchesCategory && matchesTag
  })
}

const findFallbackPost = (slug: string | null): BlogPost | null => {
  if (!slug) return fallbackPosts[0] ?? null
  return fallbackPosts.find((post) => post.slug === slug) ?? fallbackPosts[0] ?? null
}

const Blog = () => {
  const [searchParams] = useSearchParams()
  const [posts, setPosts] = useState<BlogPostPreview[]>(fallbackPosts)
  const [currentPost, setCurrentPost] = useState<BlogPost | null>(fallbackPosts[0] ?? null)
  const [categories, setCategories] = useState<CategorySummary[]>(fallbackCategories)
  const [tags, setTags] = useState<string[]>(fallbackTags)
  const [isLoading, setIsLoading] = useState(false)

  const filters = useMemo(() => {
    const params = new URLSearchParams()
    for (const key of ['search', 'category', 'tag']) {
      const value = searchParams.get(key)
      if (value) params.set(key, value)
    }
    return params
  }, [searchParams])

  const currentSlug = searchParams.get('post')

  useEffect(() => {
    let mounted = true
    setIsLoading(true)

    Promise.all([listPosts(filters), listCategories(), listTags()])
      .then(([nextPosts, nextCategories, nextTags]) => {
        if (!mounted) return
        setPosts(nextPosts)
        setCategories(nextCategories)
        setTags(nextTags)

        const nextSlug = currentSlug ?? nextPosts[0]?.slug ?? null
        if (!nextSlug) {
          setCurrentPost(null)
          return
        }

        getPost(nextSlug)
          .then((post) => {
            if (mounted) setCurrentPost(post)
          })
          .catch(() => {
            if (mounted) setCurrentPost(findFallbackPost(nextSlug))
          })
      })
      .catch(() => {
        if (!mounted) return
        const fallbackList = filterFallbackPosts(filters)
        const nextSlug = currentSlug ?? fallbackList[0]?.slug ?? null
        setPosts(fallbackList)
        setCategories(fallbackCategories)
        setTags(fallbackTags)
        setCurrentPost(findFallbackPost(nextSlug))
      })
      .finally(() => {
        if (mounted) setIsLoading(false)
      })

    return () => {
      mounted = false
    }
  }, [currentSlug, filters])

  const buildPostLink = (slug: string) => {
    const params = new URLSearchParams(searchParams)
    params.set('post', slug)
    return `/blog?${params.toString()}`
  }

  const activeFilter = searchParams.get('search') ?? searchParams.get('category') ?? searchParams.get('tag')

  return (
    <main className="blog-page">
      <section className="blog-header">
        <div>
          <p className="eyebrow">Notebook</p>
          <h1>技术记录</h1>
          <p>按主题沉淀前端、后端、工具链和工程实践。搜索框在顶部导航里，结果会在这里实时呈现。</p>
        </div>
        <div className="blog-status" aria-live="polite">
          <span className={isLoading ? 'status-indicator loading' : 'status-indicator'} />
          <span>{isLoading ? '同步后端数据' : '内容已就绪'}</span>
        </div>
      </section>

      <div className="blog-layout">
        <aside className="blog-list-panel">
          <div className="panel-heading">
            <h2>{activeFilter ? `筛选：${activeFilter}` : '全部文章'}</h2>
            <Link to="/blog">重置</Link>
          </div>

          <div className="article-list">
            {posts.map((post, index) => (
              <Link
                key={post.id}
                className={`article-list-item ${currentPost?.slug === post.slug ? 'active' : ''}`}
                to={buildPostLink(post.slug)}
              >
                <span>{String(index + 1).padStart(2, '0')} / {post.category}</span>
                <strong>{post.title}</strong>
                <small>
                  {post.publishedAt} / {post.readTime}
                </small>
              </Link>
            ))}
            {posts.length === 0 && <p className="empty-state">没有找到匹配的文章。</p>}
          </div>

          <div className="filter-block">
            <h3>分类</h3>
            <div className="filter-links">
              {categories.map((category) => (
                <Link key={category.name} to={`/blog?category=${encodeURIComponent(category.name)}`}>
                  {category.name}
                  <span>{category.count}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="filter-block">
            <h3>标签</h3>
            <div className="tag-links">
              {tags.map((tag) => (
                <Link key={tag} to={`/blog?tag=${encodeURIComponent(tag)}`}>
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </aside>

        <article className="blog-reader">
          {currentPost ? (
            <>
              <div className="reader-heading">
                <span className="post-category">{currentPost.category}</span>
                <h2>{currentPost.title}</h2>
                <p>{currentPost.excerpt}</p>
                <div className="reader-meta">
                  <span>{currentPost.publishedAt}</span>
                  <span>{currentPost.readTime}</span>
                  <span>{currentPost.tags.join(' / ')}</span>
                </div>
              </div>
              <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
                {currentPost.content}
              </ReactMarkdown>
            </>
          ) : (
            <div className="empty-reader">请选择一篇文章。</div>
          )}
        </article>
      </div>
    </main>
  )
}

export default Blog
