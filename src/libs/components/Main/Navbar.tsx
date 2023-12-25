"use server";

import { BsReverseLayoutSidebarInsetReverse } from "react-icons/bs";
import Title from "./Title";
import { getSession } from "@/libs/auth/session";
import { getUser } from "../Navbar/actions";
import SignOutButton from "./SignOutButton";

export default async function Navbar() {
  const session = await getSession();
  const user = await getUser(session.email);
  return (
    <div className="bg-zinc-900 max-w-full">
      <div className="flex flex-row justify-between py-4 px-3 xl:w-2/3 mx-auto">
        <div className="flex items-center space-x-5">
          <BsReverseLayoutSidebarInsetReverse size={30} color="#dc2626" />
          <a href="/">
            <Title />
          </a>
        </div>
        <div className="flex items-center gap-5">
          <span>{user?.nama}</span>
          <SignOutButton />
        </div>
      </div>
    </div>
  );
}
