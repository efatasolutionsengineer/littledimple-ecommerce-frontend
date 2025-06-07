import defaultHero from "@/assets/images/home/default_header.png"
import Image from "next/image"
import { HomeCarousel } from "../types"
import Link from "next/link"
import { useState, useEffect } from "react"

export const Hero = ({ data, isLoading }: { data?: HomeCarousel[], isLoading: boolean }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (!data || data.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % data.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [data]);

    let currentData = data?.[currentSlide];

    if (!currentData && !isLoading) {
        currentData = {
            title: "Trusted Mom & Baby Care Brand",
            title_sub: "Smart Care for Growing Kids",
            button_1_title: "Our Product",
            button_1_link: "/product",
            button_2_title: "Contact Us",
            button_2_link: "/contact",
            images: "",
            sort_order: 0,
            status: "active",
        };
    }

    return (
        <div className="w-full flex flex-col sm:flex-row items-center justify-between relative overflow-hidden">
            <div className="relative sm:absolute inset-0 flex flex-col items-start justify-start max-w-[1000px] px-4 pb-8 pt-16 sm:pt-32 mx-auto gap-5 z-10">
                <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center gap-2 self-start pt-8">
                        {data?.map((_, index) => (
                            <span
                                key={index}
                                className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${index === currentSlide ? 'bg-[#F4A523]' : 'bg-[#CBCBCB]'
                                    }`}
                                onClick={() => setCurrentSlide(index)}
                            />
                        ))}
                    </div>
                    <div>
                        {currentData?.title ? (
                            <p className="text-[#F25334] text-sm sm:text-md font-medium" style={{ fontFamily: 'Schoolbell' }}>
                                {currentData.title}
                            </p>
                        ) : (
                            <p className="text-[#F25334] text-sm sm:text-md font-medium animate-pulse bg-gray-200 h-6 w-48 rounded mb-2" />
                        )}

                        {currentData?.title_sub ? (
                            <h2 className="text-3xl sm:text-5xl font-bold text-[#86CCCB] leading-tight max-w-[600px]">
                                {currentData.title_sub}
                            </h2>
                        ) : (
                            <h2 className="text-3xl sm:text-5xl font-bold text-[#86CCCB] leading-tight animate-pulse bg-gray-200 h-12 w-96 rounded" />
                        )}

                        <div className="flex gap-3 pt-4">
                            {currentData?.button_1_link ? (
                                <Link href={currentData.button_1_link} className="bg-primary-ungu hover:shadow-lg text-white font-bold text-xs sm:text-base py-2 px-4 rounded-[12px] cursor-pointer">
                                    {currentData.button_1_title}
                                </Link>
                            ) : (
                                <div className="bg-primary-ungu text-white font-bold text-xs sm:text-base py-2 px-4 rounded-[12px] animate-pulse">
                                    <div className="bg-gray-200 h-4 w-24 rounded" />
                                </div>
                            )}
                            {currentData?.button_2_link ? (
                                <Link href={currentData.button_2_link} className="bg-primary-hijau hover:shadow-lg text-white font-bold text-xs sm:text-base py-2 px-4 rounded-[12px] cursor-pointer">
                                    {currentData.button_2_title}
                                </Link>
                            ) : (
                                <div className="bg-primary-hijau text-white font-bold text-xs sm:text-base py-2 px-4 rounded-[12px] animate-pulse">
                                    <div className="bg-gray-200 h-4 w-24 rounded" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-screen">
                {
                    currentData?.images ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={currentData.images}
                            alt="hero"
                            width={1000}
                            height={500}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.currentTarget.src = defaultHero.src;
                            }}
                        />
                    ) : (
                        <Image
                            src={defaultHero}
                            alt="hero"
                            className="w-full h-full object-cover"
                        />)
                }
            </div>
        </div>
    )
}