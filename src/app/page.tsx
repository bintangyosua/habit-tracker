import Footer from "@/libs/components/Main/Footer/Footer";
import Navbar from "@/libs/components/Main/Navbar";
import Sidebar from "@/libs/components/Main/Sidebar/Sidebar";
import Dates from "@/libs/components/Main/Today/Dates";
import Habits from "@/libs/components/Main/Today/Habits";

export default function Home() {
  const metadata = {
    title: "Today",
  };
  return (
    <main className="bg-zinc-950 h-screen flex flex-col justify-between text-white">
      <h1 className="mx-auto text-4xl my-auto">Home</h1>
    </main>
  );
}
