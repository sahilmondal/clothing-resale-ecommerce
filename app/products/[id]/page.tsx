"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { Button } from "../../../components/atoms/Button";
import useCartStore from "../../../store/useCartStore";
import useWishlistStore from "../../../store/useWishlistStore";
import { useState } from "react";
import { Product } from "../../../types/product";

// Demo product - Replace with API call
const demoProduct: Product = {
  id: "1",
  title: "Vintage Denim Jacket",
  description: "Classic vintage denim jacket in excellent condition",
  price: 2499,
  images: [
    "https://images.unsplash.com/photo-1606822350112-b9e3caea2d5e",
    "https://images.unsplash.com/photo-1606822350112-b9e3caea2d5e",
  ],
  category: "women-clothing",
  condition: "excellent",
  size: "M",
  brand: "Levis",
  color: "Blue",
  sellerId: "demo-seller",
  status: "active",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

export default function ProductPage() {
  const params = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const { addItem: addToCart } = useCartStore();
  const {
    addItem: addToWishlist,
    isInWishlist,
    removeItem,
  } = useWishlistStore();

  // TODO: Fetch product data using params.id
  const product = demoProduct;

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    addToCart(product);
    setTimeout(() => setIsAddingToCart(false), 500);
  };

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeItem(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src={product.images[selectedImage]}
              alt={product.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative aspect-square rounded-lg overflow-hidden border-2 ${
                  selectedImage === index
                    ? "border-primary-600"
                    : "border-transparent"
                }`}
              >
                <Image
                  src={image}
                  alt={`${product.title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {product.title}
            </h1>
            <p className="text-2xl font-bold text-primary-600 mt-2">
              ₹{product.price.toLocaleString()}
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <dl className="grid grid-cols-2 gap-x-4 gap-y-6">
              <div>
                <dt className="text-sm text-gray-500">Brand</dt>
                <dd className="mt-1 text-sm text-gray-900">{product.brand}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">Size</dt>
                <dd className="mt-1 text-sm text-gray-900">{product.size}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">Condition</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {product.condition}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">Color</dt>
                <dd className="mt-1 text-sm text-gray-900">{product.color}</dd>
              </div>
            </dl>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-sm font-medium text-gray-900">Description</h3>
            <p className="mt-2 text-sm text-gray-500">{product.description}</p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="flex gap-4">
              <Button
                onClick={handleAddToCart}
                disabled={isAddingToCart}
                className="flex-1"
              >
                {isAddingToCart ? "Adding..." : "Add to Cart"}
              </Button>
              <Button
                variant="outline"
                onClick={handleWishlistToggle}
                className={
                  isInWishlist(product.id) ? "text-red-600 border-red-600" : ""
                }
              >
                {isInWishlist(product.id)
                  ? "Remove from Wishlist"
                  : "Add to Wishlist"}
              </Button>
            </div>
          </div>

          {/* Seller Info */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-sm font-medium text-gray-900">Seller</h3>
            <div className="mt-2 flex items-center">
              <div className="h-8 w-8 rounded-full bg-gray-200"></div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">Demo Seller</p>
                <p className="text-sm text-gray-500">Member since Jan 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
