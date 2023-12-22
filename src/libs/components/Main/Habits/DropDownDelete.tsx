"use client";

import { HabitWithKategori } from "@/libs/db/services";
import { CaretDownIcon } from "@radix-ui/react-icons";
import {
  AlertDialog,
  Button,
  DropdownMenu,
  Flex,
  Text,
} from "@radix-ui/themes";
import { BiDotsVertical } from "react-icons/bi";
import { deleteHabitById } from "./actions";
import { useHabit } from "@/libs/zustand/Habit";

export default function DropDownDelete({
  habit,
}: {
  habit: HabitWithKategori;
}) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <button className="appearance-none">
          <BiDotsVertical size={20} />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content size={"2"}>
        <DropdownMenu.Item shortcut="Ubah Data">Edit</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <div className="px-3">
          <DeleteAlert habit={habit} />
        </div>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

function DeleteAlert({ habit }: { habit: HabitWithKategori }) {
  const { setNewHabit } = useHabit((state) => state);

  async function handleDelete() {
    deleteHabitById(habit);
    setNewHabit(true);
  }

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger className="w-full text-left">
        <Button color="red" variant="ghost" className="p-5 text-left">
          <div className="w-full">Hapus</div>
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content style={{ maxWidth: 450 }}>
        <AlertDialog.Title>Hapus Habit _____</AlertDialog.Title>
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
