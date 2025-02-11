import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/atoms/Button";
import { FeatureSection } from "../../components/organisms/FeatureSection";

const impactStats = [
  { label: "Clothes Resold", value: "100,000+" },
  { label: "Water Saved (Liters)", value: "1M+" },
  { label: "CO2 Reduced (kg)", value: "50,000+" },
  { label: "Money Saved by Buyers", value: "₹1Cr+" },
];

const values = [
  {
    title: "Sustainability First",
    description:
      "We are committed to reducing fashion waste and promoting circular fashion economy",
    icon: "/icons/quality.svg",
  },
  {
    title: "Community Driven",
    description:
      "Building a community of conscious consumers and responsible sellers",
    icon: "/icons/secure.svg",
  },
  {
    title: "Quality Focus",
    description:
      "Ensuring every item meets our high standards of quality and authenticity",
    icon: "/icons/returns.svg",
  },
];

const teamMembers = [
  {
    name: "Rahul Sharma",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296",
    description:
      "Former fashion industry executive with a passion for sustainable fashion",
  },
  {
    name: "Priya Patel",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    description: "Operations expert with experience in e-commerce and retail",
  },
  {
    name: "Amit Kumar",
    role: "Tech Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    description: "Tech veteran building seamless experiences for our community",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1523381294911-8d3cead13475"
            alt="Sustainable Fashion"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-primary-800/90" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Transforming Fashion Through Sustainability
            </h1>
            <p className="text-md md:text-xl mb-8">
              We&apos;re on a mission to make fashion more sustainable by giving
              pre-loved clothing a second chance. Join us in reducing waste and
              making quality fashion accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary-600 font-semibold mb-2 block">
              Our Mission
            </span>
            <h2 className="text-3xl font-bold mb-6">
              Creating a Sustainable Fashion Future
            </h2>
            <p className="text-gray-600 mb-6">
              We believe in a future where fashion doesn&apos;t come at the cost
              of our planet. By creating a platform for pre-loved clothing,
              we&apos;re not just building a marketplace – we&apos;re building a
              community of conscious consumers who understand the impact of
              their choices.
            </p>
            <p className="text-gray-600 mb-6">
              Every piece of clothing resold means one less new item produced,
              contributing to a significant reduction in water usage, carbon
              emissions, and textile waste.
            </p>
            <Button variant="outline" asChild>
              <Link href="/products">Explore Our Collection</Link>
            </Button>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd"
              alt="Sustainable Fashion"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-primary-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every purchase and sale on our platform contributes to a more
              sustainable future
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat) => (
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

      {/* Values Section */}
      <FeatureSection
        title="Our Values"
        subtitle="The principles that guide everything we do"
        features={values}
      />

      {/* Team Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-primary-600 font-semibold mb-2 block">
            Our Team
          </span>
          <h2 className="text-3xl font-bold mb-4">
            Meet the People Behind Our Mission
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A dedicated team working to revolutionize the fashion industry
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <div className="text-primary-600 mb-2">{member.role}</div>
              <p className="text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Join Our Sustainable Fashion Movement
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Whether you&apos;re looking to refresh your wardrobe sustainably or
            give your clothes a second life, we&apos;re here to help.
          </p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <Button variant="secondary" asChild>
              <Link href="/products" className="text-lg px-6 py-3">
                Start Shopping
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link
                href="/dashboard/become-seller"
                className="text-lg px-6 py-3 text-white border-white hover:bg-white/10"
              >
                Become a Seller
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
