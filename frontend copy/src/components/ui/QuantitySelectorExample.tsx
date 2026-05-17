import { cn } from "@/core/utils/cn";

interface QuantitySelectorExampleProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  size?: "standard" | "small";
}

const QuantitySelectorExample = ({
  quantity,
  onIncrement,
  onDecrement,
  size = "standard",
}: QuantitySelectorExampleProps) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between bg-gray-light font-bold",
        size === "standard" ? "w-[120px] h-[48px]" : "w-[96px] h-[32px]",
      )}
    >
      <button
        onClick={onDecrement}
        className="px-4 text-black/25 hover:text-primary transition-colors h-full"
      >
        -
      </button>
      <span
        className={cn(
          "text-black",
          size === "standard" ? "text-[13px]" : "text-[12px]",
        )}
      >
        {quantity}
      </span>
      <button
        onClick={onIncrement}
        className="px-4 text-black/25 hover:text-primary transition-colors h-full"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelectorExample;
