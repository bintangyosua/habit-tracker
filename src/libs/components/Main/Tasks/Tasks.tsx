"use server";

import { GiHealthNormal } from "react-icons/gi";
import { IconType } from "react-icons";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { TaskWithKategori, getKategori, getTasks } from "@/libs/db/services";
import { getSession } from "@/libs/auth/session";
import Svg from "../../SVGLayouts/Svg";
import { format } from "date-fns";
import { Text } from "@radix-ui/themes";
import Task from "./Task";
import CalloutComponent from "../Atomic/CalloutComponent";

export default async function Tasks() {
  const session = await getSession();
  const tasks = await getTasks(session.id);
  const kategori = await getKategori();
  return (
    <div className="flex flex-col">
      {/* <Task title="Ngerjain ADS" checked={true} /> */}
      {tasks.length > 0 ? (
        tasks.map((task, key) => (
          <Task key={key} task={task} checked={true} kategori={kategori} />
        ))
      ) : (
        <CalloutComponent message="Belum memiliki Task" />
      )}
    </div>
  );
}
