"use client";

import { deleteSession } from "@/libs/auth/session";
import { Button } from "@radix-ui/themes";
import { toast } from "react-toastify";

export default function SignOut() {
  return (
    <Button
      color="crimson"
      size={"2"}
      variant="soft"
      onClick={() => {
        deleteSession();
        toast.error("Berhasil Sign Out");
      }}>
      Sign Out
    </Button>
  );
}
