import AdminLayout from "@/libs/components/Admin/AdminLayout";
import Kategori from "@/libs/components/Admin/Kategori/Kategori";
import TableKategori from "@/libs/components/Admin/Kategori/TableKategori";
import { Title } from "@tremor/react";

export default function Page() {
  return (
    <AdminLayout>
      <Kategori />
    </AdminLayout>
  );
}
