import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  sale_price: number | null;
  images: string[];
  category: {
    id: number;
    name: string;
    slug: string;
  };
  rating: number;
  review_count: number;
  in_stock: boolean;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  product_count: number;
}

export interface HomePageData {
  featured_products: Product[];
  categories: Category[];
  testimonials: Testimonial[];
}

export interface Testimonial {
  id: number;
  name: string;
  comment: string;
  rating: number;
  avatar: string | null;
}

export const fetchHomePageData = async (): Promise<HomePageData> => {
  try {
    const response = await api.get('/home');
    return response.data;
  } catch (error) {
    console.error('Error fetching home page data:', error);
    return {
      featured_products: [],
      categories: [],
      testimonials: [],
    };
  }
};

export const fetchFeaturedProducts = async (): Promise<Product[]> => {
  try {
    const response = await api.get('/products/featured');
    return response.data;
  } catch (error) {
    console.error('Error fetching featured products:', error);
    return [];
  }
};

export const fetchCategories = async (): Promise<Category[]> => {
  try {
    const response = await api.get('/categories');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};