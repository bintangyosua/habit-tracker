import { BarList } from "@/libs/tab/list";
import Link from "next/link";
import { IconType } from "react-icons";
import useTitle from "../../layout/useTitle";
import SidebarItem from "./SidebarItem";

export default function Sidebar(props: { title: string }) {
  return (
    <div className="flex flex-col py-5 space-y-3">
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
