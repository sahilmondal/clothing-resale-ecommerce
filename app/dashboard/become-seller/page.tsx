import Image from "next/image";
import { Button } from "@/components/atoms/Button";

const ANDROID_APP_URL =
  "https://play.google.com/store/apps/details?id=com.yourapp";
const QR_CODE_URL = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(
  ANDROID_APP_URL
)}`;

export default function BecomeSellerPage() {
  return (
    <div className="p-6 max-w-2xl mx-auto text-center">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">
        Download Our Seller App
      </h1>

      <p className="text-gray-600 mb-8">
        To become a seller and start listing your items, please download our
        Android app. The app provides specialized tools for sellers including:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-primary-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Easy Photo Upload
          </h3>
          <p className="text-gray-600">
            Take photos of your items directly in the app with our image
            optimization tool
          </p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-sm">
          <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-primary-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Sales Analytics
          </h3>
          <p className="text-gray-600">
            Track your sales, views, and customer interactions in real-time
          </p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-sm">
          <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-primary-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Order Management
          </h3>
          <p className="text-gray-600">
            Manage orders, shipping, and customer communications from one place
          </p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-sm">
          <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-primary-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Seller Support
          </h3>
          <p className="text-gray-600">
            Get dedicated support and access to seller education resources
          </p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-sm max-w-sm mx-auto mb-8">
        <div className="relative aspect-square mb-4">
          <Image
            src={QR_CODE_URL}
            alt="Download Seller App"
            fill
            className="object-contain"
            unoptimized // Since this is a dynamically generated QR code
          />
        </div>
        <p className="text-gray-600 text-sm mb-4">
          Scan this QR code with your Android device to download our seller app
        </p>
        <Button asChild className="w-full">
          <a href={ANDROID_APP_URL} target="_blank" rel="noopener noreferrer">
            Open Play Store
          </a>
        </Button>
      </div>

      <div className="text-sm text-gray-500">
        <p>Having trouble? Contact our seller support team at</p>
        <a
          href="mailto:seller-support@yourapp.com"
          className="text-primary-600 hover:text-primary-700"
        >
          seller-support@yourapp.com
        </a>
      </div>
    </div>
  );
}
