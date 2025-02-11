export default function CheckoutLoading() {
  return (
    <div className="max-w-4xl mx-auto p-6 animate-pulse">
      <div className="h-8 w-48 bg-gray-200 rounded mb-8"></div>

      {/* Order Summary */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="h-6 w-40 bg-gray-200 rounded mb-4"></div>

        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gray-200 rounded"></div>
              <div className="flex-1 space-y-2">
                <div className="h-5 w-40 bg-gray-200 rounded"></div>
                <div className="h-4 w-24 bg-gray-200 rounded"></div>
              </div>
              <div className="h-5 w-20 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>

        <div className="border-t mt-6 pt-6 space-y-3">
          <div className="flex justify-between">
            <div className="h-4 w-16 bg-gray-200 rounded"></div>
            <div className="h-4 w-20 bg-gray-200 rounded"></div>
          </div>

          <div className="flex justify-between">
            <div className="h-4 w-32 bg-gray-200 rounded"></div>
            <div className="h-4 w-20 bg-gray-200 rounded"></div>
          </div>

          <div className="flex justify-between">
            <div className="h-6 w-16 bg-gray-200 rounded"></div>
            <div className="h-6 w-24 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-4">
        <div className="h-12 w-full bg-gray-200 rounded"></div>
        <div className="h-4 w-64 bg-gray-200 rounded mx-auto"></div>
        <div className="h-3 w-48 bg-gray-200 rounded mx-auto"></div>
      </div>
    </div>
  );
}
