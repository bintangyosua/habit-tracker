"use client";

import {
  deleteSession as deleteServerSession,
  getSession,
} from "@/libs/auth/session";
import { Button } from "@radix-ui/themes";
import { toast } from "react-toastify";
import { useSession } from "../../zustand/Session";

export default function SignOut() {
  const { deleteSession } = useSession((state) => state);
  return (
    <Button
      color="crimson"
      size={"2"}
      variant="soft"
      onClick={async () => {
        await deleteServerSession();
        toast.error("Berhasil Sign Out");
      }}>
      Sign Out
    </Button>
  );
}
