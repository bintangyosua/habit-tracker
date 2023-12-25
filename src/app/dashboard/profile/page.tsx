import { getSession } from "@/libs/auth/session";
import Profile from "@/libs/components/Main/Profile/Profile";
import Dates from "@/libs/components/Main/Today/Dates";
import Habits from "@/libs/components/Main/Today/Habits";
import DashboardLayout from "@/libs/components/layout/Dashboard";
import { getUser } from "@/libs/db/services";

export default async function Today() {
  const session = await getSession();
  const user = await getUser(session.id);
  return (
    <DashboardLayout pageName="Profile">
      {user && <Profile user={user} />}
    </DashboardLayout>
  );
}
