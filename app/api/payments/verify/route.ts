import { NextResponse } from "next/server";

import crypto from "crypto";

export async function POST(request: Request) {
  try {
    // Check authentication

    // Get payment details from request body
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      await request.json();

    // Verify the payment signature
    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(sign)
      .digest("hex");

    // Check if the signatures match
    if (expectedSign !== razorpay_signature) {
      return NextResponse.json(
        { error: "Invalid payment signature" },
        { status: 400 }
      );
    }

    // At this point, the payment is verified
    // You would typically:
    // 1. Update the order status in your database
    // 2. Send confirmation email
    // 3. Update inventory
    // 4. Add reward points
    // 5. Clear the user's cart

    return NextResponse.json({
      success: true,
      message: "Payment verified successfully",
    });
  } catch (error) {
    console.error("Error verifying payment:", error);
    return NextResponse.json(
      { error: "Failed to verify payment" },
      { status: 500 }
    );
  }
}
