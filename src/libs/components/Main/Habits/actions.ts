"use server";
import prisma from "@/libs/db/prisma";
import { HabitWithKategori } from "@/libs/db/services";

export const getHabitsCateogryById = async (id: number) => {
  return await prisma.kategori.findFirst({
    where: {
      id,
    },
  });
};

export const deleteHabitById = async (habit: HabitWithKategori) => {
  return await prisma.habit.delete({
    where: {
      id: habit.id,
    },
  });
};
