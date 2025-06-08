'use client'

import Image from "next/image";
import BGFooter from "@/assets/images/bg-footer.png";
import BrandLogo from "@/assets/images/brand-logo.png";
import LocationIcon from "@/assets/images/loc-icon.png";
import MailIcon from "@/assets/images/email-icon.png";
import TelpIcon from "@/assets/images/telp-icon.png";
import WaIcon from "@/assets/images/wa.png";
import IgIcon from "@/assets/images/ig.png";
import TokpedIcon from "@/assets/images/tokped.png";
import ShopeeIcon from "@/assets/images/shopee.png";
import MobilFooter from "@/assets/images/mobil-footer.png";
import StarFooter from "@/assets/images/star-footer.png";
import PesawatFooter from "@/assets/images/pesawat-footer.png";
import KuasFooter from "@/assets/images/kuas-footer.png";
import { useGetHome } from "@/features/home/hooks";
import { LoadDataUntilReady } from "@/shared/components/load.data.until.ready";
import { Explore } from "./components/explore";
import { AvailablePayments } from "./components/available.payments";

export const Footer = () => {
    const { data: home, isLoading } = useGetHome();

    return <div className="relative">
        <div className="absolute inset-0 z-0">
            <Image src={BGFooter} alt="background footer" className="w-full h-full object-cover" />
        </div>
        <Image src={MobilFooter} height={90} alt="mobil decoration" className="hidden md:block absolute top-35 left-20" />
        <Image src={StarFooter} height={60} alt="star decoration" className="hidden md:block absolute bottom-30 left-10" />
        <Image src={PesawatFooter} height={90} alt="pesawat decoration" className="hidden md:block absolute top-35 right-20" />
        <Image src={KuasFooter} height={130} alt="kuas decoration" className="hidden md:block absolute bottom-30 right-10" />
        <div className="max-w-[1050px] mx-auto px-5 sm:px-0 z-10 pb-4 relative pt-30 flex justify-between flex-wrap gap-10 border-b border-white/30">
            <div className="font-(family-name:--font-dm-sans) text-white sm:max-w-[300px] grow">
                <Image src={BrandLogo} alt="brand logo" height={100} className="mx-auto" />
                <div className="flex items-center gap-5 mb-4">
                    <Image
                        src={LocationIcon}
                        alt="location icon"
                        width={20}
                        height={20}
                    />
                    <LoadDataUntilReady
                        isLoading={isLoading}
                        placeholder={<p className="p-8 w-64 bg-white/10 rounded-lg animate-pulse"></p>}
                    >
                        {home?.alamat ? <p>{home?.alamat}</p> : <p>Ruko Sunter Permai Blok K2 D7, Sunter Jaya, Tanjung Priok, Jakarta Utara</p>}
                    </LoadDataUntilReady>
                </div>
                <div className="flex items-center gap-5 mb-4">
                    <Image
                        src={TelpIcon}
                        alt="telephone icon"
                        width={20}
                        height={20}
                    />
                    <LoadDataUntilReady
                        isLoading={isLoading}
                        placeholder={<p className="p-4 w-64 bg-white/10 rounded-lg animate-pulse"></p>}
                    >
                        {home?.no_telepon ? <p>{home?.no_telepon}</p> : <p>(+62) 821 2266 8696</p>}
                    </LoadDataUntilReady>
                </div>
                <div className="flex items-center gap-5 mb-4">
                    <Image
                        src={MailIcon}
                        alt="location icon"
                        width={20}
                        height={20}
                    />
                    <LoadDataUntilReady
                        isLoading={isLoading}
                        placeholder={<p className="p-4 w-64 bg-white/10 rounded-lg animate-pulse"></p>}
                    >
                        <a href={`mailto:${home?.email}`} target="_blank" rel="noopener noreferrer" className="hover:underline block">littledimpleid@gmail.com</a>
                    </LoadDataUntilReady>
                </div>
                <div className="flex items-center gap-5 py-3">
                    <a href={home?.link_whatsapp || '#'} target="_blank" rel="noopener noreferrer" className="hover:shadow-lg transition-all duration-300">
                        <Image
                            src={WaIcon}
                            alt="whatsapp icon"
                            width={32}
                            height={32}
                        />
                    </a>
                    <a href={home?.link_instagram || '#'} target="_blank" rel="noopener noreferrer" className="hover:shadow-lg transition-all duration-300">
                        <Image
                            src={IgIcon}
                            alt="instagram icon"
                            width={32}
                            height={32}
                        />
                    </a>
                    <a href={home?.link_tokopedia || '#'} target="_blank" rel="noopener noreferrer" className="hover:shadow-lg transition-all duration-300">
                        <Image
                            src={TokpedIcon}
                            alt="tokopedia icon"
                            width={32}
                            height={32}
                        />
                    </a>
                    <a href={home?.link_shopee || '#'} target="_blank" rel="noopener noreferrer" className="hover:shadow-lg transition-all duration-300">
                        <Image
                            src={ShopeeIcon}
                            alt="shopee icon"
                            width={32}
                            height={32}
                        />
                    </a>
                </div>
            </div>
            <div className="flex gap-14 flex-wrap">
                <Explore data={home?.explore} isLoading={isLoading} />
                <AvailablePayments data={home?.available_payment} isLoading={isLoading} />
            </div>
        </div>
        <div className="max-w-[1050px] mx-auto px-2 z-10 relative">
            <p className="text-white text-center font-(family-name:--font-dm-sans) text-[16px] p-5 pb-7">Copyright © 2025. All rights reserved.</p>
        </div>
    </div>;
};
