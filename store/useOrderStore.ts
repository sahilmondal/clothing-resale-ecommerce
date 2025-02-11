import { create } from "zustand";

export interface OrderItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  totalAmount: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  createdAt: string;
  updatedAt: string;
}

interface OrderStore {
  orders: Order[];
  isLoading: boolean;
  fetchOrders: (params: { userId: string }) => Promise<void>;
}

// Demo data - using phone numbers as userId
const demoOrders: Order[] = [
  {
    id: "1234",
    userId: "1234", // Changed from email to phone
    items: [
      {
        id: "p1",
        title: "Blue Denim Jacket",
        price: 2999,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=300",
      },
    ],
    totalAmount: 2999,
    status: "delivered",
    createdAt: "2024-02-01T10:00:00Z",
    updatedAt: "2024-02-01T10:00:00Z",
  },
  {
    id: "1235",
    userId: "9831737396", // Changed from email to phone
    items: [
      {
        id: "p2",
        title: "Vintage Leather Bag",
        price: 1499,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=300",
      },
    ],
    totalAmount: 1499,
    status: "shipped",
    createdAt: "2024-02-03T15:30:00Z",
    updatedAt: "2024-02-03T15:30:00Z",
  },
  {
    id: "1236",
    userId: "9831737396", // Changed from email to phone
    items: [
      {
        id: "p3",
        title: "White Sneakers",
        price: 3499,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300",
      },
      {
        id: "p4",
        title: "Cotton T-Shirt",
        price: 899,
        quantity: 2,
        image:
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300",
      },
    ],
    totalAmount: 5297,
    status: "processing",
    createdAt: "2024-02-05T09:15:00Z",
    updatedAt: "2024-02-05T09:15:00Z",
  },
];

const useOrderStore = create<OrderStore>((set) => ({
  orders: [],
  isLoading: false,
  fetchOrders: async (params) => {
    set({ isLoading: true });
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      set({
        orders: demoOrders.filter((order) => order.userId === "1234"),
        isLoading: false,
      });
    } catch (error) {
      console.error("Error fetching orders:", error);
      set({ isLoading: false });
    }
  },
}));

export default useOrderStore;
