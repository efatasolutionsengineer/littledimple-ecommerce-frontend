import electronicday from "@/assets/images/home/brand/electronic_day.png"
import babywise from "@/assets/images/home/brand/baby_wise.png"
import kemchick from "@/assets/images/home/brand/kenchicks.png"
import lila from "@/assets/images/home/brand/lilla.png"
import suzana from "@/assets/images/home/brand/suzanna.png"
import sociola from "@/assets/images/home/brand/sociolla.png"
import sono from "@/assets/images/home/brand/sono.png"
import Image from "next/image"

const partners = [
    { src: suzana, alt: "Suzanna" },
    { src: babywise, alt: "Babywise" },
    { src: sociola, alt: "Sociola" },
    { src: sono, alt: "Sono" },
    { src: kemchick, alt: "Kenchicks" },
    { src: lila, alt: "Lilla" },
    { src: electronicday, alt: "Electronic City" },
];

export const PartnerGroup = () => {
    return (<>
        <label className="text-[30px] text-[#86CCCB] text-center mt-16 mb-8">Partnerts</label>
        <div className="flex flex-row flex-wrap justify-center items-center gap-8">
            {partners.map((item, index) => (
                    <Image
                        src={item.src}
                        alt={item.alt}
                        key={index}
                        width={100}
                        className="max-h-15 object-contain"
                    />
            ))}
        </div>
    </>)
}