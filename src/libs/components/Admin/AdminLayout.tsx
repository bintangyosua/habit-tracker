"use server";

import { ToastContainer } from "react-toastify";
import AdminNav from "./AdminNav";
import { getSession } from "@/libs/auth/session";
import { Theme } from "@radix-ui/themes";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactElement;
}) {
  const session = await getSession();
  const userRole = await prisma?.usersOnRoles.findFirst({
    where: {
      roleId: 1,
      userId: session.id,
    },
  });

  if (!session.isSignedIn) {
    return <h1>Perlu Login</h1>;
  } else if (userRole == null) {
    return <h1>Bukan Admin</h1>;
  } else {
    return (
      <main>
        <Theme appearance="light">
          <ToastContainer position="top-center" theme="light" />
          <div className="space-y-6 bg-white text-black h-screen">
            <AdminNav />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </div>
        </Theme>
      </main>
    );
  }
}
