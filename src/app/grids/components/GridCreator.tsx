"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export default function GridCreator() {
  const DEFAULT_GRID_NAME = "My Grid";
  const DEFAULT_GRID_ROWS = 2;
  const DEFAULT_GRID_COLUMNS = 2;

  const router = useRouter();

  const [gridName, setGridName] = useState(DEFAULT_GRID_NAME);
  const [gridRows, setGridRows] = useState(DEFAULT_GRID_ROWS);
  const [gridColumns, setGridColumns] = useState(DEFAULT_GRID_COLUMNS);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { gridName, gridRows, gridColumns } = Object.fromEntries(
      new FormData(e.currentTarget)
    );

    await fetch("http://localhost:3000/api/grids", {
      method: "POST",
      body: JSON.stringify({ gridName, gridRows, gridColumns }),
    });

    router.refresh();
  };

  const handleOnGridNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGridName(e.target.value);
  };
  const handleOnGridRowsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGridRows(Number(e.target.value));
  };
  const handleOnGridColumnsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGridColumns(Number(e.target.value));
  };

  return (
    <div className="bg-purple-800 p-12 rounded-lg">
      <h1 className="text-2xl font-bold">Add a new grid</h1>
      <form className="mt-8" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex gap-4 items-center">
            <label htmlFor="gridName">Name</label>
            <input
              name="gridName"
              id="gridName"
              type="text"
              className="p-4 rounded-lg bg-purple-400 text-white"
              placeholder="Grid Name"
              onChange={handleOnGridNameChange}
              value={gridName}
            />
          </div>
          <div className="flex gap-4 items-center">
            <label htmlFor="gridRows">Rows</label>
            <input
              name="gridRows"
              id="gridRows"
              type="number"
              max={10}
              min={2}
              className="p-4 rounded-lg bg-purple-400 text-white"
              onChange={handleOnGridRowsChange}
              value={gridRows}
            />
          </div>
          <div className="flex gap-4 items-center">
            <label htmlFor="gridColumns">Columns</label>
            <input
              name="gridColumns"
              id="gridColumns"
              type="number"
              max={10}
              min={2}
              className="p-4 rounded-lg bg-purple-400 text-white"
              value={gridColumns}
              onChange={handleOnGridColumnsChange}
            />
          </div>
        </div>
        <button
          className="px-8 py-4 rounded-lg bg-purple-900 text-white mt-4"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
}
