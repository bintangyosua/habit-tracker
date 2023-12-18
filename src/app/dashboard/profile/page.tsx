import Profile from "@/libs/components/Main/Profile/Profile";
import DashboardLayout from "@/libs/components/layout/Dashboard";

export default function Page() {
  return (
    <DashboardLayout pageName="Profile">
      <Profile />
    </DashboardLayout>
  );
}
