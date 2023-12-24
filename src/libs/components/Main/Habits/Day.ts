// Dapatkan tanggal hari ini
let today = new Date();

// Buat array untuk menyimpan tanggal-tanggal
let sevenDaysArray: Date[] = [];

// Loop untuk mendapatkan 7 hari kebelakang
for (let i = 0; i < 7; i++) {
  let previousDate = new Date(today);
  previousDate.setDate(today.getDate() - i);
  sevenDaysArray.push(previousDate);
}

sevenDaysArray.reverse();

export { sevenDaysArray };

export class Day {
  public dayAbbreviations = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  public constructor() {}

  public getDay(date: Date) {
    return this.dayAbbreviations[date.getDay()];
  }
}

export function getDatesAround(date: Date) {
  const offsets = [-6, -5, -4, -3, -2, -1, 0];

  const dates = offsets.map((offset) => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + offset);
    return newDate;
  });

  return dates;
}

export const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
