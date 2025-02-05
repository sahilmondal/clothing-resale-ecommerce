import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { DashboardLink } from "../../components/molecules/DashboardLink";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/auth/login");
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <aside className="col-span-12 md:col-span-3 lg:col-span-2">
            <nav className="space-y-1">
              <DashboardLink href="/dashboard" exact>
                Overview
              </DashboardLink>
              <DashboardLink href="/dashboard/orders">Orders</DashboardLink>
              <DashboardLink href="/dashboard/wishlist">Wishlist</DashboardLink>
              {user.role === "seller" ? (
                <>
                  <DashboardLink href="/dashboard/seller">
                    Seller Dashboard
                  </DashboardLink>
                  <DashboardLink href="/dashboard/seller/products">
                    My Products
                  </DashboardLink>
                  <DashboardLink href="/dashboard/seller/orders">
                    Sales
                  </DashboardLink>
                </>
              ) : (
                <DashboardLink href="/dashboard/become-seller">
                  Become a Seller
                </DashboardLink>
              )}
              <DashboardLink href="/dashboard/settings">Settings</DashboardLink>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="col-span-12 md:col-span-9 lg:col-span-10">
            <div className="bg-white shadow rounded-lg">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
