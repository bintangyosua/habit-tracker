"use client";

import { kategoriIcons } from "@/libs/kateogori_icons/kategoriIcons";
import { IconLayout } from "./Icons";
import { getHabitsCateogryById } from "./actions";
import { Habit as HabitType, Kategori } from "@prisma/client";
import { useHabit } from "@/libs/zustand/Habit";
import { useEffect, useState } from "react";
import { HabitWithKategori } from "@/libs/db/services";
import Svg from "../../SVGLayouts/Svg";
import { format } from "date-fns";

export default function Header({ habit }: { habit: HabitWithKategori }) {
  const selectedIcon = kategoriIcons.find(
    (val) => val.name === habit?.kategori.nama
  );
  const iconComponent = selectedIcon ? selectedIcon.component : null;

  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col">
        <span className="font-medium">
          {habit.nama} -{" "}
          <span className="font-thin text-sm">
            Start Date: {`${format(habit.tanggalMulai, "dd MMM yyyy")}`}
          </span>{" "}
        </span>
        <span
          className={`text-sm`}
          style={{ color: `${habit.kategori?.warna}` }}>
          {habit.kategori.nama}{" "}
          <span className="text-sm text-gray-300">{habit.deskripsi}</span>
        </span>
        <span></span>
      </div>
      <Svg path={habit.kategori.svgIcon} color={habit.kategori.warna} />
    </div>
  );
}
