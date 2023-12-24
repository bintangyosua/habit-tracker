"use client";

import { format, parseISO } from "date-fns";
import { useSearchParams } from "next/navigation";
import { days, getCurrentDate, getDatesAround } from "./actions";

export default function Dates() {
  const searchParams = useSearchParams();
  const tgl = searchParams.get("tanggal") || getCurrentDate().toISOString();
  const date = format(parseISO(tgl), "yyyy-MM-dd");
  const akhir = new Date(date);
  const dates = getDatesAround(akhir);

  return (
    <div className="flex items-center justify-between space-x-2 sm:space-x-3 md:space-x-3">
      {/* <EachDate day="Mon" date={13} active={false} /> */}
      {/* <EachDate day="Tue" date={14} active={false} />
      <EachDate day="Wed" date={15} active={false} />
      <EachDate day="Thu" date={16} active={true} />
      <EachDate day="Fri" date={17} active={false} />
      <EachDate day="Sat" date={18} active={false} />
      <EachDate day="Sun" date={19} active={false} /> */}
      {dates &&
        dates.map((value, key) => {
          return (
            <EachDate
              key={key}
              day={days[value.getDay()]}
              date={value.getDate()}
              active={key === 3 ? true : false}
            />
          );
        })}
    </div>
  );
}

function EachDate(props: { day: string; date: number; active: boolean }) {
  return (
    <div className="flex flex-col items-center w-full">
      <p
        className={`px-2 py-2 ${
          props.active ? "bg-red-700" : "bg-zinc-900"
        } rounded-t-2xl w-full  text-center text-sm`}>
        {props.day}
      </p>
      <p
        className={`text-md sm:text-2xl ${
          props.active ? "bg-red-900" : "bg-zinc-800"
        } text-center w-full py-1 rounded-b-xl`}>
        {props.date}
      </p>
    </div>
  );
}
