"use client";

import { Kategori } from "@prisma/client";
import { TrashIcon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";
import { BiSolidEdit } from "react-icons/bi";
import EditKategori from "./EditKategori";

export default function ActionButtons({ kategori }: { kategori: Kategori }) {
  return (
    <div className="flex gap-3">
      <EditKategori kategori={kategori}>
        <IconButton color="violet">
          <BiSolidEdit width="18" height="18" />
        </IconButton>
      </EditKategori>
    </div>
  );
}
