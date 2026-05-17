import Image from "next/image";

import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import CartCheckoutList from "./CartCheckoutList";
import { formatPrice } from "@/core/utils/formatNumber";
import { CartItem } from "@/core/types/cartItem.types";

interface ThankYouModalProps {
  readonly isOpen: boolean;
  readonly snapshotItems: CartItem[];
  readonly onClose: () => void;
  readonly grandTotal: number;
}

export default function ThankYouModal({
  isOpen,
  onClose,
  snapshotItems,
  grandTotal,
}: ThankYouModalProps) {
  return (
    <Modal size="md" isOpen={isOpen} onClose={onClose} isCentered={true}>
      <div className="p-8 bg-white rounded-lg w-full">
        <Image
          src="/checkout/icon-order-confirmation.svg"
          alt=""
          width={64}
          height={64}
          className="mx-auto md:mx-0 mb-8 lg:mb-0"
        />

        <h2 className="text-[24px] font-bold uppercase mb-4 text-black">
          THANK YOU FOR YOUR ORDER
        </h2>
        <p className="mb-6 text-black/50">
          You will receive an email confirmation shortly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 mb-8">
          <CartCheckoutList
            snapshotItems={snapshotItems}
            background="grey"
            imageSize="small"
            height="normal"
          />

          <div className="bg-black rounded-lg p-8">
            <div className="flex flex-col justify-end h-full">
              <h3 className="text-white/50 text-lg font-medium">GRAND TOTAL</h3>
              <h4 className="text-white text-xl font-bold">
                $ {formatPrice(grandTotal)}
              </h4>
            </div>
          </div>
        </div>

        <Button fullWidth onClick={onClose}>
          Back to Home
        </Button>
      </div>
    </Modal>
  );
}
