import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex p-12 gap-8 w-full">
        <div className="flex flex-col gap-4 bg-purple-800 p-12 rounded-lg">
          <h1 className="text-2xl font-bold">Grids</h1>
          <p>Create your grids now</p>
          <Link href="/grids">
            <p className="w-full text-center px-8 py-4 rounded-lg bg-purple-900 text-white mt-4">
              Grids Creator
            </p>
          </Link>
        </div>
        <div className="flex flex-col gap-4 bg-purple-800 p-12 rounded-lg">
          <h1 className="text-2xl font-bold">More</h1>
          <p>More features soon</p>
        </div>
      </div>
    </main>
  );
}
