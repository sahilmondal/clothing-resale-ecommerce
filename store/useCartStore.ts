import { Product } from "@/types/product";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem extends Product {
  id: string;
  title: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
}

interface CartStore {
  carts: Record<string, CartItem[]>; // Map of userId (phone) to cart items
  currentUserId: string | null;
  setCurrentUser: (userId: string) => void;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalAmount: () => number;
}

const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      carts: {},
      currentUserId: null,
      setCurrentUser: (userId) => set({ currentUserId: userId }),
      addItem: (newItem) =>
        set((state) => {
          if (!state.currentUserId) return state;

          const userCart = state.carts[state.currentUserId] || [];
          const existingItem = userCart.find(
            (item) => item.id === newItem.id && item.size === newItem.size
          );

          if (existingItem) {
            return {
              carts: {
                ...state.carts,
                [state.currentUserId]: userCart.map((item) =>
                  item.id === newItem.id && item.size === newItem.size
                    ? {
                        ...item,
                        quantity: item.quantity + (newItem.quantity || 1),
                      }
                    : item
                ),
              },
            };
          }

          return {
            carts: {
              ...state.carts,
              [state.currentUserId]: [
                ...userCart,
                { ...newItem, quantity: newItem.quantity || 1 },
              ],
            },
          };
        }),
      removeItem: (id) =>
        set((state) => {
          if (!state.currentUserId) return state;

          return {
            carts: {
              ...state.carts,
              [state.currentUserId]: (
                state.carts[state.currentUserId] || []
              ).filter((item) => item.id !== id),
            },
          };
        }),
      updateQuantity: (id, quantity) =>
        set((state) => {
          if (!state.currentUserId) return state;

          return {
            carts: {
              ...state.carts,
              [state.currentUserId]: (
                state.carts[state.currentUserId] || []
              ).map((item) =>
                item.id === id
                  ? { ...item, quantity: Math.max(1, quantity) }
                  : item
              ),
            },
          };
        }),
      clearCart: () =>
        set((state) => {
          if (!state.currentUserId) return state;

          return {
            carts: {
              ...state.carts,
              [state.currentUserId]: [],
            },
          };
        }),
      totalItems: () => {
        const state = get();
        if (!state.currentUserId) return 0;

        return (state.carts[state.currentUserId] || []).reduce(
          (total, item) => total + item.quantity,
          0
        );
      },
      totalAmount: () => {
        const state = get();
        if (!state.currentUserId) return 0;

        return (state.carts[state.currentUserId] || []).reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },
    }),
    {
      name: "cart-storage",
    }
  )
);

export default useCartStore;
