"use server";

import { getKategori } from "@/libs/db/services";
import SubmitHabit from "./SubmitHabit";

export default async function NewHabit() {
  const kategori = await getKategori();
  return <SubmitHabit kategori={kategori} />;
}
