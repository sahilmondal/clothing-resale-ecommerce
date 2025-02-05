"use client";

import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import useWishlistStore from "@/store/useWishlistStore";
import { Product } from "@/types/product";
import Link from "next/link";

export default function WishlistPage() {
  const { items, removeItem, moveToCart } = useWishlistStore();

  if (items.length === 0) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Your Wishlist is Empty
        </h1>
        <p className="text-gray-600 mb-6">
          Save items you love to your wishlist
        </p>
        <Button asChild>
          <Link href="/products">Browse Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">My Wishlist</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden group"
          >
            <div className="relative aspect-square">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-200"
              />
            </div>

            <div className="p-4">
              <h3 className="font-medium text-gray-900 mb-1">{item.title}</h3>
              <p className="text-primary-600 font-medium mb-4">
                ₹{item.price.toLocaleString()}
              </p>

              <div className="flex gap-2">
                <Button
                  variant="primary"
                  size="sm"
                  className="flex-1"
                  onClick={() => moveToCart(item.productId)}
                >
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => removeItem(item.productId)}
                >
                  Remove
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
