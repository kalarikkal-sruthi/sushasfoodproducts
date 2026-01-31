// data/dummyProducts.ts
import { ProductSection } from '@/types/product';

export const dummyProductSections: ProductSection[] = [
  {
    id: 1,
    title: 'Essential',
    subtitle: 'Handpicked just for you',
    category: 'featured',
    products: [
      {
        id: 101,
        name: 'Essential Wood Pressed Coconut Oil',
        description: 'Wood-pressed  for maximum purity, retains natural nutrients and aroma for healthier cooking and skincare.',
        price: 299.99,
        category: 'Electronics',
        image: '/assets/products/1.png',
        rating: 4.5,
        stock: 25,
        // discount: 15,
        featured: true
      },
      {
        id: 102,
        name: 'Essential Steel Pressed Coconut oil',
        description: 'Pure, Steel-pressed coconut oil extracted through traditional steel pressing for maximum purity and natural goodness.',
        price: 510.00,
        category: 'Fashion',
        image: '/assets/products/2.png',
        rating: 4.2,
        stock: 50,
        featured: true
      },
      {
        id: 103,
        name: 'Virigin Hot Processed Coconut Oil',
        description: 'Virigin Hot Processed from fresh coconut meat, retaining natural aroma and nutrients. Ideal for cooking, hair care, and skin moisturizing.',
        price: 300.00,
        category: 'Electronics',
        image: '/assets/products/3.png',
        rating: 4.7,
        stock: 15,
        // discount: 20,
        featured: true
      },
      {
        id: 104,
        name: 'Sesame oil',
        description: 'Set of 4 handcrafted ceramic mugs with modern design',
        price: 400.00,
        category: 'Home & Kitchen',
        image: '/assets/products/5.png',
        rating: 4.4,
        stock: 40,
        featured: true
      },
       {
        id: 105,
        name: 'Virigin Cold Processed Coconut Oil',
        description: 'Set of 4 handcrafted ceramic mugs with modern design',
        price: 425.00,
        category: 'Home & Kitchen',
        image: '/assets/products/5.png',
        rating: 4.4,
        stock: 40,
        featured: true
      }

    ]
  },
  {
    id: 2,
    title: 'Best Sellers',
    subtitle: 'Most popular items this week',
    category: 'bestsellers',
    products: [
      {
        id: 201,
        name: 'Yoga Mat Premium',
        description: 'Non-slip, extra thick yoga mat with carrying strap',
        price: 59.99,
        category: 'Fitness',
        image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&h=400&fit=crop',
        rating: 4.6,
        stock: 30,
        discount: 10,
        featured: false
      },
      {
        id: 202,
        name: 'Bluetooth Portable Speaker',
        description: 'Waterproof speaker with 360° sound and 12-hour battery',
        price: 89.99,
        category: 'Electronics',
        image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=400&fit=crop',
        rating: 4.3,
        stock: 45,
        featured: false
      },
      {
        id: 203,
        name: 'Stainless Steel Water Bottle',
        description: 'Double-walled insulation, keeps drinks cold for 24 hours',
        price: 29.99,
        category: 'Home & Kitchen',
        image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400&h=400&fit=crop',
        rating: 4.8,
        stock: 60,
        featured: false
      },
      {
        id: 204,
        name: 'Leather Laptop Bag',
        description: 'Genuine leather, fits up to 15.6" laptops',
        price: 129.99,
        category: 'Fashion',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
        rating: 4.5,
        stock: 20,
        discount: 25,
        featured: false
      }
    ]
  },
  {
    id: 3,
    title: 'New Arrivals',
    subtitle: 'Freshly added to our collection',
    category: 'new-arrivals',
    products: [
      {
        id: 301,
        name: 'Smart Home Security Camera',
        description: '1080p HD, motion detection, and night vision',
        price: 79.99,
        category: 'Electronics',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
        rating: 4.4,
        stock: 35,
        featured: false
      },
      {
        id: 302,
        name: 'Aromatic Soy Candle Set',
        description: 'Set of 3 natural soy candles with lavender scent',
        price: 39.99,
        category: 'Home & Kitchen',
        image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=400&fit=crop',
        rating: 4.1,
        stock: 55,
        discount: 15,
        featured: false
      },
      {
        id: 303,
        name: 'Fitness Tracker Band',
        description: 'Track steps, sleep, and calories with smartphone sync',
        price: 49.99,
        category: 'Fitness',
        image: 'https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=400&h=400&fit=crop',
        rating: 4.0,
        stock: 40,
        featured: false
      },
      {
        id: 304,
        name: 'Wireless Charging Pad',
        description: 'Fast charging compatible with all Qi-enabled devices',
        price: 24.99,
        category: 'Electronics',
        image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&h=400&fit=crop',
        rating: 4.3,
        stock: 75,
        featured: false
      }
    ]
  }
];