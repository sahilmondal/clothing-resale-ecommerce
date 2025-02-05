export default function BecomeSellerLoading() {
  return (
    <div className="p-6 animate-pulse">
      <div className="mb-8">
        <div className="h-8 w-48 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 w-96 bg-gray-100 rounded"></div>
      </div>

      <div className="max-w-2xl">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="h-6 w-48 bg-blue-100 rounded mb-4"></div>
          <div className="space-y-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-4 w-full bg-blue-100 rounded"></div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {[...Array(8)].map((_, i) => (
            <div key={i}>
              <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>
              <div className="h-10 bg-gray-100 rounded"></div>
            </div>
          ))}
          <div className="h-10 w-full bg-primary-100 rounded"></div>
        </div>

        <div className="mt-6">
          <div className="h-4 w-full bg-gray-100 rounded"></div>
        </div>
      </div>
    </div>
  );
}
