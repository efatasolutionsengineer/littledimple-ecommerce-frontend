"use client"

import Image from "next/image";

import homeco1 from "@/assets/images/home/homco1.png"
import homeco2 from "@/assets/images/home/homeco2.png"
import homeco3 from "@/assets/images/home/homeco3.png"
import { SuperiorityGroup } from "@/features/home/components/superiority.group";
import { PartnerGroup } from "@/features/home/components/partner.group";
import { useGetHome } from "@/features/home/hooks";
import { CTA } from "@/features/home/components/cta";
import { Hero } from "@/features/home/components/hero";
import { AboutUs } from "@/features/home/components/about.us";
import { Review } from "@/features/home/components/review";
import { CategoriesInHome } from "@/features/categories/components/categories.in.home";
import { ProductInHome } from "@/features/product/components/product.in.home";
// Objects

const checkoutList = [
  { src: homeco3, alt: "homeco3", category: 'Tips n Trik', date: '30 Mar, 2023', title: 'Alasan Mengapa Little Dimple Jadi Brand Favorit Para Ibu', textColoring: 'text-[#F25334]', backcoloring: 'bg-[#F25334]' },
  { src: homeco2, alt: "homeco2", category: 'MPASI', date: '26 Mar, 2023', title: 'Masak MPASI hanya 30 menit? Kenalan yuk dengan Little Dimple Portable Cooker', textColoring: 'text-[#2390FF]', backcoloring: 'bg-[#2390FF]' },
  { src: homeco1, alt: "homeco1", category: 'MPASI', date: '26 Mar, 2023', title: 'Menu Mpasi untuk Si Kecil yang Mulai Tumbuh Gigi', textColoring: 'text-[#75c137]', backcoloring: 'bg-[#75c137]' }
]

export default function Home() {
  const { data: home, isLoading: isLoadingHome } = useGetHome();

  return (
    <div className="relative">
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
        <div className="text-center">
          <label className="text-center text-[#FFAA23]" style={{ fontFamily: 'Schoolbell' }}>Latest Blog</label>
          <div className="text-[18px] md:text-[30px] text-[#86CCCB]">
            <p>Checkout our latest news</p>
            <p>updates & articles</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-4 sm:px-10 lg:px-50 xl:px-90 text-center pb-15">
          {checkoutList.map((item, idx) => (
            <div key={idx} className="relative w-[200px] h-[300px] justify-self-center">
              <svg
                className={`absolute inset-0 w-full h-full fill-current ${item.textColoring}`}
                viewBox="0 0 353 506"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M49.0572 34.2366C132.423 27.4776 190 -18.9235 273.815 8.69609C316.734 22.839 360.119 57.0509 340.489 129.11C323.028 193.311 377.906 439.571 338.275 449C318.156 453.771 300.961 450.202 251.118 454.292C237.387 455.428 221.534 460.009 203.001 470.006C58 548.216 9.75189 482.295 1.98876 424.795C0.193678 411.504 0.893074 193.576 3.6906 180.494C17.888 113.831 -35.2649 41.0714 49.0572 34.2366Z" fill="currentColor" fillOpacity="0.1" />
              </svg>

              <Image
                src={item.src}
                alt={item.alt}
                width={150}
                height={150}
                className="absolute top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[30px]"
              />

              <div className="flex flex-row">
                <p className={`text-white text-[10px] px-2 py-1 rounded-[12px] absolute bottom-32 left-3 ${item.backcoloring} `}>{item.category}</p>
                <p className={`font-(family-name:--font-dm-sans) text-[10px] absolute bottom-33 right-3 ${item.textColoring}`}>{item.date}</p>
              </div>
              <label className="absolute bottom-15 left-4 text-left text-[#86CCCB] text-[11px] h-[60px] w-[150px] -">{item.title}</label>
              <div className="absolute bottom-7 left-4 text-[11px] text-black font-semibold mt-auto font-(family-name:--font-dm-sans) cursor-pointer">
                Keep reading <span className="inline-block ml-1">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>)
}
