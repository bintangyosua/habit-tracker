import { GiHealthNormal } from "react-icons/gi";
import { IconType } from "react-icons";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function Habits() {
  return (
    <div className="flex flex-col py-5">
      <Habit icon={GiHealthNormal} title="Evening Bath" checked={true} />
      <Habit icon={GiHealthNormal} title="Reading Book" checked={true} />
      <Habit icon={GiHealthNormal} title="Gymnasium" checked={false} />
      <Habit icon={GiHealthNormal} title="Meditation" checked={false} />
    </div>
  );
}

function Habit(props: { icon: IconType; title: string; checked: boolean }) {
  return (
    <div className="flex justify-between space-x-5 items-center border-b border-zinc-500 py-3">
      {props.icon({
        color: "green",
        size: 30,
      })}
      <div className="flex flex-col text-left w-full">
        <p>{props.title}</p>
        <p className="text-sm text-green-500">Habit</p>
      </div>
      <AiOutlineCheckCircle
        color={props.checked ? "green" : "gray"}
        size={40}
      />
    </div>
  );
}
