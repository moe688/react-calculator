export default function Button({ value, onButtonClick }) {
  return <button onClick={() => onButtonClick(value)}>{value}</button>;
}
