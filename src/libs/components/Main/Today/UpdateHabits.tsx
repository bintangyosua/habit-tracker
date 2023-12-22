"use server";

import { GiHealthNormal } from "react-icons/gi";
import { SessionType } from "@/libs/auth/session";
import { HabitWithKategori, getHabits } from "@/libs/db/services";
import { Habit as HabitType } from "@prisma/client";
import Habit from "./Habit";
import { useEffect, useState } from "react";
import { useHabit } from "@/libs/zustand/Habit";

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
          <Habit
            key={val.id}
            icon={GiHealthNormal}
            habit={val}
            sessionId={session.id}
          />
        ))
      ) : (
        <p className="text-white">Habit tidak ditemukan</p>
      )}
    </>
  );
}
