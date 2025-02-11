import Link from "next/link";
import { Button } from "../components/atoms/Button";
import { ProductCard } from "../components/molecules/ProductCard";
import { FeatureSection } from "../components/organisms/FeatureSection";
import { Product } from "../types/product";
import Image from "next/image";
import { products } from "@/data/products";

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

const testimonials = [
  {
    name: "Sarah J.",
    role: "Verified Buyer",
    content:
      "I've found amazing designer pieces at incredible prices. The quality checks give me peace of mind.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    name: "Michael R.",
    role: "Seller",
    content:
      "Made over ₹50,000 selling clothes I no longer needed. The platform makes it so easy to reach buyers.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
  },
  {
    name: "Priya K.",
    role: "Fashion Enthusiast",
    content:
      "Love the sustainable approach to fashion. Every purchase feels like a win for both my wallet and the environment.",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
  },
];

const stats = [
  { label: "Active Sellers", value: "10,000+" },
  { label: "Items Sold", value: "100,000+" },
  { label: "Happy Customers", value: "50,000+" },
  { label: "Avg. Seller Rating", value: "4.8/5" },
];

export default function Home() {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative min-h-[600px] h-[90vh] flex items-center lg:text-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
            alt="Sustainable Fashion"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/95 to-primary-700/90" />
        </div>
        <div className="container mx-auto px-4 relative z-10 lg:flex justify-center items-center">
          <div className="max-w-2xl text-white">
            <div className="animate-fade-in-up space-y-4 sm:space-y-6">
              <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 text-white text-sm sm:text-base backdrop-blur-sm">
                <span className="mr-2 inline-block">🌟</span>
                Join 50,000+ fashion enthusiasts
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Give Your Clothes
                <span className="block text-primary-200">a Second Life</span>
              </h1>
              <p className="text-lg sm:text-xl text-primary-50/90 leading-relaxed max-w-xl">
                Join the sustainable fashion movement. Buy and sell pre-loved
                clothing from premium brands at prices you&apos;ll love.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-center">
                <Button size="lg" className="group w-full sm:w-auto" asChild>
                  <Link
                    href="/products"
                    className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 flex justify-center items-center"
                  >
                    Shop Now
                    <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">
                      →
                    </span>
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                  asChild
                >
                  <Link
                    href="/dashboard/become-seller"
                    className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 text-white border-white hover:bg-white/10 backdrop-blur-sm flex justify-center items-center"
                  >
                    Start Selling
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="container mx-auto px-4">
        <div className="bg-primary-50 rounded-2xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-primary-600 font-semibold mb-2 block">
            Curated Collection
          </span>
          <h2 className="text-3xl font-bold mb-4">Featured Items</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover hand-picked premium items from our collection
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 3).map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Button variant="outline" asChild>
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <FeatureSection
        title="Why Choose Us"
        subtitle="Discover the benefits of buying and selling with us"
        features={features}
      />

      {/* Testimonials Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-primary-600 font-semibold mb-2 block">
            Testimonials
          </span>
          <h2 className="text-3xl font-bold mb-4">What Our Community Says</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied buyers and sellers on our platform
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={200}
                  height={200}
                  className="rounded-full w-10 h-10 object-cover"
                />
                <div className="ml-4">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Clean Out Your Closet?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Turn your pre-loved clothes into cash. Join thousands of sellers on
            our platform and start earning today.
          </p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <Button variant="secondary" asChild>
              <Link
                href="/dashboard/become-seller"
                className="md:text-lg px-6 py-3"
              >
                Create Seller Account
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link
                href="/about"
                className="md:text-lg px-6 py-3 text-white border-white hover:bg-white/10"
              >
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
