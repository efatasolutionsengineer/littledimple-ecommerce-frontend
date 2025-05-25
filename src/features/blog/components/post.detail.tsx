'use client'

import { BasicLoading } from "@/shared/components/loading"
import { useGetPostBySlug } from "../hooks"
import Error from "@/shared/components/error"
import Link from "next/link"
import { HTMLViewer } from "@/shared/components/html-viewer"
import PostComments from "./post.comments"
import { useLayoutContext } from "@/providers/index-layout-provider"
import { useEffect } from "react"

export default function PostDetail({ category, slug }: { category: string, slug: string }) {

    const { updateLayout } = useLayoutContext()

    useEffect(() => {
        updateLayout({
            slug: 'Blog',
            title: 'Blog Details',
        })
    }, [])

    const { data: post, isLoading: isLoadingPost, isError: isErrorPost, error: errorPost } = useGetPostBySlug(category, slug)

    if (isLoadingPost) {
        return <BasicLoading>Loading post...</BasicLoading>
    }

    if (isErrorPost || !post) {
        return <Error>Error: {errorPost?.message || 'Post not found'}</Error>
    }

    return <div className="w-full">
        <div className="w-full h-[449px]">
            { /* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.thumbnail} alt={post.title} className="w-full h-full rounded-lg object-cover" />
        </div>
        <div className="px-2">
            <div className="mt-8 flex flex-row gap-8 justify-start font-(family-name:--font-dm-sans)">
                <Link href={`/blog/${post.category}`} className="text-sm text-white p-[2px_10px] rounded-lg capitalize hover:underline bg-primary">{post.category}</Link>
                <p className="flex flex-row gap-4 items-center justify-center text-sm text-neutral-gray font-medium text-primary">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9 0a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 16.606A7.606 7.606 0 1 1 16.606 9 7.606 7.606 0 0 1 9 16.606z" fill="#F57005" />
                        <path d="M12.209 10.589l-2.51-1.882V4.873a.697.697 0 0 0-1.394 0v4.183c0 .219.103.426.279.557l2.788 2.091c.126.095.272.14.418.14.212 0 .421-.095.558-.28.232-.307.17-.744-.138-.975z" fill="#F57005" />
                    </svg>
                    <span className="text-neutral-gray font-medium">{post.publishedDate}</span>
                </p>
            </div>
            <h2 className="block text-2xl text-hijau-tua font-bold hover:underline my-4 tracking-wide">{post.title}</h2>
            <div className="text-neutral-gray">
                <HTMLViewer content={post.content} />
            </div>
        </div>
        <div className="px-2 w-full flex flex-row flex-wrap gap-8 items-center justify-between py-8 border-y border-orange-muda mt-4 mb-8">
            <p className="flex flex-row gap-4 items-center justify-start bg-hijau-tua px-4 py-2 font-(family-name:--font-dm-sans) text-neutral-white rounded-lg w-auto">Share <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.4519 5.80748L12.7183 3.54102C13.7504 2.54192 15.1339 1.98852 16.5703 2.00018C18.0067 2.01184 19.3809 2.58763 20.3966 3.60335C21.4124 4.61908 21.9882 5.99334 21.9998 7.42975C22.0115 8.86615 21.4581 10.2496 20.459 11.2817L18.1925 13.5481M13.5481 18.1925L11.2817 20.459C10.2496 21.4581 8.86615 22.0115 7.42975 21.9998C5.99334 21.9882 4.61908 21.4124 3.60335 20.3966C2.58763 19.3809 2.01184 18.0067 2.00018 16.5703C1.98852 15.1339 2.54192 13.7504 3.54102 12.7183L5.80748 10.4519M15.0963 8.90374L8.90374 15.0963" stroke="#FAF5F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            </p>
            <div className="flex flex-row gap-4 items-center justify-center">
                <div className="flex flex-row gap-4">
                    <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-orange-muda size-[34px] flex items-center justify-center rounded-full border-2 border-orange-muda hover:border-hijau-tua transition">
                        <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.28346 14C11.6234 14 15.0904 8.61429 15.0904 3.94418C15.0904 3.79122 15.0873 3.63889 15.0807 3.4874C15.7536 2.98848 16.3385 2.36588 16.8 1.65722C16.1824 1.93881 15.5177 2.12812 14.8206 2.21376C15.5322 1.77605 16.0786 1.08393 16.3362 0.258853C15.6703 0.663699 14.9327 0.957826 14.1476 1.11669C13.5186 0.429724 12.623 0.00012207 11.6315 0.00012207C9.72816 0.00012207 8.18451 1.58285 8.18451 3.53386C8.18451 3.81134 8.21482 4.08103 8.27389 4.33976C5.40922 4.19196 2.86889 2.78569 1.16907 0.647159C0.87318 1.16936 0.702428 1.77616 0.702428 2.42361C0.702428 3.64963 1.31095 4.73228 2.23622 5.36541C1.67074 5.34761 1.13958 5.18843 0.675202 4.92348C0.674688 4.93834 0.674688 4.95277 0.674688 4.96857C0.674688 6.68024 1.86276 8.10937 3.44012 8.4332C3.15039 8.514 2.84557 8.55751 2.53118 8.55751C2.30947 8.55751 2.09331 8.53518 1.88331 8.49378C2.32211 9.89804 3.59464 10.9199 5.10326 10.9486C3.92351 11.8967 2.43738 12.4614 0.822221 12.4614C0.544415 12.4614 0.269793 12.4451 0 12.4124C1.52547 13.415 3.33686 14.0001 5.28357 14.0001" fill="#86CCCB" />
                        </svg>

                    </a>
                    <a href={`https://www.youtube.com/share?url=${encodeURIComponent(window.location.href)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-orange-muda size-[34px] flex items-center justify-center rounded-full border-2 border-orange-muda hover:border-hijau-tua transition">
                        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.1962 2.19067C18.9703 1.33405 18.3083 0.658786 17.4687 0.428126C15.935 0 9.79978 0 9.79978 0C9.79978 0 3.66484 0 2.13107 0.411894C1.30767 0.64231 0.629489 1.33417 0.403629 2.19067C0 3.75525 0 7 0 7C0 7 0 10.2611 0.403629 11.8093C0.629728 12.6658 1.29152 13.3411 2.13119 13.5718C3.68099 14 9.80002 14 9.80002 14C9.80002 14 15.935 14 17.4687 13.5881C18.3084 13.3576 18.9703 12.6823 19.1964 11.8258C19.5999 10.2611 19.5999 7.01648 19.5999 7.01648C19.5999 7.01648 19.6161 3.75525 19.1962 2.19067ZM7.84648 9.99761V4.00239L12.9482 7L7.84648 9.99761Z" fill="#86CCCB" />
                        </svg>

                    </a>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-orange-muda size-[34px] flex items-center justify-center rounded-full border-2 border-orange-muda hover:border-hijau-tua transition">
                        <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.92079 8.46696C2.86447 8.46696 1.62542 8.46696 1.06221 8.46696C0.761836 8.46696 0.667969 8.35431 0.667969 8.07271C0.667969 7.32177 0.667969 6.55206 0.667969 5.80112C0.667969 5.50075 0.78061 5.40688 1.06221 5.40688H2.92079C2.92079 5.35056 2.92079 4.2617 2.92079 3.75482C2.92079 3.00388 3.0522 2.29048 3.42767 1.63341C3.82191 0.957569 4.38512 0.507006 5.09851 0.244177C5.56785 0.0752158 6.03718 0.00012207 6.54407 0.00012207H8.38387C8.64669 0.00012207 8.75934 0.112763 8.75934 0.375591V2.51577C8.75934 2.77859 8.64669 2.89124 8.38387 2.89124C7.87698 2.89124 7.3701 2.89124 6.86321 2.91001C6.35633 2.91001 6.0935 3.15406 6.0935 3.67972C6.07473 4.24293 6.0935 4.78736 6.0935 5.36933H8.27123C8.5716 5.36933 8.68424 5.48197 8.68424 5.78235V8.05394C8.68424 8.35431 8.59037 8.44818 8.27123 8.44818C7.59538 8.44818 6.14982 8.44818 6.0935 8.44818V14.5683C6.0935 14.8875 5.99964 15.0001 5.66171 15.0001C4.87323 15.0001 4.10351 15.0001 3.31503 15.0001C3.03343 15.0001 2.92079 14.8875 2.92079 14.6059C2.92079 12.6347 2.92079 8.52328 2.92079 8.46696Z" fill="#86CCCB" />
                        </svg>
                    </a>
                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-orange-muda size-[34px] flex items-center justify-center rounded-full border-2 border-orange-muda hover:border-hijau-tua transition">
                        <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.56712 0.00012207C1.41641 0.00012207 0.664062 0.75573 0.664062 1.74887C0.664062 2.72008 1.394 3.49724 2.52296 3.49724H2.5448C3.71801 3.49724 4.44814 2.72008 4.44814 1.74887C4.42621 0.75573 3.71801 0.00012207 2.56712 0.00012207Z" fill="#86CCCB" />
                            <path d="M0.863281 4.87903H4.22727V14.9997H0.863281V4.87903Z" fill="#86CCCB" />
                            <path d="M12.4816 4.64221C10.6669 4.64221 9.45002 6.34748 9.45002 6.34748V4.87975H6.08594V15.0004H9.44983V9.34865C9.44983 9.04608 9.47176 8.74399 9.56064 8.52762C9.80383 7.92344 10.3572 7.29752 11.2866 7.29752C12.5039 7.29752 12.9907 8.22563 12.9907 9.58618V15.0004H16.3544V9.19741C16.3544 6.08878 14.6947 4.64221 12.4816 4.64221Z" fill="#86CCCB" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <PostComments />
    </div>
}