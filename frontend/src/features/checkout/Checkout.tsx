"use client";

import dynamic from "next/dynamic";
import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import {
  checkoutSchema,
  type CheckoutFormData,
} from "@/schemas/checkout.schema";

import Image from "next/image";

import BackButton from "@/components/ui/BackButton";
import { FormInput } from "@/components/forms/FormInput";
import Label from "@/components/ui/Label";
import { FormRadio } from "@/components/forms/FormRadio";
import { useCartStore } from "@/core/store/useCartStore";
import Button from "@/components/ui/Button";
import CartCheckoutList from "./components/CartCheckoutList";

const CheckoutSummaryRow = dynamic(
  () => import("./components/CheckoutSummaryRow"),
  { ssr: false },
);

export default function Checkout() {
  const totalPrice = useCartStore((state) => state.getTotalPrice());

  const shipping = 50;
  const vat = totalPrice * 0.2;
  const grandTotal = totalPrice + shipping;

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

  const selectedPaymentMethod = watch("paymentMethod");

  const onSubmit: SubmitHandler<CheckoutFormData> = async (values) => {
    console.log(values);
  };

  return (
    <div className="max-w-[1110px] mx-auto px-6 py-20">
      <BackButton className="pl-0" />
      <section className="mt-10 bg-white rounded-lg">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-3 gap-1"
          aria-labelledby="checkout-form-heading"
        >
          <div className="md:col-span-2 flex flex-col gap-y-12 p-3 rounded-lg bg-white">
            <h1 className="text-[32px] font-bold uppercase tracking-[1px] mb-10">
              Checkout
            </h1>

            <fieldset aria-labelledby="billing-details-label">
              <legend
                id="billing-details-label"
                className="text-primary text-[13px] tracking-[1px] uppercase"
              >
                Billing Details
              </legend>
              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                <FormInput
                  control={control}
                  name="name"
                  mask="ALPHA_NUMERIC_WITH_SPACES"
                  label="Name"
                  placeholder="eg. John Doe"
                  inputMode="text"
                  maxLength={50}
                />
                <FormInput
                  control={control}
                  name="email"
                  label="Email"
                  mask="EMAIL_CHARS"
                  placeholder="eg. john.doe@email.com"
                  inputMode="email"
                  maxLength={100}
                />
                <FormInput
                  control={control}
                  name="phoneNumber"
                  label="Phone Number"
                  mask="PHONE_NUMBER"
                  placeholder="eg: 123456789"
                  inputMode="numeric"
                  maxLength={15}
                />
              </div>
            </fieldset>
            <fieldset aria-labelledby="shipping-info-label">
              <legend
                id="shipping-info-label"
                className="text-primary text-[13px] tracking-[1px] uppercase"
              >
                Shipping Info
              </legend>
              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                <FormInput
                  control={control}
                  name="address"
                  label="Address"
                  mask="ALPHA_NUMERIC_WITH_SPACES"
                  className="md:col-span-2"
                  placeholder="eg. 1137 Red Hill St."
                  inputMode="text"
                  maxLength={100}
                />
                <FormInput
                  control={control}
                  name="city"
                  label="City"
                  mask="ALPHA_NUMERIC_WITH_SPACES"
                  placeholder="eg. New York"
                  inputMode="text"
                  maxLength={50}
                />
                <FormInput
                  control={control}
                  name="country"
                  label="Country"
                  mask="ALPHA_NUMERIC_WITH_SPACES"
                  placeholder="eg. USA"
                  inputMode="text"
                  maxLength={50}
                />
                <FormInput
                  control={control}
                  name="zipCode"
                  label="Zip Code"
                  mask="INTEGER_NUMBERS"
                  placeholder="eg. 98144"
                  inputMode="text"
                  maxLength={5}
                />
              </div>
            </fieldset>
            <fieldset aria-labelledby="payment-method-label">
              <legend
                id="payment-method-label"
                className="text-primary text-[13px] tracking-[1px] uppercase"
              >
                Payment Details
              </legend>
              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                <Label htmlFor="payment-method" label="Payment Method" />
                <div className="flex flex-col gap-2">
                  <FormRadio
                    control={control}
                    name="paymentMethod"
                    label="e-Money"
                    value="e-money"
                  />
                  <FormRadio
                    control={control}
                    name="paymentMethod"
                    label="Cash on Delivery"
                    value="cash-on-delivery"
                  />
                </div>
              </div>

              {selectedPaymentMethod === "e-money" && (
                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormInput
                    control={control}
                    name="eMoneyNumber"
                    label="e-Money Number"
                    placeholder="eg. 238521993"
                    mask="INTEGER_NUMBERS"
                    inputMode="numeric"
                    maxLength={11}
                  />
                  <FormInput
                    control={control}
                    name="eMoneyPin"
                    label="e-Money PIN"
                    placeholder="eg. 1234"
                    mask="INTEGER_NUMBERS"
                    inputMode="numeric"
                    maxLength={4}
                  />
                </div>
              )}

              {selectedPaymentMethod === "cash-on-delivery" && (
                <div className="mt-5 flex flex-row items-center gap-5">
                  <Image
                    src="/checkout/icon-cash-on-delivery.svg"
                    width={48}
                    height={48}
                    alt=""
                    className="h-[48px] w-[48px]"
                  />

                  <p className="text-black/50 font-medium text-[15px]">
                    The ‘Cash on Delivery’ option enables you to pay in cash
                    when our delivery courier arrives at your residence. Just
                    make sure your address is correct so that your order will
                    not be cancelled.
                  </p>
                </div>
              )}
            </fieldset>
          </div>
          <div className="flex flex-col gap-5 p-3 rounded-lg bg-white">
            <h2 className="font-bold text-[18px]">Summary</h2>

            <CartCheckoutList />

            <div className="flex flex-col gap-2">
              <CheckoutSummaryRow label="Total" value={totalPrice} />

              <CheckoutSummaryRow label="SHIPPING" value={shipping} />

              <CheckoutSummaryRow label="VAT (INCLUDED)" value={vat} />

              <CheckoutSummaryRow
                label="GRAND TOTAL"
                value={grandTotal}
                isTotal={true}
                className="mt-5"
              />
            </div>

            <Button
              className="w-full"
              type="submit"
              disabled={!isValid || isSubmitting}
              loading={isSubmitting}
            >
              CONTINUE & PAY
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
}
