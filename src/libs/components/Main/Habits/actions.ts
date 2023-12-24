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

export const getToday = async (habitId: number, date: Date) => {
  return await prisma.hari.findFirst({
    where: {
      habitId,
      tanggal: date,
    },
  });
};

export const getTodaysAround = async (habitId: number, date: Date) => {
  const offsets = [-6, -5, -4, -3, -2, -1, 0];

  const todays = offsets.map(async (offset) => {
    const newDate = new Date(date);
    const newToday = await prisma.hari.findFirst({
      where: {
        tanggal: newDate,
      },
    });
    newDate.setDate(date.getDate() + offset);
    return newToday;
  });

  return todays;
};
