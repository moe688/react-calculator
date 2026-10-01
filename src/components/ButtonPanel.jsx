import Button from "./Button";

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
