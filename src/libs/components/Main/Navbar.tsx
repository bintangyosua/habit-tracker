import {
  BsCalendar3,
  BsReverseLayoutSidebarInsetReverse,
} from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import useTitle from "../layout/useTitle";
import Title from "./Title";

export default function Navbar() {
  return (
    <div className="bg-zinc-900 max-w-full">
      <div className="flex flex-row justify-between py-4 px-3 xl:w-2/3 mx-auto">
        <div className="flex items-center space-x-5">
          <BsReverseLayoutSidebarInsetReverse size={30} color="#dc2626" />
          <Title />
        </div>
        <div className="flex items-center space-x-5">
          <AiOutlineSearch color="#d1d5db" size={30} />
          <BsCalendar3 color="#d1d5db" size={30} />
          <BiHelpCircle color="#d1d5db" size={30} />
        </div>
      </div>
    </div>
  );
}
