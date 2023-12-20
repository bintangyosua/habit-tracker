"use client";

import {
  Button,
  Dialog,
  Flex,
  TextField,
  Text,
  Callout,
  AlertDialog,
  Badge,
} from "@radix-ui/themes";
import { createUser, getEmails } from "./actions";
import { Form } from "@radix-ui/react-form";
import { FormEvent, FormEventHandler, useEffect, useState } from "react";
import { User } from "@prisma/client";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { exit, exitCode } from "process";
import { toast } from "react-toastify";
import DatePicker from "../DatePicker/DatePicker";

export default function SignUpForm() {
  const [user, setUser] = useState<Omit<User, "id">>({
    nama: " ",
    email: " ",
    password: " ",
    kota: " ",
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

  const enabled =
    user.email &&
    user.email != " " &&
    user.nama &&
    user.nama != " " &&
    user.password &&
    user.password != " " &&
    user.kota &&
    user.kota != " " &&
    user.tanggal_lahir;

  async function handleSubmit() {
    if (enabled) {
      (await createUser(user))
        ? toast.success("Berhasil Sign Up")
        : toast.error("Gagal Sign Up! Email telah digunakan");
    } else {
      toast.error("Gagal Sign Up!");
      exit();
    }
  }

  useEffect(() => {
    const handleEmail = async () => {
      (await getEmails(user.email)) ? setExist(true) : setExist(false);
    };

    handleEmail();
  }, [user.email]);

  return (
    <Dialog.Root>
      <Dialog.Trigger
        onClick={() => {
          setUser({
            nama: " ",
            email: " ",
            password: " ",
            kota: " ",
            tanggal_lahir: new Date(),
          });
        }}>
        <Button color="grass" size={"2"} variant="soft">
          Sign Up
        </Button>
      </Dialog.Trigger>
      <form>
        <Dialog.Content style={{ maxWidth: 450 }}>
          <Dialog.Title>Sign Up</Dialog.Title>
          <Dialog.Description size="2" mb="2">
            Semua field wajib diisi
          </Dialog.Description>
          <Flex direction="column" gap="3">
            <label className="flex flex-col gap-1">
              <Flex justify={"between"} align={"center"}>
                <Text as="div" size="2" weight="bold">
                  Nama
                </Text>
                {user.nama === "" && (
                  <Badge color="red">Nama Wajib diisi</Badge>
                )}
              </Flex>
              <TextField.Input
                placeholder="Masukkan Nama"
                required
                onChange={handleInputChange}
                name="nama"
              />
            </label>
            <label>
              <Flex justify={"between"} align={"center"}>
                <Text as="div" size="2" weight="bold">
                  Email
                </Text>
                {user.email === "" && (
                  <Badge color="red">Email Wajib diisi</Badge>
                )}
                {exist && <Badge color="red">Email sudah digunakan</Badge>}
              </Flex>
              <TextField.Input
                placeholder="Masukkan Email"
                type="email"
                required={true}
                onChange={(e) => {
                  handleInputChange(e);
                }}
                name="email"
              />
            </label>
            <label>
              <Flex justify={"between"} align={"center"}>
                <Text as="div" size="2" weight="bold">
                  Password
                </Text>
                {user.password === "" && (
                  <Badge color="red">Password Wajib diisi</Badge>
                )}
              </Flex>
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
                <Flex justify={"between"} align={"center"}>
                  <Text as="div" size="2" weight="bold">
                    Kota
                  </Text>
                  {user.kota === "" && (
                    <Badge color="red">Kota Wajib diisi</Badge>
                  )}
                </Flex>

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
                <Flex justify={"between"} align={"center"}>
                  <Text as="div" size="2" weight="bold">
                    Tanggal Lahir
                  </Text>
                  {!user.tanggal_lahir && (
                    <Badge color="red">Tanggal Lahir Wajib diisi</Badge>
                  )}
                </Flex>
                <TextField.Input
                  defaultValue=""
                  placeholder="Masukkan Tanggal Lahir"
                  type="date"
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
              <Button type="submit" onClick={handleSubmit} disabled={!enabled}>
                Sign Up
              </Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </form>
    </Dialog.Root>
  );
}
