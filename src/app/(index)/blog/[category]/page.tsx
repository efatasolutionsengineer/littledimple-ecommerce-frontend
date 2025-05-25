import PostsByCategory from "@/features/blog/components/posts.by.category";

export default async function BlogCategoryPage({
    params,
}: {
    params: Promise<{ category: string }>
}) {
    const { category } = await params;

    return (
        <div className="max-w-[1280px] mx-auto px-1 sm:px-5 py-5 my-24 relative">
            <PostsByCategory category={category} />
        </div>
    )
} 