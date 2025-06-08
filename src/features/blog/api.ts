import { BlogResponse } from "./types"

export const getCategories = async () => {
    const res = await fetch('/api/blog')
    const data = await res.json()
    return data
}

export const getPostsByCategory = async (
    { category, limit, offset }:
        { category: string, limit: number, offset: number }
) => {
    const res = await fetch(`/api/blog/${category}?limit=${limit}&offset=${offset}`)
    const data = await res.json()
    return data
}

export const getPostBySlug = async (category: string, slug: string) => {
    const res = await fetch(`/api/blog/${category}/${slug}`)
    const data = await res.json()
    return data
}

export const getLatestPostsByCategory = async (category: string) => {
    const res = await fetch(`/api/blog/${category}?popular=true`)
    const data = await res.json()
    return data
}

export const getAllPosts = async (
    {
        page = 1,
        limit = 10,
        category,
    }: {
        page?: number, limit?: number, category?: string
    }): Promise<BlogResponse> => {
    const url = new URL('/api/blog-posts/lists', process.env.NEXT_PUBLIC_API_URL);
    url.searchParams.set('page', page.toString());
    url.searchParams.set('limit', limit.toString());
    url.searchParams.set('category', category || '');
    const res = await fetch(url.toString());
    const data = await res.json()
    return data
}