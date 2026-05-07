import QuantitySelector from "@/components/ui/QuantitySelector";
import { useCartStore } from "@/core/store/useCartStore";
import { CartItem } from "@/core/types/cartItem.types";

import Image from "next/image";

interface CartItemProps {
  readonly item: CartItem;
}

export default function CartProduct({ item }: CartItemProps) {
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const { id, name, price, image, quantity } = item;

  return (
    <li className="flex items-center justify-start py-4 gap-2">
      <Image
        src={image.mobile}
        alt={name}
        width={64}
        height={64}
        className="bg-slate-100 rounded-lg"
      />

      <div className="flex flex-col gap-1">
        <h3 className="text-black text-[15px] font-bold leading-[100%]">
          {name}
        </h3>
        <p className="text-black/50 text-[14px] font-bold">
          ${price.toLocaleString("en-US")}
        </p>
      </div>

      <QuantitySelector
        className="ml-auto shrink-[150px]"
        size="cart"
        onDecrement={() => updateQuantity(id, Math.max(0, quantity - 1))}
        onIncrement={() => updateQuantity(id, quantity + 1)}
        quantity={quantity}
      />
    </li>
  );
}
