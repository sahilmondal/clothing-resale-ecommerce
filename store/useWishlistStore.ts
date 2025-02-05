"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { WishlistItem, WishlistStore } from "../types/wishlist";
import { Product } from "../types/product";
import useCartStore from "./useCartStore";

const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product: Product) => {
        set((state) => {
          if (state.items.some((item) => item.productId === product.id)) {
            return state;
          }

          const newItem: WishlistItem = {
            id: crypto.randomUUID(),
            productId: product.id,
            title: product.title,
            price: product.price,
            image: product.images[0],
            size: product.size,
            addedAt: new Date().toISOString(),
          };

          return { items: [...state.items, newItem] };
        });
      },

      removeItem: (productId: string) => {
        set((state) => ({
          items: state.items.filter((item) => item.productId !== productId),
        }));
      },

      clearWishlist: () => {
        set({ items: [] });
      },

      isInWishlist: (productId: string) => {
        const state = get();
        return state.items.some((item) => item.productId === productId);
      },

      moveToCart: (productId: string) => {
        const state = get();
        const item = state.items.find((item) => item.productId === productId);

        if (item) {
          // Create a mock product object from wishlist item
          const product: Product = {
            id: item.productId,
            title: item.title,
            price: item.price,
            images: [item.image],
            size: item.size,
            // Add required fields with default values
            description: "",
            category: "women-clothing",
            condition: "good",
            brand: "",
            color: "",
            sellerId: "",
            status: "active",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          };

          useCartStore.getState().addItem(product, 1);
          get().removeItem(productId);
        }
      },
    }),
    {
      name: "wishlist-storage",
    }
  )
);

export default useWishlistStore;
