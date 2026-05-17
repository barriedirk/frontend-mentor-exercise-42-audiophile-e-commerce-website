"use client";

import dynamic from "next/dynamic";
import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import {
  checkoutSchema,
  type CheckoutFormData,
} from "@/schemas/checkout.schema";

import BackButton from "@/components/ui/BackButton";

import { useCartStore } from "@/core/store/useCartStore";
import Button from "@/components/ui/Button";
import CartCheckoutList from "./components/CartCheckoutList";
import { useState } from "react";
import { processOrder } from "@/actions/checkout";
import ThankYouModal from "./components/ThankYouModal";
import { SHIPPING_COST } from "@/core/constants/shipping";
import { CartItem } from "@/core/types/cartItem.types";
import CheckoutForm from "./components/CheckoutForm";
import { useRouter } from "next/navigation";

const CheckoutSummaryRow = dynamic(
  () => import("./components/CheckoutSummaryRow"),
  { ssr: false },
);

export default function Checkout() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [orderSnapshot, setOrderSnapshot] = useState<{
    items: CartItem[];
    total: number;
  } | null>(null);
  const [paymentError, setPaymentError] = useState<string | null>(null);

  const cartItems = useCartStore((state) => state.cart);
  const totalPrice = useCartStore((state) => state.getTotalPrice());

  const shipping = SHIPPING_COST;
  const vat = totalPrice * 0.2;
  const grandTotal = totalPrice + shipping;

  const displayItems = orderSnapshot ? orderSnapshot.items : cartItems;
  const displayTotal = orderSnapshot ? orderSnapshot.total : totalPrice;
  const displayVat = orderSnapshot ? orderSnapshot.total * 0.2 : vat;
  const displayGrandTotal = orderSnapshot
    ? orderSnapshot.total + shipping
    : grandTotal;

  const {
    control,
    handleSubmit,
    watch,
    formState: { isValid, isSubmitting },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
      city: "",
      country: "",
      zipCode: "",
      paymentMethod: "e-money",
      eMoneyNumber: "",
      eMoneyPin: "",
    },
  });

  const onSubmit: SubmitHandler<CheckoutFormData> = async (values) => {
    try {
      const result = await processOrder(values);

      if (result.success) {
        setOrderSnapshot({
          items: useCartStore.getState().cart,
          total: totalPrice,
        });

        useCartStore.getState().clearCart();
        setShowModal(true);
      }
    } catch (error) {
      console.error("Payment failed", error);
      setPaymentError(
        "Your transaction could not be processed. Please check your payment details or try again later.",
      );
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setOrderSnapshot(null);
    router.push("/");
  };

  return (
    <>
      <div className="max-w-[1110px] mx-auto px-6 py-20 animate-fade-in-up">
        <BackButton className="pl-0" />
        <section className="mt-10 bg-white rounded-lg">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-3 gap-1"
            aria-labelledby="checkout-form-heading"
          >
            <CheckoutForm
              control={control}
              watch={watch}
              disabled={isSubmitting}
            />

            <div className="flex flex-col gap-5 p-3 rounded-lg bg-white">
              <h2 className="font-bold text-[18px]">Summary</h2>

              <CartCheckoutList snapshotItems={displayItems} />

              <div className="flex flex-col gap-2">
                <CheckoutSummaryRow label="Total" value={displayTotal} />
                <CheckoutSummaryRow label="SHIPPING" value={shipping} />
                <CheckoutSummaryRow label="VAT (INCLUDED)" value={displayVat} />
                <CheckoutSummaryRow
                  label="GRAND TOTAL"
                  value={displayGrandTotal}
                  isTotal={true}
                  className="mt-5"
                />
                {paymentError && (
                  <div className="p-4 mt-4 text-sm text-error bg-error/10 rounded-md border border-error">
                    {paymentError}
                  </div>
                )}
              </div>

              <Button
                className="w-full"
                type="submit"
                disabled={!isValid || isSubmitting}
                loading={isSubmitting}
              >
                {isSubmitting ? "PROCESSING..." : "CONTINUE & PAY"}
              </Button>
            </div>
          </form>
        </section>
      </div>
      {showModal && (
        <ThankYouModal
          isOpen={showModal}
          onClose={() => handleCloseModal()}
          snapshotItems={displayItems}
          grandTotal={displayGrandTotal}
        />
      )}
    </>
  );
}
