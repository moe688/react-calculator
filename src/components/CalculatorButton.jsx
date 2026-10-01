import { Button } from "@/components/ui/button";

export default function CalculatorButton({ value, onButtonClick, children }) {
  return (
    <Button
      className="h-16 w-full text-2xl"
      onClick={() => onButtonClick(value)}
    >
      {children ?? value}
    </Button>
  );
}
