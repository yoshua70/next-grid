"use client";

export default function ProductCard({
  label,
  price,
  id,
}: {
  label: string;
  price: number;
  id: number;
}) {
  return (
    <div className=" flex flex-col gap-4 p-4 rounded-lg bg-black drop-shadow-lg text-white">
      <p className="font-bold">{label}</p>
      <div className="flex gap-4 flex-col md:flex-row">
        <div className="flex items-center justify-between gap-4">
          <p>Price</p>
          <p className="px-4 py-2 rounded-lg bg-purple-400 text-white">
            {price}
          </p>
        </div>
      </div>
    </div>
  );
}
