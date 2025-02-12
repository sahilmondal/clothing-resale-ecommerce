"use client";

import { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/atoms/Button";

export default function LoginPage() {
  const router = useRouter();
  const { isAuthenticated, sendOTP, verifyOTP } = useAuth();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [timer, setTimer] = useState(0);

  // Redirect if already authenticated
  if (isAuthenticated) {
    redirect("/dashboard");
    return null;
  }

  const startResendTimer = () => {
    setTimer(30);
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleSendOTP = async () => {
    if (phone.length !== 10) {
      setErrorMsg("Please enter a valid 10-digit phone number");
      return;
    }

    try {
      setIsLoading(true);
      setErrorMsg(null);

      const result = await sendOTP(phone);

      if (!result.success) {
        setErrorMsg(result.error || "Failed to send OTP");
        alert("Failed to send OTP");
        return;
      }
      alert(`OTP for ${phone} is : ${result.otp}`);

      setOtpSent(true);
      startResendTimer();
    } catch {
      setErrorMsg("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOTP = async () => {
    if (otp.length !== 6) {
      setErrorMsg("Please enter a valid 6-digit OTP");
      return;
    }

    try {
      setIsLoading(true);
      setErrorMsg(null);

      const result = await verifyOTP(phone, otp);

      if (!result.success) {
        setErrorMsg(result.error || "Failed to verify OTP");
        return;
      }

      router.push("/dashboard");
    } catch {
      setErrorMsg("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {otpSent
              ? "Enter the OTP sent to your phone"
              : "Sign in with any random phone number (for demo)"}
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            {!otpSent ? (
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    setPhone(value);
                    setErrorMsg(null);
                  }}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                  placeholder="Enter any phone number for testing"
                  maxLength={10}
                  disabled={isLoading}
                />
              </div>
            ) : (
              <div>
                <label htmlFor="otp" className="sr-only">
                  OTP
                </label>
                <input
                  id="otp"
                  name="otp"
                  type="text"
                  required
                  value={otp}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    setOtp(value);
                    setErrorMsg(null);
                  }}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                  placeholder="Enter 6-digit OTP"
                  maxLength={6}
                  disabled={isLoading}
                />
              </div>
            )}
          </div>

          {errorMsg && (
            <div className="text-sm text-red-600 text-center">{errorMsg}</div>
          )}

          {otpSent && timer > 0 && (
            <div className="text-sm text-gray-600 text-center">
              Resend OTP in {timer} seconds
            </div>
          )}

          <div>
            <Button
              onClick={otpSent ? handleVerifyOTP : handleSendOTP}
              className="w-full disabled:opacity-50"
              disabled={
                isLoading || (otpSent ? otp.length !== 6 : phone.length !== 10)
              }
            >
              {!otpSent && phone.length !== 10
                ? "Enter 10 digit number"
                : isLoading
                ? "Processing..."
                : otpSent
                ? "Verify OTP"
                : "Send OTP"}
            </Button>
          </div>

          {otpSent && timer === 0 && (
            <div className="text-center">
              <button
                type="button"
                onClick={handleSendOTP}
                disabled={isLoading}
                className="text-sm text-primary-600 hover:text-primary-500"
              >
                Resend OTP
              </button>
            </div>
          )}
        </div>

        <div className="text-xs text-gray-500 text-center">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </div>
      </div>
    </div>
  );
}
