"use client";

import { useEffect } from "react";
import { Link } from "next-view-transitions";
import { Button } from "@/components/atoms/Button";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center p-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Something went wrong!
        </h2>

        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          {error.message ||
            "An unexpected error occurred while loading the dashboard."}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset}>Try Again</Button>
          <Button variant="outline" asChild>
            <Link href="/dashboard">Return to Dashboard</Link>
          </Button>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          If the problem persists, please contact our{" "}
          <a
            href="mailto:support@yourapp.com"
            className="text-primary-600 hover:text-primary-700"
          >
            support team
          </a>
          .
        </p>

        {error.digest && (
          <p className="mt-2 text-xs text-gray-400">Error ID: {error.digest}</p>
        )}
      </div>
    </div>
  );
}
