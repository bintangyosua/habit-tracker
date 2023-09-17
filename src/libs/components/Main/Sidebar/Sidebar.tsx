import { BarList } from "@/libs/tab/list";
import Link from "next/link";
import { IconType } from "react-icons";

export default function Sidebar(props: { title: string }) {
  return (
    <div className="flex flex-col py-5 space-y-3">
      {/* <span className="text-3xl px-3 font-semibold">Menu</span> */}
      <div className="flex flex-col text-xl">
        {BarList ? (
          BarList.map((item, key) => (
            <SidebarItem
              key={key}
              icon={item[0]}
              title={item[1]}
              url={item[2]}
              active={props.title}
            />
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

function SidebarItem(props: {
  icon: IconType;
  title: string;
  active: string;
  url: string;
}) {
  return (
    <Link
      href={props.url}
      className={`px-4 py-3 flex space-x-3 hover:bg-zinc-800 ${
        props.title === props.active ? "text-white font-extrabold pl-6" : ""
      }`}>
      {props.icon({
        size: 30,
        color: props.title === props.active ? "white" : "#d1d5db",
      })}
      <span>{props.title}</span>
    </Link>
  );
}
