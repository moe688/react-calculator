import { useState } from "react";
import { evaluate } from "mathjs";
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
  onPlusMinus,
}) {
  return (
    <div>
      <div>
        <Button value="C" onButtonClick={onClear} />
        <Button value="()" onButtonClick={onBrackets} />
        <Button value="+/-" onButtonClick={onPlusMinus} />
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

function Results({ result }) {
  return <h2>{result}</h2>;
}

function Display({ input, result }) {
  return (
    <div>
      <CurrentInput input={input} />
      <Results result={result} />
    </div>
  );
}

function Calculator() {
  const [input, setInput] = useState("");

  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const operatros = ["+", "-", "/", "x"];
  const lastCharacter = input.at(-1);
  const operatorIsBlocked = input === "" || operatros.includes(lastCharacter);
  const openBrackets = input.split("(").length - 1;
  const closeBrackets = input.split(")").length - 1;
  const missingBrackets = openBrackets - closeBrackets;
  let currentNumber = input;
  for (const operator of ["+", "-", "x", "/", "(", ")"]) {
    currentNumber = currentNumber.split(operator).at(-1);
  }
  const dotIsBlocked = currentNumber.includes(".");
  const beforeCurrentNumber = input.slice(
    0,
    input.length - currentNumber.length,
  );

  let result = "";

  try {
    result = evaluate(input.replaceAll("x", "*") + ")".repeat(missingBrackets));
  } catch {
    result = "";
  }

  console.log("Dot is blocked:" + dotIsBlocked);
  console.log("Operator is blocked:" + operatorIsBlocked);
  console.log("Open brackets:" + openBrackets);
  console.log("Close brackets:" + closeBrackets);
  console.log("The current number is:" + currentNumber);
  console.log("The previous number is:" + beforeCurrentNumber);
  console.log("The last character is:" + lastCharacter);

  function handleNewEntry(i) {
    setInput(input + i);
  }
  function handleDot(i) {
    if (!dotIsBlocked) {
      if (operatros.includes(input.at(-1)) || input === "") {
        setInput(input + "0" + i);
      } else {
        setInput(input + i);
      }
    }
  }
  function handleOperator(i) {
    if (!operatorIsBlocked) {
      if ((i === "x" || i === "/") && lastCharacter === "(") {
        return;
      } else {
        setInput(input + i);
      }
    }
  }

  function handleBackspace() {
    setInput(input.slice(0, -1));
  }
  function handleBrackets() {
    if (
      (openBrackets > closeBrackets && numbers.includes(lastCharacter)) ||
      (openBrackets > closeBrackets && lastCharacter === ")")
    ) {
      setInput(input + ")");
    } else {
      setInput(input + "(");
    }
  }
  function handleClear() {
    setInput("");
  }
  function handlePlusMinus() {
    if (beforeCurrentNumber.endsWith("(-")) {
      setInput(beforeCurrentNumber.slice(0, -2) + currentNumber);
    } else {
      setInput(beforeCurrentNumber + "(-" + currentNumber);
    }
  }
  function handleEqual() {
    setInput(String(result));
  }
  return (
    <div>
      <Display input={input} result={result} />
      <ButtonPanel
        onNewEntry={handleNewEntry}
        onClear={handleClear}
        onEqual={handleEqual}
        onDot={handleDot}
        onOperator={handleOperator}
        onBackspace={handleBackspace}
        onBrackets={handleBrackets}
        onPlusMinus={handlePlusMinus}
      />
    </div>
  );
}

export default function App() {
  return <Calculator />;
}
