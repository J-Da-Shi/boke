export interface BlogPostPreview {
  id: number
  slug: string
  title: string
  excerpt: string
  publishedAt: string
  category: string
  readTime: string
  tags: string[]
  featured: boolean
}

export interface BlogPost extends BlogPostPreview {
  content: string
}

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
