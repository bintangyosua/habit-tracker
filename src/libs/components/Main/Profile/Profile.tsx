"use client";

import React from "react";
import * as Form from "@radix-ui/react-form";
import "./styles.css";

export default function Profile() {
  return (
    <Form.Root className="FormRoot flex flex-col">
      <div className="flex gap-2">
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
            <input
              className="Input"
              type="email"
              required
              value={"minuettaro@gg.com"}
            />
          </Form.Control>
        </Form.Field>
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
            <input className="Input" required value={"Purwokerto"} />
          </Form.Control>
        </Form.Field>
      </div>
      <Form.Field className="FormField" name="kota">
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
          <input className="Input" type="date" value={"2023-12-18"} required />
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <button className="Button" style={{ marginTop: 10 }}>
          Edit Profile
        </button>
      </Form.Submit>
    </Form.Root>
  );
}
