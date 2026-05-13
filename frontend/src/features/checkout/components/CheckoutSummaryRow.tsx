import { cn } from "@/core/utils/cn";
import { formatPrice } from "@/core/utils/formatNumber";

export interface CheckoutSummaryRowProps {
  readonly label: string;
  readonly value: number;
  readonly className?: string;
  readonly isTotal?: boolean;
}

export default function CheckoutSummaryRow({
  label,
  value,
  className,
  isTotal = false,
}: CheckoutSummaryRowProps) {
  return (
    <div className={cn("flex justify-between items-center", className)}>
      <h3 className="text-[15px] font-bold uppercase text-black/50">{label}</h3>
      <output
        className={cn(
          "font-bold text-[18px] uppercase",
          isTotal ? "text-primary" : "text-black",
        )}
      >
        $ {formatPrice(value)}
      </output>
    </div>
  );
}
