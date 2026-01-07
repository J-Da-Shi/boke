import './index.css'

// 模拟博客文章数据
const blogPosts = [
  {
    id: 1,
    title: 'React Hooks 最佳实践',
    excerpt: '深入探讨 React Hooks 的使用技巧和常见陷阱，帮助你写出更优雅的 React 代码。',
    date: '2025-01-15',
    category: '前端开发',
    readTime: '5 分钟',
    tags: ['React', 'Hooks', 'JavaScript'],
  },
  {
    id: 2,
    title: 'TypeScript 类型系统进阶',
    excerpt: '从基础到高级，全面掌握 TypeScript 的类型系统，提升代码质量和开发效率。',
    date: '2025-01-10',
    category: '编程语言',
    readTime: '8 分钟',
    tags: ['TypeScript', '类型系统'],
  },
  {
    id: 3,
    title: '现代 CSS 布局技巧',
    excerpt: '探索 Grid、Flexbox 等现代 CSS 布局技术，打造响应式和美观的网页设计。',
    date: '2025-01-05',
    category: '前端开发',
    readTime: '6 分钟',
    tags: ['CSS', '布局', '响应式'],
  },
  {
    id: 4,
    title: 'Node.js 性能优化指南',
    excerpt: '学习如何优化 Node.js 应用的性能，包括内存管理、异步处理和缓存策略。',
    date: '2024-12-28',
    category: '后端开发',
    readTime: '10 分钟',
    tags: ['Node.js', '性能优化'],
  },
]

const categories = [
  { name: '前端开发', count: 8 },
  { name: '后端开发', count: 6 },
  { name: '编程语言', count: 5 },
  { name: '工具推荐', count: 3 },
  { name: '技术思考', count: 2 },
]

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            欢迎来到我的
            <span className="hero-title-accent"> 技术博客</span>
          </h1>
          <p className="hero-description">分享前端开发、后端技术、编程心得和工具推荐</p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">24</span>
              <span className="stat-label">文章</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5</span>
              <span className="stat-label">分类</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">12</span>
              <span className="stat-label">标签</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="home-main-content">
        {/* Latest Posts */}
        <section className="posts-section">
          <div className="section-header">
            <h2 className="section-title">最新文章</h2>
            <a href="/blog" className="view-all-link">
              查看全部 →
            </a>
          </div>
          <div className="posts-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="post-card">
                <div className="post-card-header">
                  <span className="post-category">{post.category}</span>
                  <span className="post-date">{post.date}</span>
                </div>
                <h3 className="post-title">{post.title}</h3>
                <p className="post-excerpt">{post.excerpt}</p>
                <div className="post-footer">
                  <div className="post-tags">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="post-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="post-read-time">{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Sidebar */}
        <aside className="sidebar">
          {/* Categories */}
          <div className="sidebar-widget">
            <h3 className="widget-title">文章分类</h3>
            <ul className="category-list">
              {categories.map((category, index) => (
                <li key={index} className="category-item">
                  <a href={`/blog?category=${category.name}`} className="category-link">
                    {category.name}
                    <span className="category-count">{category.count}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Tags */}
          <div className="sidebar-widget">
            <h3 className="widget-title">热门标签</h3>
            <div className="tags-cloud">
              {['React', 'TypeScript', 'Node.js', 'CSS', 'JavaScript', 'Vue', 'Python', 'Git'].map((tag, index) => (
                <a key={index} href={`/blog?tag=${tag}`} className="tag-cloud-item">
                  {tag}
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Home
