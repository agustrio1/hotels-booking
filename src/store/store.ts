import {create} from "zustand";

interface SidebarStore {
  isOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

export const useSidebarStore = create<SidebarStore>((set) => ({
  isOpen: false,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  closeMenu: () => set({ isOpen: false }),
}));
