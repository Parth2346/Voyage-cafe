export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  subCategory?: string;
  priceVeg?: number;
  priceNonVeg?: number;
  tags?: string[];
  subtext?: string;
}

export interface FeaturedSignature {
  id: string;
  name: string;
  price: number;
  description: string;
  tag: string;
  image: string;
  gridSpan?: string; // e.g. "md:col-span-2 md:row-span-2"
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
  category?: string;
}

export interface Reservation {
  name: string;
  email: string;
  phone: string;
  guests: string;
  date: string;
  time: string;
  requests?: string;
}
