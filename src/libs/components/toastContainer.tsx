import React from "react";
import { ToastContainer } from "react-toastify";

export default function toastContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <ToastContainer position="top-center" theme="dark" />
      {children}
    </div>
  );
}
