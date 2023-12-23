"use client";

import { Button, Flex, Popover, Text, TextField } from "@radix-ui/themes";
import { IoAddOutline } from "react-icons/io5";
import { useState } from "react";
import { createCategory } from "@/libs/db/services";
import { toast } from "react-toastify";
import { useKategori } from "@/libs/zustand/Kategori";
import { useRouter } from "next/navigation";

export default function TambahKategori() {
  const [color, setColor] = useState("000000");
  const [nama, setNama] = useState("");

  const router = useRouter();

  const { setNewKategori } = useKategori((state) => state);
  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button variant="classic" disabled>
          <IoAddOutline width="16" height="16" />
          Tambah
        </Button>
      </Popover.Trigger>
      <Popover.Content style={{ width: 240 }} className="space-y-3">
        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Nama Kategori
            </Text>
            <TextField.Input
              placeholder="Enter your full name"
              onChange={(e) => setNama(e.target.value)}
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Warna
            </Text>
            <Flex justify={"between"} gap={"3"}>
              <TextField.Input
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
        </Flex>
        <Flex direction="column" align="stretch">
          <Popover.Close>
            <Button
              size="2"
              onClick={async () => {
                await createCategory({ nama, warna: color });
                router.refresh();
                toast.success("Berhasil membuat kategori baru");
              }}>
              Simpan
            </Button>
          </Popover.Close>
        </Flex>
      </Popover.Content>
    </Popover.Root>
  );
}
