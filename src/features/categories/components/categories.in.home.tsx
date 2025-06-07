import Image from "next/image";
import midStar from "@/assets/images/home/midStar.png";
import { BasicSlider } from "@/shared/components/slider/basic.slider";
import { useCategoriesInHome } from "../hooks";
import { Category } from "../types";
import Link from "next/link";

export const CategoriesInHome = () => {
    const { data, isLoading } = useCategoriesInHome();

    return (
        <div className="my-32 relative">
            <div className="w-full relative flex items-center justify-center mb-16">
                <h3 className="text-hijau-tua text-[30px] text-center">Products Category</h3>
            </div>
            <Image
                src={midStar}
                alt="midstar icon"
                className="absolute right-0 -top-20 z-0"
                width={150}
                height={150}
            />
            {
                isLoading
                    ? (
                        <div
                            className="w-full grid grid-cols-8 gap-2 flex-shrink-0 "
                        >
                            <div
                                className="flex flex-col gap-5 text-center items-center bg-gray-100 animate-pulse w-full h-full cursor-pointer"
                            >
                                <div className="w-[120px] md:w-[150px] bg-gray-100 animate-pulse" />
                                <label className="text-[#86CCCB] font-semibold cursor-pointer bg-gray-100 animate-pulse w-full h-8 rounded-md"></label>
                            </div>
                        </div>
                    )
                    : (<BasicSlider
                        settings={{
                            dots: true,
                            infinite: true,
                            speed: 500,
                            slidesToShow: 4,
                            slidesToScroll: 1,
                            responsive: [
                                {
                                    breakpoint: 1024,
                                    settings: {
                                        slidesToShow: 3,
                                        slidesToScroll: 3,
                                        infinite: true,
                                        dots: true
                                    }
                                },
                                {
                                    breakpoint: 600,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 2,
                                        initialSlide: 2
                                    }
                                },
                                {
                                    breakpoint: 480,
                                    settings: {
                                        slidesToShow: 1,
                                        slidesToScroll: 1
                                    }
                                }
                            ]
                        }}
                    >
                        {data?.categories.map((item: Category) => {

                            return (
                                <div
                                    key={item.id}
                                    className="w-full grid grid-cols-8 gap-2"
                                >
                                    <div
                                        className="flex flex-col gap-5 text-center items-center cursor-pointer"
                                    >
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={`https://picsum.photos/150/150?random=${item.id}`} alt={item.name} className="w-[120px] md:w-[150px]" />
                                        <Link href={`/product/category/${item.id}`} className="text-[#86CCCB] text-[10px] md:text-[15px] font-semibold cursor-pointer">{item.name}</Link>
                                    </div>
                                </div>
                            );
                        })}
                    </BasicSlider>)}
        </div>
    )
}