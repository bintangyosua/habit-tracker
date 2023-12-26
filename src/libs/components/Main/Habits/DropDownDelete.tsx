"use client";

import { HabitWithKategori, updateHabit } from "@/libs/db/services";
import { CaretDownIcon } from "@radix-ui/react-icons";
import {
  AlertDialog,
  Box,
  Button,
  DropdownMenu,
  Flex,
  Popover,
  Select,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import prisma from "@/libs/db/prisma";
import { BiDotsVertical } from "react-icons/bi";
import { deleteHabitById } from "./actions";
import { useHabit } from "@/libs/zustand/Habit";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Habit, Kategori } from "@prisma/client";
import { getSession } from "@/libs/auth/session";
import { toZeroZero } from "../Today/actions";

export default function DropDownDelete({
  habit,
  kategori,
}: {
  habit: HabitWithKategori;
  kategori: Kategori[];
}) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <button className="appearance-none">
          <BiDotsVertical size={20} />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content size={"2"} className="w-48">
        <div className="px-3">
          <EditHabit habit={habit} kategori={kategori} />
        </div>
        <DropdownMenu.Separator />
        <div className="px-3">
          <DeleteAlert habit={habit} />
        </div>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

function EditHabit(props: { habit: HabitWithKategori; kategori: Kategori[] }) {
  const [habit, setHabit] = useState<Omit<Habit, "id" | "kategoriId">>({
    nama: props.habit.nama,
    deskripsi: props.habit.deskripsi,
    userId: props.habit.userId,
    tanggalMulai: props.habit.tanggalMulai,
  });

  const { newHabit, setNewHabit } = useHabit((state) => state);

  const router = useRouter();

  const [select, setSelect] = useState<number>(props.habit.kategoriId);

  function handleSelectChange(e: any) {
    setSelect(e);
  }

  async function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    const session = await getSession();
    setHabit({
      ...habit,
      [name]: name === "tanggalMulai" ? toZeroZero(new Date(value)) : value,
      userId: session.id,
    });
  }

  async function handleSubmit() {
    if (enabled) {
      try {
        habit.tanggalMulai.setDate(habit.tanggalMulai.getDate());
        const editedHabit = await updateHabit({
          id: props.habit.id,
          nama: habit.nama,
          kategoriId: parseInt(String(select)),
          deskripsi: habit.deskripsi,
          userId: habit.userId,
          tanggalMulai: habit.tanggalMulai,
        });
        if (editedHabit) {
          toast.success(`Berhasil mengedit habit ${habit.nama}`);
          router.refresh();
        } else {
          toast.error(`Gagal mengedit habit ${habit.nama}`);
        }
      } catch (error) {
        toast.error(`Gagal mengedit habit ${habit.nama}`);
      }
    }
  }

  const enabled =
    habit.nama &&
    habit.nama != " " &&
    habit.deskripsi &&
    habit.deskripsi != " ";

  return (
    <Popover.Root>
      <Popover.Trigger className="w-full text-left">
        <Button variant="ghost" className="p-5 text-left">
          <div className="w-full flex justify-between">
            <div className="w-1/2">Edit</div>
            <div className="w-1/2 text-gray-300">Ubah Habit</div>
          </div>
        </Button>
      </Popover.Trigger>
      <Popover.Content style={{ width: 360 }}>
        <Flex gap="3">
          <Box grow="1">
            <h1 className="font-semibold">Edit Habit</h1>
            <p>Isi form di bawah ini</p>
            <Flex direction="column" gap="3">
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Nama Habit
                </Text>
                <TextField.Input
                  placeholder="Masukkan nama habit"
                  name="nama"
                  onChange={handleInputChange}
                  defaultValue={props.habit.nama}
                />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Kategori
                </Text>
                <Select.Root
                  onValueChange={handleSelectChange}
                  name="kategoriId"
                  defaultValue={`${props.habit.kategoriId}`}>
                  <Select.Trigger />
                  <Select.Content position="popper" variant="soft">
                    {props.kategori &&
                      props.kategori.map((val) => (
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
                  name="deskripsi"
                  defaultValue={props.habit.deskripsi}
                  onChange={handleInputChange}
                />
              </label>
              <label className="w-2/4">
                <Text as="div" size="2" mb="1" weight="bold">
                  Tanggal Mulai
                </Text>
                <TextField.Input
                  type="date"
                  placeholder="Masukkan tanggal mulai"
                  name="tanggalMulai"
                  defaultValue={`${props.habit.tanggalMulai.getFullYear()}-${
                    props.habit.tanggalMulai.getMonth() + 1
                  }-${props.habit.tanggalMulai.getDate()}`}
                  onChange={handleInputChange}
                />
              </label>
            </Flex>
            <Flex gap="3" mt="3" justify="end">
              <Popover.Close>
                <Button
                  size="1"
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
                  Edit
                </Button>
              </Popover.Close>
            </Flex>
          </Box>
        </Flex>
      </Popover.Content>
    </Popover.Root>
  );
}

function DeleteAlert({ habit }: { habit: HabitWithKategori }) {
  const router = useRouter();

  async function handleDelete() {
    deleteHabitById(habit);
    router.refresh();
    toast.error("Berhasil menghapus habit");
  }

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger className="w-full text-left">
        <Button color="red" variant="ghost" className="p-5 text-left">
          <div className="w-full">Hapus</div>
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content style={{ maxWidth: 450 }}>
        <AlertDialog.Title>Hapus Habit {habit.nama}</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Apakah kamu yakin?
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button variant="solid" color="red" onClick={() => handleDelete()}>
              Hapus
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}
