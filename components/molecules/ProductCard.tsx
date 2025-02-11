/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { Product } from "../../types/product";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../atoms/Button";
import useCartStore from "../../store/useCartStore";
import useWishlistStore from "../../store/useWishlistStore";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem: addToCart } = useCartStore();
  const {
    addItem: addToWishlist,
    isInWishlist,
    removeItem,
  } = useWishlistStore();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    // @ts-ignore

    addToCart(product);
    setTimeout(() => setIsAdding(false), 500);
  };

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeItem(product.id);
    } else {
      // @ts-ignore
      addToWishlist(product);
    }
  };

  return (
    <div className="group relative bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Product Image */}
      <Link
        href={`/products/${product.id}`}
        className="block aspect-square relative"
      >
        <Image
          src={product.images[0]}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-200"
        />
      </Link>

      {/* Wishlist Button */}
      <button
        onClick={handleWishlistToggle}
        className="absolute top-2 right-2 p-2 bg-white rounded-full shadow hover:scale-110 transition-transform"
      >
        <span className="sr-only">
          {isInWishlist(product.id)
            ? "Remove from Wishlist"
            : "Add to Wishlist"}
        </span>
        <svg
          className={`w-5 h-5 ${
            isInWishlist(product.id)
              ? "text-red-500 fill-current"
              : "text-gray-400"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>

      {/* Product Info */}
      <div className="p-4">
        <Link href={`/products/${product.id}`} className="block">
          <h3 className="text-sm font-medium text-gray-900 mb-1">
            {product.title}
          </h3>
        </Link>

        <div className="flex justify-between items-center mb-2">
          <p className="text-lg font-bold text-primary-600">
            ₹{product.price.toLocaleString()}
          </p>
          <div className="flex items-center space-x-1">
            <span className="text-xs text-gray-500">{product.condition}</span>
            <span className="text-xs text-gray-500">•</span>
            <span className="text-xs text-gray-500">{product.size}</span>
          </div>
        </div>

        <Button
          onClick={handleAddToCart}
          disabled={isAdding}
          className="w-full"
        >
          {isAdding ? "Adding..." : "Add to Cart"}
        </Button>
      </div>
    </div>
  );
}
