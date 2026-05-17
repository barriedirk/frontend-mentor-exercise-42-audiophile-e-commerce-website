import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/core/utils/cn";

import CartCheckoutItem from "./CartICheckoutItem";
import { CartItem } from "@/core/types/cartItem.types";

const listVariants = cva("min-h-[120px]", {
  variants: {
    background: {
      white: "bg-white",
      grey: "bg-slate-100",
    },
    height: {
      normal: "max-h-[min(15vh,200px)]",
      large: "max-h-[320px]",
    },
  },
  defaultVariants: {
    background: "white",
    height: "large",
  },
});

const IMAGE_SIZES = {
  large: 64,
  small: 45,
} as const;

interface CartCheckoutListProps extends VariantProps<typeof listVariants> {
  readonly imageSize?: keyof typeof IMAGE_SIZES;
  readonly snapshotItems: CartItem[];
}

export default function CartCheckoutList({
  background,
  height,
  imageSize = "large",
  snapshotItems,
}: Readonly<CartCheckoutListProps>) {
  const numericSize = IMAGE_SIZES[imageSize];

  return (
    <ul
      className={cn(
        listVariants({ background, height }),
        "flex flex-col gap-2 overflow-y-auto pr-2",
      )}
    >
      {snapshotItems.map((item) => (
        <CartCheckoutItem key={item.id} item={item} imageSize={numericSize} />
      ))}
    </ul>
  );
}
