import { create } from "zustand";
import { HabitWithKategori, getHabits } from "../db/services";
import { getCurrentDate } from "../components/Main/Today/actions";

export type useHabitType = {
  newHabit: boolean;
  checked: boolean;
  selectedDate: Date;
  setNewHabit: (condition: boolean) => void;
  setChecked: (condition: boolean) => void;
  setSelectedDate: (date: Date) => void;
};

export const useHabit = create<useHabitType>()((set) => ({
  newHabit: false,
  checked: false,
  selectedDate: getCurrentDate(),
  setNewHabit: (condition: boolean) =>
    set((state) => {
      state.newHabit = condition;
      return { newHabit: state.newHabit };
    }),
  setChecked: (condition: boolean) => {
    set((state) => {
      state.checked = condition;
      return { checked: state.checked };
    });
  },
  setSelectedDate: (date: Date) => {
    set((state) => {
      state.selectedDate = date;
      return { selectedDate: state.selectedDate };
    });
  },
}));
