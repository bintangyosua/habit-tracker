"use client";

import {
  TodayWithHabit,
  createToday,
  deleteToday,
  getToday,
} from "@/libs/db/services";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import React, { useEffect, useState } from "react";
import { getCurrentDate } from "./actions";
import { Habit, Hari } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";
import { format, parseISO } from "date-fns";

export default function CheckIcon(props: {
  today: Hari | null;
  habit: Habit;
  date: Date;
}) {
  const [hover, setHover] = useState(false);
  const [checked, setChecked] = useState(props.today?.checked || false);

  const searchParams = useSearchParams();
  const tgl = searchParams.get("tanggal") || getCurrentDate().toISOString();
  const date = format(parseISO(tgl), "yyyy-MM-dd");
  const akhir = new Date(date);

  useEffect(() => {
    getToday(props.habit.id, akhir).then((res) =>
      setChecked(res?.checked ? true : false)
    );
  }, [props.today, tgl]);

  return (
    <div className="hover:cursor-pointer">
      <CheckCircledIcon
        color={
          checked
            ? hover
              ? "#33B074"
              : "#2F7C57"
            : hover
            ? "#7B7B7B"
            : "#606060"
        }
        width={40}
        height={40}
        onClick={() => {
          console.log({
            habitId: props.habit.id,
            tanggal: akhir,
          });
          if (!checked) {
            createToday({
              habitId: props.habit.id,
              tanggal: akhir,
              checked: true,
              checkedAt: new Date(),
            });
          } else {
            deleteToday(props.habit.id, akhir);
          }
          setChecked(!checked);
        }}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      />
    </div>
  );
}
