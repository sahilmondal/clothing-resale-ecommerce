export default function ProductLoading() {
  return (
    <div className="container mx-auto px-4 py-8 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square rounded-lg bg-gray-200"></div>
          <div className="grid grid-cols-4 gap-4">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="aspect-square rounded-lg bg-gray-200"
              ></div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <div className="h-8 w-3/4 bg-gray-200 rounded mb-2"></div>
            <div className="h-7 w-1/4 bg-primary-100 rounded"></div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <dl className="grid grid-cols-2 gap-x-4 gap-y-6">
              {[...Array(4)].map((_, index) => (
                <div key={index}>
                  <div className="h-4 w-16 bg-gray-200 rounded mb-1"></div>
                  <div className="h-5 w-24 bg-gray-200 rounded"></div>
                </div>
              ))}
            </dl>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200 rounded"></div>
              <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="flex gap-4">
              <div className="h-10 flex-1 bg-primary-100 rounded"></div>
              <div className="h-10 w-40 bg-gray-200 rounded"></div>
            </div>
          </div>

          {/* Seller Info */}
          <div className="border-t border-gray-200 pt-6">
            <div className="h-4 w-16 bg-gray-200 rounded mb-2"></div>
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-gray-200"></div>
              <div className="ml-4">
                <div className="h-4 w-24 bg-gray-200 rounded mb-1"></div>
                <div className="h-4 w-32 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
