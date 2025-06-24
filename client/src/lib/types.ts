export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  imageUrl: string;
  rating: string;
  inStock: boolean;
}

export interface VisualSearchResult {
  searchId: number;
  results: Product[];
  message: string;
}

export type CategoryType = 'all' | 'fashion' | 'home' | 'electronics' | 'lifestyle';

export interface CategoryInfo {
  id: CategoryType;
  name: string;
  icon: string;
  color: string;
}
