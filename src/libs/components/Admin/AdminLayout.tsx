import { ToastContainer } from "react-toastify";
import AdminNav from "./AdminNav";

export default function AdminLayout({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <main>
      <ToastContainer position="top-center" theme="light" />
      <div className="space-y-6 bg-white text-black h-screen">
        <AdminNav />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
      </div>
    </main>
  );
}
