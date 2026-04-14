import { cn } from "@/core/utils/cn";

interface InTheBoxItemProps {
  readonly quantity: number;
  readonly item: string;
  readonly className?: string;
}

export default function InTheBoxItem({
  quantity,
  item,
  className,
}: InTheBoxItemProps) {
  return (
    <li className={cn("flex items-center gap-6 text-[15px]", className)}>
      <span className="text-primary font-bold w-4">{quantity}x</span>
      <span className="text-black/50 font-medium">{item}</span>
    </li>
  );
}
