import LatestPosts from "@/features/blog/components/latest.posts"
import PostDetail from "@/features/blog/components/post.detail"

export default function PostDetailPage({ params }: { params: { category: string, slug: string } }) {
    const { category, slug } = params
    return (
        <div className="flex flex-row flex-wrap gap-10 max-w-[1280px] mx-auto px-1 sm:px-5 py-5 my-24 relative">
            <div className="grow w-full max-w-[770px]">
                <PostDetail category={category} slug={slug} />
            </div>
            <LatestPosts category={category} />
        </div>
    )
}