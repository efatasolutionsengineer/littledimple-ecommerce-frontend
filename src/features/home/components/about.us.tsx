import { LoadDataUntilReady } from "@/shared/components/load.data.until.ready";
import { HomeAboutUs } from "../types";
import Link from "next/link";
import Image from "next/image";
import bgBaby from "@/assets/images/home/bgbaby.png"
import linebgBaby from "@/assets/images/home/linebgbaby.png"
import lamp from "@/assets/images/home/lamp.png"
import letterb from "@/assets/images/home/letterb.png"
import pencil from "@/assets/images/home/pencil.png";

export const AboutUs = ({ data, isLoading }: { data?: HomeAboutUs, isLoading: boolean }) => {
    return (
        <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 my-16">

            <div className="relative w-full max-w-[500px] h-104">
                <Image
                    src={bgBaby}
                    alt="Background Baby"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                    loading="lazy"
                />
                <Image
                    src={linebgBaby}
                    alt="Line Background Baby"
                    width={400}
                    height={400}
                    className="absolute -top-10 right-5 w-[70%] sm:w-[80%] md:w-[85%]"
                    loading="lazy"
                />
                {data?.media_link !== "ed" && <div className="absolute inset-0 flex items-center justify-center w-full h-full">
                    <LoadDataUntilReady
                        isLoading={isLoading}
                        placeholder={
                            <div className="p-4 h-64 w-full bg-white/10 rounded-lg animate-pulse"></div>
                        }
                    >
                        <video
                            className="w-62 h-104 object-cover rounded-lg"
                            controls
                            style={{ aspectRatio: "16/9" }}
                        >
                            <source src={"http://35.209.46.213:3300/api/gallery/stream/b3323e20978192922f4d4193a1536550"} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </LoadDataUntilReady>
                </div>}
                <Image
                    src={letterb}
                    alt="letterb Icon"
                    width={60}
                    height={60}
                    className="absolute -top-10 left-0 w-[40px] sm:w-[50px]"
                    loading="lazy"
                />
            </div>

            <div className="flex flex-col gap-4 text-white text-center lg:text-left max-w-[450px]">
                <LoadDataUntilReady
                    isLoading={isLoading}
                    placeholder={
                        <div>
                            <div className="w-96 h-16 bg-gray-200 rounded-lg animate-pulse mb-4" />
                            <div className="w-32 h-10 bg-gray-200 rounded-lg animate-pulse" />
                        </div>
                    }
                >
                    <label className="text-hijau-tua text-[22px] sm:text-[26px] md:text-[30px] leading-tight">
                        {data?.description ?? "Supporting Moms, Caring for Little Ones"}
                    </label>
                    <Link href={data?.button_link ?? "/product"} className="bg-primary-ungu px-6 py-3 rounded-[12px] text-[14px] cursor-pointer w-[200px] mx-auto lg:mx-0">
                        {data?.button_title ?? "See Our Product"}
                    </Link>
                </LoadDataUntilReady>
            </div>

            <Image
                src={lamp}
                alt="Lamp Icon"
                width={40}
                height={40}
                className="absolute right-50 top-0 hidden sm:block"
                loading="lazy"
            />
            <Image
                src={pencil}
                alt="Pencil Icon"
                width={150}
                height={150}
                className="absolute right-5 top-28 hidden sm:block"
                loading="lazy"
            />
        </div>

    )
}