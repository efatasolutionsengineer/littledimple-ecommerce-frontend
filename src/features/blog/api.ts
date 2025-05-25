export const getCategories = async () => {
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