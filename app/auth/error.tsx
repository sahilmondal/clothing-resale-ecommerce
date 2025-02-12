"use client";

import { useEffect } from "react";
import { Link } from "next-view-transitions";
import { Button } from "@/components/atoms/Button";

export default function AuthError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Auth Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="rounded-full bg-red-100 p-3 mx-auto w-fit mb-4">
          <svg
            className="h-6 w-6 text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Oops! Something went wrong
        </h3>

        <p className="text-sm text-gray-600 mb-6">
          We encountered an error while processing your request. Please try
          again or contact support if the problem persists.
        </p>

        <div className="space-y-4">
          <Button onClick={reset} variant="outline" className="w-full">
            Try Again
          </Button>

          <Button asChild className="w-full">
            <Link href="/">Return Home</Link>
          </Button>

          {process.env.NODE_ENV === "development" && (
            <div className="mt-4 p-4 bg-gray-100 rounded-md text-left">
              <p className="text-sm font-medium text-gray-900 mb-2">
                Error details:
              </p>
              <pre className="text-xs text-gray-600 overflow-auto">
                {error.message}
                {"\n"}
                {error.stack}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
