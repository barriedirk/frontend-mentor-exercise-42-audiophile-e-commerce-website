import Image from "next/image";

import { CartItem } from "@/core/types/cartItem.types";

interface CartCheckoutItemProps {
  readonly item: CartItem;
}

export default function CartCheckoutItem({ item }: CartCheckoutItemProps) {
  const { name, price, image, quantity } = item;

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

      <p className="text-black/50 text-[14px] font-bold ml-auto">
        x{quantity.toLocaleString("en-US")}
      </p>
    </li>
  );
}
