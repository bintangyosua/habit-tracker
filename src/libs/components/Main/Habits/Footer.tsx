"use client";

import { BiCheckCircle, BiClipboard, BiDotsVertical } from "react-icons/bi";
import { BsCalendar2Week } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import DropDownDelete from "./DropDownDelete";
import { HabitWithKategori } from "@/libs/db/services";

export default function Footer({ habit }: { habit: HabitWithKategori }) {
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
        <DropDownDelete habit={habit} />
      </div>
    </div>
  );
}
