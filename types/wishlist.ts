import { Product } from "./product";

export interface WishlistItem {
  id: string;
  productId: string;
  title: string;
  price: number;
  image: string;
  size: string;
  addedAt: string;
}

export interface WishlistStore {
  items: WishlistItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  clearWishlist: () => void;
  isInWishlist: (productId: string) => boolean;
  moveToCart: (productId: string) => void;
}

export interface WishlistResponse {
  items: WishlistItem[];
  totalItems: number;
  userId: string;
}
