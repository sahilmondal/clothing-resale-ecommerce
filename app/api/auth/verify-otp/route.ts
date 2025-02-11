import { NextResponse } from "next/server";
import { verifyOTP, clearOTP } from "@/lib/otpService";
import { getUserByPhone } from "@/store/useAuthStore";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export async function POST(request: Request) {
  try {
    const { phone, otp } = await request.json();

    if (!phone || !otp) {
      return NextResponse.json(
        { error: "Phone number and OTP are required" },
        { status: 400 }
      );
    }

    const result = verifyOTP(phone, otp);

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    // Clear OTP after successful verification
    clearOTP(phone);

    // Get or create user
    const user = getUserByPhone(phone) || {
      id: `user_${Date.now()}`,
      phone,
      isSeller: false,
    };

    // Generate JWT token
    const token = jwt.sign({ userId: user.id, phone: user.phone }, JWT_SECRET, {
      expiresIn: "7d",
    });

    return NextResponse.json({
      success: true,
      token,
      user,
    });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
