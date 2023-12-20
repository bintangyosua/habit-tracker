"use server";
import prisma from "@/libs/db/prisma";

export const getHabits = async (userId: number) => {
  return await prisma.habit.findMany({ where: { userId } });
};

export const getHabitsCateogryById = async (id: number) => {
  return await prisma.kategori.findFirst({
    where: {
      id,
    },
  });
};
