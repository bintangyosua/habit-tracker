import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { Session } from "./session";

export function getSession() {
  const session = getIronSession<Session>(cookies(), {
    password: "vsfZ7hdzLUmW6feA46Bi1jBZp1pHRgx6",
    cookieName: "habifier",
  });

  return session;
}
