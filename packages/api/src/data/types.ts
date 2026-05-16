export interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  publishedAt: string
  category: string
  readTime: string
  tags: string[]
  featured: boolean
}

export type BlogPostPreview = Omit<BlogPost, 'content'>

export interface CategorySummary {
  name: string
  count: number
}

export interface SiteSummary {
  posts: number
  categories: number
  tags: number
  lastUpdated: string
}

export interface WorkItem {
  id: number
  name: string
  description: string
  link: string
  stack: string[]
  status: 'online' | 'building' | 'planned'
}
