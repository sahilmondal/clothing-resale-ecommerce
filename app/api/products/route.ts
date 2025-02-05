import { NextResponse } from "next/server";
import { ProductFilter } from "../../../types/product";

// Demo data - Replace with database
const products = [
  {
    id: "1",
    title: "Vintage Denim Jacket",
    description: "Classic vintage denim jacket in excellent condition",
    price: 2499,
    images: ["https://images.unsplash.com/photo-1606822350112-b9e3caea2d5e"],
    category: "women-clothing",
    condition: "excellent",
    size: "M",
    brand: "Levis",
    color: "Blue",
    sellerId: "demo-seller",
    status: "active",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Designer Silk Dress",
    description: "Beautiful silk dress in perfect condition",
    price: 3999,
    images: ["https://images.unsplash.com/photo-1595777457583-95e059d581b8"],
    category: "women-clothing",
    condition: "like-new",
    size: "S",
    brand: "Zara",
    color: "Red",
    sellerId: "demo-seller",
    status: "active",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  // Add more demo products
];

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // Extract filter parameters
    const filter: ProductFilter = {
      category: searchParams.get("category") as any,
      condition: searchParams.get("condition") as any,
      minPrice: searchParams.get("minPrice")
        ? Number(searchParams.get("minPrice"))
        : undefined,
      maxPrice: searchParams.get("maxPrice")
        ? Number(searchParams.get("maxPrice"))
        : undefined,
      size: searchParams.get("size") || undefined,
      brand: searchParams.get("brand") || undefined,
      sellerId: searchParams.get("sellerId") || undefined,
      status: searchParams.get("status") as any,
    };

    // Apply filters
    let filteredProducts = [...products];

    if (filter.category) {
      filteredProducts = filteredProducts.filter(
        (p) => p.category === filter.category
      );
    }

    if (filter.condition) {
      filteredProducts = filteredProducts.filter(
        (p) => p.condition === filter.condition
      );
    }

    if (filter.minPrice !== undefined) {
      filteredProducts = filteredProducts.filter(
        (p) => p.price >= filter.minPrice!
      );
    }

    if (filter.maxPrice !== undefined) {
      filteredProducts = filteredProducts.filter(
        (p) => p.price <= filter.maxPrice!
      );
    }

    if (filter.size) {
      filteredProducts = filteredProducts.filter((p) => p.size === filter.size);
    }

    if (filter.brand) {
      filteredProducts = filteredProducts.filter(
        (p) => p.brand === filter.brand
      );
    }

    if (filter.sellerId) {
      filteredProducts = filteredProducts.filter(
        (p) => p.sellerId === filter.sellerId
      );
    }

    if (filter.status) {
      filteredProducts = filteredProducts.filter(
        (p) => p.status === filter.status
      );
    }

    // Apply sorting
    const sortBy = searchParams.get("sortBy");
    if (sortBy) {
      switch (sortBy) {
        case "price-low":
          filteredProducts.sort((a, b) => a.price - b.price);
          break;
        case "price-high":
          filteredProducts.sort((a, b) => b.price - a.price);
          break;
        case "newest":
          filteredProducts.sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
          break;
      }
    }

    // Apply pagination
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 12;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    return NextResponse.json({
      products: paginatedProducts,
      total: filteredProducts.length,
      page,
      totalPages: Math.ceil(filteredProducts.length / limit),
    });
  } catch (error) {
    console.error("Products API error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
