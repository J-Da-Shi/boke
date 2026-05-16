import { Injectable } from '@nestjs/common'
import { posts, works } from './mock-data'
import type { BlogPost, BlogPostPreview, CategorySummary, SiteSummary, WorkItem } from './types'

@Injectable()
export class DataService {
  listPosts(filters: { search?: string; category?: string; tag?: string } = {}): BlogPostPreview[] {
    const search = filters.search?.trim().toLowerCase()
    const category = filters.category?.trim()
    const tag = filters.tag?.trim()

    return posts
      .filter((post) => {
        const matchesSearch = search
          ? [post.title, post.excerpt, post.category, ...post.tags].some((item) => item.toLowerCase().includes(search))
          : true
        const matchesCategory = category ? post.category === category : true
        const matchesTag = tag ? post.tags.includes(tag) : true

        return matchesSearch && matchesCategory && matchesTag
      })
      .map(({ content: _content, ...post }) => post)
  }

  getPost(slug: string): BlogPost | undefined {
    return posts.find((post) => post.slug === slug)
  }

  listCategories(): CategorySummary[] {
    const categories = new Map<string, number>()
    for (const post of posts) {
      categories.set(post.category, (categories.get(post.category) ?? 0) + 1)
    }

    return [...categories.entries()].map(([name, count]) => ({ name, count }))
  }

  listTags(): string[] {
    return [...new Set(posts.flatMap((post) => post.tags))]
  }

  getSummary(): SiteSummary {
    return {
      posts: posts.length,
      categories: this.listCategories().length,
      tags: this.listTags().length,
      lastUpdated: posts[0]?.publishedAt ?? new Date().toISOString().slice(0, 10),
    }
  }

  listWorks(): WorkItem[] {
    return works
  }
}
