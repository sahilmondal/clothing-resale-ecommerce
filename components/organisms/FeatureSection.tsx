import Image from "next/image";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface FeatureSectionProps {
  title: string;
  subtitle?: string;
  features: Feature[];
}

export const FeatureSection = ({
  title,
  subtitle,
  features,
}: FeatureSectionProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 mb-6 relative">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Example usage:
/*
const features = [
  {
    title: "Quality Assurance",
    description: "Every item is thoroughly inspected for quality and authenticity",
    icon: "/icons/quality.svg"
  },
  {
    title: "Secure Payments",
    description: "Safe and secure payment processing with Razorpay",
    icon: "/icons/payment.svg"
  },
  {
    title: "Easy Returns",
    description: "Hassle-free returns within 7 days of purchase",
    icon: "/icons/returns.svg"
  }
];

<FeatureSection
  title="Why Choose Us"
  subtitle="Discover the benefits of buying and selling with us"
  features={features}
/>
*/
