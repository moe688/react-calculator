import CalculatorButton from "./CalculatorButton";
import { Delete, Diff } from "lucide-react";

export default function ButtonPanel({
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
    <div className="grid grid-cols-4 gap-1">
      <CalculatorButton value="C" variant="secondary" onButtonClick={onClear} />
      <CalculatorButton
        value="()"
        variant="secondary"
        onButtonClick={onBrackets}
      />
      <CalculatorButton
        value="+/-"
        variant="secondary"
        onButtonClick={onPlusMinus}
      >
        <Diff />
      </CalculatorButton>
      <CalculatorButton
        value="/"
        variant="secondary"
        onButtonClick={onOperator}
      />
      <CalculatorButton value="7" onButtonClick={onNewEntry} />
      <CalculatorButton value="8" onButtonClick={onNewEntry} />
      <CalculatorButton value="9" onButtonClick={onNewEntry} />
      <CalculatorButton
        value="x"
        variant="secondary"
        onButtonClick={onOperator}
      />
      <CalculatorButton value="4" onButtonClick={onNewEntry} />
      <CalculatorButton value="5" onButtonClick={onNewEntry} />
      <CalculatorButton value="6" onButtonClick={onNewEntry} />
      <CalculatorButton
        value="-"
        variant="secondary"
        onButtonClick={onOperator}
      />
      <CalculatorButton value="1" onButtonClick={onNewEntry} />
      <CalculatorButton value="2" onButtonClick={onNewEntry} />
      <CalculatorButton value="3" onButtonClick={onNewEntry} />
      <CalculatorButton
        value="+"
        variant="secondary"
        onButtonClick={onOperator}
      />
      <CalculatorButton value="Backspace" onButtonClick={onBackspace}>
        <Delete />
      </CalculatorButton>
      <CalculatorButton value="0" onButtonClick={onNewEntry} />
      <CalculatorButton value="." onButtonClick={onDot} />
      <CalculatorButton value="=" variant="secondary" onButtonClick={onEqual} />
    </div>
  );
}
