export default function DashboardLoading() {
  return (
    <div className="p-6 animate-pulse">
      {/* Header */}
      <div className="mb-8">
        <div className="h-8 w-48 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 w-64 bg-gray-100 rounded"></div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
          >
            <div className="h-6 w-24 bg-gray-200 rounded mb-2"></div>
            <div className="h-8 w-16 bg-primary-100 rounded mb-2"></div>
            <div className="h-4 w-32 bg-gray-100 rounded"></div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="p-6">
          <div className="h-6 w-32 bg-gray-200 rounded mb-4"></div>
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-16 bg-gray-50 rounded"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommended Products */}
      <div className="mt-8">
        <div className="h-6 w-48 bg-gray-200 rounded mb-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="aspect-square w-full bg-gray-100 rounded-lg mb-4"></div>
              <div className="space-y-2">
                <div className="h-5 w-3/4 bg-gray-200 rounded"></div>
                <div className="h-4 w-1/2 bg-gray-100 rounded"></div>
                <div className="h-8 bg-primary-100 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Become Seller CTA */}
      <div className="mt-8 bg-primary-50 rounded-lg p-6">
        <div className="h-6 w-48 bg-primary-200 rounded mb-2"></div>
        <div className="h-4 w-96 bg-primary-100 rounded mb-4"></div>
        <div className="h-10 w-32 bg-primary-200 rounded"></div>
      </div>
    </div>
  );
}
