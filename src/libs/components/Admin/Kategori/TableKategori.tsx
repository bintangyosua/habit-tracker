"use server";

import { getKategori } from "@/libs/db/services";
import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
} from "@tremor/react";
import ActionButtons from "./ActionButtons";

export default async function TableKategori() {
  const kategori = await getKategori();
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell className="p-4">#</TableHeaderCell>
          <TableHeaderCell>Nama</TableHeaderCell>
          <TableHeaderCell>Accent</TableHeaderCell>
          <TableHeaderCell>Actions</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {kategori ? (
          kategori.map((item, key) => (
            <TableRow key={key}>
              <TableCell className="p-4">{++key}</TableCell>
              <TableCell>
                <Text>{item.nama}</Text>
              </TableCell>
              <TableCell>
                {item.warna != null && (
                  <div
                    className="min-h-max"
                    style={{
                      backgroundColor: item.warna,
                      color: item.warna,
                    }}>
                    &nbsp;
                  </div>
                )}
              </TableCell>
              <TableCell>
                <ActionButtons kategori={item} />
              </TableCell>
            </TableRow>
          ))
        ) : (
          <p>Kategori tidak ada</p>
        )}
      </TableBody>
    </Table>
  );
}
