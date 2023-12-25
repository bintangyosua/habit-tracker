import {
  getHabitCountKategori,
  getKategori,
  getTaskCountKategori,
} from "@/libs/db/services";
import { Kategori } from "@prisma/client";
import {
  Card,
  Flex,
  Metric,
  ProgressBar,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Text,
} from "@tremor/react";

export default async function Tabs(props: {
  rentang1: number;
  rentang2: number;
}) {
  const kategori = getKategori();
  return (
    <Card className="w-1/5 p-3">
      <Metric>
        Rentang Umur {props.rentang1} - {props.rentang2}
      </Metric>
      <TabGroup>
        <TabList className="mt-1">
          <Tab>Habit</Tab>
          <Tab>Task</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div className="mt-3">
              {(await kategori).map((value, key) => (
                <HabitPanel
                  key={key}
                  kategori={value}
                  rentang1={props.rentang1}
                  rentang2={props.rentang2}
                />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-3">
              {(await kategori).map((value, key) => (
                <TaskPanel
                  key={key}
                  kategori={value}
                  rentang1={props.rentang1}
                  rentang2={props.rentang2}
                />
              ))}
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Card>
  );
}

async function HabitPanel(props: {
  kategori: Kategori;
  rentang1: number;
  rentang2: number;
}) {
  const habitReport = await getHabitCountKategori(
    props.kategori.id,
    props.rentang1,
    props.rentang2
  );
  return (
    <Flex key={props.kategori.id}>
      <Text className="w-full">{props.kategori.nama}</Text>
      <Flex className="space-x-2" justifyContent="end">
        <Text>{habitReport}</Text>
      </Flex>
    </Flex>
  );
}

async function TaskPanel(props: {
  kategori: Kategori;
  rentang1: number;
  rentang2: number;
}) {
  const taskReport = await getTaskCountKategori(
    props.kategori.id,
    props.rentang1,
    props.rentang2
  );
  return (
    <Flex key={props.kategori.id}>
      <Text className="w-full">{props.kategori.nama}</Text>
      <Flex className="space-x-2" justifyContent="end">
        <Text>{taskReport}</Text>
      </Flex>
    </Flex>
  );
}
