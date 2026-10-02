import Button from "./Button";

const BUTTONS = [
  ["C", "()", "+/-", "/"],
  ["7", "8", "9", "x"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["⌫", "0", ".", "="],
];

export const ButtonPanel = ({
  onClear,
  onNewEntry,
  onEqual,
  onDot,
  onOperator,
  onBackspace,
  onBrackets,
  onPlusMinus,
}) => {
  const getSuitableFunction = (buttonContent) => {
    switch (buttonContent) {
      case "C":
        return onClear;
      case "()":
        return onBrackets;
      case "+/-":
        return onPlusMinus;
      case "⌫":
        return onBackspace;
      case ".":
        return onDot;
      case "=":
        return onEqual;
      case "/":
      case "x":
      case "-":
      case "+":
        return onOperator;
      default:
        return onNewEntry;
    }
  };
  return (
    <div>
      {BUTTONS.map((row) => {
        return (
          <div>
            {row.map((buttonContent) => {
              const buttonFunction = getSuitableFunction(buttonContent);
              return (
                <Button value={buttonContent} onButtonClick={buttonFunction} />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
