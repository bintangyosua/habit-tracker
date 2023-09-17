"use client";
import { useState } from "react";
import { Cal } from "@/libs/calendar/Calendar";

export default function Calendar() {
  const currentDate = new Date();
  const [month, setMonth] = useState(currentDate.getMonth());
  const calendar = new Cal();
  let weeks: number[][] = [];
  const dateOfMonth: Date[] = [];

  let firstDayOfWeek = dateOfMonth[0].getDay();

  calendar.fullYear.forEach((value, key) => {
    if (value.getMonth() === month) dateOfMonth.push(value);
  });

  dateOfMonth.forEach((v, k) => {});

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row justify-between items-center w-full">
        <span>{month === 8 ? "September" : "Other"}</span>
        <span>2023</span>
      </div>
      <table>
        <thead>
          <tr>
            <th className="text-red-500">Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th className="text-red-500">Sat</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {/* <EachRow datesOfWeek={week1} /> */}
        </tbody>
      </table>
    </div>
  );
}

function EachRow(props: { datesOfWeek: Date[] }) {
  return (
    <tr>
      {props.datesOfWeek ? (
        props.datesOfWeek.map((value, key) => <td>{value.getDay() === 5}</td>)
      ) : (
        <td></td>
      )}
    </tr>
  );
}
