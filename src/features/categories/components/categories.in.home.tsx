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
                        <div className="flex flex-wrap gap-8 items-center justify-center">
                            <div

                                className="text-center items-center cursor-pointer flex flex-col gap-2 justify-center items-center"
                            >
                                <div className="size-26 bg-gray-200 animate-pulse" />
                                <div className="text-hijau-tua text-lg font-semibold cursor-pointer bg-gray-200 animate-pulse w-32 h-8 rounded-md"></div>
                            </div>
                            <div

                                className="text-center items-center cursor-pointer flex flex-col gap-2 justify-center items-center"
                            >
                                <div className="size-26 bg-gray-200 animate-pulse" />
                                <div className="text-hijau-tua text-lg font-semibold cursor-pointer bg-gray-200 animate-pulse w-32 h-8 rounded-md"></div>
                            </div>
                            <div

                                className="text-center items-center cursor-pointer flex flex-col gap-2 justify-center items-center"
                            >
                                <div className="size-26 bg-gray-200 animate-pulse" />
                                <div className="text-hijau-tua text-lg font-semibold cursor-pointer bg-gray-200 animate-pulse w-32 h-8 rounded-md"></div>
                            </div>
                        </div>
                    )
                    : (<BasicSlider
                        settings={{
                            dots: true,
                            infinite: true,
                            speed: 500,
                            slidesToShow: 6,
                            slidesToScroll: 1,
                            responsive: [
                                {
                                    breakpoint: 1024,
                                    settings: {
                                        slidesToShow: 5,
                                        slidesToScroll: 3,
                                        infinite: true,
                                        dots: true
                                    }
                                },
                                {
                                    breakpoint: 600,
                                    settings: {
                                        slidesToShow: 3,
                                        slidesToScroll: 2,
                                        initialSlide: 2
                                    }
                                },
                                {
                                    breakpoint: 480,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 1
                                    }
                                }
                            ]
                        }}
                    >
                        {data?.categories.map((item: Category) => {

                            return (
                                <div key={item.id}>
                                    <div

                                        className="text-center items-center cursor-pointer flex flex-col gap-2 justify-center items-center"
                                    >
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={`https://picsum.photos/150/150?random=${item.id}`} alt={item.name} className="size-26" />
                                        <Link href={`/product/category/${item.id}`} className="text-hijau-tua text-lg font-semibold cursor-pointer">{item.name}</Link>
                                    </div>
                                </div>
                            );
                        })}
                    </BasicSlider>)}
        </div>
    )
}