import { NextResponse } from "next/server";

import { Order, OrderFilter, OrderItem, OrderStatus } from "@/types/order";

// Demo orders data - Replace with database
const orders: Order[] = [
  {
    id: "1",
    userId: "user1",
    items: [
      {
        id: "item1",
        productId: "1",
        title: "Vintage Denim Jacket",
        price: 2499,
        quantity: 1,
        size: "M",
        image: "https://images.unsplash.com/photo-1606822350112-b9e3caea2d5e",
        sellerId: "seller1",
      },
    ],
    totalAmount: 2499,
    shippingAddress: {
      fullName: "John Doe",
      addressLine1: "123 Main St",
      city: "Mumbai",
      state: "Maharashtra",
      postalCode: "400001",
      country: "India",
      phone: "9876543210",
    },
    status: "pending",
    paymentStatus: "pending",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export async function GET(request: Request) {
  try {
    // const session = await getServerSession(authOptions);
    // if (!session?.user) {
    //   return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    // }

    const { searchParams } = new URL(request.url);
    const filter: OrderFilter = {
      userId: searchParams.get("userId") || undefined,
      sellerId: searchParams.get("sellerId") || undefined,
      status: (searchParams.get("status") as OrderStatus) || undefined,
      startDate: searchParams.get("startDate") || undefined,
      endDate: searchParams.get("endDate") || undefined,
    };

    // Filter orders based on query parameters
    let filteredOrders = [...orders];

    if (filter.userId) {
      filteredOrders = filteredOrders.filter(
        (order) => order.userId === filter.userId
      );
    }

    if (filter.sellerId) {
      filteredOrders = filteredOrders.filter((order) =>
        order.items.some((item) => item.sellerId === filter.sellerId)
      );
    }

    if (filter.status) {
      filteredOrders = filteredOrders.filter(
        (order) => order.status === filter.status
      );
    }

    if (filter.startDate) {
      filteredOrders = filteredOrders.filter(
        (order) => new Date(order.createdAt) >= new Date(filter.startDate!)
      );
    }

    if (filter.endDate) {
      filteredOrders = filteredOrders.filter(
        (order) => new Date(order.createdAt) <= new Date(filter.endDate!)
      );
    }

    // Sort by creation date (newest first)
    filteredOrders.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    return NextResponse.json({ orders: filteredOrders });
  } catch (error) {
    console.error("Orders API error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    // const session = await getServerSession(authOptions);
    // if (!session?.user) {
    //   return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    // }

    const body = await request.json();
    const { items, shippingAddress } = body;

    if (!items?.length || !shippingAddress) {
      return NextResponse.json(
        { message: "Invalid request body" },
        { status: 400 }
      );
    }

    // Calculate total amount from items
    const totalAmount = items.reduce(
      (sum: number, item: OrderItem) => sum + item.price * item.quantity,
      0
    );

    // Create new order
    const newOrder: Order = {
      id: crypto.randomUUID(),
      userId: "user1", // Replace with session user ID
      items,
      totalAmount,
      shippingAddress,
      status: "pending",
      paymentStatus: "pending",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    // Add to orders array (replace with database operation)
    orders.push(newOrder);

    return NextResponse.json(newOrder);
  } catch (error) {
    console.error("Create order error:", error);
    return NextResponse.json(
      { message: "Failed to create order" },
      { status: 500 }
    );
  }
}
