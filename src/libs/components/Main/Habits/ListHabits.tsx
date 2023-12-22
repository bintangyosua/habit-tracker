"use client";

import { Habit as HabitType } from "@prisma/client";
import Habit from "./Habit";
import { useEffect, useState } from "react";
import { useHabit } from "@/libs/zustand/Habit";
import { HabitWithKategori, getHabits } from "@/libs/db/services";
import { useSession } from "@/libs/zustand/Session";
import { ScrollArea } from "@radix-ui/themes";
import { toast } from "react-toastify";
import { devNull } from "os";

export default function ListHabits({
  habits,
}: {
  habits: HabitWithKategori[];
}) {
  const [newHabits, setNewHabits] = useState<HabitWithKategori[]>(habits);

  const { session } = useSession((state) => state);
  const { setSession } = useSession((state) => state);
  const { newHabit } = useHabit((state) => state);
  const { setNewHabit } = useHabit((state) => state);

  useEffect(() => {
    if (newHabit) {
      setSession();
      if (session) {
        getHabits(session.id).then((res) => {
          setNewHabits(res);
          setNewHabit(false);
        });
      } else {
        toast.error("Anda harus login terlebih dahulu");
      }
    }
  }, [newHabit]);

  return (
    <ScrollArea type="hover" scrollbars="vertical" style={{ height: 630 }}>
      {newHabits && newHabits.map((val) => <Habit key={val.id} habit={val} />)}
    </ScrollArea>
  );
}
