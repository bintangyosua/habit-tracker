"use server";

import { IconType } from "react-icons";
import { Habit as HabitType } from "@prisma/client";
import {
  HabitWithKategori,
  TodayWithHabit,
  getHabit,
  getHabits,
  getToday,
} from "@/libs/db/services";
import { kategoriIcons } from "@/libs/kateogori_icons/kategoriIcons";
import CheckIcon from "./CheckIcon";
import { useEffect, useState } from "react";
import { useHabit } from "@/libs/zustand/Habit";
import { getCurrentDate } from "./actions";
import { IconLayout } from "./IconLayout";
import Svg from "../../SVGLayouts/Svg";
import { useSearchParams } from "next/navigation";
import ClientHabit from "./ClientHabit";

export default async function Habit(props: {
  habit: HabitWithKategori;
  sessionId: number;
}) {
  const today = await getToday(props.habit.id, getCurrentDate());
  return (
    <ClientHabit
      today={today}
      habit={props.habit}
      sessionId={props.sessionId}
    />
  );
}
