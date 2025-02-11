"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";
import useOrderStore, { Order, OrderItem } from "@/store/useOrderStore";

export default function OrdersPage() {
  const { user } = useAuth();
  const { orders, fetchOrders } = useOrderStore();

  useEffect(() => {
    if (user) {
      fetchOrders({ userId: user.phone }); // Changed from email to phone
    }
  }, [user, fetchOrders]);

  if (orders.length === 0) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">My Orders</h1>
        <div className="py-12">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No orders yet
          </h3>
          <p className="text-gray-500">Your order history will appear here</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">My Orders</h1>

      <div className="space-y-6">
        {orders.map((order: Order) => (
          <div
            key={order.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Order #{order.id}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Placed on {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 text-sm rounded-full ${
                    order.status === "delivered"
                      ? "bg-green-100 text-green-800"
                      : order.status === "cancelled"
                      ? "bg-red-100 text-red-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </div>

              <div className="border-t border-b py-4 space-y-4">
                {order.items.map((item: OrderItem) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="relative w-20 h-20">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-500">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <p className="font-medium text-gray-900">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center mt-4">
                <div className="text-sm text-gray-500">
                  {order.items.length}{" "}
                  {order.items.length === 1 ? "item" : "items"}
                </div>
                <div className="text-lg font-bold text-gray-900">
                  Total: ₹{order.totalAmount.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
