"use server";

import { Habit } from "@prisma/client";
import prisma from "./prisma";
import getDay from "date-fns/getDay/index.js";

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
  const date = new Date();
  const currentDate = new Date(
    Date.UTC(
      2023,
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds()
    )
  );
  currentDate.setHours(0, 0, 0, 0);
  console.log(getDay(currentDate));
  return await prisma.hari.findFirst({
    where: {
      habitId,
      // tanggal: currentDate,
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
