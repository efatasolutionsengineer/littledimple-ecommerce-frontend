export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export interface DimpleData {
  introduction_title: string;
  introduction_description: string;
  introduction_media_link: string;
  benefit_title: string;
  benefit_object: Benefit[];
  howtojoin_title: string;
  howtojoin_description: string;
  howtojoin_button_link: string;
  howtojoin_button_title: string;
  activities_gallery: { media_link: string }[];
}
