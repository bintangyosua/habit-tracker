"use client";

import { useSession } from "@/libs/zustand/Session";
import { Theme } from "@radix-ui/themes";
import { useEffect } from "react";

type Props = {
  children?: React.ReactNode;
};

export const NextAuthProvider = ({ children }: Props) => {
  const setSession = useSession((state) => state.setSession);

  useEffect(() => {
    setSession();
  }, []);
  return <Theme appearance="dark">{children}</Theme>;
};
