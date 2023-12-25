"use server";

import { Habit, Kategori, Hari, Task, User } from "@prisma/client";
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

export const getUsers = async () => {
  return await prisma.user.findMany();
};

export const createCategory = async (data: Omit<Kategori, "id">) => {
  return await prisma.kategori.create({
    data,
  });
};

export const editCategory = async (data: Kategori) => {
  return await prisma.kategori.update({
    where: {
      id: data.id,
    },
    data,
  });
};

export const updateHabit = async (data: Habit) => {
  return await prisma.habit.update({
    where: {
      id: data.id,
    },
    data,
  });
};

export const createTask = async (data: Omit<Task, "id">) => {
  return await prisma.task.create({
    data,
  });
};

export const getTasks = async (userId: number) => {
  return await prisma.task.findMany({
    where: {
      userId,
    },
    include: {
      kategori: true,
    },
  });
};

export const checkTask = async (
  taskId: number,
  checked: boolean,
  checkedAt: Date | null
) => {
  if (!checked) {
    checkedAt = null;
  }
  return await prisma.task.update({
    where: {
      id: taskId,
    },
    data: {
      checked: checked,
      checkedAt: checkedAt,
    },
  });
};

export const deleteTask = async (taskId: number) => {
  return await prisma.task.delete({
    where: {
      id: taskId,
    },
  });
};

export const updateTask = async (task: Omit<Task, "checked" | "checkedAt">) => {
  return await prisma.task.update({
    where: {
      id: task.id,
    },
    data: {
      deadline: task.deadline,
      deskripsi: task.deskripsi,
      kategoriId: task.kategoriId,
      nama: task.nama,
    },
  });
};

export const getUser = async (id: number) => {
  return await prisma.user.findFirst({
    where: {
      id,
    },
  });
};

export const updateUser = async (
  user: Omit<User, "last_login" | "password">
) => {
  return await prisma.user.update({
    where: {
      id: user.id,
    },
    data: user,
  });
};

export const getAllHari = async () => {
  return await prisma.hari.findMany({
    orderBy: {
      checkedAt: "desc",
    },
    select: {
      habit: true,
      checkedAt: true,
      tanggal: true,
      habitId: true,
      checked: true,
    },
  });
};

export type HariWithHabit = {
  habit: Habit;
} & Hari;

export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      checkedAt: "desc",
    },
    select: {
      id: true,
      nama: true,
      deskripsi: true,
      deadline: true,
      userId: true,
      checked: true,
      checkedAt: true,
      kategoriId: true,
      kategori: true,
    },
  });
};

export type TasksWithKategori = {
  kategori: Kategori;
} & Task;

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
export type TaskWithKategori = {
  kategori: Kategori;
} & Task;
