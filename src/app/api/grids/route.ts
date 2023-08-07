import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const {gridName, gridRows, gridColumns} = await request.json();

    const grid = await prisma.grid.create({
        data: {
            name: gridName,
            rows: Number(gridRows),
            columns: Number(gridColumns),
        }
    })

    for (let i = 0; i < grid.rows*grid.columns; i++) {
        await prisma.cell.create({
            data: {
                name: `${grid.name}-${i}`,
                occupied: false,
                gridId: grid.id
            }
        })
    }

    return NextResponse.json(grid)
}

export async function GET(request: Request) {

    const grids = await prisma.grid.findMany();

    return NextResponse.json(grids);
}

