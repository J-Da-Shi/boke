import type { BlogPost, CategorySummary, SiteSummary, WorkItem } from '../api/types'

export const fallbackPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'react-hooks-practices',
    title: 'React Hooks 最佳实践',
    excerpt: '把副作用、状态复用和组件边界拆清楚，减少 Hooks 在真实项目里的隐性成本。',
    publishedAt: '2026-05-02',
    category: '前端开发',
    readTime: '5 分钟',
    tags: ['React', 'Hooks', 'JavaScript'],
    featured: true,
    content: `# React Hooks 最佳实践

Hooks 的关键不是把 class 组件翻译成函数组件，而是重新整理状态和副作用的归属。

## 建议

- 把请求、缓存、订阅等副作用放进自定义 Hook。
- 让组件只描述界面结构，避免混入复杂流程。
- 使用 \`useMemo\` 和 \`useCallback\` 前先确认它们真的能减少重复计算或渲染。

\`\`\`tsx
function useArticle(slug: string) {
  const [loading, setLoading] = useState(false)
  const [article, setArticle] = useState<Article | null>(null)

  useEffect(() => {
    setLoading(true)
    fetchArticle(slug)
      .then(setArticle)
      .finally(() => setLoading(false))
  }, [slug])

  return { article, loading }
}
\`\`\`
`,
  },
  {
    id: 2,
    slug: 'typescript-type-system',
    title: 'TypeScript 类型系统进阶',
    excerpt: '用泛型、条件类型和工具类型表达真实业务约束，让类型系统成为重构时的反馈回路。',
    publishedAt: '2026-04-21',
    category: '编程语言',
    readTime: '8 分钟',
    tags: ['TypeScript', '类型系统'],
    featured: false,
    content: `# TypeScript 类型系统进阶

类型系统最有价值的地方，是把“约定”变成编译器可以检查的结构。

\`\`\`ts
type ApiResult<T> =
  | { ok: true; data: T }
  | { ok: false; message: string }
\`\`\`

使用判别联合可以让调用方必须处理失败分支。
`,
  },
  {
    id: 3,
    slug: 'modern-css-layout',
    title: '现代 CSS 布局技巧',
    excerpt: '用 Grid 负责二维结构，Flexbox 负责一维排列，再通过容器约束稳定响应式布局。',
    publishedAt: '2026-04-08',
    category: '前端开发',
    readTime: '6 分钟',
    tags: ['CSS', '布局', '响应式'],
    featured: false,
    content: '# 现代 CSS 布局技巧\n\n一个稳定的页面通常来自明确的网格、间距和内容约束。',
  },
  {
    id: 4,
    slug: 'nestjs-api-design',
    title: 'NestJS API 设计入门',
    excerpt: '从模块、控制器和服务开始，把博客数据接口拆成可扩展的后端边界。',
    publishedAt: '2026-03-18',
    category: '后端开发',
    readTime: '7 分钟',
    tags: ['NestJS', 'Node.js', 'API'],
    featured: true,
    content: '# NestJS API 设计入门\n\nNestJS 的优势在于模块边界清晰，适合逐步从 mock 数据迁移到数据库和认证系统。',
  },
]

export const fallbackCategories: CategorySummary[] = [
  { name: '前端开发', count: 2 },
  { name: '编程语言', count: 1 },
  { name: '后端开发', count: 1 },
]

export const fallbackTags = ['React', 'Hooks', 'JavaScript', 'TypeScript', 'CSS', 'NestJS', 'Node.js', 'API']

export const fallbackSummary: SiteSummary = {
  posts: fallbackPosts.length,
  categories: fallbackCategories.length,
  tags: fallbackTags.length,
  lastUpdated: fallbackPosts[0].publishedAt,
}

export const fallbackWorks: WorkItem[] = [
  {
    id: 1,
    name: 'Boke 博客系统',
    description: 'React 前端与 NestJS API 组合的个人内容站。',
    link: 'https://example.com/boke',
    stack: ['React', 'NestJS', 'TypeScript'],
    status: 'building',
  },
  {
    id: 2,
    name: 'Flow 自动化面板',
    description: '基于 React Flow 的任务编排原型。',
    link: 'https://example.com/flow',
    stack: ['React Flow', 'Vite'],
    status: 'planned',
  },
  {
    id: 3,
    name: '组件库实验',
    description: '沉淀按钮、表单和主题能力的本地组件库。',
    link: 'https://example.com/components',
    stack: ['React', 'CSS'],
    status: 'online',
  },
]
