"use server";

import { ToastContainer } from "react-toastify";
import Footer from "../Main/Footer/Footer";
import Navbar from "../Main/Navbar";
import Rightbar from "../Main/Rightbar/Rightbar";
import Sidebar from "../Main/Sidebar/Sidebar";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { getSession } from "@/libs/auth/session";

export default async function DashboardLayout({
  children,
  pageName,
}: {
  children: React.ReactNode;
  pageName: string;
}) {
  const session = await getSession();
  if (!session.isSignedIn) {
    return <h1>Harus Login</h1>;
  }
  return (
    <main className="bg-zinc-950 h-screen flex flex-col justify-between">
      <div>
        <ToastContainer position="top-center" theme="dark" />
        <Navbar />
        <div className="max-h-full flex flex-col justify-between text-white xl:w-2/3 mx-auto md:px-5 xl:px-0">
          <div className="flex justify-between h-full max-w-full md:space-x-1">
            <div className="hidden md:w-1/3 md:block">
              <Sidebar title={pageName} />
            </div>
            <div className="h-full w-full px-3 py-5 md:w-2/3">{children}</div>
            <div className="xl:w-1/3 hidden xl:flex flex-col items-end py-5 space-y-3">
              <Rightbar />
            </div>
          </div>
        </div>
      </div>
      <Footer title={pageName} />
    </main>
  );
}
