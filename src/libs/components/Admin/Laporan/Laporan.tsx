import { Title } from "@tremor/react";
import Tabs from "./Tabs";
import { Flex } from "@radix-ui/themes";

export default async function Laporan() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between space-x-3 ">
        <Title className="text-3xl">Laporan Data Habit dan Task</Title>
      </div>
      <Flex wrap={"wrap"} gap={"3"}>
        <Tabs rentang1={0} rentang2={10} />
        <Tabs rentang1={10} rentang2={20} />
        <Tabs rentang1={20} rentang2={30} />
        <Tabs rentang1={30} rentang2={40} />
        <Tabs rentang1={40} rentang2={50} />
        <Tabs rentang1={50} rentang2={60} />
        <Tabs rentang1={60} rentang2={70} />
        <Tabs rentang1={70} rentang2={100} />
      </Flex>
    </div>
  );
}
