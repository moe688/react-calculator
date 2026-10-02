function CurrentInput({ input }) {
  return (
    <h1 className="rounded-lg border bg-muted flex justify-end-safe items-center h-25  min-w-full max-w-sm text-5xl [scrollbar-thin] overflow-x-auto whitespace-nowrap">
      {input}
    </h1>
  );
}

function Results({ result }) {
  return (
    <output className="rounded-lg border bg-muted flex justify-end-safe items-center min-h-15  min-w-full max-w-sm [scrollbar-thin] text-2xl text-gray-500 overflow-x-auto ">
      {result}
    </output>
  );
}

export default function Display({ input, result }) {
  return (
    <div className="rounded-lg border bg-muted p-4 grid gap-2">
      <CurrentInput input={input} />
      <Results result={result} />
    </div>
  );
}
