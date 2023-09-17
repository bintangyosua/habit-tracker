export class Tanggal {
  private tanggal: Date;
  private day?: string;
  private date?: number;
  private month?: number;
  private year?: number;

  constructor(tanggal: Date) {
    this.tanggal = tanggal;
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thurday",
      "Friday",
      "Saturday",
    ];
  }

  public setDate(newDate: number) {
    this.tanggal.setDate(newDate);
  }

  public getDate() {
    return this.tanggal;
  }

  public getTanggal() {
    return {};
  }
}
