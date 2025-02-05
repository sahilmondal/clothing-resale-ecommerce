export default function WishlistLoading() {
  return (
    <div className="container mx-auto px-4 py-8 animate-pulse">
      <div className="h-8 w-48 bg-gray-200 rounded mb-8"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            {/* Image placeholder */}
            <div className="aspect-square bg-gray-200"></div>

            <div className="p-4">
              {/* Title placeholder */}
              <div className="h-5 w-3/4 bg-gray-200 rounded mb-1"></div>

              {/* Price placeholder */}
              <div className="h-5 w-1/4 bg-primary-100 rounded mb-4"></div>

              {/* Buttons placeholder */}
              <div className="flex gap-2">
                <div className="h-9 flex-1 bg-primary-100 rounded"></div>
                <div className="h-9 w-20 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
