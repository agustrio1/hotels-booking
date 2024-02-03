import {create} from "zustand";

interface SidebarStore {
  isOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

type HotelDetailsStore = {
  showDescription: boolean;
  toggleDescription: () => void;
}

export const useSidebarStore = create<SidebarStore>((set) => ({
  isOpen: false,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  closeMenu: () => set({ isOpen: false }),
}));


export const useHotelDetailsStore = create<HotelDetailsStore>((set) => ({
  showDescription: false,
  toggleDescription: () => set((state) => ({ showDescription: !state.showDescription })),
}))