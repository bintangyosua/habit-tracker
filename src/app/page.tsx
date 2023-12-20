import Navbar from "@/libs/components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";

export default function Home() {
  const metadata = {
    title: "Today",
  };
  return (
    <main className="bg-zinc-100 h-screen flex flex-col justify-start text-black">
      <ToastContainer position="top-center" />
      <Navbar />
    </main>
  );
}
