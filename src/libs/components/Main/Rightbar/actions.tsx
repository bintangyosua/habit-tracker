"use server";

import prisma from "@/libs/db/prisma";

export const getKategori = async () => {
  return await prisma.kategori.findMany();
};
