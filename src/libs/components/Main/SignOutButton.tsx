"use client";

import { Button } from "@radix-ui/themes";
import { CiLogout } from "react-icons/ci";
import SignOut from "../Navbar/SignOut";
import { deleteSession } from "@/libs/auth/session";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
  const router = useRouter();
  return (
    <Button
      onClick={async () => {
        await deleteSession();
        router.push("/");
      }}>
      <CiLogout size={20} />
      <span>Sign Out</span>
    </Button>
  );
}
