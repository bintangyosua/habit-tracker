"use client";

import { HariWithHabit, getAllHari } from "@/libs/db/services";
import { Hari } from "@prisma/client";
import { Button } from "@radix-ui/themes";
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

export default function HabitLogs({ hari }: { hari: HariWithHabit[] }) {
  const [todays, setTodays] = useState(hari);
  const [currentPage, setCurrentPage] = useState(1);
  const [todaysPerPage] = useState(7);

  useEffect(() => {
    getAllHari().then((res) => setTodays(res));
  }, []);

  const indexOfLastToday = currentPage * todaysPerPage;
  let indexOfFirstToday = indexOfLastToday - todaysPerPage;

  const currentTodays = todays.slice(indexOfFirstToday, indexOfLastToday);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell className="p-4">#</TableHeaderCell>
            <TableHeaderCell>Nama</TableHeaderCell>
            <TableHeaderCell>Tanggal</TableHeaderCell>
            <TableHeaderCell>Ditandai pada</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentTodays &&
            currentTodays.map((item, key) => (
              <TableRow key={key}>
                <TableCell className="p-4">{++indexOfFirstToday}</TableCell>
                <TableCell>
                  <Text>{item.habit.nama}</Text>
                </TableCell>
                <TableCell>
                  <Text>{`${format(item.tanggal, "dd MMM yyyy HH:mm")} `}</Text>
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
        itemsPerPage={todaysPerPage}
        totalItems={todays.length}
        paginate={paginate}
      />
    </>
  );
}
