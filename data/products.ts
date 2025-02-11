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
  // {
  //   id: "5",
  //   title: "Woolen Scarf",
  //   description: "Cozy woolen scarf to keep you warm during winter",
  //   price: 1499,
  //   image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //   images: [
  //     "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //     "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //   ],
  //   category: "accessories",
  //   condition: "new",
  //   size: "One Size",
  //   brand: "Gap",
  //   color: "Gray",
  //   sellerId: "demo-seller",
  //   status: "active",
  //   createdAt: new Date().toISOString(),
  //   updatedAt: new Date().toISOString(),
  // },
  // {
  //   id: "6",
  //   title: "Running Shoes",
  //   description: "High-performance running shoes for athletes",
  //   price: 4999,
  //   image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //   images: [
  //     "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //     "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //   ],
  //   category: "kids-shoes",
  //   condition: "good",
  //   size: "10",
  //   brand: "Nike",
  //   color: "Black",
  //   sellerId: "demo-seller",
  //   status: "active",
  //   createdAt: new Date().toISOString(),
  //   updatedAt: new Date().toISOString(),
  // },
  // {
  //   id: "7",
  //   title: "Formal Blazer",
  //   description: "Elegant formal blazer for business occasions",
  //   price: 2999,
  //   image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //   images: [
  //     "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //     "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //   ],
  //   category: "men-clothing",
  //   condition: "excellent",
  //   size: "L",
  //   brand: "Hugo Boss",
  //   color: "Navy",
  //   sellerId: "demo-seller",
  //   status: "active",
  //   createdAt: new Date().toISOString(),
  //   updatedAt: new Date().toISOString(),
  // },
  // {
  //   id: "8",
  //   title: "Silk Blouse",
  //   description: "Luxurious silk blouse for a sophisticated look",
  //   price: 3999,
  //   image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //   images: [
  //     "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //     "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //   ],
  //   category: "women-clothing",
  //   condition: "new",
  //   size: "M",
  //   brand: "Chanel",
  //   color: "White",
  //   sellerId: "demo-seller",
  //   status: "active",
  //   createdAt: new Date().toISOString(),
  //   updatedAt: new Date().toISOString(),
  // },
  // {
  //   id: "9",
  //   title: "Cargo Pants",
  //   description: "Durable cargo pants with multiple pockets",
  //   price: 1999,
  //   image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //   images: [
  //     "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //     "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //   ],
  //   category: "men-clothing",
  //   condition: "good",
  //   size: "M",
  //   brand: "Carhartt",
  //   color: "Green",
  //   sellerId: "demo-seller",
  //   status: "active",
  //   createdAt: new Date().toISOString(),
  //   updatedAt: new Date().toISOString(),
  // },
  // {
  //   id: "10",
  //   title: "Knitted Sweater",
  //   description: "Warm knitted sweater for chilly days",
  //   price: 2499,
  //   image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //   images: [
  //     "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //     "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //   ],
  //   category: "women-clothing",
  //   condition: "excellent",
  //   size: "L",
  //   brand: "Ralph Lauren",
  //   color: "Beige",
  //   sellerId: "demo-seller",
  //   status: "active",
  //   createdAt: new Date().toISOString(),
  //   updatedAt: new Date().toISOString(),
  // },
  // {
  //   id: "11",
  //   title: "Sports Jacket",
  //   description: "Lightweight sports jacket for outdoor activities",
  //   price: 2999,
  //   image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //   images: [
  //     "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //     "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //   ],
  //   category: "men-clothing",
  //   condition: "new",
  //   size: "XL",
  //   brand: "Adidas",
  //   color: "Blue",
  //   sellerId: "demo-seller",
  //   status: "active",
  //   createdAt: new Date().toISOString(),
  //   updatedAt: new Date().toISOString(),
  // },
  // {
  //   id: "12",
  //   title: "Denim Shorts",
  //   description: "Casual denim shorts for summer days",
  //   price: 1499,
  //   image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //   images: [
  //     "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //     "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //   ],
  //   category: "women-clothing",
  //   condition: "good",
  //   size: "S",
  //   brand: "Levis",
  //   color: "Blue",
  //   sellerId: "demo-seller",
  //   status: "active",
  //   createdAt: new Date().toISOString(),
  //   updatedAt: new Date().toISOString(),
  // },
  // {
  //   id: "13",
  //   title: "Graphic Hoodie",
  //   description: "Trendy graphic hoodie for a casual look",
  //   price: 2499,
  //   image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //   images: [
  //     "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //     "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //   ],
  //   category: "men-clothing",
  //   condition: "excellent",
  //   size: "M",
  //   brand: "Supreme",
  //   color: "Red",
  //   sellerId: "demo-seller",
  //   status: "active",
  //   createdAt: new Date().toISOString(),
  //   updatedAt: new Date().toISOString(),
  // },
  // {
  //   id: "14",
  //   title: "Puffer Jacket",
  //   description: "Insulated puffer jacket for extreme cold",
  //   price: 3999,
  //   image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //   images: [
  //     "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //     "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //   ],
  //   category: "women-clothing",
  //   condition: "new",
  //   size: "M",
  //   brand: "North Face",
  //   color: "Black",
  //   sellerId: "demo-seller",
  //   status: "active",
  //   createdAt: new Date().toISOString(),
  //   updatedAt: new Date().toISOString(),
  // },
  // {
  //   id: "15",
  //   title: "Yoga Pants",
  //   description: "Comfortable yoga pants for workouts",
  //   price: 1999,
  //   image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //   images: [
  //     "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //     "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //   ],
  //   category: "women-clothing",
  //   condition: "good",
  //   size: "L",
  //   brand: "Lululemon",
  //   color: "Gray",
  //   sellerId: "demo-seller",
  //   status: "active",
  //   createdAt: new Date().toISOString(),
  //   updatedAt: new Date().toISOString(),
  // },
  // {
  //   id: "16",
  //   title: "Baseball Cap",
  //   description: "Classic baseball cap for a sporty look",
  //   price: 999,
  //   image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //   images: [
  //     "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //     "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //   ],
  //   category: "accessories",
  //   condition: "excellent",
  //   size: "One Size",
  //   brand: "New Era",
  //   color: "Black",
  //   sellerId: "demo-seller",
  //   status: "active",
  //   createdAt: new Date().toISOString(),
  //   updatedAt: new Date().toISOString(),
  // },
  // {
  //   id: "17",
  //   title: "Leather Boots",
  //   description: "Durable leather boots for all seasons",
  //   price: 4999,
  //   image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //   images: [
  //     "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //     "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //   ],
  //   category: "men-shoes",
  //   condition: "good",
  //   size: "9",
  //   brand: "Timberland",
  //   color: "Brown",
  //   sellerId: "demo-seller",
  //   status: "active",
  //   createdAt: new Date().toISOString(),
  //   updatedAt: new Date().toISOString(),
  // },
  // {
  //   id: "18",
  //   title: "Plaid Shirt",
  //   description: "Casual plaid shirt for a relaxed look",
  //   price: 1999,
  //   image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //   images: [
  //     "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //     "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //   ],
  //   category: "men-clothing",
  //   condition: "excellent",
  //   size: "L",
  //   brand: "Abercrombie & Fitch",
  //   color: "Red",
  //   sellerId: "demo-seller",
  //   status: "active",
  //   createdAt: new Date().toISOString(),
  //   updatedAt: new Date().toISOString(),
  // },
  // {
  //   id: "19",
  //   title: "Maxi Dress",
  //   description: "Elegant maxi dress for special occasions",
  //   price: 3499,
  //   image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //   images: [
  //     "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //     "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //   ],
  //   category: "women-clothing",
  //   condition: "new",
  //   size: "S",
  //   brand: "Forever 21",
  //   color: "Blue",
  //   sellerId: "demo-seller",
  //   status: "active",
  //   createdAt: new Date().toISOString(),
  //   updatedAt: new Date().toISOString(),
  // },
  // {
  //   id: "20",
  //   title: "Track Pants",
  //   description: "Comfortable track pants for workouts",
  //   price: 1499,
  //   image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //   images: [
  //     "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //     "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  //   ],
  //   category: "men-clothing",
  //   condition: "good",
  //   size: "M",
  //   brand: "Puma",
  //   color: "Black",
  //   sellerId: "demo-seller",
  //   status: "active",
  //   createdAt: new Date().toISOString(),
  //   updatedAt: new Date().toISOString(),
  // },
];
