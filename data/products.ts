import { Product } from "@/types/product";

// Demo data - Replace with API call
export const products: Product[] = [
  {
    id: "1",
    title: "Vintage Denim Jacket",
    description: "Classic vintage denim jacket in excellent condition",
    price: 2499,
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f",
    images: [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f",
      "https://images.unsplash.com/photo-1606822350112-b9e3caea2d5e",
    ],
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
    title: "Leather Biker Jacket",
    description: "Stylish leather biker jacket with a modern fit",
    price: 3499,
    image: "https://images.unsplash.com/photo-1514996937319-344454492b37",
    images: [
      "https://images.unsplash.com/photo-1514996937319-344454492b37",
      "https://images.unsplash.com/photo-1514996937319-344454492b37",
    ],
    category: "men-clothing",
    condition: "good",
    size: "L",
    brand: "Zara",
    color: "Black",
    sellerId: "demo-seller",
    status: "active",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },

  {
    id: "4",
    title: "Casual T-Shirt",
    description: "Comfortable casual t-shirt for everyday wear",
    price: 999,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    ],
    category: "men-clothing",
    condition: "excellent",
    size: "M",
    brand: "Uniqlo",
    color: "White",
    sellerId: "demo-seller",
    status: "active",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "5",
    title: "Floral Summer Dress",
    description: "Beautiful floral print dress perfect for summer occasions",
    price: 1899,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446",
    images: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446",
    ],
    category: "women-clothing",
    condition: "like-new",
    size: "S",
    brand: "H&M",
    color: "Multicolor",
    sellerId: "demo-seller",
    status: "active",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "6",
    title: "Designer Handbag",
    description: "Authentic designer handbag in pristine condition",
    price: 89999,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    ],
    category: "accessories",
    condition: "excellent",
    size: "One Size",
    brand: "Gucci",
    color: "Brown",
    sellerId: "demo-seller",
    status: "active",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "7",
    title: "Vintage High-Waisted Jeans",
    description: "Classic 90s high-waisted jeans, perfect vintage condition",
    price: 1999,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
    ],
    category: "women-clothing",
    condition: "good",
    size: "28",
    brand: "Levis",
    color: "Light Blue",
    sellerId: "demo-seller",
    status: "active",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "8",
    title: "Limited Edition Sneakers",
    description: "Rare limited edition sneakers, barely worn",
    price: 29999,
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3",
    images: [
      "https://images.unsplash.com/photo-1552346154-21d32810aba3",
      "https://images.unsplash.com/photo-1552346154-21d32810aba3",
    ],
    category: "men-shoes",
    condition: "like-new",
    size: "US 10",
    brand: "Nike",
    color: "White/Red",
    sellerId: "demo-seller",
    status: "active",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "9",
    title: "Wool Winter Coat",
    description: "Elegant wool coat perfect for winter, minimal wear",
    price: 5999,
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3",
    images: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3",
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3",
    ],
    category: "women-clothing",
    condition: "excellent",
    size: "L",
    brand: "Burberry",
    color: "Beige",
    sellerId: "demo-seller",
    status: "active",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "10",
    title: "Vintage Band T-Shirt",
    description: "Original 80s rock band t-shirt, collector's item",
    price: 3499,
    image: "https://images.unsplash.com/photo-1516756587022-7891ad56a8cd",
    images: [
      "https://images.unsplash.com/photo-1516756587022-7891ad56a8cd",
      "https://images.unsplash.com/photo-1516756587022-7891ad56a8cd",
    ],
    category: "men-clothing",
    condition: "fair",
    size: "M",
    brand: "Vintage",
    color: "Black",
    sellerId: "demo-seller",
    status: "active",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];
