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
import { Button, Callout } from "@radix-ui/themes";
import { CheckCircledIcon, InfoCircledIcon } from "@radix-ui/react-icons";
import CheckIcon from "./CheckIcon";
import UpdateHabits from "./UpdateHabits";
import { getCurrentDate } from "./actions";
import Habit from "./Habit";
import CalloutComponent from "../Atomic/CalloutComponent";

export default async function Habits() {
  const session = await getSession();
  const habits = await getHabits(session.id);
  return (
    <div className="flex flex-col py-5">
      {habits[0] ? (
        <UpdateHabits session={session} habits={habits} />
      ) : (
        <CalloutComponent message="Belum memiliki Habit" />
      )}
    </div>
  );
}
