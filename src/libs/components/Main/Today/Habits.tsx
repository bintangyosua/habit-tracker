"use server";

import { GiHealthNormal } from "react-icons/gi";
import { IconType } from "react-icons";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { HabitWithKategori, getHabit, getHabits } from "@/libs/db/services";
import { getSession } from "@/libs/auth/session";
import { Habit as HabitType } from "@prisma/client";
import { TodayWithHabit, getToday } from "@/libs/db/services";
import { kategoriIcons } from "@/libs/kateogori_icons/kategoriIcons";
import { IconLayout } from "../Habits/Icons";

export default async function Habits() {
  const session = await getSession();
  const habits = await getHabits(session.id);
  return (
    <div className="flex flex-col py-5">
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
        <p>Habit tidak ditemukan</p>
      )}
    </div>
  );
}

async function Habit(props: {
  icon: IconType;
  habit: HabitType;
  sessionId: number;
}) {
  const habitWithKategori = await getHabit(props.habit.id);
  const today = await getToday(props.habit.id);
  console.log(today);

  const selectedIcon = kategoriIcons.find(
    (val) => val.name === habitWithKategori?.kategori?.nama
  );
  const iconComponent = selectedIcon ? selectedIcon.component : null;
  return (
    <div className="flex justify-between space-x-5 items-center border-b border-zinc-500 py-3">
      <IconLayout
        key={habitWithKategori?.kategori?.id}
        Icon={iconComponent}
        kategori={
          habitWithKategori?.kategori ? habitWithKategori.kategori : null
        }
      />
      <div className="flex flex-col text-left w-full">
        <p>{props.habit?.nama}</p>
        <p
          className="text-sm"
          style={{
            color: habitWithKategori?.kategori.warna || "gray",
          }}>
          {habitWithKategori?.kategori.nama}
        </p>
      </div>
      <AiOutlineCheckCircle
        color={today?.checked ? "green" : "gray"}
        size={40}
      />
    </div>
  );
}
