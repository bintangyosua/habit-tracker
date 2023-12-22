"use server";

import { GiHealthNormal } from "react-icons/gi";
import { IconType } from "react-icons";
import { AiOutlineCheckCircle } from "react-icons/ai";
import {
  HabitWithKategori,
  getHabit,
  getHabits,
  getTodays,
} from "@/libs/db/services";
import { getSession } from "@/libs/auth/session";
import { Habit as HabitType } from "@prisma/client";
import { TodayWithHabit, getToday } from "@/libs/db/services";
import { kategoriIcons } from "@/libs/kateogori_icons/kategoriIcons";
import { IconLayout } from "../Habits/Icons";
import { Button } from "@radix-ui/themes";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import CheckIcon from "./CheckIcon";
import UpdateHabits from "./UpdateHabits";
import { getCurrentDate } from "./actions";

export default async function Habits() {
  const session = await getSession();
  const habits = await getHabits(session.id);
  const todays = await getTodays(session.id);
  return (
    <div className="flex flex-col py-5">
      {habits ? (
        <UpdateHabits session={session} habits={habits} />
      ) : (
        <p>Habit tidak ditemukan</p>
      )}
    </div>
  );
}
