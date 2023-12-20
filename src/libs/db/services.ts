"use server";

import { Habit } from "@prisma/client";
import prisma from "./prisma";

export const getKategori = async () => {
  return await prisma.kategori.findMany();
};

export const createHabit = async (habit: Omit<Habit, "id">) => {
  const req = await prisma.habit.create({
    data: habit,
  });

  return req ? true : false;
};

export const getHabits = async (userId: number) => {
  return await prisma.habit.findMany({
    where: { userId },
    include: {
      kategori: true,
    },
  });
};

export const getHabit = async (habitId: number) => {
  return await prisma.habit.findFirst({
    where: { id: habitId },
    include: {
      kategori: true,
    },
  });
};

export const getToday = async (habitId: number) => {
  return await prisma.hari.findFirst({
    where: {
      habitId,
      tanggal: new Date(),
    },
    include: {
      habit: {
        include: {
          kategori: true,
        },
      },
    },
  });
};

export type TodayWithHabit = ReturnType<typeof getToday>;
export type HabitWithKategori = ReturnType<typeof getHabit>;
