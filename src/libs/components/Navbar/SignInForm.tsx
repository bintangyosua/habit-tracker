"use client";

import {
  getSession,
  setSession as setServerSession,
} from "@/libs/auth/session";
import { Button, Dialog, Flex, TextField, Text } from "@radix-ui/themes";
import { useState } from "react";
import { signIn } from "./actions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useSession } from "@/libs/zustand/Session";
import { useHabit } from "@/libs/zustand/Habit";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

export default function SignInForm() {
  const [user, setUser] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  function handleInputChange(e: any) {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  }

  const router = useRouter();
  const setSession = useSession((state) => state.setSession);
  const clientSession = useSession((state) => state.session);

  async function handleSubmit() {
    if (await signIn(user.email, user.password)) {
      await setServerSession(user.email);
      setSession();
      toast.success("Berhasil Sign In!");
    } else {
      toast.error("Email atau Password salah!");
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button color="crimson" size={"2"} variant="soft">
          Sign In
        </Button>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>Sign In</Dialog.Title>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Email
            </Text>
            <TextField.Input
              placeholder="Enter your Email"
              type="email"
              name="email"
              onChange={handleInputChange}
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Password
            </Text>
            <TextField.Input
              defaultValue=""
              placeholder="Enter your email"
              type="password"
              name="password"
              onChange={handleInputChange}
            />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button
              onClick={() => {
                handleSubmit();
              }}>
              Sign In
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}
