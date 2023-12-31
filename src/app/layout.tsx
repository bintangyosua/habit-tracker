import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "./providers";
import "@radix-ui/themes/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Habifier",
  description: "Website pengelola habit dan tugas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
