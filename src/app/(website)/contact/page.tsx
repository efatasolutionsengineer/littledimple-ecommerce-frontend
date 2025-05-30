'use client';
import { useState } from "react";
import { SearchProduct } from "@/features/product/components/search.product";
import { submitContactForm, ContactFormData } from '@/app/api/contact/contact-post';
import { toast } from 'sonner';
import Image from "next/image";
import Gelombang from "@/assets/images/gelombang.png"
import electroniccity from "@/assets/images/contact_us/electroniccity.png"
import lila from "@/assets/images/contact_us/lila.png"
import kemchick from "@/assets/images/contact_us/kemchick.png"
import suzana from "@/assets/images/contact_us/suzana.png"
import babywise from "@/assets/images/contact_us/babywise.png"
import qualis from "@/assets/images/contact_us/qualis.png"
import whatsap from '../../../../public/whatsapp.svg';
import instagram from '../../../../public/instagram.svg';
import locationpin from '../../../../public/location-pin 1.svg';
import email from '../../../../public/email.svg';
import maps from '../../../../public/Map.svg';

const partners = [
  { src: electroniccity, alt: "Electronic City" },
  { src: babywise, alt: "Babywise" },
  { src: kemchick, alt: "Kemchick" },
  { src: lila, alt: "Lila" },
  { src: qualis, alt: "Qualis" },
  { src: suzana, alt: "Suzana" },
];

const addressLoc = [
  { address: "Cilandak - Jakarta Selatan", name: "little Dimple 12", addressName: "JL.Serong 14 cipayung cilandak jakarta selatan", phone: "+62 989 778 156", website: "www.dimple.com", location: "" },
  { address: "Cilandak - Jakarta Selatan", name: "little Dimple 12", addressName: "JL.Serong 14 cipayung cilandak jakarta selatan", phone: "+62 989 778 156", website: "www.dimple.com", location: "" },
  { address: "Cilandak - Jakarta Selatan", name: "little Dimple 12", addressName: "JL.Serong 14 cipayung cilandak jakarta selatan", phone: "+62 989 778 156", website: "www.dimple.com", location: "" },
  { address: "Cilandak - Jakarta Selatan", name: "little Dimple 12", addressName: "JL.Serong 14 cipayung cilandak jakarta selatan", phone: "+62 989 778 156", website: "www.dimple.com", location: "" },
  { address: "Cilandak - Jakarta Selatan", name: "little Dimple 12", addressName: "JL.Serong 14 cipayung cilandak jakarta selatan", phone: "+62 989 778 156", website: "www.dimple.com", location: "" },
  { address: "Cilandak - Jakarta Selatan", name: "little Dimple 12", addressName: "JL.Serong 14 cipayung cilandak jakarta selatan", phone: "+62 989 778 156", website: "www.dimple.com", location: "" },
]

export default function ContactUs() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    complain: '',
    tradein: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);

    try {
      await submitContactForm(formData);

      toast.success('Message sent successfully!');

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        complain: '',
        tradein: '',
        message: '',
      });
    } catch {
      toast.error('Submission failed, please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="h-[386px] bg-(--hijau-tua) relative flex items-center justify-center flex-col p-5 text-white">
        <h3 className="text-[50px]">Contact Us</h3>
        <p className="text-[20px] font-(family-name:--font-dm-sans)">Home / Contact</p>
        <Image
          className="absolute inset-x-0 bottom-0"
          src={Gelombang}
          alt="decoration"
        />
      </div>
      <div className="flex flex-col gap-10 pt-10 text-[#F25334]">
        <div className="text-center">
          <label className="text-center" style={{ fontFamily: 'Schoolbell' }}>Contact Us</label>
          <div className="text-[30px] text-[#86CCCB]">
            <p>Feel free to write us</p>
            <p>anytime</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5 xl:px-100 lg:px-80 md:px-30 sm:px-20 px-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="border-0 bg-[#FAF5F2] shadow-md rounded-md p-3 text-[#7E8185] font-(family-name:--font-dm-sans) focus:outline focus:outline-1 focus:outline-[#7AB6B2]"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="border-0 bg-[#FAF5F2] shadow-md rounded-md p-3 text-[#7E8185] font-(family-name:--font-dm-sans) focus:outline focus:outline-1 focus:outline-[#7AB6B2]"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            inputMode="numeric"
            pattern="[0-9]{6,15}"
            maxLength={15}
            minLength={6}
            className="border-0 bg-[#FAF5F2] shadow-md rounded-md p-3 text-[#7E8185] font-(family-name:--font-dm-sans) focus:outline focus:outline-1 focus:outline-[#7AB6B2]"
          />
          <input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="border-0 bg-[#FAF5F2] shadow-md rounded-md p-3 text-[#7E8185] font-(family-name:--font-dm-sans) focus:outline focus:outline-1 focus:outline-[#7AB6B2]"
          />
          <input
            name="complain"
            value={formData.complain}
            onChange={handleChange}
            placeholder="Complain"
            className="border-0 bg-[#FAF5F2] shadow-md rounded-md p-3 text-[#7E8185] font-(family-name:--font-dm-sans) focus:outline focus:outline-1 focus:outline-[#7AB6B2]"
          />
          <input
            name="tradein"
            value={formData.tradein}
            onChange={handleChange}
            placeholder="Information Tradein"
            className="border-0 bg-[#FAF5F2] shadow-md rounded-md p-3 text-[#7E8185] font-(family-name:--font-dm-sans) focus:outline focus:outline-1 focus:outline-[#7AB6B2]"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write a Message"
            className="border-0 bg-[#FAF5F2] shadow-md rounded-md p-3 text-[#7E8185] h-[200px] col-span-1 md:col-span-2 font-(family-name:--font-dm-sans) focus:outline focus:outline-1 focus:outline-[#7AB6B2]" />

          <button
            type="submit"
            disabled={loading}
            className="bg-[#7AB6B2] w-[200px] text-white rounded-lg p-3 col-span-1 md:col-span-2 justify-self-center cursor-pointer"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
          {submitted && <p className="text-green-500 text-center col-span-2">Message sent successfully!</p>}
        </form>
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
        <div className="flex flex-col gap-10 pt-25 xl:px-100 lg:px-50 md:px-30 sm:px-20 px-4">
          <div className="text-center">
            <label className="text-center" style={{ fontFamily: 'Schoolbell' }}>Product Store</label>
            <div className="text-[30px] text-[#86CCCB]">
              <p>Find our product in our</p>
              <p>partner store?</p>
            </div>
          </div>
          <SearchProduct />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {addressLoc.map((item, index) => (
              <div key={index} className="flex flex-col gap-3 border border-[0.5px] border-[#DDDDDD] rounded-lg p-3">
                <div className="flex flex-col gap-1">
                  <p className="text-[#000000]">{item.address}</p>
                  <p className="text-[#36716D]">{item.name}</p>
                </div>
                <hr className="text-[#DDDDDD]"></hr>
                <div className="flex flex-col gap-3 font-(family-name:--font-dm-sans) text-[#000000] text-[12px]">
                  <p>{item.addressName}</p>
                  <p>{item.phone}</p>
                  <p>{item.website}</p>
                </div>
                <button
                  className="bg-[#CBADD2] h-10 text-white text-[10px] rounded-lg p-2 justify-self-center cursor-pointer">Location</button>
              </div>
            ))}
          </div>
        </div>
        <div className="relative pb-20 md:pb-58">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-8 gap-5 pt-40 px-4 sm:px-20 md:px-50 relative z-20">
            <div className="flex flex-col gap-4 bg-[#FFFFFF] items-center justify-center col-span-2 rounded-xl p-5" style={{ boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.07)" }}>
              <div><Image src={whatsap} alt="whatsapp" width={30} height={30} /></div>
              <div className="text-center">
                <p className="text-[#7E8185] font-(family-name:--font-dm-sans)">Have any question?</p>
                <p className="text-[#86CCCB] text-[15px]">(+62) 821 2266 8696</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-[#FFFFFF] items-center justify-center col-span-2 rounded-xl p-5" style={{ boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.07)" }}>
              <div>
                <Image src={email} alt="whatsapp" width={25} height={25} />
              </div>
              <div className="text-center">
                <p className="text-[#86CCCB]  font-(family-name:--font-dm-sans)">Send Email</p>
                <p className="text-[#86CCCB] text-[15px]">littledimpleid@gmail.com</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-[#FFFFFF] items-center justify-center col-span-2 rounded-xl p-5" style={{ boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.07)" }}>
              <div>
                <Image src={locationpin} alt="whatsapp" width={25} height={25} />
              </div>
              <div className="text-center">
                <p className="text-[#7E8185] font-(family-name:--font-dm-sans)">Visit Anytime</p>
                <p className="text-[#86CCCB] text-[15px]">Ruko Sunter Permai Blok K2 D7, Sunter Jaya, Tanjung Priok, Jakarta Utara</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-[#FFFFFF] items-center justify-center col-span-2 rounded-xl p-5" style={{ boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.07)" }}>
              <div>
                <Image src={instagram} alt="whatsapp" width={25} height={25} />
              </div>
              <div className="text-center">
                <p className="text-[#7E8185]  font-(family-name:--font-dm-sans)">Instagram</p>
                <p className="text-[#86CCCB] text-[15px]">dimplebaby</p>
              </div>
            </div>
          </div>
          <div className="absolute w-full z-0 -translate-y-[40px] sm:-translate-y-[30px] md:-translate-y-[35px]">
            <Image
              src={maps}
              alt="maps"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}