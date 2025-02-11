"use client";

import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";
import useOrderStore from "@/store/useOrderStore";
import useWishlistStore from "@/store/useWishlistStore";
import { useRewardPoints } from "@/hooks/useRewardPoints";
import { Button } from "@/components/atoms/Button";
import { useEffect } from "react";

export default function DashboardPage() {
  const { user } = useAuth();
  const { orders, fetchOrders } = useOrderStore();
  const { wishlists, currentUserId, setCurrentUser } = useWishlistStore();
  const {
    points,
    tier,
    tierProgress,
    pointsNeededForNextTier,
    isLoading: rewardsLoading,
  } = useRewardPoints();

  useEffect(() => {
    if (user) {
      fetchOrders({ userId: user.phone });
      setCurrentUser(user.phone);
    }
  }, [user, fetchOrders, setCurrentUser]);

  const recentOrders = orders.slice(0, 3);
  const wishlistItems = currentUserId ? wishlists[currentUserId] : [];
  return (
    <div className="p-6 space-y-8">
      {/* Welcome Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome back</h1>
        <p className="text-gray-600">Manage your purchases and saved items.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Orders</h3>
            <Link
              href="/dashboard/orders"
              className="text-primary-600 hover:text-primary-700 text-sm"
            >
              View All
            </Link>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">
            {orders.length}
          </div>
          <p className="text-gray-600 text-sm">Total orders placed</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Wishlist</h3>
            <Link
              href="/dashboard/wishlist"
              className="text-primary-600 hover:text-primary-700 text-sm"
            >
              View All
            </Link>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">
            {wishlistItems.length}
          </div>
          <p className="text-gray-600 text-sm">Saved items</p>
        </div>

        <div className="md:col-span-2 bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg shadow-sm p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Reward Points</h3>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
              {tier} Member
            </span>
          </div>

          {rewardsLoading ? (
            <div className="animate-pulse">
              <div className="h-8 w-24 bg-white/20 rounded mb-2"></div>
              <div className="h-2 bg-white/20 rounded-full mb-2"></div>
              <div className="h-4 w-32 bg-white/20 rounded"></div>
            </div>
          ) : (
            <>
              <div className="text-3xl font-bold mb-2">
                {points.toLocaleString()} pts
              </div>
              <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                <div
                  className="bg-white h-2 rounded-full"
                  style={{ width: `${tierProgress}%` }}
                ></div>
              </div>
              {pointsNeededForNextTier > 0 && (
                <p className="text-sm text-white/80">
                  {pointsNeededForNextTier.toLocaleString()} points until next
                  tier
                </p>
              )}
            </>
          )}
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Recent Orders</h2>
          <Link
            href="/dashboard/orders"
            className="text-primary-600 hover:text-primary-700"
          >
            View All Orders
          </Link>
        </div>

        {recentOrders.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No orders yet
            </h3>
            <p className="text-gray-500 mb-4">
              Start shopping to see your orders here
            </p>
            <Button asChild>
              <Link href="/products">Browse Products</Link>
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className="flex items-center gap-4 p-4 border rounded-lg"
              >
                <div className="relative w-16 h-16">
                  <Image
                    src={order.items[0].image}
                    alt={order.items[0].title}
                    fill
                    className="object-cover rounded"
                  />
                  {order.items.length > 1 && (
                    <span className="absolute -right-2 -top-2 bg-gray-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                      +{order.items.length - 1}
                    </span>
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Order #{order.id}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">
                    ₹{order.totalAmount.toLocaleString()}
                  </p>
                  <span
                    className={`inline-flex px-2 py-1 text-xs rounded-full ${
                      order.status === "delivered"
                        ? "bg-green-100 text-green-800"
                        : order.status === "cancelled"
                        ? "bg-red-100 text-red-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {order.status.charAt(0).toUpperCase() +
                      order.status.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Become a Seller */}
      {!user?.isSeller && (
        <div className="bg-primary-50 rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Start Selling Today
              </h2>
              <p className="text-gray-600 mb-4">
                Turn your closet into cash by becoming a seller
              </p>
              <Button asChild>
                <Link href="/dashboard/become-seller">Become a Seller</Link>
              </Button>
            </div>
            <div className="hidden md:block">
              <svg
                className="w-32 h-32 text-primary-200"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
