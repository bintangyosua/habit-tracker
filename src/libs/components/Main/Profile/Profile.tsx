"use client";

import { FormEvent, useState } from "react";
import * as Form from "@radix-ui/react-form";
import * as React from "react";
import "./styles.css";
import { TextField } from "@radix-ui/themes";
import { User } from "@prisma/client";
import { updateUser } from "@/libs/db/services";
import { toast } from "react-toastify";
import { setSession } from "@/libs/auth/session";

export default function Profile({ user }: { user: User }) {
  const [serverErrors, setServerErrors] = useState({
    nama: false,
    email: false,
    kota: false,
    tanggal_lahir: false,
  });

  return (
    <Form.Root
      className="FormRoot flex flex-col"
      method="POST"
      onSubmit={(event) => {
        const data = Object.fromEntries(new FormData(event.currentTarget));

        updateUser({
          id: Number(data.id),
          nama: String(data.nama),
          email: String(data.email),
          kota: String(data.kota),
          tanggal_lahir: new Date(String(data.tanggal_lahir)),
        })
          .then((res) => {
            setSession(res.email);
            toast.success("Berhasil mengedit profil");
          })
          .catch((errors) => setServerErrors(errors));

        event.preventDefault();
      }}
      onClearServerErrors={() => {
        setServerErrors({
          email: false,
          nama: false,
          kota: false,
          tanggal_lahir: false,
        });
      }}>
      <div className="flex gap-2">
        <input type="text" name="id" defaultValue={user.id} hidden />
        <Form.Field className="FormField" name="nama">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}>
            <Form.Label className="FormLabel">Nama</Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
              Nama tidak boleh kosong
            </Form.Message>
            <Form.Message className="FormMessage" match="typeMismatch">
              Berikan nama yang valid
            </Form.Message>
          </div>
          <Form.Control asChild>
            <TextField.Input
              size="3"
              type="text"
              required
              placeholder="Masukkan nama"
              defaultValue={user.nama}
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="FormField" name="email">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}>
            <Form.Label className="FormLabel">Email</Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
              Please enter your email
            </Form.Message>
            <Form.Message className="FormMessage" match="typeMismatch">
              Please provide a valid email
            </Form.Message>
          </div>
          <Form.Control asChild>
            <TextField.Input
              size="3"
              type="email"
              required
              placeholder="Search the docs…"
              defaultValue={user.email}
            />
          </Form.Control>
        </Form.Field>
      </div>
      <div className="flex gap-3">
        <Form.Field className="FormField" name="kota">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}>
            <Form.Label className="FormLabel">Kota</Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
              Masukkan Kota yang valid
            </Form.Message>
          </div>
          <Form.Control asChild>
            <TextField.Input
              size="3"
              type="text"
              required
              placeholder="Masukkan nama kota"
              defaultValue={user.kota}
            />
          </Form.Control>
        </Form.Field>

        <Form.Field className="FormField" name="tanggal_lahir">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}>
            <Form.Label className="FormLabel">Tanggal Lahir</Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
              Masukkan Tanggal Lahir yang Valid
            </Form.Message>
          </div>
          <Form.Control asChild>
            <TextField.Input
              size="3"
              type="date"
              required
              className="flex justify-start items-center"
              placeholder="Masukkan tanggal lahir"
              defaultValue={user.tanggal_lahir.toISOString().split("T")[0]}
            />
          </Form.Control>
        </Form.Field>
      </div>
      <Form.Submit asChild>
        <button className="Button" style={{ marginTop: 10 }}>
          Edit Profile
        </button>
      </Form.Submit>
    </Form.Root>
  );
}
