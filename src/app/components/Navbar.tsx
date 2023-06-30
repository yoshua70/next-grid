import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-4 w-full bg-purple-950 p-12">
      <Link href="/">Home</Link>
      <Link href="/grids">Grids</Link>
    </nav>
  );
}
