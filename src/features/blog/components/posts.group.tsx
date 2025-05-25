'use client'

import { BasicLoading } from "@/shared/components/loading"
import { useGetPostsByCategory } from "../hooks"
import { BlogArticle } from "../types"
import PostResumeCard from "./post.resume.card"
import { ReactNode, useEffect, useRef, useState } from "react"
import Error from "@/shared/components/error"

interface PostsGroupProps {
    category: string
    limit?: number
    isInfinite?: boolean
    cta?: ReactNode
}

const PostsGroup = ({ category, limit = 3, cta = <></>, isInfinite = false }: PostsGroupProps) => {
    const loaderRef = useRef<HTMLSpanElement>(null)
    const [isObserverReady, setIsObserverReady] = useState(false)
    const { data: posts, isLoading: isLoadingPosts, isError: isErrorPosts, error: errorPosts, fetchNextPage, isFetchingNextPage } = useGetPostsByCategory(category, limit)

    useEffect(() => {
        if (!isInfinite || !loaderRef.current) return
        setIsObserverReady(true)
    }, [isInfinite, isLoadingPosts])

    useEffect(() => {
        if (!isObserverReady || !isInfinite || !loaderRef.current) return

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    fetchNextPage()
                }
            },
            {
                root: null,
                rootMargin: '20px',
                threshold: 0.1
            }
        )

        const currentRef = loaderRef.current
        observer.observe(currentRef)

        return () => {
            observer.unobserve(currentRef)
        }
    }, [isObserverReady, isInfinite, fetchNextPage])

    if (isLoadingPosts && !posts) {
        return <BasicLoading>Loading {category}...</BasicLoading>
    }

    if (isErrorPosts) {
        return <Error>Error: {errorPosts.message}</Error>
    }

    return (
        <div className="mb-20">
            <div className="mb-7 flex items-center justify-between">
                <h3 className="text-3xl text-hijau-tua font-bold capitalize">{category}</h3>
                {cta}
            </div>
            <div className="grid grid-cols-3 gap-8">
                {posts?.map((post: BlogArticle) => (
                    <PostResumeCard key={post.slug} post={post} />
                ))}
            </div>

            <span ref={loaderRef} className="block py-4 text-center">
                {isFetchingNextPage && <p className="m-0">Loading more posts...</p>}
            </span>
        </div>
    )
}

export default PostsGroup