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

export function getDatesAround(date: Date) {
  const offsets = [-3, -2, -1, 0, 1, 2, 3];

  const dates = offsets.map((offset) => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + offset);
    return newDate;
  });

  // Destructure dates array for specific dates
  const [
    threeDayBefore,
    twoDayBefore,
    oneDayBefore,
    currentDate,
    oneDayAfter,
    twoDayAfter,
    threeDayAfter,
  ] = dates;

  return [
    threeDayBefore,
    twoDayBefore,
    oneDayBefore,
    currentDate,
    oneDayAfter,
    twoDayAfter,
    threeDayAfter,
  ];
}

export const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
