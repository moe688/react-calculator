import { Button } from "@/components/ui/button";

export default function CalculatorButton({ value, onButtonClick, children }) {
  return (
    <Button onClick={() => onButtonClick(value)}>{children ?? value}</Button>
  );
}
