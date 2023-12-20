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
  return await prisma.habit.findMany({ where: { userId } });
};
