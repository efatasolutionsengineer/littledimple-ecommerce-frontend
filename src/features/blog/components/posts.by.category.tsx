'use client'

import { useLayoutContext } from "@/providers/index-layout-provider"
import PostsGroup from "./posts.group"
import { useEffect } from "react"

export default function PostsByCategory({ category }: { category: string }) {

    const { updateLayout } = useLayoutContext()

    useEffect(() => {
        updateLayout({
            title: 'Blog',
            slug: 'Blog',
        })
    }, [])

    return (
        <PostsGroup category={category} limit={20} isInfinite={true} />
    )
}