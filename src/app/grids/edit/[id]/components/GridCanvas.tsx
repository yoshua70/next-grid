"use client";

import { Cell } from "@prisma/client";
import { useState, MouseEvent } from "react";

interface GridCanvasProps {
  rows: number;
  cols: number;
  cells: Cell[][];
}

interface CellProps {
  name: string;
  occupied: boolean;
  id: number;
}

function Cell(props: CellProps) {
  const [isOccupied, setIsOccupied] = useState(props.occupied);

  const handleOnClick = async (e: MouseEvent<HTMLDivElement>) => {
    await fetch(`http://localhost:3000/api/cells/update/${props.id}`, {
      method: "PUT",
      body: JSON.stringify({ state: !isOccupied }),
    });
    setIsOccupied(!isOccupied);
  };

  return (
    <div
      style={{
        backgroundColor: isOccupied ? "salmon" : "",
        color: isOccupied ? "white" : "",
        minHeight: "10rem",
      }}
      className="p-5 border-solid border-2 flex flex-col justify-center items-center rounded-lg"
      onClick={handleOnClick}
      key={props.id}
    >
      <p>{props.name}</p>
    </div>
  );
}

export default function GridCanvas(props: GridCanvasProps) {
  return (
    <div className="bg-purple-800 p-12 rounded-lg">
      <h1 className="text-2xl font-bold">Canvas</h1>

      <div
        style={{
          gridTemplateRows: `repeat(${props.rows}, 1fr)`,
          gridTemplateColumns: `repeat(${props.cols}, 1fr)`,
        }}
        className="grid w-full gap-4 mt-8"
      >
        {props.cells.map((row) =>
          row.map((cell) => (
            <Cell
              name={cell.name}
              id={cell.id}
              occupied={cell.occupied}
              key={cell.id}
            />
          ))
        )}
      </div>
    </div>
  );
}
