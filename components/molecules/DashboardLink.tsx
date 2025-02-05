"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface DashboardLinkProps {
  href: string;
  exact?: boolean;
  children: React.ReactNode;
}

export function DashboardLink({ href, exact, children }: DashboardLinkProps) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`block px-4 py-2 rounded-md text-sm font-medium ${
        isActive
          ? "bg-primary-50 text-primary-700"
          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
      }`}
    >
      {children}
    </Link>
  );
}
