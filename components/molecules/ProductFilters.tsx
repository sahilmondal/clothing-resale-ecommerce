"use client";

import { ProductCategory, ProductCondition } from "../../types/product";
import { useState } from "react";

interface PriceRange {
  min: number;
  max: number;
}

interface ProductFiltersProps {
  onFilterChange: (filters: {
    category?: ProductCategory;
    condition?: ProductCondition;
    priceRange?: PriceRange;
    size?: string;
    brand?: string;
    sortBy?: string;
  }) => void;
  initialFilters?: {
    category?: ProductCategory;
    condition?: ProductCondition;
    priceRange?: PriceRange;
    size?: string;
    brand?: string;
    sortBy?: string;
  };
}

const categories: { value: ProductCategory; label: string }[] = [
  { value: "women-clothing", label: "Women's Clothing" },
  { value: "men-clothing", label: "Men's Clothing" },
  { value: "kids-clothing", label: "Kids Clothing" },
  { value: "women-shoes", label: "Women's Shoes" },
  { value: "men-shoes", label: "Men's Shoes" },
  { value: "kids-shoes", label: "Kids Shoes" },
  { value: "accessories", label: "Accessories" },
  { value: "bags", label: "Bags" },
  { value: "jewelry", label: "Jewelry" },
];

const conditions: { value: ProductCondition; label: string }[] = [
  { value: "new", label: "New with tags" },
  { value: "like-new", label: "Like new" },
  { value: "excellent", label: "Excellent" },
  { value: "good", label: "Good" },
  { value: "fair", label: "Fair" },
];

const sortOptions = [
  { value: "newest", label: "Newest first" },
  { value: "price-low", label: "Price: Low to high" },
  { value: "price-high", label: "Price: High to low" },
];

export function ProductFilters({
  onFilterChange,
  initialFilters = {},
}: ProductFiltersProps) {
  const [filters, setFilters] = useState(initialFilters);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFilterChange = (key: string, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="space-y-6">
      {/* Sort */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Sort by
        </label>
        <select
          value={filters.sortBy || ""}
          onChange={(e) => handleFilterChange("sortBy", e.target.value)}
          className="input-field"
        >
          <option value="">Most relevant</option>
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Categories */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Category
        </label>
        <select
          value={filters.category || ""}
          onChange={(e) => handleFilterChange("category", e.target.value)}
          className="input-field"
        >
          <option value="">All categories</option>
          {categories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
      </div>

      {/* Condition */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Condition
        </label>
        <div className="space-y-2">
          {conditions.map((condition) => (
            <label key={condition.value} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.condition === condition.value}
                onChange={(e) =>
                  handleFilterChange(
                    "condition",
                    e.target.checked ? condition.value : undefined
                  )
                }
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm text-gray-700">
                {condition.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Price Range
        </label>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="number"
            placeholder="Min"
            value={filters.priceRange?.min || ""}
            onChange={(e) =>
              handleFilterChange("priceRange", {
                ...filters.priceRange,
                min: e.target.value ? Number(e.target.value) : undefined,
              })
            }
            className="input-field"
          />
          <input
            type="number"
            placeholder="Max"
            value={filters.priceRange?.max || ""}
            onChange={(e) =>
              handleFilterChange("priceRange", {
                ...filters.priceRange,
                max: e.target.value ? Number(e.target.value) : undefined,
              })
            }
            className="input-field"
          />
        </div>
      </div>

      {/* Clear Filters */}
      <button
        onClick={() => {
          setFilters({});
          onFilterChange({});
        }}
        className="text-sm text-primary-600 hover:text-primary-500"
      >
        Clear all filters
      </button>
    </div>
  );
}
