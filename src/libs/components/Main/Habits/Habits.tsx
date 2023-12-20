"use server";

import { BiCheckCircle, BiClipboard, BiDotsVertical } from "react-icons/bi";
import { BsCalendar2Week, BsFillHospitalFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import NewHabit from "../Rightbar/NewHabit";
import { getKategori } from "@/libs/db/services";

export default async function Habits() {
  return (
    <div className="flex flex-col gap-3">
      <div className="xl:hidden">
        <NewHabit />
      </div>
      <Habit />
      <Habit />
      <Habit />
    </div>
  );
}

function Habit() {
  return (
    <div className="bg-zinc-900 rounded-xl px-5 py-3 flex flex-col mt-0">
      {/* Header */}
      <Header />
      <div className="flex justify-evenly space-x-1">
        <Date />
        <Date />
        <Date />
        <Date />
        <Date />
        <Date />
        <Date />
      </div>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col">
        <span>Evening Bath</span>
        <span className="text-green-500 text-sm">Every day</span>
      </div>
      <div>
        <BsFillHospitalFill size={30} color={`green`} />
      </div>
    </div>
  );
}

function Date() {
  return (
    <div className="flex flex-col items-center space-y-1">
      <span className="text-zinc-300">Sun</span>
      <span className="bg-green-900 border-[3px] border-green-700 w-10 h-10 rounded-xl text-center flex justify-center items-center">
        <span>10</span>
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
