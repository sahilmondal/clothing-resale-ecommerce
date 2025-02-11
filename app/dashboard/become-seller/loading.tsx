export default function BecomeSelllerLoading() {
  return (
    <div className="p-6 max-w-2xl mx-auto text-center animate-pulse">
      {/* Header */}
      <div className="h-8 w-64 bg-gray-200 rounded mx-auto mb-4"></div>
      <div className="h-4 w-96 bg-gray-200 rounded mx-auto mb-8"></div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="p-4 bg-white rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <div className="h-6 w-32 bg-gray-200 rounded mx-auto mb-2"></div>
            <div className="space-y-2">
              <div className="h-4 w-48 bg-gray-200 rounded mx-auto"></div>
              <div className="h-4 w-40 bg-gray-200 rounded mx-auto"></div>
            </div>
          </div>
        ))}
      </div>

      {/* QR Code Section */}
      <div className="bg-white p-8 rounded-lg shadow-sm max-w-sm mx-auto mb-8">
        <div className="aspect-square bg-gray-200 rounded mb-4"></div>
        <div className="h-4 w-48 bg-gray-200 rounded mx-auto mb-4"></div>
        <div className="h-10 w-full bg-gray-200 rounded"></div>
      </div>

      {/* Support Section */}
      <div className="space-y-2">
        <div className="h-4 w-48 bg-gray-200 rounded mx-auto"></div>
        <div className="h-4 w-40 bg-gray-200 rounded mx-auto"></div>
      </div>
    </div>
  );
}
