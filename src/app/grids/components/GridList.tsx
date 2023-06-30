import { Grid } from "@prisma/client";
import GridCard from "./GridCard";

export const revalidate = 0;

export default async function GridList() {
  const response = await fetch("http://localhost:3000/api/grids", {
    method: "GET",
    cache: "no-cache",
  });

  const grids = await response.json();

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
