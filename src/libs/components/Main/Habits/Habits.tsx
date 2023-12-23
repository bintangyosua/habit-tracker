"use server";

import NewHabit from "../Rightbar/NewHabit";
import { getSession } from "@/libs/auth/session";
import { Callout, ScrollArea } from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";

import { getHabits } from "@/libs/db/services";
import ListHabits from "./ListHabits";

export default async function Habits() {
  const session = await getSession();
  const habits = await getHabits(session.id);
  return (
    <div className="flex flex-col gap-3">
      <div className="xl:hidden">
        <NewHabit />
      </div>
      {habits && <ListHabits habits={habits} />}
    </div>
  );
}
