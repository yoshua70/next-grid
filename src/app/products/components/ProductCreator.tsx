"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export default function ProductCreator() {
  const router = useRouter();

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(100);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleOnProductNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value);
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
            <label htmlFor="gridName">Name</label>
            <input
              name="gridName"
              id="gridName"
              type="text"
              className="p-4 rounded-lg bg-purple-400 text-white"
              placeholder="Grid Name"
              onChange={handleOnProductNameChange}
              value={productName}
            />
          </div>
          <div className="flex gap-4 items-center">
            <label htmlFor="gridName">Price</label>
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
