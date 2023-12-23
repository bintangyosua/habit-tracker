"use server";

import { PlusIcon } from "@heroicons/react/24/outline";
import { Title } from "@tremor/react";
import TableKategori from "./TableKategori";
import { Button, Theme } from "@radix-ui/themes";
import TambahKategori from "./TambahKategori";

export default async function Kategori() {
  return (
    <Theme appearance="light">
      <div className="flex justify-between space-x-3">
        <Title className="text-3xl">Manajemen Kategori</Title>
        <TambahKategori />
      </div>
      <TableKategori />
    </Theme>
  );
}
