import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Shop",
      links: [
        { label: "All Products", href: "/products" },
        { label: "Women", href: "/products?category=women" },
        { label: "Men", href: "/products?category=men" },
        { label: "Kids", href: "/products?category=kids" },
      ],
    },
    // {
    //   title: "Sell",
    //   links: [
    //     { label: "Start Selling", href: "/sell" },
    //     { label: "Seller Guidelines", href: "/seller-guidelines" },
    //     { label: "Seller Dashboard", href: "/dashboard/seller" },
    //   ],
    // },
    {
      title: "About",
      links: [
        { label: "Our Story", href: "/about" },
        { label: "How It Works", href: "/how-it-works" },
        { label: "Testimonials", href: "/testimonials" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "FAQ", href: "/faq" },
        { label: "Shipping", href: "/shipping" },
        { label: "Returns", href: "/returns" },
        { label: "Size Guide", href: "/size-guide" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-gray-900 mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-600">
              © {currentYear} ClothResale. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/terms" className="text-gray-600 hover:text-gray-900">
                Terms
              </Link>
              <Link
                href="/privacy"
                className="text-gray-600 hover:text-gray-900"
              >
                Privacy
              </Link>
              <Link
                href="/cookies"
                className="text-gray-600 hover:text-gray-900"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
