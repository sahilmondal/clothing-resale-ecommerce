export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: ProductCategory;
  condition: ProductCondition;
  size: string;
  brand: string;
  color: string;
  sellerId: string;
  status: ProductStatus;
  createdAt: string;
  updatedAt: string;
}

export type ProductCategory =
  | "women-clothing"
  | "men-clothing"
  | "kids-clothing"
  | "women-shoes"
  | "men-shoes"
  | "kids-shoes"
  | "accessories"
  | "bags"
  | "jewelry";

export type ProductCondition =
  | "new"
  | "like-new"
  | "excellent"
  | "good"
  | "fair";

export type ProductStatus =
  | "draft"
  | "pending"
  | "active"
  | "sold"
  | "inactive"
  | "rejected";

export interface ProductFilter {
  category?: ProductCategory;
  condition?: ProductCondition;
  minPrice?: number;
  maxPrice?: number;
  size?: string;
  brand?: string;
  color?: string;
  sellerId?: string;
  status?: ProductStatus;
}

export interface CreateProductData {
  title: string;
  description: string;
  price: number;
  category: ProductCategory;
  condition: ProductCondition;
  size: string;
  brand: string;
  color: string;
  images: File[];
}

export interface UpdateProductData extends Partial<CreateProductData> {
  id: string;
  status?: ProductStatus;
}
