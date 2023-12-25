"use client";

import { Kategori, Task } from "@prisma/client";
import {
  Box,
  Button,
  Flex,
  Popover,
  TextArea,
  TextField,
  Text,
  Select,
} from "@radix-ui/themes";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "@/libs/auth/session";
import { toast } from "react-toastify";
import { createTask, updateTask } from "@/libs/db/services";
import { format } from "date-fns";

export default function EditTask(props: { kategori: Kategori[]; task: Task }) {
  const currentDate = new Date();
  currentDate.setHours(26);
  const [kategori, setKategori] = useState<Kategori[]>(props.kategori);
  const [task, setTask] = useState<
    Omit<Task, "id" | "kategoriId" | "checked" | "checkedAt">
  >({
    nama: props.task.nama,
    deskripsi: props.task.deskripsi,
    userId: props.task.userId,
    deadline: props.task.deadline,
  });

  const [editHover, setEditHover] = useState(false);
  const router = useRouter();

  const [select, setSelect] = useState<number>(props.task.kategoriId);

  function handleSelectChange(e: any) {
    setSelect(e);
  }

  async function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    const session = await getSession();
    setTask({
      ...task,
      [name]: name === "deadline" ? new Date(value) : value,
      userId: session.id,
    });
    console.log(task);
  }

  async function handleSubmit() {
    if (enabled) {
      if (
        await updateTask({
          id: props.task.id,
          nama: task.nama,
          kategoriId: parseInt(String(select)),
          deskripsi: task.deskripsi,
          userId: task.userId,
          deadline: task.deadline,
        })
      ) {
        toast.success(`Berhasil mengedit task ${task.nama}.`);
        router.refresh();
      } else {
        toast.error(`Gagal mengedit task ${task.nama}.`);
      }
    } else {
      toast.error(`Gagal mengedit task ${task.nama}.`);
    }
  }

  const enabled =
    task.nama && task.nama != " " && task.deskripsi && task.deskripsi != " ";

  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button
          variant="ghost"
          size={"1"}
          color="yellow"
          style={{ padding: 0 }}>
          <span
            className={`${editHover ? "cursor-pointer" : "cursor-default"}`}
            onMouseOver={() => {
              setEditHover(true);
            }}
            onMouseOut={() => {
              setEditHover(false);
            }}>
            Edit
          </span>
        </Button>
      </Popover.Trigger>
      <Popover.Content style={{ width: 360 }}>
        <Flex gap="3">
          <Box grow="1">
            <Flex gap={"2"} direction={"column"}>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Nama Tugas
                </Text>
                <TextField.Input
                  placeholder="Masukkan nama tugas"
                  name="nama"
                  color="yellow"
                  defaultValue={task.nama}
                  onChange={handleInputChange}
                />
              </label>
              <label className="w-1/2 block">
                <Text as="div" size="2" mb="1" weight="bold">
                  Deadline
                </Text>
                <TextField.Input
                  placeholder="Masukkan deadline"
                  defaultValue={format(task.deadline, "yyyy-MM-dd'T'HH:mm")}
                  name="deadline"
                  //   defaultValue={currentDate.toISOString().slice(0, 16)}
                  type="datetime-local"
                  color="yellow"
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
                  defaultValue={`${select}`}>
                  <Select.Trigger color="yellow" />
                  <Select.Content
                    position="popper"
                    color="yellow"
                    variant="soft">
                    {kategori &&
                      kategori.map((val) => (
                        <Select.Item
                          color="green"
                          key={val.id}
                          value={`${val.id}`}>
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
                  color="yellow"
                  defaultValue={task.deskripsi}
                  name="deskripsi"
                  onChange={handleInputChange}
                />
              </label>

              <Flex gap="3" mt="3" justify="between">
                <Popover.Close>
                  <Button
                    color="yellow"
                    size="1"
                    variant="soft"
                    onClick={handleSubmit}
                    disabled={!enabled}>
                    Edits Tugas
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
                  </Button>
                </Popover.Close>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Popover.Content>
    </Popover.Root>
  );
}
