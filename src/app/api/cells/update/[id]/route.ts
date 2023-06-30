import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(request: Request, context: {params: {id: number}}) {
    const {params} = context;

    const {state}= await request.json()

    const cell = await prisma.cell.update({where: {id: Number(params.id)}, data: {occupied: state}})

    return NextResponse.json(cell);
}

