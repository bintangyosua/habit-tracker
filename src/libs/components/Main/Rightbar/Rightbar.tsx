"use server";

import Calendar2 from "@/libs/components/Calendar2/Calendar2";
import NewHabit from "./NewHabit";

export default async function Rightbar() {
  return (
    <div className="w-full mx-auto flex-col gap-3 flex">
      <NewHabit />
      <Calendar2 />
    </div>
  );
}
