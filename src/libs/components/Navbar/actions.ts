"use server";

import prisma from "@/libs/db/prisma";
import { User } from "@prisma/client";

export async function createUser(data: Omit<User, "id">) {
  await prisma.user.create({
    data,
  });
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
    return user ? true : false;
  } catch (error) {
    return false;
  }
}
