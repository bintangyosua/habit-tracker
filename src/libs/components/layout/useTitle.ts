import { create } from "zustand";

interface TitleInterface {
  title: string;
  setTitle: (title: string) => void;
}

const useTitle = create<TitleInterface>()((set) => ({
  title: "Habifier",
  setTitle: (title: string) => set({ title }),
}));

export default useTitle;
