import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface User {
  id: string;
  phone: string;
  name?: string;
  email?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  isSeller: boolean;
}

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  sessionToken: string | null;
  setUser: (user: User) => void;
  setSessionToken: (token: string) => void;
  logout: () => void;
  updateUserProfile: (profile: Partial<User>) => Promise<void>;
}

// Demo user data
const demoUsers: Record<string, User> = {
  "9876543210": {
    id: "user1",
    phone: "9876543210",
    name: "John Doe",
    email: "john@example.com",
    addressLine1: "123 Main St",
    addressLine2: "Apt 4B",
    city: "Mumbai",
    state: "Maharashtra",
    postalCode: "400001",
    isSeller: false,
  },
};

const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      sessionToken: null,

      setUser: (user) =>
        set({
          user,
          isAuthenticated: true,
        }),

      setSessionToken: (token) => set({ sessionToken: token }),

      logout: () =>
        set({
          user: null,
          isAuthenticated: false,
          sessionToken: null,
        }),

      updateUserProfile: async (profile) => {
        set((state) => ({
          user: state.user ? { ...state.user, ...profile } : null,
        }));

        // In a real app, you would make an API call here
        await new Promise((resolve) => setTimeout(resolve, 500));
      },
    }),
    {
      name: "auth-storage",
    }
  )
);

export function getUserByPhone(phone: string): User | null {
  return demoUsers[phone] || null;
}

export default useAuthStore;
