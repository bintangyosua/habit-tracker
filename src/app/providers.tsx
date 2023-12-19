"use client";

import { SessionProvider } from "next-auth/react";
import { Theme } from "@radix-ui/themes";
import { ToastContainer } from "react-toastify";

type Props = {
  children?: React.ReactNode;
};

export const NextAuthProvider = ({ children }: Props) => {
  return (
    <SessionProvider>
      <Theme appearance="dark">
        <ToastContainer position="top-center" />
        {children}
      </Theme>
    </SessionProvider>
  );
};
