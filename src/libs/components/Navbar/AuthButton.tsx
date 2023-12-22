"use server";

import React from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import SignOut from "./SignOut";
import { getSession } from "@/libs/auth/session";
import ClickMe from "./ClickMe";

async function AuthButton() {
  return (
    <>
      {(await getSession()).isSignedIn ? (
        <>
          <a
            className="mr-5 hover:text-white flex items-center"
            href="/dashboard">
            Dashboard
          </a>
          <SignOut />
          <ClickMe />
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
