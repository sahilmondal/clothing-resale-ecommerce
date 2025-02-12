import { Link } from "next-view-transitions";
import { ReactNode } from "react";

export interface DashboardLinkProps {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  isActive?: boolean;
}

export function DashboardLink({
  href,
  children,
  icon,
  isActive = false,
}: DashboardLinkProps) {
  return (
    <Link
      href={href}
      className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        isActive
          ? "bg-primary-50 text-primary-600"
          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
      }`}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </Link>
  );
}
