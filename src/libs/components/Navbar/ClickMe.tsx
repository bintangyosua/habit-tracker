"use client";

import { useSession } from "@/libs/zustand/Session";
import { useEffect } from "react";

export default function ClickMe() {
  const clientSession = useSession((state) => state.session);
  return <button onClick={() => {}}>Click Me</button>;
}
