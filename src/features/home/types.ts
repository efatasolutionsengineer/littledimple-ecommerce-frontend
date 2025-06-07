export type Home = {
    link_instagram: string;
    link_whatsapp: string;
    link_tokopedia: string;
    link_shopee: string;
    alamat: string;
    email: string;
    logo: string;
    favicon: string;
    no_telepon: string;
    explore: HomeExplore[];
    available_payment: HomeAvailablePayment[];
    carousel: HomeCarousel[];
    our_service: HomeOurService[];
    about_us: HomeAboutUs;
    reviews: HomeReviews[];
    call_to_action: HomeCallToAction;
}

export type HomeExplore = {
    title: string;
    link: string;
    sort_order: number;
}

export type HomeAvailablePayment = {
    name: string;
    logo: string;
    sort_order: number;
}

export type HomeCarousel = {
    title: string;
    title_sub: string;
    button_1_title: string;
    button_1_link: string;
    button_2_title: string;
    button_2_link: string;
    images: string;
    sort_order: number;
    status: string;
}

export type HomeOurService = {
    icon: string;
    title: string;
    description: string;
    modals: {
        description: string;
        media_image_link: string;
    }[];
}

export type HomeAboutUs = {
    media_link: string;
    title: string;
    description: string;
    button_link: string;
    button_title: string;
}

export type HomeReviews = {
    user_profile_picture?: string;
    user_name: string;
    timestamp: string;
    score: string;
    description: string;
}

export type HomeCallToAction = {
    title?: string;
    button_link?: string;
    button_title?: string;
}