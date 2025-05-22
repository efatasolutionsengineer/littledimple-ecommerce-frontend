import { NextResponse } from 'next/server';

const feedbackCust = [
  { src: '/feedbackImg.png', name: "Dylan Neranda", date: "20 Mar, 2023 . 4:00 Pm", star: 5, message: "Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor. Nam vel lacus eu nisl bibendum accumsan" },
  { src: '/feedbackImg.png', name: "Dylan Neranda", date: "20 Mar, 2023 . 4:00 Pm", star: 5, message: "Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor. Nam vel lacus eu nisl bibendum accumsan" },
  { src: '/feedbackImg.png', name: "Dylan Neranda", date: "20 Mar, 2023 . 4:00 Pm", star: 3, message: "Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor. Nam vel lacus eu nisl bibendum accumsan" },
  { src: '/feedbackImg.png', name: "Dylan Neranda", date: "20 Mar, 2023 . 4:00 Pm", star: 2, message: "Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor. Nam vel lacus eu nisl bibendum accumsan" },
  { src: '/feedbackImg.png', name: "Dylan Neranda", date: "20 Mar, 2023 . 4:00 Pm", star: 4, message: "Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor. Nam vel lacus eu nisl bibendum accumsan" },
]

export async function GET() {
  const response = {
    link_instagram: "https://instagram.com/littledimple",
    link_whatsapp: "https://wa.me/6281234567890",
    link_tokopedia: "https://tokopedia.com/littledimple",
    link_shopee: "https://shopee.co.id/littledimple",
    alamat: "Jl. Sudirman No. 123, Jakarta Pusat, Indonesia",
    email: "contact@littledimple.com",
    logo: "/logo.png",
    favicon: "/favicon.ico",
    no_telepon: "+62 812-3456-7890",
    explore: [
      { title: "products", link: "/products" },
      { title: "blog", link: "/blog" },
      { title: "contact us", link: "/contact" }
    ],
    available_payment: [
      { name: "BCA", logo: "/payment/bca.png" },
      { name: "BRI", logo: "/payment/bri.png" },
      { name: "Mandiri", logo: "/payment/mandiri.png" },
      { name: "BNI", logo: "/payment/bni.png" },
      { name: "Permata", logo: "/payment/permata.png" },
      { name: "Gopay", logo: "/payment/gopay.png" }
    ],
    carousel: [
      {
        title: "Little Dimple - Your Baby's Best Friend",
        title_sub: "Quality Products for Your Little One",
        button_1_title: "Shop Now",
        button_1_link: "/products",
        button_2_title: "Learn More",
        button_2_link: "/about",
        images: "/carousel/main.jpg"
      }
    ],
    our_service: [
      {
        icon: "/icons/shipping.png",
        title: "Fast Shipping",
        description: "Free shipping for orders above Rp 500.000",
        modal: [
          { image: "/service/shipping1.jpg", title: "Nationwide Delivery", description: "We deliver to all major cities in Indonesia" },
          { image: "/service/shipping2.jpg", title: "International Shipping", description: "Available for selected countries" }
        ]
      }
    ],
    about_us: {
      media_link: "/about-video.mp4",
      title: "About Little Dimple",
      description: "Little Dimple is dedicated to providing high-quality baby products that make parenting easier and more enjoyable. Our products are designed with love and care for your little ones.",
      button_link: "/about",
      button_title: "Learn More About Us"
    },
    reviews: feedbackCust.map(review => ({
      user_profile_picture: review.src,
      user_name: review.name,
      timestamp: review.date,
      score: review.star,
      description: review.message
    })),
    call_to_action: {
      title: "Join Our Community",
      button_link: "/register",
      button_title: "Sign Up Now"
    }
  };

  return NextResponse.json(response);
}

