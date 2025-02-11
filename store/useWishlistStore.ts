import { Product } from "@/types/product";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface WishlistItem extends Product {
  id: string;
  title: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
}

interface WishlistStore {
  wishlists: Record<string, WishlistItem[]>; // Map of userId (phone) to wishlist items
  currentUserId: string | null;
  setCurrentUser: (userId: string) => void;
  addItem: (item: WishlistItem) => void;
  removeItem: (id: string) => void;
  clearWishlist: () => void;
  isInWishlist: (id: string) => boolean; // Add this function
}

// Demo data with phone number as key
const demoWishlists: Record<string, WishlistItem[]> = {
  // "9831737396": [
  //   {
  //     id: "w1",
  //     title: "Premium Wool Coat",
  //     price: 5999,
  //     image:
  //       "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=300",
  //     size: "M",
  //   },
  //   {
  //     id: "w2",
  //     title: "Designer Silk Scarf",
  //     price: 1299,
  //     image:
  //       "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?w=300",
  //     size: "One Size",
  //   },
  //   {
  //     id: "w3",
  //     title: "Leather Chelsea Boots",
  //     price: 4499,
  //     image:
  //       "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=300",
  //     size: "42",
  //   },
  // ],
};

const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      wishlists: demoWishlists,
      currentUserId: null,
      setCurrentUser: (userId) => set({ currentUserId: userId }),
      addItem: (item) =>
        set((state) => {
          if (!state.currentUserId) return state;

          const userWishlist = state.wishlists[state.currentUserId] || [];
          if (userWishlist.some((i) => i.id === item.id)) {
            return state;
          }

          return {
            wishlists: {
              ...state.wishlists,
              [state.currentUserId]: [...userWishlist, item],
            },
          };
        }),
      removeItem: (id) =>
        set((state) => {
          if (!state.currentUserId) return state;

          return {
            wishlists: {
              ...state.wishlists,
              [state.currentUserId]:
                state.wishlists[state.currentUserId]?.filter(
                  (item) => item.id !== id
                ) || [],
            },
          };
        }),
      clearWishlist: () =>
        set((state) => {
          if (!state.currentUserId) return state;

          return {
            wishlists: {
              ...state.wishlists,
              [state.currentUserId]: [],
            },
          };
        }),
      isInWishlist: (id) => {
        const state = get();
        if (!state.currentUserId) return false;

        return (
          state.wishlists[state.currentUserId]?.some(
            (item) => item.id === id
          ) || false
        );
      },
    }),
    {
      name: "wishlist-storage",
    }
  )
);

export default useWishlistStore;
