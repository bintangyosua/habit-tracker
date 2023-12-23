"use server";

import { SessionType } from "@/libs/auth/session";
import { HabitWithKategori, getHabits, getToday } from "@/libs/db/services";
import { Habit as HabitType } from "@prisma/client";
import Habit from "./Habit";
import { useEffect, useState } from "react";
import { useHabit } from "@/libs/zustand/Habit";
import { Callout } from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { getCurrentDate } from "./actions";

export default async function UpdateHabits({
  session,
  habits,
}: {
  session: SessionType;
  habits: HabitWithKategori[];
}) {
  return (
    <>
      {habits ? (
        habits.map((val) => (
          <Habit key={val.id} habit={val} sessionId={session.id} />
        ))
      ) : (
        <p className="text-white">Habit tidak ditemukan</p>
      )}
    </>
  );
}
