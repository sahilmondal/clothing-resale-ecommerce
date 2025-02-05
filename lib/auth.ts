import { getServerSession } from "next-auth";
import { authOptions } from "../app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export async function getSession() {
  return await getServerSession(authOptions);
}

export async function getCurrentUser() {
  const session = await getSession();
  return session?.user;
}

export async function requireAuth() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/auth/login");
  }

  return user;
}

export async function requireSellerAuth() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/auth/login");
  }

  if (user.role !== "seller") {
    redirect("/dashboard/become-seller");
  }

  return user;
}

export function isSeller(user: { role?: string } | null | undefined): boolean {
  return user?.role === "seller";
}

export function isAdmin(user: { role?: string } | null | undefined): boolean {
  return user?.role === "admin";
}
