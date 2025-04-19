import { create } from "zustand";
import { post } from "@/api/api";

interface User {
  id: string;
  username: string;
  email: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  register: (
    username: string,
    email: string,
    password: string
  ) => Promise<void>;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,
  error: null,
  register: async (username: string, email: string, password: string) => {
    set({ loading: true, error: null });
    try {
      const { id } = await post<{ id: string }>("/users", {
        username,
        email,
        password,
      });
      set({ user: { id, username, email }, loading: false });
    } catch (e: any) {
      set({ error: e.message });
    } finally {
      set({ loading: false });
    }
  },

  login: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const user = await post<User>("/login", { email, password });
      set({ user });
    } catch (e: any) {
      set({ error: e.message });
    } finally {
      set({ loading: false });
    }
  },
  logout: () => {
    set({ user: null });
  },
}));
