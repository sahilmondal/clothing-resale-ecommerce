// "use client";

// import { Link } from 'next-view-transitions';
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/atoms/Button";
// import useCartStore from "@/store/useCartStore";

// export default function CheckoutSuccessPage() {
//   const router = useRouter();
//   const { items } = useCartStore();

//   // Redirect to home if no items were purchased
//   useEffect(() => {
//     if (items.length > 0) {
//       router.push("/");
//     }
//   }, [items.length, router]);

//   return (
//     <div className="min-h-[60vh] flex items-center justify-center p-6">
//       <div className="text-center max-w-md">
//         <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//           <svg
//             className="w-8 h-8 text-green-600"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M5 13l4 4L19 7"
//             />
//           </svg>
//         </div>

//         <h1 className="text-2xl font-bold text-gray-900 mb-2">
//           Payment Successful!
//         </h1>

//         <p className="text-gray-600 mb-8">
//           Thank you for your purchase. Your order has been confirmed and will be
//           shipped soon.
//         </p>

//         <div className="space-y-4">
//           <Button asChild>
//             <Link href="/dashboard/orders">View Orders</Link>
//           </Button>

//           <p className="text-sm text-gray-500">
//             A confirmation email has been sent to your registered email address.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
