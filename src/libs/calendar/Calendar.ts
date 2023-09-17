export class Cal {
  public fullYear: Date[];

  constructor() {
    const firstDayOfYear: Date = new Date(new Date().getFullYear(), 0, 1);
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thurday",
      "Friday",
      "Saturday",
    ];
    const year = firstDayOfYear.getFullYear();
    this.fullYear = [];

    const totalDates = year % 4 === 0 ? 366 : 365;

    for (let i = 0; i < totalDates; i++) {
      const copiedDate = new Date(firstDayOfYear); // Membuat salinan objek Date
      this.fullYear.push(copiedDate);
      firstDayOfYear.setDate(firstDayOfYear.getDate() + 1);
    }
  }
}
