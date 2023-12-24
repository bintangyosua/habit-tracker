"use server";

import { BiCheckCircle, BiClipboard, BiDotsVertical } from "react-icons/bi";
import { BsCalendar2Week } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import DropDownDelete from "./DropDownDelete";
import { HabitWithKategori } from "@/libs/db/services";

export default async function Footer({ habit }: { habit: HabitWithKategori }) {
  const startDate = habit.tanggalMulai.getDate();
  const endDate = new Date();
  endDate.setHours(0 + 7, 0, 0, 0);

  const todays = await prisma?.hari.findMany({
    where: {
      habitId: habit.id,
    },
  });

  const different = endDate.getDate() - startDate;

  const ratio = todays?.length || (0 / different) * 1.0;
  const percentage = ratio / different;

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
        <IoStatsChart size={iconSize} />
        <BsCalendar2Week size={iconSize} />
        <DropDownDelete habit={habit} />
      </div>
    </div>
  );
}
