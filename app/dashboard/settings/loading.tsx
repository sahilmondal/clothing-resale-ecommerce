export default function SettingsLoading() {
  return (
    <div className="p-6 animate-pulse">
      {/* Header */}
      <div className="mb-8">
        <div className="h-8 w-48 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 w-96 bg-gray-100 rounded"></div>
      </div>

      <div className="max-w-2xl">
        {/* Profile Settings */}
        <div className="space-y-6 mb-8">
          {[...Array(4)].map((_, i) => (
            <div key={i}>
              <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>
              <div className="h-10 bg-gray-100 rounded"></div>
            </div>
          ))}
          <div className="h-10 w-32 bg-primary-100 rounded"></div>
        </div>

        <div className="border-t border-gray-200 my-8"></div>

        {/* Password Change */}
        <div className="space-y-6 mb-8">
          <div className="h-6 w-40 bg-gray-200 rounded"></div>
          {[...Array(3)].map((_, i) => (
            <div key={i}>
              <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>
              <div className="h-10 bg-gray-100 rounded"></div>
            </div>
          ))}
          <div className="h-10 w-40 bg-primary-100 rounded"></div>
        </div>

        <div className="border-t border-gray-200 my-8"></div>

        {/* Delete Account */}
        <div>
          <div className="h-6 w-32 bg-red-200 rounded mb-2"></div>
          <div className="h-4 w-96 bg-gray-100 rounded mb-4"></div>
          <div className="h-10 w-32 bg-red-100 rounded"></div>
        </div>
      </div>
    </div>
  );
}
