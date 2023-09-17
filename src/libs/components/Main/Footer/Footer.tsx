import { IconType } from "react-icons";
import { BarList } from "@/libs/tab/list";
import Link from "next/link";

export default function Footer(props: { title: string }) {
  return (
    <div className="flex flex-row justify-around px-2 py-3 bg-zinc-900 md:hidden">
      {BarList ? (
        BarList.map((item, key) => (
          <FooterItem
            icon={item[0]}
            title={item[1]}
            url={item[2]}
            key={key}
            active={props.title}
          />
        ))
      ) : (
        <></>
      )}
    </div>
  );
}
function FooterItem(props: {
  icon: IconType;
  title: string;
  active: string;
  url: string;
}) {
  return (
    <Link
      href={props.url}
      className={`flex flex-col justify-center items-center ${
        props.title === props.active ? "text-green-500" : "text-gray-300"
      } space-y-1`}>
      {props.icon({
        color: props.title === props.active ? "#22c55e" : "#d1d5db",
        size: 25,
      })}
      <span>{props.title}</span>
    </Link>
  );
}
