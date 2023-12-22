import { create } from "zustand";
import { SessionType, getSession } from "../auth/session";

export type useSessionType = {
  session: SessionType | null;
  setSession: () => void;
};

export const useSession = create<useSessionType>()((set) => ({
  session: null,
  setSession: async () => {
    const session = await getSession();
    set({ session: session });
  },
}));
