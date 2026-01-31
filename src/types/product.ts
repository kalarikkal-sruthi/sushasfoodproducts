// types/product.ts
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  stock: number;
  discount?: number;
  featured: boolean;
}

export interface ProductSection {
  id: number;
  title: string;
  subtitle?: string;
  products: Product[];
  category: string;
}