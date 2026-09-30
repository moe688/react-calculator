import { useState } from "react";
import { evaluate, num } from "mathjs";
import "./App.css";

export function Button({ value, onButtonClick }) {
  return <button onClick={() => onButtonClick(value)}>{value}</button>;
}

export function ButtonPanel({
  onClear,
  onNewEntry,
  onEqual,
  onDot,
  onOperator,
  onBackspace,
  onBrackets,
}) {
  return (
    <div>
      <div>
        <Button value="C" onButtonClick={onClear} />
        <Button value="()" onButtonClick={onBrackets} />
        <Button value="%" onButtonClick={onNewEntry} />
        <Button value="/" onButtonClick={onOperator} />
      </div>
      <div>
        <Button value="7" onButtonClick={onNewEntry} />
        <Button value="8" onButtonClick={onNewEntry} />
        <Button value="9" onButtonClick={onNewEntry} />
        <Button value="x" onButtonClick={onOperator} />
      </div>
      <div>
        <Button value="4" onButtonClick={onNewEntry} />
        <Button value="5" onButtonClick={onNewEntry} />
        <Button value="6" onButtonClick={onNewEntry} />
        <Button value="-" onButtonClick={onOperator} />
      </div>
      <div>
        <Button value="1" onButtonClick={onNewEntry} />
        <Button value="2" onButtonClick={onNewEntry} />
        <Button value="3" onButtonClick={onNewEntry} />
        <Button value="+" onButtonClick={onOperator} />
      </div>
      <div>
        <Button value="⌫" onButtonClick={onBackspace} />
        <Button value="0" onButtonClick={onNewEntry} />
        <Button value="." onButtonClick={onDot} />
        <Button value="=" onButtonClick={onEqual} />
      </div>
    </div>
  );
}

function CurrentInput({ input }) {
  return <h1>{input}</h1>;
}

function Results({ input }) {
  let result = "";

  try {
    result = evaluate(input.replaceAll("x", "*"));
  } catch {
    result = "";
  }

  return <h2>{result}</h2>;
}

function Display({ input }) {
  return (
    <div>
      <CurrentInput input={input} />
      <Results input={input} />
    </div>
  );
}

function Calculator() {
  const [input, setInput] = useState("");
  const [dotIsBlocked, setDotIsBlocked] = useState(true);
  const [operatorIsBlocked, setOperatorIsBlocked] = useState(true);
  const [isDot, setIsDot] = useState(false);
  const openBrackets = input.split("(").length - 1;
  const closeBrackets = input.split(")").length - 1;

  const lastCharacter = input.charAt(input.length - 1);
  const numbers = "0 1 2 3 4 5 6 7 8 9";
  const operatros = "+ - / x";
  console.log("dotIsBlocked is:", dotIsBlocked);
  console.log("isDot is:", isDot);
  function handleNewEntry(i) {
    setInput(input + i);
    setOperatorIsBlocked(false);
    if (!isDot) {
      setDotIsBlocked(false);
    }
  }
  function handleDot(i) {
    if (!dotIsBlocked && !isDot) {
      if (operatros.includes(input.at(-1))) {
        setInput(input + "0" + i);
      } else {
        setInput(input + i);
      }
      setDotIsBlocked(true);
      setIsDot(true);
    }
  }
  function handleOperator(i) {
    if (!operatorIsBlocked) {
      setInput(input + i);
      setOperatorIsBlocked(true);
      //setIsOperator(true);
      setIsDot(false);
      setDotIsBlocked(false);
    }
  }
  function handleBackspace() {
    if (lastCharacter === ".") {
      setInput(input.slice(0, -1));
      setDotIsBlocked(false);
      setIsDot(false);
    } else if (operatros.includes(lastCharacter)) {
      setInput(input.slice(0, -1));
      setOperatorIsBlocked(false);
      //setIsOperator(false);
    } else {
      setInput(input.slice(0, -1));
    }
  }
  function handleBrackets() {
    if (
      (openBrackets > closeBrackets && numbers.includes(lastCharacter)) ||
      (openBrackets !== closeBrackets && lastCharacter === ")")
    ) {
      setInput(input + ")");
    } else {
      setInput(input + "(");
    }
  }
  function handleClear() {
    setInput("");
  }
  function handleEqual() {
    setInput(input);
  }
  return (
    <div>
      <Display input={input} />
      <ButtonPanel
        onNewEntry={handleNewEntry}
        onClear={handleClear}
        onEqual={handleEqual}
        onDot={handleDot}
        onOperator={handleOperator}
        onBackspace={handleBackspace}
        onBrackets={handleBrackets}
      />
    </div>
  );
}

export default function App() {
  return <Calculator />;
}
