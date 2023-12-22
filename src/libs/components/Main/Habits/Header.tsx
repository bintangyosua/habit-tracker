"use client";

import { kategoriIcons } from "@/libs/kateogori_icons/kategoriIcons";
import { IconLayout } from "./Icons";
import { getHabitsCateogryById } from "./actions";
import { Habit as HabitType, Kategori } from "@prisma/client";
import { useHabit } from "@/libs/zustand/Habit";
import { useEffect, useState } from "react";
import { HabitWithKategori } from "@/libs/db/services";

export default function Header({ habit }: { habit: HabitWithKategori }) {
  const selectedIcon = kategoriIcons.find(
    (val) => val.name === habit?.kategori.nama
  );
  const iconComponent = selectedIcon ? selectedIcon.component : null;

  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col">
        <span className="font-medium">{habit.nama}</span>
        <span
          className={`text-sm`}
          style={{ color: `${habit.kategori?.warna}` }}>
          {habit.kategori.nama}
        </span>
      </div>
      <IconLayout
        key={habit.id}
        Icon={iconComponent}
        kategori={habit.kategori}
      />
    </div>
  );
}
