export type OrderStatus =
  | "pending"
  | "confirmed"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled";

export interface OrderItem {
  id: string;
  productId: string;
  title: string;
  price: number;
  quantity: number;
  size: string;
  image: string;
  sellerId: string;
}

export interface ShippingAddress {
  fullName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  totalAmount: number;
  shippingAddress: ShippingAddress;
  status: OrderStatus;
  paymentId?: string;
  paymentStatus: "pending" | "completed" | "failed";
  trackingNumber?: string;
  sellerNotes?: string;
  buyerNotes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface OrderFilter {
  userId?: string;
  sellerId?: string;
  status?: OrderStatus;
  startDate?: string;
  endDate?: string;
}

export interface OrderSummary {
  totalOrders: number;
  totalRevenue: number;
  averageOrderValue: number;
  ordersByStatus: Record<OrderStatus, number>;
}

export interface OrderUpdateInput {
  status?: OrderStatus;
  trackingNumber?: string;
  sellerNotes?: string;
}

export interface OrderStore {
  orders: Order[];
  isLoading: boolean;
  error: string | null;
  fetchOrders: (filter?: OrderFilter) => Promise<void>;
  getOrder: (orderId: string) => Order | undefined;
  updateOrder: (orderId: string, updates: OrderUpdateInput) => Promise<void>;
  cancelOrder: (orderId: string) => Promise<void>;
  getOrderSummary: (filter?: OrderFilter) => OrderSummary;
}
