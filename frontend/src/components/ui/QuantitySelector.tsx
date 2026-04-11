import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/core/utils/cn";

const selectorVariants = cva(
  "flex items-center justify-between bg-gray-light font-bold transition-all",
  {
    variants: {
      size: {
        standard: "w-[120px] h-[48px]",
        cart: "w-[96px] h-[32px]",
      },
    },
    defaultVariants: {
      size: "standard",
    },
  },
);

interface QuantitySelectorProps extends VariantProps<typeof selectorVariants> {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  className?: string;
}

const QuantitySelector = ({
  quantity,
  onIncrement,
  onDecrement,
  size,
  className,
}: QuantitySelectorProps) => {
  return (
    <div className={cn(selectorVariants({ size, className }))}>
      <button
        type="button"
        onClick={onDecrement}
        className="px-3 text-black/25 hover:text-primary transition-colors h-full flex items-center justify-center text-[18px]"
      >
        -
      </button>

      <span className="text-black text-[13px] select-none">{quantity}</span>

      <button
        type="button"
        onClick={onIncrement}
        className="px-3 text-black/25 hover:text-primary transition-colors h-full flex items-center justify-center text-[18px]"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
