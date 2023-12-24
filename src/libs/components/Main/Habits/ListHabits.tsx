"use server";

import { Habit as HabitType } from "@prisma/client";
import Habit from "./Habit";
import { useHabit } from "@/libs/zustand/Habit";
import { HabitWithKategori, getHabits } from "@/libs/db/services";
import { useSession } from "@/libs/zustand/Session";
import { Callout, ScrollArea } from "@radix-ui/themes";
import { toast } from "react-toastify";
import { devNull } from "os";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { getSession } from "@/libs/auth/session";

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
        // <></>
        <Callout.Root color="red">
          <Callout.Icon>
            <InfoCircledIcon />
          </Callout.Icon>
          <Callout.Text>Belum memiliki Habit</Callout.Text>
        </Callout.Root>
      )}
    </ScrollArea>
  );
}
