import { create } from "zustand";

export const useDocsContent = create((set) => ({
  activeId: 1,
  setActiveId: (id) => set({ activeId: id })
}));
