"use client";

import Svg from "../../SVGLayouts/Svg";
import { HabitWithKategori, TodayWithHabit } from "@/libs/db/services";
import CheckIcon from "./CheckIcon";
import { useSearchParams } from "next/navigation";
import { format, parseISO } from "date-fns";
import { getCurrentDate } from "./actions";

export default function ClientHabit(props: {
  today: TodayWithHabit | null;
  habit: HabitWithKategori;
  sessionId: number;
}) {
  const searchParams = useSearchParams();
  const tgl =
    searchParams.get("tanggalMulai") || getCurrentDate().toISOString();
  const date = format(parseISO(tgl), "yyyy-MM-dd");
  const akhir = new Date(date);
  return (
    <>
      {props.habit.tanggalMulai > akhir ? null : (
        <div className="flex justify-between space-x-5 items-center border-b border-zinc-500 py-3">
          <Svg
            path={props.habit.kategori.svgIcon}
            color={props.habit.kategori.warna}
          />
          <div className="flex flex-col text-left w-full">
            <p>{props.habit?.nama}</p>
            <p
              className="text-sm"
              style={{
                color: props.habit.kategori.warna || "gray",
              }}>
              {props.habit.kategori.nama}
            </p>
          </div>
          <CheckIcon today={props.today} habit={props.habit} />
        </div>
      )}
    </>
  );
}
