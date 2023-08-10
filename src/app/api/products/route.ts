import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const {label, price} = await request.json();

    const product = await prisma.product.create({
        data: {
            label: label, price: Number(price)
        }
    })

    return NextResponse.json(product)
}

export async function GET(request: Request) {
    const products = await prisma.product.findMany();

    return NextResponse.json(products)
}