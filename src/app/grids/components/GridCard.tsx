"use client";

import Link from "next/link";

export default function GridCard({
  name,
  rows,
  columns,
  id,
}: {
  name: string;
  rows: number;
  columns: number;
  id: number;
}) {
  return (
    <div className=" flex flex-col gap-4 p-4 rounded-lg bg-black drop-shadow-lg text-white">
      <p className="font-bold">{name}</p>
      <div className="flex gap-4 flex-col md:flex-row">
        <div className="flex items-center justify-between gap-4">
          <p>Rows</p>
          <p className="px-4 py-2 rounded-lg bg-purple-400 text-white">
            {rows}
          </p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <p>Columns</p>
          <p className="px-4 py-2 rounded-lg bg-purple-400 text-white">
            {columns}
          </p>
        </div>
      </div>
      <Link href={`/grids/edit/${id}`}>
        <p className="w-full text-center px-8 py-4 rounded-lg bg-purple-900 text-white mt-4">
          Edit
        </p>
      </Link>
    </div>
  );
}
