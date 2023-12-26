"use server";

import { BiCheckCircle, BiClipboard, BiDotsVertical } from "react-icons/bi";
import { BsCalendar2Week } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import DropDownDelete from "./DropDownDelete";
import { HabitWithKategori, getKategori } from "@/libs/db/services";
import { Kategori } from "@prisma/client";

export default async function Footer({ habit }: { habit: HabitWithKategori }) {
  const startDate = habit.tanggalMulai.getDate();
  const endDate = new Date();
  endDate.setHours(0, 0, 0, 0);

  const todays = await prisma?.hari.findMany({
    where: {
      habitId: habit.id,
    },
  });

  const kategori = await getKategori();

  const different = endDate.getDate() - startDate + 1;

  const ratio = todays?.length ? (todays.length / different) * 1.0 : 0;
  const percentage = ratio === 0 ? 0 : ratio;

  const iconSize = 20;
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-between items-center space-x-2">
        <BiClipboard size={iconSize} />
        <span>{todays?.length || 0}</span>
        <BiCheckCircle size={iconSize} />
        <span>{Math.round((percentage + Number.EPSILON) * 100)}%</span>
      </div>
      <div className="flex justify-between items-center space-x-3">
        <DropDownDelete habit={habit} kategori={kategori} />
      </div>
    </div>
  );
}
