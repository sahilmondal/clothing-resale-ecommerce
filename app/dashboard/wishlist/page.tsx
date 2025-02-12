"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { useAuth } from "@/hooks/useAuth";
import useWishlistStore from "@/store/useWishlistStore";
import useCartStore, { CartItem } from "@/store/useCartStore";
import { Button } from "@/components/atoms/Button";

export default function WishlistPage() {
  const { user } = useAuth();
  const { wishlists, currentUserId, setCurrentUser, removeItem } =
    useWishlistStore();
  const { addItem: addToCart } = useCartStore();

  useEffect(() => {
    if (user) {
      setCurrentUser(user.phone);
    }
  }, [user, setCurrentUser]);

  const items = currentUserId ? wishlists[currentUserId] || [] : [];

  const handleMoveToCart = (product: CartItem) => {
    addToCart(product);
    removeItem(product.id);
  };

  if (!items.length) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">My Wishlist</h1>
        <div className="py-12">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Your wishlist is empty
          </h3>
          <p className="text-gray-500 mb-4">
            Save items you&apos;d like to buy later
          </p>
          <Button asChild>
            <Link href="/products">Browse Products</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">My Wishlist</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <Link href={`/products/${product.id}`}>
              <div className="relative aspect-square">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
            </Link>

            <div className="p-4">
              <Link
                href={`/products/${product.id}`}
                className="text-lg font-medium text-gray-900 hover:text-primary-600"
              >
                {product.title}
              </Link>

              <p className="text-sm text-gray-500 mt-1">Size: {product.size}</p>

              <p className="text-lg font-bold text-primary-600 mt-2">
                ₹{product.price.toLocaleString()}
              </p>

              <div className="flex gap-2 mt-4">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => handleMoveToCart(product)}
                >
                  Move to Cart
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 text-red-600 border-red-600 hover:bg-red-50"
                  onClick={() => removeItem(product.id)}
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
