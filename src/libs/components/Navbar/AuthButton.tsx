"use server";

import React from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import SignOut from "./SignOut";
import { getSession } from "@/libs/auth/session";
import { getUser } from "./actions";
import { checkAdmin } from "@/libs/db/services";

async function AuthButton() {
  const admin = await checkAdmin((await getSession()).id);
  return (
    <>
      {(await getSession()).isSignedIn ? (
        <>
          <a
            className="mr-5 hover:text-white flex items-center"
            href="/dashboard">
            Dashboard
          </a>
          {admin && (
            <a
              className="mr-5 hover:text-white flex items-center"
              href="/admin">
              Admin
            </a>
          )}

          <SignOut />
        </>
      ) : (
        <>
          <SignInForm />
          <SignUpForm />
        </>
      )}
    </>
  );
}

export default AuthButton;
