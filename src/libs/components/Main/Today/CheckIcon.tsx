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
import { Habit } from "@prisma/client";
import { useHabit } from "@/libs/zustand/Habit";
import { startOfToday } from "date-fns";
import { useRouter } from "next/navigation";

export default function CheckIcon(props: {
  today: TodayWithHabit | null;
  habit: Habit;
}) {
  const [hover, setHover] = useState(false);
  const [checked, setChecked] = useState(props.today?.checked);

  const router = useRouter();

  useEffect(() => {
    if (props.today) {
      setChecked(props.today.checked);
    }
  }, []);

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
          if (!checked) {
            createToday({
              habitId: props.habit.id,
              tanggal: getCurrentDate(),
              checked: true,
            });
          } else {
            deleteToday(props.habit.id, getCurrentDate());
          }
          setChecked(!checked);
          router.refresh();
        }}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      />
    </div>
  );
}
