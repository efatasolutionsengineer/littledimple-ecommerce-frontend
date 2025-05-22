import Image from "next/image";
import Gelombang from "@/assets/images/gelombang.png"
import testimonial from "@/assets/images/dimple_squad/Testimonial.png"
import charity from "@/assets/images/dimple_squad/charity.png"
import fun from "@/assets/images/dimple_squad/fun.png"
import graduated from "@/assets/images/dimple_squad/graduated.png"
import juggler from "@/assets/images/dimple_squad/juggler.png"
import playtime from "@/assets/images/dimple_squad/playtime.png"
import presentation from "@/assets/images/dimple_squad/presentation.png"
import flower from "@/assets/images/dimple_squad/flower.png"
import bookbot from "@/assets/images/dimple_squad/bookbot.png"
import startbot from "@/assets/images/dimple_squad/startbot.png"
import apple from "@/assets/images/dimple_squad/apple.png"
import lettera from "@/assets/images/dimple_squad/lettera.png"
import activity1 from "@/assets/images/dimple_squad/activity1.png"
import activity2 from "@/assets/images/dimple_squad/activity2.png"
import activity3 from "@/assets/images/dimple_squad/activity3.png"
import activity4 from "@/assets/images/dimple_squad/activity4.png"
import activity5 from "@/assets/images/dimple_squad/activity5.png"
import activity6 from "@/assets/images/dimple_squad/activity6.png"
import activity7 from "@/assets/images/dimple_squad/activity7.png"
import activity8 from "@/assets/images/dimple_squad/activity8.png"

const colors = ['text-[#F25334]', 'text-[#CFE292]', 'text-[#2390FF]', 'text-[#FFAA23]', 'text-[#65FF23]', 'text-[#8484FF]']

const benefitImage = [
    { src: graduated, label: 'Graduated', alt: 'graduated icon', title: "Kuliah Whatsapp", field: "bahas tumbuh kembang anak, gizi, sampai parenting bareng ahlinya" },
    { src: playtime, label: 'Playtime', alt: 'playtime icon', title: "Sharing resep MPASI", field: "Sharing resep MPASI biar anak lahap makannya" },
    { src: fun, label: 'Fun', alt: 'fun icon', title: "Lelang produk", field: "Lelang produk Little Dimple mulai Rp5.000 aja! Siapa cepet, dia dapet!" },
    { src: presentation, label: 'Presentation', alt: 'presentation icon', title: "Dimple Squad Creator", field: "jualan produk Little Dimple, dapet komisi, bahkan bisa dapet FREE sample product!" },
    { src: charity, label: 'Charity', alt: 'charity icon', title: "Mini Giveaway", field: "tiap minggu! Satu MomDi yang beruntung bakal dapet produk Little Dimple GRATIS!" },
    { src: juggler, label: 'Juggler', alt: 'juggler icon', title: "Exclusive Promo", field: "selalu dapet info duluan soal produk baru & bisa beli dengan special price!" },
]

const activityImage = [
    { src: activity1, label: 'Activity 1', alt: 'activity 1 icon' },
    { src: activity2, label: 'Activity 2', alt: 'activity 2 icon' },
    { src: activity3, label: 'Activity 3', alt: 'activity 3 icon' },
    { src: activity4, label: 'Activity 4', alt: 'activity 4 icon' },
    { src: activity5, label: 'Activity 5', alt: 'activity 5 icon' },
    { src: activity6, label: 'Activity 6', alt: 'activity 6 icon' },
    { src: activity7, label: 'Activity 7', alt: 'activity 7 icon' },
    { src: activity8, label: 'Activity 8', alt: 'activity 8 icon' },
]


export default function DimpleSquad() {
    return (
        <div>
            <div className="h-[386px] bg-(--hijau-tua) relative flex items-center justify-center flex-col p-5 text-white">
                <h3 className="text-[50px]">Dimple Squad</h3>
                <p className="text-[20px] font-(family-name:--font-dm-sans)">Home / Dimple Squad</p>
                <Image
                    className="absolute inset-x-0 bottom-0"
                    src={Gelombang}
                    alt="decoration"
                />
            </div>
            <div className="flex flex-col gap-10 pt-10 text-[#F25334]">
                <div className="text-[30px] text-[#86CCCB] text-center">
                    <p>What is Dimple Squad</p>
                    <p>Activity?</p>
                </div>
                <div className="px-4 sm:px-40 md:px-70  text-center">
                    <p className="text-[#7E8185] font-(family-name:--font-dm-sans)">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
                </div>
                <div className="pt-20 px-4 sm:px-20 md:px-40">
                    <Image
                        src={testimonial}
                        alt="testimonial"
                    />
                </div>
                <div className="relative">
                    <div className="text-center">
                        <label className="text-center" style={{ fontFamily: 'Schoolbell' }}>Benefit</label>
                        <div className="text-[18px] md:text-[30px] text-[#86CCCB]">
                            <p>There are so many things that</p>
                            <p>MomDi can get here, as Squad!</p>
                        </div>
                    </div>
                    <Image
                        src={lettera}
                        alt="lettera"
                        width={50}
                        height={50}
                        className="absolute top-25 left-2 sm:left-8 md:left-10 lg:left-50 xl:left-65 object-contain"
                    />
                    <Image
                        src={apple}
                        alt="apple"
                        width={50}
                        height={50}
                        className="absolute top-40 right-2 sm:right-8 md:right-10 lg:right-50 xl:right-65 object-contain"
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-4 sm:px-30 lg:px-70 xl:px-110 text-center">
                    {colors.map((color, idx) => (
                        <div key={idx} className="relative w-[170px] h-[169px] justify-self-center">
                            <svg
                                className={`absolute inset-0 w-full h-full fill-current ${color}`}
                                viewBox="0 0 270 269"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M225.839 253.47C255.827 240.711 267.973 215.839 263.132 188.175C263.132 51.4589 320.005 0.00015201 106.434 -7.1497e-06C24.424 -7.64918e-06 16.0731 19.4592 7.35034 50.0861C-6.45725 95.6829 2.54278 156.094 7.35033 197.583C9.02105 211.995 13.7604 227.047 24.424 238.535C35.8036 250.794 54.4117 257.431 71.4427 261.723C92.0198 266.905 114.66 269.301 136.072 268.97C165.463 268.514 199.184 264.81 225.839 253.47Z"
                                    fill="currentColor"
                                    fillOpacity="0.1"
                                />
                            </svg>
                            <Image
                                src={benefitImage[idx].src}
                                alt={benefitImage[idx].alt}
                                width={30}
                                height={30}
                                className="absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            />
                            <label className="absolute top-17 left-0 px-2 text-[#86CCCB] text-[12px] w-full">{benefitImage[idx].title}</label>
                            <p className="absolute top-23 left-0 px-2 w-full text-[#7E8185] text-[10px] font-(family-name:--font-dm-sans)">{benefitImage[idx].field}</p>
                        </div>
                    ))}
                </div>
                <div className="text-center pt-10">
                    <label className="text-center" style={{ fontFamily: 'Schoolbell' }}>Activity</label>
                    <div className="text-[18px] md:text-[30px]  text-[#86CCCB]">
                        <p>Our Activities</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 px-4 sm:px-30 lg:px-70 xl:px-100 text-center justify-items-center">
                    {activityImage.map((item, idx) => (
                        <Image
                            key={idx}
                            src={item.src}
                            alt={item.alt}
                            width={150}
                            height={150}
                            className="w-[150px] h-[150px] object-cover"
                        />
                    ))}
                </div>
                <div className="text-center px-5 sm:px-20 md:px-30 lg:px-70 xl:px-100 pb-20">
                    <div className="bg-[#359D9B] h-[280px] rounded-[73px] relative">
                        <Image
                            src={flower}
                            alt="flower"
                            width={300}
                            height={300}
                            className="absolute bottom-0 left-0 object-contain 	rounded-l-[73px]"
                        />
                        <Image
                            src={bookbot}
                            alt="bookbot"
                            width={100}
                            height={100}
                            className="absolute top-20 left-50 object-contain"
                        />
                        <Image
                            src={startbot}
                            alt="startbot"
                            width={60}
                            height={60}
                            className="absolute bottom-10 right-10 object-contain"
                        />
                        <div className="absolute -right-0 md:right-5 top-15 text-white text-left">
                            <p className="w-60 pb-5 text-[20px]">MinDi, wait in the Dimple Squad group, MinDi!</p>
                            <p className="w-80 pb-5 text-[12px]  font-(family-name:--font-dm-sans)">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has </p>
                            <button className=" bg-[#CBADD2] px-10 py-3 rounded-[12px] text-[10px] cursor-pointer">Join The Group Now!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}