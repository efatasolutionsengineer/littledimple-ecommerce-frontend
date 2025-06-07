import Link from "next/link"
import { HomeCallToAction } from "../types"
import Image from "next/image"
import homecontact from "@/assets/images/home/homecontact.png"
import homecontact2 from "@/assets/images/home/homecontact2.png"
import homecontact3 from "@/assets/images/home/homecontact3.png"
import homecontact6 from "@/assets/images/home/homecontact6.png"
import homecontact4 from "@/assets/images/home/homecontact4.png"
import homecontact5 from "@/assets/images/home/homecontact5.png"
import homecontact7 from "@/assets/images/home/homecontact7.png"
import homedot from "@/assets/images/home/homedot.png"

export const CTA = ({ data = {
    title: 'Do You Need Anything? Do Not Hesitate To Contact Us!',
    button_link: '#',
    button_title: 'Click Here'
} }: { data?: HomeCallToAction }) => {
    return (
        <div className="w-full relative">
            <Image
                src={homecontact4}
                alt="homecontact4"
                className="absolute top-1/2 -translate-y-1/4 left-1 w-[40px] sm:w-[50px] md:w-[60px]"
            />
            <Image
                src={homecontact7}
                alt="homecontact7"
                className="absolute top-1/2 -translate-y-1/3 left-10 sm:left-20 md:left-28 w-[180px] sm:w-[250px] md:w-[300px]"
            />
            <Image
                src={homecontact5}
                alt="homecontact5"
                className="absolute bottom-15 sm:bottom-26 md:bottom-20 right-0 w-[150px] sm:w-[300px] md:w-[400px]"
            />

            <Image
                src={homedot}
                alt="homedot"
                className="absolute sm:top-[77%] sm:left-[3%] w-[10px] sm:w-[12px] md:w-[15px]"
            />
            <Image
                src={homedot}
                alt="homedot"
                className="absolute sm:bottom-[20%] sm:left-[5%] w-[12px] sm:w-[16px] md:w-[20px]"
            />
            <Image
                src={homedot}
                alt="homedot"
                className="absolute sm:bottom-[55%] sm:left-[6%] w-[10px] sm:w-[12px] md:w-[15px]"
            />
            <div className="my-16">
                <div className="relative w-screen overflow-hidden flex items-center justify-center">
                    <div className="relative overflow-hidden max-w-[900px] w-full">
                        <Image
                            src={homecontact6}
                            alt="homecontact6"
                            height={400}
                            className="object-cover w-full h-[400px] sm:h-full"
                        />
                        <Image
                            src={homecontact2}
                            alt="homecontact2"
                            className="absolute bottom-10 sm:bottom-14 md:bottom-20 right-10 sm:right-14 md:right-20 w-[40px] sm:w-[50px] md:w-[55px] xl:w-[60px]"
                        />
                        <Image
                            src={homecontact3}
                            alt="homecontact3"
                            className="absolute top-10 sm:top-16 md:top-20 left-10 sm:left-16 md:left-20 w-[40px] sm:w-[50px] md:w-[55px] xl:w-[60px]"
                        />
                        <Image
                            src={homecontact}
                            alt="homecontact"
                            className="absolute -bottom-0 sm:bottom-0 md:-bottom-2 lg:bottom-1 xl:-bottom-3 right-15 sm:right-25 md:right-35 lg:right-40 xl:right-45 w-[120px] sm:w-[200px] md:w-[300px] xl:w-[350px]"
                        />
                    </div>
                    <div className="absolute inset-0 flex flex-col gap-3 items-center justify-center text-center">
                        <div className="max-w-[500px]">
                            <p className="text-white text-2xl sm:text-3xl md:text-4xl mb-4">
                                {data.title ? data.title : 'Do You Need Anything? Do Not Hesitate To Contact Us!'}
                            </p>
                        </div>
                        <Link
                            href={data.button_link ?? '#'}
                            className="bg-primary-ungu text-white font-semibold hover:shadow-lg transition px-4 sm:px-8 py-2 sm:py-4 rounded-lg font-dm-sans cursor-pointer">
                            {data.button_title ? data.button_title : 'Click Here'}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}