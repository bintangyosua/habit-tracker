"use client";

import { TasksWithKategori, getAllTasks } from "@/libs/db/services";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
} from "@tremor/react";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";

export default function TaksLogs({ tugas }: { tugas: TasksWithKategori[] }) {
  const [tasks, setTasks] = useState(tugas);
  const [currentPage, setCurrentPage] = useState(1);
  const [tasksPerPage] = useState(7);

  useEffect(() => {
    getAllTasks().then((res) => setTasks(res));
  }, []);

  const indexOfLastTask = currentPage * tasksPerPage;
  let indexOfFirstTask = indexOfLastTask - tasksPerPage;

  const currentTodays = tasks.slice(indexOfFirstTask, indexOfLastTask);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell className="p-4">#</TableHeaderCell>
            <TableHeaderCell>Nama</TableHeaderCell>
            <TableHeaderCell>Deadline</TableHeaderCell>
            <TableHeaderCell>Ditandai pada</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentTodays &&
            currentTodays.map((item, key) => (
              <TableRow key={key}>
                <TableCell className="p-4">{++indexOfFirstTask}</TableCell>
                <TableCell>
                  <Text>{item.kategori.nama}</Text>
                </TableCell>
                <TableCell>
                  <Text>{`${format(
                    item.deadline,
                    "dd MMM yyyy HH:mm"
                  )} `}</Text>
                </TableCell>
                <TableCell>
                  <Text>{`${
                    item.checkedAt === null
                      ? ""
                      : format(item.checkedAt, "dd MMM yyyy HH:mm")
                  }`}</Text>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <Pagination
        itemsPerPage={tasksPerPage}
        paginate={paginate}
        totalItems={tasks.length}
      />
    </>
  );
}
