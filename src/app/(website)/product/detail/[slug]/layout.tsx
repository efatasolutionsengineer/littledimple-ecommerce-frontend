import { Metadata } from "next"

import { getProductDetail } from "@/features/product/api"

export async function generateMetadata(
    { params }: { params: { slug: string } }
  ): Promise<Metadata> {
    const slug = (await params).slug
   
    // fetch post information
    const post = await getProductDetail(slug)
    const product = post.product

    if (!product) {
        return {
            title: 'Product Not Found',
            description: 'Product Not Found',
        }
    }

    return {
      title: product.name + ' - ' + product.category_name,
      description: product.description,
      openGraph: {
        title: product.name,
        description: product.description,
        images: [product.image_url || 'https://ui-avatars.com/api/?background=random'],
      },
    }
  }

export default function ProductDetailLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    )
}