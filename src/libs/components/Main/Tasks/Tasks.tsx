import { GiHealthNormal } from "react-icons/gi";
import { IconType } from "react-icons";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default async function Tasks() {
  return (
    <div className="flex flex-col py-5">
      <Task icon={GiHealthNormal} title="Ngerjain ADS" checked={true} />
      <Task icon={GiHealthNormal} title="Main Game" checked={false} />
    </div>
  );
}

function Task(props: { icon: IconType; title: string; checked: boolean }) {
  return (
    <div className="flex justify-between space-x-5 items-center border-b border-zinc-500 py-3">
      {props.icon({
        color: "green",
        size: 30,
      })}
      <div className="flex flex-col text-left w-full">
        <p>{props.title}</p>
        <p className="text-sm text-green-500">Task</p>
      </div>
      <AiOutlineCheckCircle
        color={props.checked ? "green" : "gray"}
        size={40}
      />
    </div>
  );
}
