export default function ProductsLoading() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="h-8 w-48 bg-gray-200 rounded animate-pulse"></div>
          <div className="md:hidden h-10 w-20 bg-gray-200 rounded animate-pulse"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="space-y-6 animate-pulse">
              {/* Sort */}
              <div>
                <div className="h-5 w-24 bg-gray-200 rounded mb-2"></div>
                <div className="h-10 w-full bg-gray-200 rounded"></div>
              </div>

              {/* Categories */}
              <div>
                <div className="h-5 w-32 bg-gray-200 rounded mb-2"></div>
                <div className="h-10 w-full bg-gray-200 rounded"></div>
              </div>

              {/* Condition */}
              <div>
                <div className="h-5 w-28 bg-gray-200 rounded mb-2"></div>
                <div className="space-y-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex items-center">
                      <div className="h-4 w-4 bg-gray-200 rounded"></div>
                      <div className="h-4 w-24 bg-gray-200 rounded ml-2"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <div className="h-5 w-32 bg-gray-200 rounded mb-2"></div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-10 bg-gray-200 rounded"></div>
                  <div className="h-10 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-square bg-gray-200 rounded-lg mb-4"></div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-4 bg-primary-100 rounded w-1/4"></div>
                    <div className="h-10 bg-primary-100 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
