import Habits from "@/libs/components/Main/Habits/Habits";
import DashboardLayout from "@/libs/components/layout/Dashboard";

export default function Page() {
  return (
    <DashboardLayout pageName="Habits">
      <Habits />
    </DashboardLayout>
  );
}
