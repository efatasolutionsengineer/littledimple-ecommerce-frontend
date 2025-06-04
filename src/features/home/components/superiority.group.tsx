import { SuperiorityCard } from "./superiority.card"
import icService from "@/assets/images/home/ic_service.png"
import icTrusted from "@/assets/images/home/ic_trusted.png"
import icCertified from "@/assets/images/home/ic_certified.png"
import tradein from "@/assets/images/home/tradein-icon.png"
import { ReactNode, useRef, useState } from "react"
import { redirect } from "next/navigation"
import Image from "next/image"
import topBrand from "@/assets/images/home/top_brand.png"
import brandChoice from "@/assets/images/home/branc_choice.png"
import close from "@/assets/images/home/close.png"
import img32 from "@/assets/images/home/img_32.png"
import img33 from "@/assets/images/home/img_33.png"
import img34 from "@/assets/images/home/img_34.png"

export const SuperiorityGroup = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const popupContent = useRef<ReactNode | null>(null);
    return (
        <>
            <div className="w-full h-full flex flex-wrap gap-5 justify-center pt-20 pb-0 md:pb-20 px-10 md:px-30">
                <SuperiorityCard
                    title="FAST & SECURE DELIVERY"
                    description="Loved and recommended by parents all over Indonesia."
                    buttonText="More Info"
                    icon={icService}
                    backgroundColorClassName="bg-teal-pastel"
                    textTitleClassName="text-teal"
                    hideMoreInfoButton={true}
                />
                <SuperiorityCard
                    title="TRUSTED"
                    description="Loved and recommended by parents all over Indonesia."
                    buttonText="More Info"
                    icon={icTrusted}
                    backgroundColorClassName="bg-orange-pastel"
                    textTitleClassName="text-orange"
                    onMoreInfoClicked={() => {
                        console.log("More Info clicked");
                        popupContent.current = <PopupTrusted onClose={() => setIsPopupOpen(false)} />
                        setIsPopupOpen(true);
                    }}
                />
                <SuperiorityCard
                    title="CERTIFIED BY LAB"
                    description="Only the softest, safest fabrics for your little one."
                    buttonText="More Info"
                    icon={icCertified}
                    backgroundColorClassName="bg-hijau-pastel"
                    textTitleClassName="text-hijau"
                    onMoreInfoClicked={() => {
                        popupContent.current = <PopupCertifiedByLab onClose={() => setIsPopupOpen(false)} />
                        setIsPopupOpen(true);
                    }}
                />
                <SuperiorityCard
                    title="TRADE IN"
                    description="Recycle Your Old Little Dimple Electronic and Get up to 20% Off Any Product in Shop!"
                    buttonText="More Info"
                    icon={tradein}
                    backgroundColorClassName="bg-ungu-pastel"
                    textTitleClassName="text-biru-gelap"
                    onMoreInfoClicked={() => {
                        redirect("/contact")
                    }}
                />
            </div>
            {isPopupOpen && <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
                {popupContent.current}
            </div>}
        </>
    )
}

const PopupTrusted = ({ onClose }: { onClose: (showed: boolean) => void }) => {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="bg-white p-4 pt-2 rounded-2xl flex flex-col items-center justify-center max-w-[400px]">
                <div className="w-full flex justify-end mb-2">
                    <span className="font-dm-sans text-sm text-gray font-semibold mt-4 text-left flex items-center justify-start grow">
                        Test Report
                    </span>
                    <button className="text-sm text-gray font-semibold mt-4 text-center rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.2)] p-2" onClick={() => onClose(true)}>
                        <Image
                            src={close}
                            alt="close"
                            width={16}
                            height={16}
                        />
                    </button>
                </div>
                <div className="flex flex-row flex-wrap justify-center items-center gap-4 p-4">
                    <Image
                        src={img32}
                        alt="img32"
                        width={100}
                        height={200}
                        loading="lazy"
                    />
                    <Image
                        src={img33}
                        alt="img33"
                        width={100}
                        height={200}
                        loading="lazy"
                    />
                    <Image
                        src={img34}
                        alt="img34"
                        width={100}
                        height={200}
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    )
}

const PopupCertifiedByLab = ({ onClose }: { onClose: (showed: boolean) => void }) => {
    const [isPopupOpen, setIsPopupOpen] = useState([true, true]);
    const onLocalClose = (index: number) => {
        const newIsPopupOpen = [...isPopupOpen];
        newIsPopupOpen[index] = false;
        setIsPopupOpen(newIsPopupOpen);
        if (index === 0) {
            onClose(true);
        }
    }

    return (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {isPopupOpen[0] && <div className="bg-white p-4 pt-2 rounded-2xl flex flex-col items-center justify-center max-w-[300px]">
                <div className="w-full flex justify-end">
                    <button className="text-sm text-gray font-semibold mt-4 text-center rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.2)] p-2" onClick={() => onLocalClose(0)}>
                        <Image
                            src={close}
                            alt="close"
                            width={16}
                            height={16}
                        />
                    </button>
                </div>
                <Image
                    src={brandChoice}
                    alt="brand choice"
                    width={100}
                    height={100}
                    loading="lazy"
                />
                <p className="font-dm-sans text-sm text-gray font-semibold mt-4 text-center">
                    Awarded as one of the top brands in the Mom & Kids category in 2023 by TRAS N CO and INFOBRAND. Recognized for excellence in quality, trust, and customer satisfaction.
                </p>
            </div>}
            {isPopupOpen[1] && <div className="bg-white p-4 pt-2 rounded-2xl flex flex-col items-center justify-center max-w-[300px]">
                <div className="w-full flex justify-end">
                    <button className="text-sm text-gray font-semibold mt-4 text-center rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.2)] p-2" onClick={() => onLocalClose(1)}>
                        <Image
                            src={close}
                            alt="close"
                            width={16}
                            height={16}
                        />
                    </button>
                </div>
                <Image
                    src={topBrand}
                    alt="top brand"
                    width={100}
                    height={100}
                    loading="lazy"
                />
                <p className="font-dm-sans text-sm text-gray font-semibold mt-4 text-center">Our product is certified by XX Laboratory of California, ensuring it meets high safety and quality standards for you and your family.</p>
            </div>
            }
        </div>
    )
}