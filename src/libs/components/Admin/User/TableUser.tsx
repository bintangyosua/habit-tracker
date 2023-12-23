import { getUsers } from "@/libs/db/services";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
} from "@tremor/react";

export default async function TableUser() {
  const users = await getUsers();
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell className="p-4">#</TableHeaderCell>
            <TableHeaderCell>Nama</TableHeaderCell>
            <TableHeaderCell>Actions</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users ? (
            users.map((item, key) => (
              <TableRow key={key}>
                <TableCell className="p-4">{++key}</TableCell>
                <TableCell>
                  <Text>{item.nama}</Text>
                </TableCell>
                <TableCell>
                  <Text>Edit | Delete</Text>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <p>Kategori tidak ada</p>
          )}
        </TableBody>
      </Table>
    </>
  );
}
