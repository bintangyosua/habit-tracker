"use client";

import {
  Button,
  Dialog,
  Flex,
  TextField,
  Text,
  Callout,
  AlertDialog,
} from "@radix-ui/themes";
import { createUser, getEmails } from "./actions";
import { Form } from "@radix-ui/react-form";
import { FormEvent, FormEventHandler, useEffect, useState } from "react";
import { User } from "@prisma/client";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { exit, exitCode } from "process";

export default function SignUpForm() {
  const [user, setUser] = useState<Omit<User, "id">>({
    nama: "",
    email: "",
    password: "",
    kota: "",
    tanggal_lahir: new Date(),
  });

  const [exist, setExist] = useState(false);

  function handleInputChange(e: any) {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: name === "tanggal_lahir" ? new Date(value) : value,
    });
  }

  async function onSubmit() {
    await createUser(user);
  }

  useEffect(() => {
    const handleEmail = async () => {
      (await getEmails(user.email)) ? setExist(true) : setExist(false);
    };

    handleEmail();
  }, [user.email]);

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button color="grass" size={"2"} variant="soft">
          Sign Up
        </Button>
      </Dialog.Trigger>
      <form>
        <Dialog.Content style={{ maxWidth: 450 }}>
          <Dialog.Title>Sign Un</Dialog.Title>

          <Flex direction="column" gap="3">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Nama
              </Text>
              <TextField.Input
                placeholder="Masukkan Nama"
                required
                onChange={handleInputChange}
                name="nama"
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Email
              </Text>
              <TextField.Input
                placeholder="Masukkan Email"
                type="email"
                required
                onChange={(e) => {
                  handleInputChange(e);
                }}
                name="email"
              />
              {exist && (
                <Callout.Root color="red" size={"1"} className="mt-3">
                  <Callout.Icon>
                    <InfoCircledIcon />
                  </Callout.Icon>
                  <Callout.Text>Email telah digunakan</Callout.Text>
                </Callout.Root>
              )}
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Password
              </Text>
              <TextField.Input
                defaultValue=""
                placeholder="Masukkan Password"
                type="password"
                onChange={handleInputChange}
                required
                name="password"
              />
            </label>
            <Flex justify={"start"} gap={"4"}>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Kota
                </Text>
                <TextField.Input
                  defaultValue=""
                  placeholder="Masukkan Kota"
                  onChange={handleInputChange}
                  type="text"
                  name="kota"
                  required
                />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Tanggal Lahir
                </Text>
                <TextField.Input
                  defaultValue=""
                  placeholder="Masukkan Tanggal Lahir"
                  type="datetime-local"
                  name="tanggal_lahir"
                  onChange={handleInputChange}
                  required
                />
              </label>
            </Flex>
          </Flex>

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button onClick={onSubmit}>Sign Up</Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </form>
    </Dialog.Root>
  );
}
