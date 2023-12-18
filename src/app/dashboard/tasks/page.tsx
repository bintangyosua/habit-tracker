import Tasks from "@/libs/components/Main/Tasks/Tasks";
import DashboardLayout from "@/libs/components/layout/Dashboard";

export default function Page() {
  return (
    <DashboardLayout pageName="Tasks">
      <Tasks />
    </DashboardLayout>
  );
}
