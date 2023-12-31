"use client";

import { IconType } from "react-icons";
import React, { ReactElement } from "react";
import { Kategori } from "@prisma/client";

export function IconLayout({
  Icon,
  kategori,
}: {
  Icon: IconType;
  kategori: Kategori | null;
}) {
  return <Icon style={{ color: kategori?.warna || "gray" }} size={30} />;
}
