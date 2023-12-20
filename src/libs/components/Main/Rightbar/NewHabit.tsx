"use client";

import prisma from "@/libs/db/prisma";
import { Habit, Kategori } from "@prisma/client";
import { ChatBubbleIcon } from "@radix-ui/react-icons";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Flex,
  Popover,
  TextArea,
  Text,
  Dialog,
  TextField,
  Select,
} from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { getKategori } from "./actions";
import { createHabit } from "@/libs/db/services";
import { toast } from "react-toastify";
import { getSession } from "@/libs/auth/session";

export default function NewHabit() {
  const [kategori, setKategori] = useState<Kategori[]>();
  const [habit, setHabit] = useState<Omit<Habit, "id" | "kategoriId">>({
    nama: " ",
    deskripsi: " ",
    userId: 0,
  });

  const [select, setSelect] = useState<number>(
    typeof kategori === "undefined" ? 1 : kategori[0].id
  );

  useEffect(() => {
    getKategori().then((res) => setKategori(res));
  }, []);

  function handleSelectChange(e: any) {
    setSelect(e);
  }

  async function handleInputChange(e: any) {
    const { name, value } = e.target;

    const session = await getSession();
    setHabit({
      ...habit,
      [name]: value,
      userId: session.id,
    });
  }

  async function handleSubmit() {
    if (enabled) {
      (await createHabit({
        nama: habit.nama,
        kategoriId: parseInt(String(select)),
        deskripsi: habit.deskripsi,
        userId: habit.userId,
      }))
        ? toast.success("Berhasil membuat habit baru.")
        : toast.error("Gagal membuat habit baru.");
    } else {
      toast.error("Gagal membuat habit baru.");
    }
  }

  const enabled =
    habit.nama &&
    habit.nama != " " &&
    habit.deskripsi &&
    habit.deskripsi != " ";

  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button variant="soft" color="green" className="w-full">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"></path>
          </svg>
          Tambah Habit Baru
        </Button>
      </Popover.Trigger>
      <Popover.Content style={{ width: 360 }}>
        <Flex gap="3">
          <Avatar
            size="2"
            src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
            fallback="A"
            radius="full"
          />
          <Box grow="1">
            <h1 className="font-semibold">Tambah Habit</h1>
            <p>Isi form di bawah ini</p>
            <Flex direction="column" gap="3">
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Nama Habit
                </Text>
                <TextField.Input
                  color="green"
                  placeholder="Masukkan nama habit"
                  name="nama"
                  onChange={handleInputChange}
                />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Kategori
                </Text>
                <Select.Root
                  value={`${select}`}
                  onValueChange={handleSelectChange}
                  name="kategoriId"
                  defaultValue={`${
                    typeof kategori === "undefined" ? 1 : kategori[0].id
                  }`}>
                  <Select.Trigger />
                  <Select.Content
                    position="popper"
                    color="green"
                    variant="soft">
                    {kategori &&
                      kategori.map((val) => (
                        <Select.Item key={val.id} value={`${val.id}`}>
                          {val.nama}
                        </Select.Item>
                      ))}
                  </Select.Content>
                </Select.Root>
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Deskripsi
                </Text>
                <TextArea
                  placeholder="Tambahkan deskripsi"
                  color="green"
                  name="deskripsi"
                  onChange={handleInputChange}
                />
              </label>
            </Flex>
            <Flex gap="3" mt="3" justify="end">
              <Popover.Close>
                <Button
                  size="1"
                  color="green"
                  variant="soft"
                  type="submit"
                  onClick={handleSubmit}
                  disabled={!enabled}>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"></path>
                  </svg>
                  Tambah
                </Button>
              </Popover.Close>
            </Flex>
          </Box>
        </Flex>
      </Popover.Content>
    </Popover.Root>
  );
}