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

export default async function Habit(props: {
  icon: IconType;
  habit: HabitWithKategori;
  sessionId: number;
}) {
  const today = await getToday(props.habit.id, getCurrentDate());
  const selectedIcon = kategoriIcons.find(
    (val) => val.name === props.habit?.kategori?.nama
  );
  const iconComponent = selectedIcon ? selectedIcon.component : null;

  return (
    <div className="flex justify-between space-x-5 items-center border-b border-zinc-500 py-3">
      <IconLayout
        key={props.habit?.kategori?.id}
        Icon={iconComponent}
        kategori={props.habit?.kategori ? props.habit.kategori : null}
      />
      <div className="flex flex-col text-left w-full">
        <p>{props.habit?.nama}</p>
        <p
          className="text-sm"
          style={{
            color: props.habit?.kategori.warna || "gray",
          }}>
          {props.habit?.kategori.nama}
        </p>
      </div>
      <CheckIcon today={today} habit={props.habit} />
    </div>
  );
}
