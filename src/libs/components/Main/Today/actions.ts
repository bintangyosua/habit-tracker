import { startOfDay, startOfToday } from "date-fns";

export function getCurrentDate() {
  const currentDate = new Date();
  currentDate.setHours(0 + 7, 0, 0, 0);
  // return startOfToday();
  return currentDate;
}
