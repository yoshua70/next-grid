"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export default function ProductCreator() {
  const router = useRouter();

  const [productLabel, setProductLabel] = useState("");
  const [productPrice, setProductPrice] = useState(100);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { productLabel, productPrice } = Object.fromEntries(
      new FormData(e.currentTarget)
    );

    console.log(productLabel, productPrice);
    await fetch("http://localhost:3000/api/products", {
      method: "POST",
      body: JSON.stringify({ label: productLabel, price: productPrice }),
    });

    router.refresh();
  };

  const handleOnProductLabelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProductLabel(e.target.value);
  };

  const handleOnProductPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProductPrice(Number(e.target.value));
  };

  return (
    <div className="bg-purple-800 p-12 rounded-lg">
      <h1 className="text-2xl font-bold">Add a new product</h1>
      <form className="mt-8" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex gap-4 items-center">
            <label htmlFor="productLabel">Name</label>
            <input
              name="productLabel"
              id="productLabel"
              type="text"
              className="p-4 rounded-lg bg-purple-400 text-white"
              placeholder="Product Name"
              onChange={handleOnProductLabelChange}
              value={productLabel}
            />
          </div>
          <div className="flex gap-4 items-center">
            <label htmlFor="productPrice">Price</label>
            <input
              name="productPrice"
              id="productPrice"
              type="number"
              className="p-4 rounded-lg bg-purple-400 text-white"
              placeholder="100"
              onChange={handleOnProductPriceChange}
              value={productPrice}
            />
          </div>
        </div>
        <button
          className="px-8 py-4 rounded-lg bg-purple-900 text-white mt-4"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
}
