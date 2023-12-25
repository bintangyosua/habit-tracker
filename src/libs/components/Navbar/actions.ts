"use server";

import prisma from "@/libs/db/prisma";
import { User } from "@prisma/client";
import { toZeroZero } from "../Main/Today/actions";

export async function createUser(data: Omit<User, "id" | "last_login">) {
  try {
    const req = await prisma.user.create({
      data,
    });

    return req ? true : false;
  } catch (error) {
    return false;
  }
}

export async function getEmails(email: string) {
  const response = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  return response ? true : false;
}

export async function signIn(email: string, password: string) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email,
        password,
      },
    });
    if (user) {
      const date = new Date();
      date.setHours(date.getHours() + 7);
      await prisma.user.update({
        where: {
          email,
        },
        data: {
          last_login: date,
        },
      });
      return true;
    }

    return false;
  } catch (error) {
    return false;
  }
}

export async function getUser(email: string) {
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  return user;
}

export async function emailExist(email: string) {
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  return user ? true : false;
}
