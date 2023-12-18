"use client";

import useTitle from "../layout/useTitle";

export default function Title() {
  const title = useTitle((state) => state.title);
  return <h1 className="text-3xl text-white font-semibold">{title}</h1>;
}
