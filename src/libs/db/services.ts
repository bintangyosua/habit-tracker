"use server";

import { Habit, Kategori, Hari } from "@prisma/client";
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

const currentDate = new Date();
currentDate.setHours(0 + 7, 0, 0, 0);

export const getToday = async (habitId: number, date: Date) => {
  return await prisma.hari.findFirst({
    where: {
      habitId,
      tanggal: date,
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

export const getTodays = async (habitId: number) => {
  return await prisma.hari.findMany({
    where: {
      habitId,
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

export const createToday = async (today: Hari) => {
  today.tanggal = currentDate;
  return await prisma.hari.create({
    data: today,
  });
};

export const deleteToday = async (habitId: number, tanggal: Date) => {
  return await prisma.hari.delete({
    where: {
      habitId_tanggal: {
        habitId,
        tanggal,
      },
    },
  });
};

// export type TodayWithHabit = ReturnType<typeof getToday>;
// export type HabitWithKategori = ReturnType<typeof getHabit>;
export type HabitWithKategori = {
  kategori: Kategori;
} & Habit;
export type TodayWithHabit = {
  habit: {
    kategori: Kategori;
  } & Habit;
} & Hari;
