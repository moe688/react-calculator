import Calculator from "@/components/Calculator";

export default function App() {
  return (
    <div className="flex">
      <div></div>
      <div className="flex justify-center items-center w-150 h-170 border-3 border-red-500">
        <Calculator />
      </div>
    </div>
  );
}
