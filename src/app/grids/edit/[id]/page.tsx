import { Cell } from "@prisma/client";
import GridCanvas from "./components/GridCanvas";
import GridDelete from "./components/GridDelete";
import { prisma } from "@/app/lib/prisma";

export const revalidate = 0;

function buildSectorLayout(layout: Cell[], rows: number, cols: number) {
  const cells: Cell[][] = [];

  while (layout.length) cells.push(layout.splice(0, cols));

  return cells;
}

export default async function Page({ params }: { params: { id: number } }) {
  const response = await fetch(`http://localhost:3000/api/grids/${params.id}`, {
    method: "GET",
  });
  const grid = await response.json();

  console.log(grid);

  if (!grid) {
    return (
      <div className="flex flex-col p-12 gap-8">
        <h1 className="text-4xl font-bold">
          No grid found with the id {params.id}
        </h1>
      </div>
    );
  }

  const cells = await prisma.cell.findMany({
    where: { gridId: grid.id },
  });

  const cellsMatrix = buildSectorLayout(cells, grid.rows, grid.columns);

  return (
    <div className="flex flex-col p-12 gap-8">
      <h1 className="text-4xl font-bold">Grid {grid.name}</h1>
      <div className="bg-purple-800 p-12 rounded-lg">
        <div className="flex gap-4 flex-col md:flex-row">
          <div className="flex items-center justify-between gap-4">
            <p>Rows</p>
            <p className="px-4 py-2 rounded-lg bg-purple-400 text-white">
              {grid.rows}
            </p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <p>Columns</p>
            <p className="px-4 py-2 rounded-lg bg-purple-400 text-white">
              {grid.columns}
            </p>
          </div>
        </div>
        <GridDelete id={params.id} />
      </div>
      <GridCanvas rows={grid.rows} cols={grid.columns} cells={cellsMatrix} />
    </div>
  );
}
