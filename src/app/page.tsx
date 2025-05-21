"use client"

import React, { useEffect, useRef, useState } from "react";
import { fetchHomeData } from "./api/home/home-get";
import { HomeData } from '@/types/home';
import Image from "next/image";
import mountHeader from "@/assets/images/home/mountain.png";
import arrow from "@/assets/images/home/arrow.png";
import ballon from "@/assets/images/home/balon.png";
import dotsMount from "@/assets/images/home/dotsMount.png";
import paperPlane from "@/assets/images/home/paperPlane.png";
import pencil from "@/assets/images/home/pencil.png";
import rocket from "@/assets/images/home/rocket.png";
import midStar from "@/assets/images/home/midStar.png";
import mid1 from "@/assets/images/home/mid1.png";
import mid2 from "@/assets/images/home/mid2.png";
import mid3 from "@/assets/images/home/mid3.png";
import mid4 from "@/assets/images/home/mid4.png";
import hotProductbg from '@/assets/images/home/hotProductbg.png';
import homemid1 from '../../public/homemid1.svg';
import homemid2 from '../../public/homemid2.svg';
import homemid3 from '../../public/homemid3.svg';
import nextButton from '../../public/nextButton.svg';
import previousButton from '../../public/prevButton.svg';
import startRating from '../../public/StarRating.svg';
import hotProduct1 from "@/assets/images/dimple_squad/activity1.png"
import hotProduct2 from "@/assets/images/dimple_squad/activity4.png"
import hotProduct3 from "@/assets/images/dimple_squad/activity8.png"
import hotProduct4 from "@/assets/images/dimple_squad/activity3.png"
import hotProduct5 from "@/assets/images/dimple_squad/activity6.png"
import babyImage from "@/assets/images/home/babyimage.png"
import bgBaby from "@/assets/images/home/bgbaby.png"
import linebgBaby from "@/assets/images/home/linebgbaby.png"
import lamp from "@/assets/images/home/lamp.png"
import letterb from "@/assets/images/home/letterb.png"
import feedbackImg from "@/assets/images/home/feedbackimg.png"
import electroniccity from "@/assets/images/contact_us/electroniccity.png"
import lila from "@/assets/images/contact_us/lila.png"
import kemchick from "@/assets/images/contact_us/kemchick.png"
import suzana from "@/assets/images/contact_us/suzana.png"
import babywise from "@/assets/images/contact_us/babywise.png"
import qualis from "@/assets/images/contact_us/qualis.png"
import homecontact from "@/assets/images/home/homecontact.png"
import homecontact2 from "@/assets/images/home/homecontact2.png"
import homecontact3 from "@/assets/images/home/homecontact3.png"
import homecontact4 from "@/assets/images/home/homecontact4.png"
import homecontact5 from "@/assets/images/home/homecontact5.png"
import homecontact6 from "@/assets/images/home/homecontact6.png"
import homecontact7 from "@/assets/images/home/homecontact7.png"
import homedot from "@/assets/images/home/homedot.png"
import homeco1 from "@/assets/images/home/homco1.png"
import homeco2 from "@/assets/images/home/homeco2.png"
import homeco3 from "@/assets/images/home/homeco3.png"

// Objects

const checkoutList = [
  { src: homeco3, alt: "homeco3", category: 'Tips n Trik', date: '30 Mar, 2023', title: 'Alasan Mengapa Little Dimple Jadi Brand Favorit Para Ibu', textColoring: 'text-[#F25334]', backcoloring: 'bg-[#F25334]' },
  { src: homeco2, alt: "homeco2", category: 'MPASI', date: '26 Mar, 2023', title: 'Masak MPASI hanya 30 menit? Kenalan yuk dengan Little Dimple Portable Cooker', textColoring: 'text-[#2390FF]', backcoloring: 'bg-[#2390FF]' },
  { src: homeco1, alt: "homeco1", category: 'MPASI', date: '26 Mar, 2023', title: 'Menu Mpasi untuk Si Kecil yang Mulai Tumbuh Gigi', textColoring: 'text-[#75c137]', backcoloring: 'bg-[#75c137]' }
]

const midItems = [
  { src: mid1, label: 'Container', alt: 'Container icon' },
  { src: mid2, label: 'Cooker', alt: 'Cooker icon' },
  { src: mid3, label: 'Cup & Bottle', alt: 'Cup & Bottle icon' },
  { src: mid4, label: 'New born essentials', alt: 'Newborn icon' },
  { src: paperPlane, label: 'Cooker', alt: 'Cooker icon' },
  { src: rocket, label: 'New born essentials', alt: 'Newborn icon' },
  { src: pencil, label: 'Cup & Bottle', alt: 'Cup & Bottle icon' },
  { src: dotsMount, label: 'Container', alt: 'Container icon' },
];

const hotProduct = [
  { src: hotProduct1, label: 'Portable-Cooker', alt: 'Portable-Cooker', price: '$2500', oldPrice: '$2500', star: 5 },
  { src: hotProduct2, label: 'Kanoko Board', alt: 'Kanoko Board', price: '$2500', oldPrice: '$2500', star: 2 },
  { src: hotProduct3, label: 'Multi Cooker', alt: 'Multi Cooker', price: '$2500', oldPrice: '$2500', star: 3 },
  { src: hotProduct4, label: 'Pure-Plate', alt: 'Pure-Plate', price: '$2500', oldPrice: '$2500', star: 1 },
  { src: hotProduct5, label: 'Milk Cup', alt: 'Milk Cup', price: '$2500', oldPrice: '', star: 4 },
]

const feedbackCust = [
  { src: feedbackImg, name: "Dylan Neranda", date: "20 Mar, 2023 . 4:00 Pm", star: 5, message: "Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor. Nam vel lacus eu nisl bibendum accumsan" },
  { src: feedbackImg, name: "Dylan Neranda", date: "20 Mar, 2023 . 4:00 Pm", star: 5, message: "Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor. Nam vel lacus eu nisl bibendum accumsan" },
  { src: feedbackImg, name: "Dylan Neranda", date: "20 Mar, 2023 . 4:00 Pm", star: 3, message: "Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor. Nam vel lacus eu nisl bibendum accumsan" },
  { src: feedbackImg, name: "Dylan Neranda", date: "20 Mar, 2023 . 4:00 Pm", star: 2, message: "Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor. Nam vel lacus eu nisl bibendum accumsan" },
  { src: feedbackImg, name: "Dylan Neranda", date: "20 Mar, 2023 . 4:00 Pm", star: 4, message: "Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor. Nam vel lacus eu nisl bibendum accumsan" },
]

const partners = [
  { src: electroniccity, alt: "Electronic City" },
  { src: babywise, alt: "Babywise" },
  { src: kemchick, alt: "Kemchick" },
  { src: lila, alt: "Lila" },
  { src: qualis, alt: "Qualis" },
  { src: suzana, alt: "Suzana" },
];


export default function Home() {
  // Functions

  const useResponsiveItemsPerPage = () => {
    const [itemsPerPage, setItemsPerPage] = useState(4); // Default

    useEffect(() => {
      const updateItemsPerPage = () => {
        const width = window.innerWidth;

        if (width >= 1280) {
          // xl
          setItemsPerPage(4);
        } else if (width >= 1024) {
          // lg
          setItemsPerPage(4);
        } else if (width >= 768) {
          // md
          setItemsPerPage(3);
        } else {
          // sm
          setItemsPerPage(2);
        }
      };

      updateItemsPerPage();
      window.addEventListener("resize", updateItemsPerPage);

      return () => window.removeEventListener("resize", updateItemsPerPage);
    }, []);

    return itemsPerPage;
  };

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = useResponsiveItemsPerPage();
  const totalPages = Math.ceil(midItems.length / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };


  //Auto Slide
  const containerRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);
  const [scrollAmount, setScrollAmount] = useState(360); // default

  useEffect(() => {
    const updateScrollAmount = () => {
      const width = window.innerWidth;

      if (width >= 768) {
        // md
        setScrollAmount(620);
      } else {
        // sm
        setScrollAmount(360);
      }
    };

    updateScrollAmount();
    window.addEventListener("resize", updateScrollAmount);
    return () => window.removeEventListener("resize", updateScrollAmount);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        const container = containerRef.current as HTMLDivElement;
        if (scrollX + container.offsetWidth >= container.scrollWidth) {
          container.scrollTo({ left: 0, behavior: "smooth" });
          setScrollX(0);
        } else {
          container.scrollTo({ left: scrollX + scrollAmount, behavior: "smooth" });
          setScrollX((prev) => prev + scrollAmount);
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [scrollX, scrollAmount]);


  // api
  const [, setHomeData] = useState<HomeData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchHomeData();
        setHomeData(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
        console.error(err);
      }
    };

    getData();
  }, []);

  if (error) {
    console.log("error fetching data : ", error)
  };
  // if (!homeData) return <Loading/>;




  return (
    <div className="relative">
      <div className="w-full h-full flex flex-col gap-5 sm:pt-30">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between px-6 sm:px-0 py-10 sm:py-20 relative overflow-hidden">

          <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-end gap-5 relative z-10">
            <div className="sm:-translate-y-25">
              <div className="flex items-start gap-4">

                <div className="flex flex-col items-center gap-2 self-center pt-1">
                  <span className="w-2 h-2 bg-[#F4A523] rounded-full"></span>
                  <span className="w-2 h-2 bg-[#CBCBCB] rounded-full"></span>
                  <span className="w-2 h-2 bg-[#CBCBCB] rounded-full"></span>
                </div>

                <div>
                  <p className="text-[#F25334] text-sm sm:text-md font-medium" style={{ fontFamily: 'Schoolbell' }}>
                    Trusted Mom & Baby Care Brand
                  </p>

                  <h1 className="text-3xl sm:text-5xl font-bold text-[#86CCCB] leading-tight">
                    Smart Care for <br /> Growing Kids
                  </h1>

                  <div className="flex gap-3 pt-4">
                    <button className="bg-[#CBADD2] text-white font-bold text-xs sm:text-base py-2 px-4 rounded-[12px] cursor-pointer">
                      Our Product
                    </button>
                    <button className="bg-[#26A6A1] text-white font-bold text-xs sm:text-base py-2 px-4 rounded-[12px] cursor-pointer">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <Image
              src={pencil}
              alt="pencil"
              className="w-0 lg:w-[100px] absolute -top-20 left-0 lg:left-10 xl:left-40"
            />
            <Image
              src={rocket}
              alt="rocket"
              className="w-0 lg:w-[120px] absolute bottom-[-30px] left-[-20px] lg:left-10 xl:left-40"
            />
          </div>
          <div className="w-full sm:w-1/2 relative mt-10 sm:mt-0 flex justify-end">
            <div className="relative w-full sm:w-[500px]">
              <Image
                src={dotsMount}
                alt="dots red"
                className="absolute -top-2 sm:-top-6 right-5 md:right-10 lg:right-15 w-[80px] sm:w-[120px] z-0"
              />

              <Image
                src={mountHeader}
                alt="mountain"
                className="w-full h-auto z-10 relative"
              />

              <Image
                src={arrow}
                alt="arrow"
                className="absolute top-18 sm:top-30 right-[220px] md:right-[320px] lg:right-[350px] w-[40px] sm:w-[60px] z-20"
              />

              <Image
                src={paperPlane}
                alt="paper plane"
                className="absolute bottom-8 md:bottom-10 lg:bottom-15 left-3 sm:left-5 w-[50px] sm:w-[65px] z-20"
              />

              <Image
                src={ballon}
                alt="balloon"
                className="absolute bottom-5 right-8 w-[45px] sm:w-[60px] z-20"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[26px] pt-20 pb-0 md:pb-20 px-10 md:px-30">
          <div className="rounded-2xl shadow-none max-w-[379px] h-[158px] flex items-center justify-center" style={{ backgroundColor: 'rgba(46,174,172,0.2)' }}>
            <div className="text-center">
              <Image
                src={homemid1}
                alt="homemid1 icon"
                width={40}
                height={40}
                className="mx-auto mb-2"
              />
              <p className="text-[#2EAEAC] px-1 text-[12px] md:text-[14px] lg:text-[16px]">FAST & SECURE DELIVERY</p>
              <p className="text-[#727272] px-1 text-[10px] md:text-[12px] lg:text-[14px] font-(family-name:--font-dm-sans)">Reliable shipping you can</p>
              <p className="text-[#727272] px-1 text-[10px] md:text-[12px] lg:text-[14px] font-(family-name:--font-dm-sans)">count on — always on time.</p></div>
          </div>
          <div className="rounded-2xl shadow-none max-w-[379px] h-[158px] flex items-center justify-center" style={{ backgroundColor: 'rgba(242, 83, 52, 0.2)' }}>
            <div className="text-center">
              <Image
                src={homemid2}
                alt="homemid2 icon"
                width={40}
                height={40}
                className="mx-auto mb-2"
              />
              <p className="text-[#F25334] px-1 text-[12px] md:text-[14px] lg:text-[16px]">TRUSTED</p>
              <p className="text-[#727272] px-1 text-[10px] md:text-[12px] lg:text-[14px] font-(family-name:--font-dm-sans)">Loved and recommended by</p>
              <p className="text-[#727272] px-1 text-[10px] md:text-[12px] lg:text-[14px] font-(family-name:--font-dm-sans)">parents all over Indonesia.</p></div>
          </div>
          <div className="rounded-2xl shadow-none max-w-[379px] h-[158px] flex items-center justify-center" style={{ backgroundColor: 'rgba(117, 193, 55, 0.2)' }}>
            <div className="text-center">
              <Image
                src={homemid3}
                alt="homemid3 icon"
                width={40}
                height={40}
                className="mx-auto mb-2"
              />
              <p className="text-[#75C137] px-1 text-[12px] md:text-[14px] lg:text-[16px]">CERTIFIED BY LAB</p>
              <p className="text-[#727272] px-1 text-[10px] md:text-[12px] lg:text-[14px] font-(family-name:--font-dm-sans)">Only the softest, safest fabrics</p>
              <p className="text-[#727272] px-1 text-[10px] md:text-[12px] lg:text-[14px] font-(family-name:--font-dm-sans)">for your little one.</p></div>
          </div>
        </div>

        <div className="px-2 sm:px-10 md:px-20 lg:px-30">
          <div className="w-full h-[200px] relative flex items-center justify-center">
            <label className="text-[#86CCCB] text-[20px] sm:text-[25px] md:text-[30px] text-center">Products Category</label>
            <Image
              src={midStar}
              alt="midstar icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 translate-x-1/2 z-0 w-[50px] sm:w-[100px] md:w-[150px] lg:w-[200px]"
            />
          </div>
          <div className="relative w-full h-full overflow-hidden bg-transparent">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentPage * 100}%)`,
                width: `${totalPages * 100}%`,
              }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => {
                const pageItems = midItems.slice(
                  pageIndex * itemsPerPage,
                  pageIndex * itemsPerPage + itemsPerPage
                );

                return (
                  <div
                    key={pageIndex}
                    className="w-full grid grid-cols-8 gap-2 flex-shrink-0 "
                  >
                    {pageItems.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col gap-5 text-center items-center cursor-pointer"
                      >
                        <Image src={item.src} alt={item.alt} className="w-[120px] md:w-[150px]" />
                        <label className="text-[#86CCCB] text-[10px] md:text-[15px] font-semibold cursor-pointer">{item.label}</label>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
            <button
              onClick={handlePrevious}
              disabled={currentPage === 0}
              className="absolute left-[6px] top-1/2 -translate-y-1/2 rounded-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed z-10"
            >
              <Image src={previousButton} alt="previous" width={60} height={60} className="rounded-full shadow-lg" />
            </button>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
              className="absolute right-[6px] top-1/2 -translate-y-1/2 rounded-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed z-10"
            >
              <Image src={nextButton} alt="next" width={60} height={60} className="rounded-full shadow-lg" />
            </button>
          </div>
        </div>
        <div className="w-full h-full">
          <div className="relative w-full">
            <Image
              src={hotProductbg}
              alt="hotproductbg icon"
              className="absolute inset-0 w-full h-full object-cover -z-10"
            />

            <div className="w-full py-15 flex flex-col gap-10 text-center justify-center items-center">
              <label className="text-[20px] sm:text-[25px] md:text-[30px] text-[#86CCCB]">
                New and Hot Product
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {hotProduct.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white flex flex-col gap-3 px-5 py-5 rounded-[12px] w-[230px] h-[350px]"
                  >
                    <div className="relative">
                      <Image src={item.src} alt={item.alt} className="w-full h-45" />
                      <div className="absolute bottom-2 left-2 text-white flex flex-col gap-1 text-[10px]">
                        <p className="bg-[#FFAA23] px-3 py-1 rounded-[5px]">New</p>
                        <p className="bg-[#F25334] px-3 py-1 rounded-[5px]">Hot</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 justify-center items-center">
                      <label className="text-[#86CCCB] text-[15px]">{item.label}</label>

                      <div className="flex flex-row gap-3">
                        <p className="text-[#7E8185] text-[13px]">{item.price}</p>
                        {item.oldPrice !== undefined && item.oldPrice !== '' && (
                          <p className="text-[#7E8185] text-[13px] line-through">
                            {item.oldPrice}
                          </p>
                        )}
                      </div>

                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Image
                            key={i}
                            src={startRating}
                            alt="Star Rating icon"
                            width={18}
                            height={18}
                            className={i < item.star ? '' : 'opacity-20'}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-row gap-2 text-[10px] text-[#7E8185] justify-center">
                      <button className="bg-[#FAF5F2] rounded-md px-4 py-2 cursor-pointer">
                        Check More
                      </button>
                      <button className="bg-[#FAF5F2] rounded-md px-4 py-2 cursor-pointer">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
        <div className="relative flex flex-col lg:flex-row items-center gap-10 sm:gap-16 lg:gap-20 px-5 sm:px-10 md:px-20 lg:px-40 pt-10 sm:pt-16 lg:pt-20">

          <div className="relative w-full max-w-[500px] h-[360px]">
            <Image
              src={bgBaby}
              alt="Background Baby"
              width={500}
              height={500}
              className="w-full h-auto"
            />
            <Image
              src={linebgBaby}
              alt="Line Background Baby"
              width={400}
              height={400}
              className="absolute -top-10 right-5 w-[70%] sm:w-[80%] md:w-[85%]"
            />
            <Image
              src={babyImage}
              alt="Baby Image"
              width={410}
              className="absolute top-12 right-10 w-[75%] sm:w-[80%]"
            />
            <Image
              src={letterb}
              alt="letterb Icon"
              width={60}
              height={60}
              className="absolute -top-10 left-0 w-[40px] sm:w-[50px]"
            />
          </div>

          <div className="flex flex-col gap-4 text-white mt-5 lg:mt-0 text-center lg:text-left max-w-[400px] -translate-y-15">
            <label className="text-[#86CCCB] text-[22px] sm:text-[26px] md:text-[30px] leading-tight">
              Supporting Moms, Caring for Little Ones
            </label>
            <button className="bg-[#CBADD2] px-6 py-3 rounded-[12px] text-[14px] cursor-pointer w-[200px] mx-auto lg:mx-0">
              See Our Product
            </button>
          </div>

          <Image
            src={lamp}
            alt="Lamp Icon"
            width={40}
            height={40}
            className="absolute right-50 top-0 hidden sm:block"
          />
          <Image
            src={pencil}
            alt="Pencil Icon"
            width={150}
            height={150}
            className="absolute right-5 top-28 hidden sm:block"
          />
        </div>

        <hr className="text-[#D2D2D2] my-10"></hr>
        <div
          ref={containerRef}
          className="flex flex-row gap-10 px-5 overflow-x-auto scroll-smooth scroll-auto-hide"
        >
          {feedbackCust.map((item, index) => (
            <div key={index} className="flex flex-row gap-5 w-[320px] sm:w-[580px] md:w-[600px] max-h-[200px] shrink-0">
              <div className="relative rounded-full w-[150px]">
                <Image
                  src={item.src}
                  alt="feedbackimg icon"
                  className="rounded-full"
                  style={{ boxShadow: "0px 4px 13px 0px rgba(0, 0, 0, 0.45)" }}
                />
              </div>
              <div className="flex flex-col gap-2 w-[1000px] max-h-[150px]">
                <div className="flex justify-between">
                  <div className="flex flex-row gap-3 items-center">
                    <label className="text-[13px] text-[#86CCCB]">{item.name}</label>
                    <p className="text-[10px] text-[#F25334] font-[var(--font-dm-sans)]">{item.date}</p>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Image
                        key={i}
                        src={startRating}
                        alt="Rating customer icon"
                        width={15}
                        height={15}
                        className={i < item.star ? '' : 'opacity-20'}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-[12px] text-[#7E8185] text-justify font-(family-name:--font-dm-sans)">{item.message}</p>
              </div>
            </div>
          ))}
        </div>
        <label className="text-[30px] text-[#86CCCB] text-center pt-10">Partnerts</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 px-4 sm:px-20 md:px-40 py-6">
          {partners.map((item, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={item.src}
                alt={item.alt}
                className="max-h-15 object-contain"
              />
            </div>
          ))}
        </div>
        <div className="w-full h-[300px] sm:h-[600px] md:h-[700px] relative">
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


          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative w-[300px] sm:w-[500px] md:w-[700px] lg:w-[850px] xl:w-[900px]">
              <Image
                src={homecontact6}
                alt="homecontact6"
                className="w-full h-auto"
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

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex flex-col gap-3 items-center text-center">
                  <div>
                    <p className="text-white text-[10px] sm:text-[15px] md:text-[25px]">
                      Do You Need Anything?
                    </p>
                    <p className="text-white text-[12px] sm:text-[15px] md:text-[25px] -translate-y-0 md:-translate-y-2">
                      Do Not Hesitate To Contact Us!
                    </p>
                  </div>
                  <button className="bg-[#CBADD2] px-5 sm:px-8 md:px-10 py-1 md:py-3 rounded-[8px] sm:rounded-[12px] text-[8px] sm:text-[10px] md:text-[14px] cursor-pointer w-[90px] sm:w-[180px] md:w-[220px]">
                    Click Here
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <label className="text-center text-[#FFAA23]" style={{ fontFamily: 'Schoolbell' }}>Latest Blog</label>
          <div className="text-[18px] md:text-[30px] text-[#86CCCB]">
            <p>Checkout our latest news</p>
            <p>updates & articles</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-4 sm:px-10 lg:px-50 xl:px-90 text-center pb-15">
          {checkoutList.map((item, idx) => (
            <div key={idx} className="relative w-[200px] h-[300px] justify-self-center">
              <svg
                className={`absolute inset-0 w-full h-full fill-current ${item.textColoring}`}
                viewBox="0 0 353 506"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M49.0572 34.2366C132.423 27.4776 190 -18.9235 273.815 8.69609C316.734 22.839 360.119 57.0509 340.489 129.11C323.028 193.311 377.906 439.571 338.275 449C318.156 453.771 300.961 450.202 251.118 454.292C237.387 455.428 221.534 460.009 203.001 470.006C58 548.216 9.75189 482.295 1.98876 424.795C0.193678 411.504 0.893074 193.576 3.6906 180.494C17.888 113.831 -35.2649 41.0714 49.0572 34.2366Z" fill="currentColor" fillOpacity="0.1" />
              </svg>

              <Image
                src={item.src}
                alt={item.alt}
                width={150}
                height={150}
                className="absolute top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[30px]"
              />

              <div className="flex flex-row">
                <p className={`text-white text-[10px] px-2 py-1 rounded-[12px] absolute bottom-32 left-3 ${item.backcoloring} `}>{item.category}</p>
                <p className={`font-(family-name:--font-dm-sans) text-[10px] absolute bottom-33 right-3 ${item.textColoring}`}>{item.date}</p>
              </div>
              <label className="absolute bottom-15 left-4 text-left text-[#86CCCB] text-[11px] h-[60px] w-[150px] -">{item.title}</label>
              <div className="absolute bottom-7 left-4 text-[11px] text-black font-semibold mt-auto font-(family-name:--font-dm-sans) cursor-pointer">
                Keep reading <span className="inline-block ml-1">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>)
}
