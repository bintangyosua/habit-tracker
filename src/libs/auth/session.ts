"use server";

import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { getUser } from "../components/Navbar/actions";

export type SessionType = {
  email: string;
  isSignedIn: boolean;
  id: number;
};

export async function setSession(email: string) {
  const session = await getIronSession<SessionType>(cookies(), {
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
  const session = getIronSession<SessionType>(cookies(), {
    password: "vsfZ7hdzLUmW6feA46Bi1jBZp1pHRgx6",
    cookieName: "habifier",
  });

  const data: SessionType = {
    email: (await session).email,
    id: (await session).id,
    isSignedIn: (await session).isSignedIn,
  };

  return data;
}

export async function deleteSession() {
  const session = await getIronSession<SessionType>(cookies(), {
    password: "vsfZ7hdzLUmW6feA46Bi1jBZp1pHRgx6",
    cookieName: "habifier",
  });

  session.destroy();
}
