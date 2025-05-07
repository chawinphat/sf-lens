import { create } from "zustand";

export type ThemeMode = "light" | "dark";

interface ThemeState {
  mode: ThemeMode;
  toggle: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  mode: "light",
  toggle: () => set((s) => ({ mode: s.mode === "light" ? "dark" : "light" })),
}));
