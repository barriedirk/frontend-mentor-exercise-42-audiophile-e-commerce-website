import Button from "@/components/ui/Button";
import { useCartStore } from "@/core/store/useCartStore";
import CartProduct from "./CartProduct";
import { useRouter } from "next/navigation";

interface CartSummaryProps {
  readonly onClose: () => void;
}

export default function CartSummary({ onClose }: CartSummaryProps) {
  const router = useRouter();
  const cart = useCartStore((state) => state.cart);
  const totalPrice = useCartStore((state) => state.getTotalPrice());
  return (
    <section
      className="bg-white flex flex-col gap-6"
      aria-labelledby="cart-title"
    >
      <div className="flex items-center justify-between">
        <h2 id="cart-title" className="font-bold text-[18px] tracking-[1.29px]">
          Cart ({cart.length})
        </h2>
        {cart.length > 0 && (
          <Button
            variant="ghost"
            onClick={() => useCartStore.getState().clearCart()}
            size="sm"
          >
            Remove all
          </Button>
        )}
      </div>
      <div className="max-h-[300px] overflow-y-auto">
        <ul>
          {cart.map((item) => (
            <CartProduct key={item.id} item={item} />
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <h3 className="font-medium text-[15px] text-black/50 uppercase">
            Total
          </h3>
          <p className="text-black font-bold text-[18px] tracking-[1.29px]">
            {"$" + totalPrice.toLocaleString("en-US")}
          </p>
        </div>

        <Button
          variant="primary"
          className="w-full"
          disabled={cart.length === 0}
          onClick={() => {
            onClose();
            router.push("/checkout");
          }}
        >
          checkout
        </Button>
      </div>
    </section>
  );
}
