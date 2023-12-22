"use server";

import { BiCheckCircle, BiClipboard, BiDotsVertical } from "react-icons/bi";
import { BsCalendar2Week, BsFillHospitalFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import NewHabit from "../Rightbar/NewHabit";
import { getHabitsCateogryById } from "./actions";
import { getSession } from "@/libs/auth/session";
import { Callout, ScrollArea } from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { sevenDaysArray } from "./Day";
import { Day } from "./Day";
import { Habit as HabitType } from "@prisma/client";
import * as Icons from "@radix-ui/react-icons";
import { IconLayout } from "./Icons";

import { IoGameControllerOutline } from "react-icons/io5";
import { MdSportsMartialArts, MdWorkOutline } from "react-icons/md";
import { TiPlus } from "react-icons/ti";
import { kategoriIcons } from "@/libs/kateogori_icons/kategoriIcons";
import { getHabits } from "@/libs/db/services";
import ListHabits from "./ListHabits";
import { useRouter } from "next/router";

export default async function Habits() {
  const session = await getSession();
  const habits = await getHabits(session.id);
  return (
    <div className="flex flex-col gap-3">
      <div className="xl:hidden">
        <NewHabit />
      </div>
      {habits ? (
        <ListHabits habits={habits} />
      ) : (
        <Callout.Root>
          <Callout.Icon>
            <InfoCircledIcon />
          </Callout.Icon>
          <Callout.Text>Belum memiliki Habit</Callout.Text>
        </Callout.Root>
      )}
    </div>
  );
}
