import type { BlogPost, BlogPostPreview, CategorySummary, SiteSummary, WorkItem } from './types'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '/api'

const request = async <T>(path: string): Promise<T> => {
  const response = await fetch(`${API_BASE_URL}${path}`)
  if (!response.ok) {
    throw new Error(`API request failed: ${response.status} ${response.statusText}`)
  }

  return response.json() as Promise<T>
}

export const listPosts = (params: URLSearchParams = new URLSearchParams()) => {
  const query = params.toString()
  return request<BlogPostPreview[]>(`/posts${query ? `?${query}` : ''}`)
}

export const getPost = (slug: string) => request<BlogPost>(`/posts/${slug}`)

export const getSummary = () => request<SiteSummary>('/site/summary')

export const listCategories = () => request<CategorySummary[]>('/site/categories')

export const listTags = () => request<string[]>('/site/tags')

export const listWorks = () => request<WorkItem[]>('/works')
