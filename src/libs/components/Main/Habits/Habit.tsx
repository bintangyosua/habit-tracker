"use client";

import { Day, sevenDaysArray } from "./Day";
import Footer from "./Footer";
import Header from "./Header";
import Date from "./Date";
import { Habit as HabitType } from "@prisma/client";
import { HabitWithKategori } from "@/libs/db/services";

export default function Habit({ habit }: { habit: HabitWithKategori }) {
  const day = new Day();
  return (
    <div className="bg-zinc-900 rounded-xl px-5 py-3 flex flex-col mt-0 gap-2">
      {/* Header */}
      <Header habit={habit} />
      {/* Body */}
      <div className="flex justify-evenly gap-2">
        {sevenDaysArray.map((val, key) => (
          <Date
            key={key}
            day={day.getDay(val)}
            dateNow={val.getDate()}
            active={false}
          />
        ))}
      </div>
      {/* Footer */}
      <Footer habit={habit} />
    </div>
  );
}
