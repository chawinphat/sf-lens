import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createJSONStorage, persist } from "zustand/middleware";

interface BookmarkStore {
  bookmarks: string[];
  addBookmark: (bookmark: string) => void;
  removeBookmark: (bookmark: string) => void;
  clearBookmarks: () => void;
  hasBookmark: (bookmark: string) => boolean;
  toggle: (bookmark: string) => void;
}

export const useBookmarkStore = create<BookmarkStore>()(
  persist(
    (set, get) => ({
      bookmarks: [],

      addBookmark: (id) =>
        set((state) => ({
          bookmarks: state.bookmarks.includes(id)
            ? state.bookmarks
            : [...state.bookmarks, id],
        })),

      removeBookmark: (id) =>
        set((state) => ({
          bookmarks: state.bookmarks.filter((bookmark) => bookmark !== id),
        })),

      clearBookmarks: () => set({ bookmarks: [] }),

      hasBookmark: (id) => get().bookmarks.includes(id),

      toggle: (id) => {
        const { hasBookmark, addBookmark, removeBookmark } = get();
        hasBookmark(id) ? removeBookmark(id) : addBookmark(id);
      },
    }),
    {
      name: "bookmarks-store",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
