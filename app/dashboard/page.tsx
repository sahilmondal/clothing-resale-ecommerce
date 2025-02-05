import { getCurrentUser } from "@/lib/auth";

export default async function DashboardPage() {
  const user = await getCurrentUser();

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">Welcome back, {user?.name}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Quick Stats */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-medium text-gray-900">Orders</h3>
          <p className="mt-2 text-3xl font-bold text-primary-600">0</p>
          <p className="mt-1 text-sm text-gray-500">Active orders</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-medium text-gray-900">Wishlist</h3>
          <p className="mt-2 text-3xl font-bold text-primary-600">0</p>
          <p className="mt-1 text-sm text-gray-500">Saved items</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-medium text-gray-900">Reward Points</h3>
          <p className="mt-2 text-3xl font-bold text-primary-600">0</p>
          <p className="mt-1 text-sm text-gray-500">Available points</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
          <div className="mt-4">
            <div className="text-center py-8 text-gray-500">
              No recent activity to show
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Products */}
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Recommended for You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Add ProductCard components here when data is available */}
          <div className="text-center py-8 text-gray-500 col-span-full">
            No recommendations available yet
          </div>
        </div>
      </div>

      {user?.role !== "seller" && (
        <div className="mt-8 bg-primary-50 rounded-lg p-6">
          <h2 className="text-lg font-medium text-primary-900">
            Start Selling Today
          </h2>
          <p className="mt-2 text-primary-700">
            Turn your closet into cash! Join our seller community and start
            listing your items.
          </p>
          <a
            href="/dashboard/become-seller"
            className="mt-4 inline-block px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
          >
            Learn More About Selling
          </a>
        </div>
      )}
    </div>
  );
}
