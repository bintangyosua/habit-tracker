"use server";

import { getSession } from "@/libs/auth/session";
import { getToday } from "@/libs/db/services";

export default async function EachDate({
  day,
  dateNow,
  active,
  date,
  habitId,
}: {
  day: string;
  dateNow: number;
  active: boolean;
  date: Date;
  habitId: number;
}) {
  const session = await getSession();
  date.setHours(0 + 7, 0, 0, 0);
  const hari = await getToday(habitId, date);
  return (
    <div className="flex flex-col items-center space-y-1">
      <span className="text-zinc-300">{day}</span>
      <span
        className={` ${
          hari != null
            ? "bg-green-900 border-green-700"
            : "bg-zinc-900 border-zinc-700"
        }  border-[3px] w-10 h-10 rounded-xl text-center flex justify-center items-center`}>
        <span>{dateNow}</span>
      </span>
    </div>
  );
}
