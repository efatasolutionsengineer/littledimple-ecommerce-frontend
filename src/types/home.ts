export interface ExploreLink {
  title: string;
  link: string;
}

export interface PaymentMethod {
  name: string;
  logo: string;
}

export interface CarouselItem {
  title: string;
  title_sub: string;
  button_1_title: string;
  button_1_link: string;
  button_2_title: string;
  button_2_link: string;
  images: string;
}

export interface ModalItem {
  image: string;
  title: string;
  description: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  modal: ModalItem[];
}

export interface AboutUs {
  media_link: string;
  title: string;
  description: string;
  button_link: string;
  button_title: string;
}

export interface Review {
  user_profile_picture: string;
  user_name: string;
  timestamp: string;
  score: string;
  description: string;
}

export interface CallToAction {
  title: string;
  button_link: string;
  button_title: string;
}

export interface HomeData {
  link_instagram: string;
  link_whatsapp: string;
  link_tokopedia: string;
  link_shopee: string;
  alamat: string;
  email: string;
  logo: string;
  favicon: string;
  no_telepon: string;
  explore: ExploreLink[];
  available_payment: PaymentMethod[];
  carousel: CarouselItem[];
  our_service: Service[];
  about_us: AboutUs;
  reviews: Review[];
  call_to_action: CallToAction;
}
