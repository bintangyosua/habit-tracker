"use server";

import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { getUser } from "../components/Navbar/actions";

export type Session = {
  email: string;
  isSignedIn: boolean;
  id: number;
};

export async function setSession(email: string) {
  const session = await getIronSession<Session>(cookies(), {
    password: "vsfZ7hdzLUmW6feA46Bi1jBZp1pHRgx6",
    cookieName: "habifier",
  });

  session.email = email;
  session.isSignedIn = true;

  const user = await getUser(email);
  session.id = user!.id;

  await session.save();
}

export async function getSession() {
  const session = getIronSession<Session>(cookies(), {
    password: "vsfZ7hdzLUmW6feA46Bi1jBZp1pHRgx6",
    cookieName: "habifier",
  });

  return session;
}

export async function deleteSession() {
  const session = await getIronSession<Session>(cookies(), {
    password: "vsfZ7hdzLUmW6feA46Bi1jBZp1pHRgx6",
    cookieName: "habifier",
  });

  session.destroy();
}
