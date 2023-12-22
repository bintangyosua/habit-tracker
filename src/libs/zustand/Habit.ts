import { create } from "zustand";
import { HabitWithKategori, getHabits } from "../db/services";

export type useHabitType = {
  newHabit: boolean;
  setNewHabit: (condition: boolean) => void;
  checked: boolean;
  setChecked: (condition: boolean) => void;
};

export const useHabit = create<useHabitType>()((set) => ({
  newHabit: false,
  setNewHabit: (condition: boolean) =>
    set((state) => {
      state.newHabit = condition;
      return { newHabit: state.newHabit };
    }),
  checked: false,
  setChecked: (condition: boolean) => {
    set((state) => {
      state.checked = condition;
      return { checked: state.checked };
    });
  },
}));
