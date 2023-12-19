"use client";

import { setSession } from "@/libs/auth/session";
import { Button, Dialog, Flex, TextField, Text } from "@radix-ui/themes";
import { useState } from "react";
import { signIn } from "./actions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

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

  async function handleSubmit() {
    if (await signIn(user.email, user.password)) {
      toast.success("Berhasil Sign In!");
      await setSession(user.email);
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
