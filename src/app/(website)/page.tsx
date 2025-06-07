"use client"

import { SuperiorityGroup } from "@/features/home/components/superiority.group";
import { PartnerGroup } from "@/features/home/components/partner.group";
import { useGetHome } from "@/features/home/hooks";
import { CTA } from "@/features/home/components/cta";
import { Hero } from "@/features/home/components/hero";
import { AboutUs } from "@/features/home/components/about.us";
import { Review } from "@/features/home/components/review";
import { CategoriesInHome } from "@/features/categories/components/categories.in.home";
import { ProductInHome } from "@/features/product/components/product.in.home";
import { BlogInHome } from "@/features/blog/components/blog.in.home";

export default function Home() {
  const { data: home, isLoading: isLoadingHome } = useGetHome();

  return (
    <div className="w-full h-full">
      <Hero data={home?.carousel} isLoading={isLoadingHome} />
      <SuperiorityGroup />
      <CategoriesInHome />
      <ProductInHome />
      <AboutUs data={home?.about_us} isLoading={isLoadingHome} />
      <hr className="text-[#D2D2D2] my-10"></hr>
      <Review data={home?.reviews} isLoading={isLoadingHome} />
      <PartnerGroup />
      <CTA data={home?.call_to_action} />
      <BlogInHome />
    </div>
  )
}
