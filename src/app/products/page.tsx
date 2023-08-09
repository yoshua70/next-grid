import ProductCreator from "./components/ProductCreator";

export default function Page() {
  return (
    <div className="flex flex-col p-12 gap-8">
      <h1 className="text-4xl font-bold">Products</h1>
      <ProductCreator />
    </div>
  );
}
