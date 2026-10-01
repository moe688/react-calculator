function CurrentInput({ input }) {
  return (
    <h1 className="flex justify-end-safe items-center min-h-25  min-w-full max-w-sm text-5xl [scrollbar-thin] overflow-x-auto border-2 border-red-500 ">
      {input}
    </h1>
  );
}

function Results({ result }) {
  return (
    <h2 className=" flex justify-end-safe items-center min-h-15  min-w-full max-w-sm [scrollbar-thin] text-2xl text-gray-500 overflow-x-auto border-2 border-red-500">
      {result}
    </h2>
  );
}

export default function Display({ input, result }) {
  return (
    <div className="grid gap-2">
      <CurrentInput input={input} />
      <Results result={result} />
    </div>
  );
}
