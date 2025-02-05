import Link from "next/link";
import { Button } from "../components/atoms/Button";
import { ProductCard } from "../components/molecules/ProductCard";
import { FeatureSection } from "../components/organisms/FeatureSection";
import { Product } from "../types/product";

// Demo data
const featuredProducts: Product[] = [
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
  {
    id: "3",
    title: "Classic Leather Boots",
    description: "High-quality leather boots in good condition",
    price: 4499,
    images: ["https://images.unsplash.com/photo-1608256246200-53e635b5b65f"],
    category: "women-shoes",
    condition: "good",
    size: "42",
    brand: "Clarks",
    color: "Brown",
    sellerId: "demo-seller",
    status: "active",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
] as const;

const features = [
  {
    title: "Quality Assurance",
    description:
      "Every item is thoroughly inspected for quality and authenticity",
    icon: "/icons/quality.svg",
  },
  {
    title: "Secure Payments",
    description: "Safe and secure payment processing with Razorpay",
    icon: "/icons/secure.svg",
  },
  {
    title: "Easy Returns",
    description: "Hassle-free returns within 7 days of purchase",
    icon: "/icons/returns.svg",
  },
];

export default function Home() {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-primary-600/90 to-primary-800/90" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">
              Give Your Clothes a Second Life
            </h1>
            <p className="text-xl mb-8">
              Join the sustainable fashion movement. Buy and sell pre-loved
              clothing from premium brands.
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="/products" className="text-lg px-6 py-3">
                  Shop Now
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="/dashboard/become-seller"
                  className="text-lg px-6 py-3 text-white border-white hover:bg-white/10"
                >
                  Start Selling
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Featured Items</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover hand-picked premium items from our collection
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <FeatureSection
        title="Why Choose Us"
        subtitle="Discover the benefits of buying and selling with us"
        features={features}
      />

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <div className="bg-gray-50 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Clean Out Your Closet?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Turn your pre-loved clothes into cash. Join thousands of sellers on
            our platform.
          </p>
          <Button asChild>
            <a href="/dashboard/become-seller" className="text-lg px-6 py-3">
              Create Seller Account
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
