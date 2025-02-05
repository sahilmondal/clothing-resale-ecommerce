"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export function useAuth() {
  const { data: session, status, update } = useSession();
  const router = useRouter();

  const login = async (email: string, password: string) => {
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        throw new Error(result.error);
      }

      router.push("/dashboard");
      return result;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const loginWithProvider = async (provider: string) => {
    try {
      await signIn(provider, { callbackUrl: "/dashboard" });
    } catch (error) {
      console.error(`${provider} login error:`, error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut({ callbackUrl: "/" });
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
  };

  const isSeller = session?.user?.role === "seller";
  const isAdmin = session?.user?.role === "admin";

  return {
    session,
    status,
    user: session?.user,
    isAuthenticated: !!session?.user,
    isSeller,
    isAdmin,
    login,
    loginWithProvider,
    logout,
    updateSession: update,
  };
}
