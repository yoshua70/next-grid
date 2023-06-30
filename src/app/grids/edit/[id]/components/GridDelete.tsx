"use client";

export default function GridDelete(params: { id: number }) {
  const handleOnDeleteClick = async () => {
    //await prisma.grid.delete({ where: { id: params.id } });
    //router.push("/grids");
    await fetch(`http://localhost:3000/api/grids/${params.id}`, {
      method: "DELETE",
    });
  };

  return (
    <button
      className="text-center px-8 py-4 rounded-lg bg-red-600 text-white mt-4 w-full md:w-fit"
      onClick={() => handleOnDeleteClick()}
    >
      Delete
    </button>
  );
}
