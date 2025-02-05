"use client";

import { useState } from "react";
import { ProductGrid } from "../../components/molecules/ProductGrid";
import { ProductFilters } from "../../components/molecules/ProductFilters";
import {
  Product,
  ProductCategory,
  ProductCondition,
} from "../../types/product";
import { Button } from "../../components/atoms/Button";

// Demo data - Replace with API call
const products: Product[] = [
  {
    id: "1",
    title: "Vintage Denim Jacket",
    description: "Classic vintage denim jacket in excellent condition",
    price: 2499,
    images: ["https://images.unsplash.com/photo-1608256246200-53e635b5b65f"],
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
  // Add more demo products here
];

interface Filters {
  category?: ProductCategory;
  condition?: ProductCondition;
  priceRange?: { min: number; max: number };
  size?: string;
  brand?: string;
  sortBy?: string;
}

export default function ProductsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState<Filters>({});
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const handleFilterChange = (newFilters: Filters) => {
    setFilters(newFilters);
    // TODO: Fetch filtered products from API
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 500); // Simulate API call
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">All Products</h1>
          <Button
            variant="outline"
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
            className="md:hidden"
          >
            Filters
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <ProductFilters
              onFilterChange={handleFilterChange}
              initialFilters={filters}
            />
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <ProductGrid products={products} isLoading={isLoading} />
          </div>

          {/* Filters - Mobile */}
          {isMobileFiltersOpen && (
            <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-50 md:hidden">
              <div className="absolute right-0 top-0 h-full w-80 bg-white p-6 shadow-xl">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    onClick={() => setIsMobileFiltersOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <span className="sr-only">Close filters</span>
                    <svg
                      className="h-6 w-6"
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
                <ProductFilters
                  onFilterChange={(newFilters) => {
                    handleFilterChange(newFilters);
                    setIsMobileFiltersOpen(false);
                  }}
                  initialFilters={filters}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
