import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request, context: {params: {id: number}}) {
    const {params} = context;

    const grid = await prisma.grid.findFirst({where: {id: Number(params.id)}})

    return NextResponse.json(grid);
}

export async function DELETE(request: Request, context: {params: {id: number}}) {
    const {params} = context;

    await prisma.grid.delete({where: {id: Number(params.id)}})

    return new Response();
}

