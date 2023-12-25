import Hero from "@/libs/components/Hero";
import Navbar from "@/libs/components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";

export default function Home() {
  const metadata = {
    title: "Today",
  };
  return (
    <main className="bg-black h-screen flex flex-col justify-start text-black ">
      <ToastContainer position="top-center" theme="dark" />
      <Navbar />
      <Hero />
    </main>
  );
}
