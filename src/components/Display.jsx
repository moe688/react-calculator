function CurrentInput({ input }) {
  return <h1>{input}</h1>;
}

function Results({ result }) {
  return <h2>{result}</h2>;
}

export default function Display({ input, result }) {
  return (
    <div>
      <CurrentInput input={input} />
      <Results result={result} />
    </div>
  );
}
