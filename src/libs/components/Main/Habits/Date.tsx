"use client";

export default function Date({
  day,
  dateNow,
  active,
}: {
  day: string;
  dateNow: number;
  active: boolean;
}) {
  return (
    <div className="flex flex-col items-center space-y-1">
      <span className="text-zinc-300">{day}</span>
      <span
        className={` ${
          active
            ? "bg-green-900 border-green-700"
            : "bg-zinc-900 border-zinc-700"
        }  border-[3px] w-10 h-10 rounded-xl text-center flex justify-center items-center`}>
        <span>{dateNow}</span>
      </span>
    </div>
  );
}
