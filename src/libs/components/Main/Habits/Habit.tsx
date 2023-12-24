"use server";

import { Day, days, getDatesAround, sevenDaysArray } from "./Day";
import Footer from "./Footer";
import Header from "./Header";
import EachDate from "./EachDate";
import { Habit as HabitType } from "@prisma/client";
import { HabitWithKategori } from "@/libs/db/services";
import { getTodaysAround } from "./actions";

export default async function Habit({ habit }: { habit: HabitWithKategori }) {
  const dates = getDatesAround(new Date());
  const day = new Day();
  return (
    <div className="bg-zinc-900 rounded-xl px-5 py-3 flex flex-col mt-0 gap-2">
      {/* Header */}
      <Header habit={habit} />
      {/* Body */}
      <div className="flex justify-evenly gap-2">
        {dates &&
          dates.map((val, key) => {
            return (
              <EachDate
                date={val}
                key={key}
                dateNow={val.getDate()}
                active={false}
                habitId={habit.id}
                day={days[val.getDay()]}
              />
            );
          })}
      </div>
      {/* Footer */}
      <Footer habit={habit} />
    </div>
  );
}
