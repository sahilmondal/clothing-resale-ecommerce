"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "../../components/atoms/Button";
import useCartStore from "../../store/useCartStore";
import { useState } from "react";
import { initializeRazorpay, createRazorpayOrder } from "@/lib/razorpay";
import { useAuth } from "@/hooks/useAuth";

export default function CartPage() {
  const router = useRouter();
  const { user } = useAuth();
  const { items, removeItem, updateQuantity, getTotalPrice } = useCartStore();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = async () => {
    try {
      if (!user) {
        router.push("/auth/login?redirect=/cart");
        return;
      }

      setIsProcessing(true);
      const totalAmount = getTotalPrice();

      // Create Razorpay order
      const { orderId } = await createRazorpayOrder(totalAmount);

      // Initialize Razorpay
      const razorpay = await initializeRazorpay({
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
        amount: totalAmount * 100, // Convert to smallest currency unit
        currency: "INR",
        name: "ClothResale",
        description: "Purchase from ClothResale",
        orderId,
        prefill: {
          name: user.name || "",
          email: user.email || "",
          contact: "", // TODO: Add phone number to user profile
        },
        notes: {
          userId: user.email!,
        },
        theme: {
          color: "#0284c7", // primary-600
        },
      });

      razorpay.open();
    } catch (error) {
      console.error("Checkout error:", error);
      // TODO: Show error message to user
    } finally {
      setIsProcessing(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Your Cart is Empty
        </h1>
        <p className="text-gray-600 mb-6">
          Start shopping to add items to your cart
        </p>
        <Button asChild>
          <a href="/products">Browse Products</a>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-8">
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm"
              >
                <div className="relative w-24 h-24">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-500">Size: {item.size}</p>
                  <p className="text-primary-600 font-medium">
                    ₹{item.price.toLocaleString()}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      updateQuantity(item.productId, item.quantity - 1)
                    }
                    className="p-1 text-gray-500 hover:text-gray-700"
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() =>
                      updateQuantity(item.productId, item.quantity + 1)
                    }
                    className="p-1 text-gray-500 hover:text-gray-700"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeItem(item.productId)}
                  className="p-2 text-gray-400 hover:text-red-500"
                >
                  <span className="sr-only">Remove</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-4">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Order Summary
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal</span>
                <span>₹{getTotalPrice().toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Tax</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between font-medium text-gray-900">
                  <span>Total</span>
                  <span>₹{getTotalPrice().toLocaleString()}</span>
                </div>
              </div>
            </div>

            <Button
              className="w-full mt-6"
              onClick={handleCheckout}
              disabled={isProcessing}
            >
              {isProcessing ? "Processing..." : "Proceed to Checkout"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
