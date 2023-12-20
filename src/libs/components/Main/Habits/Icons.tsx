"use server";

import { IconType } from "react-icons";
import React, { ReactElement } from "react";
import { Kategori } from "@prisma/client";

export async function IconLayout({
  Icon,
  kategori,
}: {
  Icon: IconType;
  kategori: Kategori | null;
}) {
  return <Icon style={{ color: kategori?.warna || "gray" }} size={30} />;
}
