import Dates from "@/libs/components/Main/Today/Dates";
import Habits from "@/libs/components/Main/Today/Habits";
import DashboardLayout from "@/libs/components/layout/Dashboard";

export default function Today() {
  return (
    <DashboardLayout pageName="Today">
      <Dates />
      <Habits />
    </DashboardLayout>
  );
}
