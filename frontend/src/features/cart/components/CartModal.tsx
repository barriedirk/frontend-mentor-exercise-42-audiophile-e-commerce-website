import Modal from "@/components/ui/Modal";
import { useCartStore } from "@/core/store/useCartStore";
import CartSummary from "./CartSummary";
import CartEmpty from "./CartEmpty";

interface CartModalProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

export default function CartModal({ isOpen, onClose }: CartModalProps) {
  const cart = useCartStore((state) => state.cart);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {cart.length === 0 ? <CartEmpty onClose={onClose} /> : <CartSummary />}
    </Modal>
  );
}
