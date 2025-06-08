import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { getCategories, getPostsByCategory, getPostBySlug, getLatestPostsByCategory, getAllPosts } from "./api"
import { Article, BlogArticle } from "./types"

export const useGetAllPosts = (params: {
    page?: number;
    limit?: number;
    category?: string;
}) => useInfiniteQuery({
    queryKey: ['posts', params],
    queryFn: ({ pageParam }) => {
        const response = getAllPosts({ ...params, page: pageParam })
        return response.then(data => ({ blog_posts: data.data.blog_posts, page: pageParam }))
    },
    select: (data) => {
        return data.pages.flatMap((page) => page.blog_posts);
    },
    getNextPageParam: (lastPage: { blog_posts: Article[], page: number }) => {
        return lastPage.blog_posts.length > 0 ? lastPage.page + 1 : undefined;
    },
    initialPageParam: 1,
})
export const useGetCategories = () => useQuery({
    queryKey: ['categories'],
    queryFn: getCategories
})

export const useGetPostsByCategory = (category: string, limit: number = 10) => useInfiniteQuery({
    queryKey: ['posts', { category, limit }],
    queryFn: ({ pageParam }) => getPostsByCategory({ category, limit, offset: pageParam || 0 }),
    select: (data) => {
        return data.pages.flatMap((page) => page.data as BlogArticle[])
    },
    getNextPageParam: (lastPage: { data: BlogArticle[] }) => {
        return lastPage.data.length > 0 ? lastPage.data.length : undefined
    },
    initialPageParam: 0,
})

export const useGetPostBySlug = (category: string, slug: string) => useQuery({
    queryKey: ['post', category, slug],
    queryFn: () => getPostBySlug(category, slug),
    select: (data) => data.data as BlogArticle
})

export const useGetLatestPostsByCategory = (category: string) => useQuery({
    queryKey: ['popularPosts', category],
    queryFn: () => getLatestPostsByCategory(category),
    select: (data) => data.data as BlogArticle[]
})