import { useCartStore } from "@/core/store/useCartStore";
import CartCheckoutItem from "./CartICheckoutItem";

export default function CartCheckoutList() {
  const cart = useCartStore((state) => state.cart);

  return (
    <ul className="flex flex-col gap-2 max-h-[320px] overflow-y-auto pr-2">
      {cart.map((item) => (
        <CartCheckoutItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
