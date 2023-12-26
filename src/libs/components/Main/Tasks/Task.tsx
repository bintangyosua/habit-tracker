"use client";

import { TaskWithKategori, checkTask, deleteTask } from "@/libs/db/services";
import Svg from "../../SVGLayouts/Svg";
import { format } from "date-fns";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AlertDialog, Button, Flex, Text } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Kategori, Task as TaskType } from "@prisma/client";
import { toast } from "react-toastify";
import EditTask from "./EditTask";

export default function Task(props: {
  checked: boolean;
  task: TaskWithKategori;
  kategori: Kategori[];
}) {
  const router = useRouter();
  const [hover, setHover] = useState(false);
  return (
    <div className="flex justify-between space-x-5 items-center border-b border-zinc-500 py-3">
      <Svg
        color={props.task.kategori.warna}
        path={props.task.kategori.svgIcon}
      />
      <div className="flex flex-col text-left w-full">
        <p>
          {props.task.nama}{" "}
          <span className="text-sm text-gray-300">{`${format(
            props.task.deadline,
            "dd MMM yyyy HH:mm"
          )}`}</span>
        </p>
        <div className="text-sm text-green-500 flex items-center space-x-1">
          <div>{props.task.kategori.nama}</div>
          <div className="text-gray-400">{props.task.deskripsi}</div>{" "}
          <EditTask task={props.task} kategori={props.kategori} />
          <DeleteTask task={props.task} />
        </div>
      </div>
      <span
        className={`${hover ? "cursor-pointer" : "cursor-default"}`}
        onMouseOver={() => {
          setHover(true);
        }}
        onMouseOut={() => {
          setHover(false);
        }}
        onClick={async () => {
          const date = new Date();
          date.setHours(date.getHours() + 7);
          await checkTask(props.task.id, !props.task.checked, date);
          router.refresh();
        }}>
        <AiOutlineCheckCircle
          color={
            props.task.checked
              ? hover
                ? "#33B074"
                : "#2F7C57"
              : hover
              ? "#7B7B7B"
              : "#606060"
          }
          size={40}
        />
      </span>
    </div>
  );
}

function DeleteTask({ task }: { task: TaskType }) {
  const [deleteHover, setDeleteHover] = useState(false);
  const route = useRouter();

  async function handleSubmit() {
    await deleteTask(task.id);
    toast.success(`Berhasil menghapus task ${task.nama}`);
    route.refresh();
  }
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red" variant="ghost" size={"1"} style={{ padding: 0 }}>
          <span
            className={`${deleteHover ? "cursor-pointer" : "cursor-default"}`}
            onMouseOver={() => {
              setDeleteHover(true);
            }}
            onMouseOut={() => {
              setDeleteHover(false);
            }}>
            Hapus
          </span>
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content style={{ maxWidth: 450 }}>
        <AlertDialog.Title>Hapus Task</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Apakah kamu yakin ingin menghapus task <b>{task.nama}</b>
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button variant="solid" color="red" onClick={handleSubmit}>
              Hapus Task
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}
