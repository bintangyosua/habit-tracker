"use server";

import Habit from "./Habit";
import { HabitWithKategori } from "@/libs/db/services";
import { ScrollArea } from "@radix-ui/themes";

export default async function ListHabits({
  habits,
}: {
  habits: HabitWithKategori[];
}) {
  return (
    <ScrollArea type="hover" scrollbars="vertical" style={{ height: 630 }}>
      {habits.length > 0 ? (
        habits.map((val) => <Habit key={val.id} habit={val} />)
      ) : (
        <h1 className="text-white text-3xl">Belum memiliki Habit</h1>
      )}
    </ScrollArea>
  );
}
