import { useCallback } from "react";
import { redirect } from "next/navigation";
import useAuthStore, { User } from "@/store/useAuthStore";

interface AuthResponse {
  success: boolean;
  error?: string;
  token?: string;
  user?: User;
}

export function useAuth() {
  // const router = useRouter();
  const {
    user,
    isAuthenticated,
    setUser,
    setSessionToken,
    logout: logoutStore,
    updateUserProfile,
  } = useAuthStore();

  const sendOTP = useCallback(
    async (
      phone: string
    ): Promise<{ success: boolean; error?: string; otp?: string }> => {
      try {
        const response = await fetch("/api/auth/send-otp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phone }),
        });

        const data = await response.json();

        if (!data.success) {
          return { success: false, error: data.error };
        }

        return { success: true, otp: data.otp };
      } catch (error) {
        console.error("Error sending OTP:", error);
        return {
          success: false,
          error: "Failed to send OTP. Please try again.",
        };
      }
    },
    []
  );

  const verifyOTP = useCallback(
    async (
      phone: string,
      otp: string
    ): Promise<{ success: boolean; error?: string }> => {
      try {
        const response = await fetch("/api/auth/verify-otp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phone, otp }),
        });

        const data: AuthResponse = await response.json();

        if (!data.success || !data.token || !data.user) {
          return { success: false, error: data.error || "Verification failed" };
        }

        // Store session token and user data
        setSessionToken(data.token);
        setUser(data.user);

        return { success: true };
      } catch (error) {
        console.error("Error verifying OTP:", error);
        return {
          success: false,
          error: "Failed to verify OTP. Please try again.",
        };
      }
    },
    [setSessionToken, setUser]
  );

  const updateProfile = useCallback(
    async (
      profile: Partial<User>
    ): Promise<{ success: boolean; error?: string }> => {
      try {
        await updateUserProfile(profile);
        return { success: true };
      } catch (error) {
        console.error("Error updating profile:", error);
        return {
          success: false,
          error: "Failed to update profile. Please try again.",
        };
      }
    },
    [updateUserProfile]
  );

  const handleLogout = useCallback(() => {
    logoutStore();
    redirect("/auth/login");
  }, [logoutStore]);

  return {
    user,
    isAuthenticated,
    sendOTP,
    verifyOTP,
    updateProfile,
    logout: handleLogout,
  };
}
