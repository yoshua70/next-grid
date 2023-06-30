import GridCreator from "./components/GridCreator";
import GridList from "./components/GridList";

export default function Page() {
  return (
    <div className="flex flex-col p-12 gap-8">
      <h1 className="text-4xl font-bold">Grids</h1>
      <GridCreator />
      <GridList />
    </div>
  );
}
