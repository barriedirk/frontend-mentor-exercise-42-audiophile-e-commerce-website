import { ProductIncludes } from "@/core/types/product.types";
import { cn } from "@/core/utils/cn";
import InTheBoxItem from "./InTheBoxItem";

interface InTheBoxProps {
  readonly includes: ProductIncludes[];
  readonly className?: string;
}

export default function InTheBox({ includes, className }: InTheBoxProps) {
  return (
    <div
      className={cn(
        "flex flex-row lg:flex-col gap-8 lg:max-w-[635px]",
        className,
      )}
    >
      <h2 className="flex-1 lg:flex-grow-0 text-[24px] md:text-[32px] font-bold uppercase tracking-[0.86px] md:tracking-[1.14px]">
        In the box
      </h2>
      <ul className="space-y-2 flex-1 md:flex-grow-0">
        {includes.map(({ quantity, item }) => (
          <InTheBoxItem
            key={`${quantity}-${item}`}
            quantity={quantity}
            item={item}
          />
        ))}
      </ul>
    </div>
  );
}
