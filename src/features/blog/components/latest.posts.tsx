'use client'

import { useGetLatestPostsByCategory } from "../hooks"
import { BlogArticle } from "../types"
import { BasicLoading } from "@/shared/components/loading"
import Error from "@/shared/components/error"
import Link from "next/link"

export default function LatestPosts({ category }: { category: string }) {
    const { data: popularPosts, isLoading, isError, error } = useGetLatestPostsByCategory(category)

    if (isLoading) {
        return <BasicLoading>Loading latest posts...</BasicLoading>
    }

    if (isError) {
        return <Error>Error: {error?.message || 'Failed to load latest posts'}</Error>
    }

    return <div className="w-full h-full max-w-[370px] shadow-[0_0_60px_rgba(2,2,2,0.1)] p-8 rounded-lg">
        <h3 className="text-xl text-hijau-tua font-bold hover:underline pb-8 border-b border-primary mb-8">Latest Posts</h3>
        <div className="flex flex-row gap-4 flex-wrap">
            {popularPosts?.map((post) => <LatestCard key={post.slug} post={post} />)}
        </div>
    </div>
}

const LatestCard = ({ post }: { post: BlogArticle }) => {
    return <div className="flex flex-row gap-4 w-full sm:max-w-[370px] pb-4 border-b border-orange-muda">
        { /* eslint-disable-next-line @next/next/no-img-element */}
        <img src={post.thumbnail} alt={post.title} className="size-[70px] object-cover rounded-lg" />
        <div>
            <p className="flex flex-row gap-2 mb-2 items-center justify-start text-sm text-neutral-gray font-medium text-primary">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 0a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 16.606A7.606 7.606 0 1 1 16.606 9 7.606 7.606 0 0 1 9 16.606z" fill="#F57005" />
                    <path d="M12.209 10.589l-2.51-1.882V4.873a.697.697 0 0 0-1.394 0v4.183c0 .219.103.426.279.557l2.788 2.091c.126.095.272.14.418.14.212 0 .421-.095.558-.28.232-.307.17-.744-.138-.975z" fill="#F57005" />
                </svg>
                <span className="text-neutral-gray font-medium font-(family-name:--font-dm-sans)">{post.publishedDate}</span>
            </p>
            <Link href={`/blog/${post.category}/${post.slug}`} className="text-xl text-hijau-tua font-bold hover:underline tracking-wide">{post.title}</Link>
        </div>
    </div>
}