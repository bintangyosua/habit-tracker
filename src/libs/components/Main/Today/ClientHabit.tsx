"use client";

import Svg from "../../SVGLayouts/Svg";
import {
  HabitWithKategori,
  TodayWithHabit,
  getToday,
} from "@/libs/db/services";
import CheckIcon from "./CheckIcon";
import { useSearchParams } from "next/navigation";
import { format, parseISO } from "date-fns";
import { getCurrentDate } from "./actions";
import { useEffect, useState } from "react";
import { Hari } from "@prisma/client";

export default function ClientHabit(props: {
  today: Hari | null;
  habit: HabitWithKategori;
  sessionId: number;
}) {
  const [today, setToday] = useState(props.today);

  const searchParams = useSearchParams();
  const tgl = searchParams.get("tanggal") || getCurrentDate().toISOString();

  const date = format(parseISO(tgl), "yyyy-MM-dd");
  const akhir = new Date(date);

  useEffect(() => {
    getToday(props.habit.id, akhir).then((res) => setToday(res));
  }, [tgl]);
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
          <CheckIcon today={props.today} habit={props.habit} date={akhir} />
        </div>
      )}
    </>
  );
}
