"use server";

import { BiCheckCircle, BiClipboard, BiDotsVertical } from "react-icons/bi";
import { BsCalendar2Week, BsFillHospitalFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import NewHabit from "../Rightbar/NewHabit";
import { getHabits, getHabitsCateogryById } from "./actions";
import { getSession } from "@/libs/auth/session";
import { Callout } from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { sevenDaysArray } from "./Day";
import { Day } from "./Day";
import { Habit as HabitType } from "@prisma/client";
import * as Icons from "@radix-ui/react-icons";
import { IconLayout } from "./Icons";

import { IoGameControllerOutline } from "react-icons/io5";
import { MdSportsMartialArts, MdWorkOutline } from "react-icons/md";
import { TiPlus } from "react-icons/ti";

const getHabitKategori = async (id: number) => {
  return getHabitsCateogryById(id);
};

export default async function Habits() {
  const session = await getSession();
  const habits = await getHabits(session.id);
  return (
    <div className="flex flex-col gap-3">
      <div className="xl:hidden">
        <NewHabit />
      </div>
      {habits ? (
        habits.map((val) => <Habit habit={val} />)
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

function Habit({ habit }: { habit: HabitType }) {
  const day = new Day();
  return (
    <div className="bg-zinc-900 rounded-xl px-5 py-3 flex flex-col mt-0 gap-2">
      {/* Header */}
      <Header habit={habit} />
      {/* Body */}
      <div className="flex justify-evenly gap-2">
        {sevenDaysArray.map((val) => (
          <Date day={day.getDay(val)} dateNow={val.getDate()} active={false} />
        ))}
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

async function Header({ habit }: { habit: HabitType }) {
  const kategori = await getHabitKategori(habit.kategoriId);

  const kategoriIcons = [
    {
      name: "Hobi",
      component: IoGameControllerOutline,
    },
    {
      name: "Olahraga",
      component: MdSportsMartialArts,
    },
    {
      name: "Pekerjaan",
      component: MdWorkOutline,
    },
    {
      name: "Kesehatan",
      component: TiPlus,
    },
  ];

  const selectedIcon = kategoriIcons.find((val) => val.name === kategori?.nama);
  const iconComponent = selectedIcon ? selectedIcon.component : null;

  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col">
        <span>{habit.nama}</span>
        <span className={`text-sm`} style={{ color: `${kategori?.warna}` }}>
          {kategori?.nama}
        </span>
      </div>
      {/* {kategoriIcons.find((val) => val.name === kategori?.nama)?.component} */}
      <IconLayout key={kategori?.id} Icon={iconComponent} kategori={kategori} />
    </div>
  );
}

function Date({
  day,
  dateNow,
  active,
}: {
  day: string;
  dateNow: number;
  active: boolean;
}) {
  return (
    <div className="flex flex-col items-center space-y-1">
      <span className="text-zinc-300">{day}</span>
      <span
        className={` ${
          active
            ? "bg-green-900 border-green-700"
            : "bg-zinc-900 border-zinc-700"
        }  border-[3px] w-10 h-10 rounded-xl text-center flex justify-center items-center`}>
        <span>{dateNow}</span>
      </span>
    </div>
  );
}

function Footer() {
  const iconSize = 20;
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-between items-center space-x-2">
        <BiClipboard size={iconSize} />
        <span>0</span>
        <BiCheckCircle size={iconSize} />
        <span>60%</span>
      </div>
      <div className="flex justify-between items-center space-x-3">
        <IoStatsChart size={iconSize} />
        <BsCalendar2Week size={iconSize} />
        <BiDotsVertical size={iconSize} />
      </div>
    </div>
  );
}
