"use client";

import { Button } from "@radix-ui/themes";

export default function Pagination({
  itemsPerPage,
  totalItems,
  paginate,
}: {
  itemsPerPage: number;
  totalItems: number;
  paginate: (number: number) => void;
}) {
  const itemNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    itemNumbers.push(i);
  }

  return (
    <div className="flex justify-center gap-1 items-center">
      {itemNumbers.map((number) => (
        <Button size="2" variant="outline" color="gray" key={number}>
          <a href="#" onClick={() => paginate(number)}>
            {number}
          </a>
        </Button>
      ))}
    </div>
  );
}
