import { useState } from "react";
import { evaluate } from "mathjs";
import ButtonPanel from "./components/ButtonPanel";
import Display from "./components/Display";
import "./App.css";

const NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const OPERATORS = ["+", "-", "/", "x"];
const SEPARATORS = [...OPERATORS, "(", ")"];

function Calculator() {
  const [input, setInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const lastCharacter = input.at(-1);
  const operatorIsBlocked = input === "" || OPERATORS.includes(lastCharacter);
  const openBrackets = input.split("(").length - 1;
  const closeBrackets = input.split(")").length - 1;
  const missingBrackets = openBrackets - closeBrackets;

  let currentNumber = input;
  for (const separator of SEPARATORS) {
    currentNumber = currentNumber.split(separator).at(-1);
  }
  const dotIsBlocked = currentNumber.includes(".");

  const beforeCurrentNumber = input.slice(
    0,
    input.length - currentNumber.length,
  );
  let result = "";

  try {
    result = evaluate(input.replaceAll("x", "*") + ")".repeat(missingBrackets));
  } catch (evaluationError) {
    console.error(evaluationError);
    result = "";
  }
  const resultToShow = Number.isFinite(result) ? result : "";
  const displayText = errorMessage !== "" ? errorMessage : resultToShow;

  function updateInput(newInput) {
    setInput(newInput);
    setErrorMessage("");
  }

  function handleNewEntry(digit) {
    updateInput(input + digit);
  }
  function handleDot(dot) {
    if (!dotIsBlocked) {
      if (OPERATORS.includes(input.at(-1)) || input === "") {
        updateInput(input + "0" + dot);
      } else {
        updateInput(input + dot);
      }
    }
  }
  function handleOperator(operator) {
    if (!operatorIsBlocked) {
      if ((operator === "x" || operator === "/") && lastCharacter === "(") {
        return;
      } else {
        updateInput(input + operator);
      }
    }
  }

  function handleBackspace() {
    updateInput(input.slice(0, -1));
  }
  function handleBrackets() {
    if (
      (openBrackets > closeBrackets && NUMBERS.includes(lastCharacter)) ||
      (openBrackets > closeBrackets && lastCharacter === ")")
    ) {
      updateInput(input + ")");
    } else {
      updateInput(input + "(");
    }
  }
  function handleClear() {
    updateInput("");
  }
  function handlePlusMinus() {
    if (beforeCurrentNumber.endsWith("(-")) {
      updateInput(beforeCurrentNumber.slice(0, -2) + currentNumber);
    } else {
      updateInput(beforeCurrentNumber + "(-" + currentNumber);
    }
  }
  function handleEqual() {
    if (result === "") {
      setErrorMessage("Invalid format used");
    } else if (!Number.isFinite(result)) {
      setErrorMessage("Not this time Bogdan ;)");
    } else {
      updateInput(String(result));
    }
  }

  console.log(
    "result:",
    result,
    "| resultToShow:",
    resultToShow,
    "| displayText:",
    displayText,
  );
  console.log("errorMessage:", errorMessage);

  console.log("Dot is blocked:" + dotIsBlocked);
  console.log("Operator is blocked:" + operatorIsBlocked);
  console.log("Open brackets:" + openBrackets);
  console.log("Close brackets:" + closeBrackets);
  console.log("The current number is:" + currentNumber);
  console.log("The previous number is:" + beforeCurrentNumber);
  console.log("The last character is:" + lastCharacter);

  return (
    <div>
      <Display input={input} result={displayText} />
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
