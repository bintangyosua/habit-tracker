import Navbar from "@/libs/components/Navbar/Navbar";
import { getSession } from "@/libs/auth/session";

export default function Home() {
  const metadata = {
    title: "Today",
  };
  return (
    <main className="bg-zinc-100 h-screen flex flex-col justify-start text-black">
      <Navbar />
    </main>
  );
}
