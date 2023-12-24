"use client";

import { createCategory, editCategory } from "@/libs/db/services";
import { Kategori } from "@prisma/client";
import {
  Box,
  Button,
  Flex,
  Popover,
  TextField,
  Text,
  IconButton,
  TextArea,
} from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { toast } from "react-toastify";

export default function EditKategori({
  kategori,
  children,
}: {
  kategori: Kategori;
  children: React.ReactElement;
}) {
  const [color, setColor] = useState(kategori.warna);
  const [nama, setNama] = useState(kategori.nama);
  const [svgIcon, setSvgIcon] = useState(kategori.svgIcon);

  const router = useRouter();
  return (
    <Popover.Root>
      <Popover.Trigger>{children}</Popover.Trigger>
      <Popover.Content style={{ width: 360 }}>
        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Nama Kategori
            </Text>
            <TextField.Input
              defaultValue={kategori.nama}
              placeholder="Masukkan nama kategori"
              onChange={(e) => setNama(e.target.value)}
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Warna
            </Text>
            <Flex justify={"between"} gap={"3"}>
              <TextField.Input
                defaultValue={kategori.warna}
                type="text"
                placeholder="Masukkan"
                onChange={(e) => setColor(e.target.value)}
              />
              <div
                className="w-5/6 min-h-max  flex justify-center items-center"
                style={{
                  backgroundColor: color,
                  color: color,
                }}></div>
            </Flex>
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              SVG Icon
            </Text>
            <TextArea
              placeholder="Masukkan path svg icon"
              onChange={(e) => setSvgIcon(e.target.value)}
              defaultValue={kategori.svgIcon}
              rows={10}
            />
          </label>
          <Popover.Close>
            <Button
              size="2"
              color="violet"
              onClick={async () => {
                await editCategory({
                  id: kategori.id,
                  nama,
                  warna: color,
                  svgIcon,
                });
                router.refresh();
                toast.success("Berhasil mengedit kategori");
              }}>
              Simpan
            </Button>
          </Popover.Close>
        </Flex>
      </Popover.Content>
    </Popover.Root>
  );
}
