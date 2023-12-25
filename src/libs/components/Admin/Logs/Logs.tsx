import {
  Flex,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Title,
  Text,
  ProgressBar,
} from "@tremor/react";
import { IconContext } from "react-icons";
import HabitLogs from "./HabitLogs";
import TaksLogs from "./TaskLogs";
import { getAllHari, getAllTasks } from "@/libs/db/services";

export default async function Logs() {
  const hari = await getAllHari();
  const tasks = await getAllTasks();
  return (
    <>
      <div className="flex justify-between space-x-3">
        <Title className="text-3xl">Log Aktivitas</Title>
      </div>
      <div>
        <TabGroup>
          <TabList className="mt-8">
            <Tab>Habits</Tab>
            <Tab>Tasks</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <HabitLogs hari={hari} />
            </TabPanel>
            <TabPanel>
              <TaksLogs tugas={tasks} />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </>
  );
}
