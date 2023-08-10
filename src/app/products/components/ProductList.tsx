import { Product } from "@prisma/client";
import ProductCard from "./ProductCard";
import { prisma } from "@/app/lib/prisma";

export const revalidate = 0;

export default async function ProductList() {
  const products = await prisma.product.findMany();

  return (
    <div className="bg-purple-800 p-12 rounded-lg">
      <h1 className="text-2xl font-bold">My Products</h1>
      <div className="flex flex-wrap gap-4 mt-8">
        {products.map((product: Product) => (
          <ProductCard
            label={product.label}
            price={product.price}
            id={product.id}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
}
