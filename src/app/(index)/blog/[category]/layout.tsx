import { Metadata } from "next"

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
    const { category } = params;
    return {
        title: `Blog Category - ${category.toUpperCase()}`,
        description: `Blog posts in category ${category.toUpperCase()}`,
    }
}

export default function BlogCategoryLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}