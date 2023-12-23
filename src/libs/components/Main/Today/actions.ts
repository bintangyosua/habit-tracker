import { startOfDay, startOfToday } from "date-fns";

export function getCurrentDate() {
  const currentDate = new Date();
  currentDate.setHours(0 + 7, 0, 0, 0);
  return currentDate;
}

export function toZeroZero(date: Date) {
  date.setHours(0 + 7, 0, 0, 0);
  return date;
}
