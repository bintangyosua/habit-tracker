import { Title } from "@tremor/react";
import TableUser from "./TableUser";

export default function Admin() {
  return (
    <>
      <Title className="text-3xl">Manajemen User</Title>
      <TableUser />
    </>
  );
}
