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
import { format } from "date-fns";

export default async function TableUser() {
  const users = await getUsers();
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell className="p-4">#</TableHeaderCell>
            <TableHeaderCell>Nama</TableHeaderCell>
            <TableHeaderCell>Last Login</TableHeaderCell>
            <TableHeaderCell>Actions</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users ? (
            users.map((item, key) => {
              item.last_login.setHours(item.last_login.getHours() - 7);
              return (
                <TableRow key={key}>
                  <TableCell className="p-4">{++key}</TableCell>
                  <TableCell>
                    <Text>{item.nama}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>{`${format(
                      item.last_login,
                      "dd MMM yyyy HH:mm"
                    )} `}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>Edit | Delete</Text>
                  </TableCell>
                </TableRow>
              );
            })
          ) : (
            <p>Kategori tidak ada</p>
          )}
        </TableBody>
      </Table>
    </>
  );
}
