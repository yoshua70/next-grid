import { Grid } from "@prisma/client";
import GridCard from "./GridCard";
import { prisma } from "@/app/lib/prisma";

export const revalidate = 0;

export default async function GridList() {
  const grids = await prisma.grid.findMany();

  return (
    <div className="bg-purple-800 p-12 rounded-lg">
      <h1 className="text-2xl font-bold">My grids</h1>
      <div className="flex flex-wrap gap-4 mt-8">
        {grids.map((grid: Grid) => (
          <GridCard
            name={grid.name}
            rows={grid.rows}
            columns={grid.columns}
            id={grid.id}
            key={grid.id}
          />
        ))}
      </div>
    </div>
  );
}
