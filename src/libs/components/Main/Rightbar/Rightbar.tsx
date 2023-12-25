"use server";

import Calendar2 from "@/libs/components/Calendar2/Calendar2";
import NewHabit from "./NewHabit";
import NewTask from "./NewTask";
import { Theme } from "@radix-ui/themes";
import { getKategori } from "@/libs/db/services";

export default async function Rightbar() {
  const kategori = await getKategori();
  return (
    <div className="w-full mx-auto flex-col gap-3 flex">
      <div className="flex gap-1">
        <NewHabit />
        <NewTask kategori={kategori} />
      </div>
      <Calendar2 />
    </div>
  );
}
