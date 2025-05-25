'use client'

import { useLayoutContext } from "@/providers/index-layout-provider";
import { useEffect } from "react";
import { useGetCategories } from "@/features/blog/hooks";
import PostsGroup from "@/features/blog/components/posts.group";
import Link from "next/link";

export default function Blog() {
    const { updateLayout } = useLayoutContext()
    const { data: categories, isLoading: isLoadingCategories, isError: isErrorCategories, error: errorCategories } = useGetCategories()
    useEffect(() => {
        updateLayout({ title: 'Blog', slug: 'Blog' })
    }, [])

    if (isLoadingCategories) {
        return <div>Loading...</div>
    }

    if (isErrorCategories) {
        return <div>Error: {errorCategories.message}</div>
    }


    return (
        <div className="max-w-[1280px] mx-auto px-1 sm:px-5 py-5 my-24 relative">
            {categories.data.map((category: string) => (
                <PostsGroup key={category} category={category} cta={<Link href={`/blog/${category}`} className="flex items-center justify-center text-sm text-white font-medium font-(family-name:--font-dm-sans) flex flex-row items-center gap-2 rounded-lg px-3 py-2 bg-primary w-[130px] transition hover:bg-primary/50 shadow-[0_2px_0_#804533]">Read More<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.02474 8.39216L13.1949 8.39216L9.83295 11.7541C9.77228 11.8127 9.72389 11.8828 9.6906 11.9603C9.65732 12.0378 9.63979 12.1212 9.63906 12.2055C9.63833 12.2898 9.6544 12.3735 9.68634 12.4515C9.71827 12.5296 9.76544 12.6005 9.82508 12.6602C9.88471 12.7198 9.95563 12.767 10.0337 12.7989C10.1118 12.8308 10.1954 12.8469 10.2797 12.8462C10.3641 12.8454 10.4474 12.8279 10.5249 12.7946C10.6024 12.7613 10.6725 12.7129 10.7311 12.6523L15.1773 8.20606C15.2964 8.08694 15.3633 7.92541 15.3633 7.75699C15.3633 7.58856 15.2964 7.42703 15.1773 7.30792L10.7311 2.86169C10.6113 2.74599 10.4508 2.68197 10.2843 2.68342C10.1178 2.68486 9.95845 2.75166 9.84069 2.86943C9.72292 2.9872 9.65612 3.14651 9.65467 3.31305C9.65323 3.47959 9.71725 3.64004 9.83295 3.75983L13.1949 7.12181L2.02474 7.12181C1.85628 7.12181 1.69472 7.18873 1.57561 7.30785C1.45649 7.42697 1.38957 7.58852 1.38957 7.75698C1.38957 7.92544 1.45649 8.087 1.57561 8.20612C1.69472 8.32524 1.85628 8.39216 2.02474 8.39216Z" fill="#FFFFFF" />
                </svg></Link>} />
            ))}
        </div>
    )
}