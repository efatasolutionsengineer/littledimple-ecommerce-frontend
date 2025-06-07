"use client"

import { HomeReviews } from "../types";
import { BasicSlider } from "@/shared/components/slider/basic.slider";
import { formatDateFromISOString } from "@/lib/date";

{/* eslint-disable @next/next/no-img-element */ }
export const Review = ({ data, isLoading }: { data?: HomeReviews[], isLoading: boolean }) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    if (isLoading) {
        return (
            <div className="my-16">
                <h3 className="text-hijau-tua text-[30px] font-bold text-center mb-8">Our Testimonial</h3>

                <div className="my-4">
                    <div className="flex flex-col gap-2 justify-center items-center w-full">
                        <div className="relative rounded-full size-16 overflow-hidden bg-gray-100 animate-pulse shadow-md">
                        </div>
                        <p className="text-hijau-tua bg-gray-100 animate-pulse w-56 h-8 rounded-md"></p>
                        <div className="flex justify-center items-center gap-4 mb-2">
                            <div className="flex flex-row gap-3 items-center">
                                <p className="text-[10px] text-[#F25334] font-[var(--font-dm-sans)] bg-gray-100 animate-pulse w-52 h-8 max-w-full h-4 rounded-md"></p>
                            </div>
                            <div className="flex gap-1 items-center justify-center">
                                {[...Array(5)].map((_, index) => (
                                    <svg
                                        key={index}
                                        className="w-4 h-4 text-gray-300 animate-pulse"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                        <p className="max-w-[90vw] text-[12px] text-[#7E8185] text-justify font-(family-name:--font-dm-sans) bg-gray-100 animate-pulse w-full h-16 h-4 rounded-md"></p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="my-16">
            <h3 className="text-hijau-tua text-[30px] font-bold text-center mb-4">Our Testimonial</h3>
            <BasicSlider settings={settings}>
                {
                    data?.map((item, index) => (
                        <div key={index} className="my-4">
                            <div className="flex flex-col gap-2 justify-center items-center w-full">
                                <div className="relative rounded-full size-16 overflow-hidden bg-gray-100 shadow-md">
                                    <img
                                        src={item.user_profile_picture ?? "https://ui-avatars.com/api/?background=random"}
                                        alt="avatar"
                                        className="object-cover w-full h-full"
                                        style={{ boxShadow: "0px 4px 13px 0px rgba(0, 0, 0, 0.45)" }}
                                        loading="lazy"
                                    />
                                </div>
                                <p className="text-hijau-tua text-lg">
                                    {item.user_name}
                                </p>
                                <div className="flex justify-center items-center gap-4 mb-2">
                                    <div className="flex flex-row gap-3 items-center">
                                        <p className="text-primary font-[var(--font-dm-sans)] text-sm">
                                            {formatDateFromISOString(item.timestamp, "d MMM, yyyy . h:mm a")}
                                        </p>
                                    </div>
                                    <div className="flex gap-1 items-center justify-center">
                                        {[...Array(5)].map((_, index) => (
                                            <svg
                                                key={index}
                                                className={`w-4 h-4 ${index < Number(item.score) ? 'text-[#F25334]' : 'text-gray-300'}`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                <p className="max-w-[90vw] text-gray text-center font-(family-name:--font-dm-sans)">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    )
                    )}
            </BasicSlider >
        </div >
    )

}