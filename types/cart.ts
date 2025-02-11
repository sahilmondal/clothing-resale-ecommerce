import { Product } from "./product";

export interface CartItem {
  id: string;
  description?: string;
  productId: string;
  title: string;
  price: number;
  image: string;
  images: string[];
  size: string;
  quantity: number;
}

export interface CartStore {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export interface CartSummary {
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
}

export interface CheckoutData {
  items: CartItem[];
  summary: CartSummary;
  shippingAddress: ShippingAddress;
  paymentMethod: string;
}

export interface ShippingAddress {
  fullName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  phone: string;
}

export interface OrderStatus {
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  updatedAt: string;
  description: string;
}
