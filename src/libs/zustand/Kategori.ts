import { create } from "zustand";
import { HabitWithKategori, getHabits } from "../db/services";

export type useKategoriType = {
  newKategori: boolean;
  setNewKategori: (condition: boolean) => void;
};

export const useKategori = create<useKategoriType>()((set) => ({
  newKategori: false,
  setNewKategori: (condition: boolean) => {
    set((state) => ({ newKategori: condition }));
  },
}));
