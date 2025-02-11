// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { useAuth } from "@/hooks/useAuth";
// import useCartStore from "@/store/useCartStore";
// import { Button } from "@/components/atoms/Button";
// import {
//   createRazorpayOrder,
//   initializeRazorpayCheckout,
//   PaymentSuccessResponse,
//   verifyPayment,
// } from "@/lib/razorpay";
// import { useRewardPoints } from "@/hooks/useRewardPoints";

// export default function CheckoutPage() {
//   const router = useRouter();
//   const { user } = useAuth();
//   const { items, totalAmount, clearCart } = useCartStore();
//   const { points } = useRewardPoints();
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   if (!user) {
//     router.push("/auth/login");
//     return null;
//   }

//   if (items.length === 0) {
//     router.push("/cart");
//     return null;
//   }

//   const handleCheckout = async () => {
//     try {
//       setIsProcessing(true);
//       setError(null);

//       // Create Razorpay order
//       const orderDetails = await createRazorpayOrder(totalAmount());

//       // Initialize Razorpay checkout
//       await initializeRazorpayCheckout({
//         orderDetails,
//         userDetails: {
//           name: user.name || "",
//           email: user.email || "",
//           contact: user.phone,
//         },
//         onSuccess: async (response: PaymentSuccessResponse) => {
//           try {
//             // Verify payment on server
//             await verifyPayment(response);

//             // Clear cart
//             clearCart();

//             // Redirect to success page
//             router.push("/checkout/success");
//           } catch (error) {
//             console.error("Payment verification failed:", error);
//             setError("Payment verification failed. Please contact support.");
//           }
//         },
//         onError: (error: Error) => {
//           console.error("Payment failed:", error);
//           setError(error.message || "Payment failed. Please try again.");
//         },
//       });
//     } catch (error) {
//       console.error("Checkout error:", error);
//       setError("Failed to initialize checkout. Please try again.");
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   const canUseRewardPoints = points >= 100;
//   const pointsDiscount = Math.min(points, totalAmount() * 0.1); // Max 10% discount

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-2xl font-bold text-gray-900 mb-8">Checkout</h1>

//       {/* Order Summary */}
//       <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
//         <h2 className="text-xl font-semibold text-gray-900 mb-4">
//           Order Summary
//         </h2>

//         <div className="space-y-4">
//           {items.map((item) => (
//             <div key={item.id} className="flex items-center gap-4">
//               <div className="relative w-20 h-20">
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   fill
//                   className="object-cover rounded"
//                 />
//               </div>
//               <div className="flex-1">
//                 <h3 className="font-medium text-gray-900">{item.title}</h3>
//                 <p className="text-sm text-gray-500">
//                   Size: {item.size} • Quantity: {item.quantity}
//                 </p>
//               </div>
//               <p className="font-medium text-gray-900">
//                 ₹{(item.price * item.quantity).toLocaleString()}
//               </p>
//             </div>
//           ))}
//         </div>

//         <div className="border-t mt-6 pt-6 space-y-3">
//           <div className="flex justify-between text-gray-600">
//             <span>Subtotal</span>
//             <span>₹{totalAmount().toLocaleString()}</span>
//           </div>

//           {canUseRewardPoints && (
//             <div className="flex justify-between text-green-600">
//               <span>Reward Points Discount</span>
//               <span>-₹{pointsDiscount.toLocaleString()}</span>
//             </div>
//           )}

//           <div className="flex justify-between text-lg font-bold text-gray-900">
//             <span>Total</span>
//             <span>
//               ₹
//               {(
//                 totalAmount() - (canUseRewardPoints ? pointsDiscount : 0)
//               ).toLocaleString()}
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Actions */}
//       <div className="space-y-4">
//         {error && (
//           <div className="p-4 bg-red-50 text-red-600 rounded-lg">{error}</div>
//         )}

//         <Button
//           onClick={handleCheckout}
//           disabled={isProcessing}
//           className="w-full"
//         >
//           {isProcessing ? "Processing..." : "Place Order & Pay"}
//         </Button>

//         {canUseRewardPoints && (
//           <p className="text-sm text-green-600 text-center">
//             You can use {points} reward points for a ₹{pointsDiscount} discount!
//           </p>
//         )}

//         <p className="text-xs text-gray-500 text-center">
//           By placing this order, you agree to our Terms of Service and Privacy
//           Policy.
//         </p>
//       </div>
//     </div>
//   );
// }
