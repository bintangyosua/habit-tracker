import Link from "next/link";
import { IconType } from "react-icons";

export default async function SidebarItem(props: {
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
