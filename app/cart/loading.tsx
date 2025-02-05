export default function CartLoading() {
  return (
    <div className="container mx-auto px-4 py-8 animate-pulse">
      <div className="h-8 w-48 bg-gray-200 rounded mb-8"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-8">
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm"
              >
                <div className="w-24 h-24 bg-gray-200 rounded"></div>

                <div className="flex-1 space-y-2">
                  <div className="h-5 w-48 bg-gray-200 rounded"></div>
                  <div className="h-4 w-20 bg-gray-100 rounded"></div>
                  <div className="h-4 w-24 bg-primary-100 rounded"></div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="h-8 w-20 bg-gray-200 rounded"></div>
                </div>

                <div className="h-8 w-8 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-4">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="h-6 w-32 bg-gray-200 rounded mb-4"></div>

            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex justify-between">
                  <div className="h-4 w-20 bg-gray-200 rounded"></div>
                  <div className="h-4 w-24 bg-gray-200 rounded"></div>
                </div>
              ))}

              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between">
                  <div className="h-5 w-24 bg-gray-200 rounded"></div>
                  <div className="h-5 w-32 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>

            <div className="h-10 w-full bg-primary-100 rounded mt-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
