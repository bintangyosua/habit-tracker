"use client";

import { Theme } from "@radix-ui/themes";

type Props = {
  children?: React.ReactNode;
};

export const NextAuthProvider = ({ children }: Props) => {
  return <Theme appearance="dark">{children}</Theme>;
};
