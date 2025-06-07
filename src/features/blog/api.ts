import { CategoryResponse } from "../categories/types"

export const getCategories = async (): Promise<CategoryResponse> => {
    const res = await fetch('/api/blog')
    const data = await res.json()
    return data
}

export const getPostsByCategory = async (
    {category, limit, offset}: 
    {category: string, limit: number, offset: number}
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