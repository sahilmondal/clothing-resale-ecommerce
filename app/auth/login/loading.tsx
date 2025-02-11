export default function LoginLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="h-8 w-48 bg-gray-200 rounded mx-auto animate-pulse"></div>
          <div className="mt-2 h-4 w-32 bg-gray-200 rounded mx-auto animate-pulse"></div>
        </div>

        <div className="mt-8 space-y-6">
          <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-3 w-64 bg-gray-200 rounded mx-auto animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
