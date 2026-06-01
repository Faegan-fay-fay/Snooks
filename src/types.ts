export interface Color {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'Apparel' | 'Footwear' | 'Accessories';
  subCategory: string;
  price: number;
  rating: number;
  reviewsCount: number;
  description: string;
  longDescription: string;
  images: string[];
  sizes: string[];
  colors: Color[];
  details: string[];
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  inStock: boolean;
  onSale?: boolean;
  originalPrice?: number;
}

export interface CartItem {
  id: string; // ProductId + "-" + selectedSize + "-" + selectedColor.name
  product: Product;
  selectedSize: string;
  selectedColor: Color;
  quantity: number;
}
