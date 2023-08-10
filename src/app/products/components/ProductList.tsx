import { Product } from "@prisma/client";
import ProductCard from "./ProductCard";

export const revalidate = 0;

export default async function ProductList() {
  const response = await fetch("http://localhost:3000/api/products", {
    method: "GET",
    cache: "no-cache",
  });

  const products = await response.json();

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
