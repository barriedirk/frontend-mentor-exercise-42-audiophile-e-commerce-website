"use client";

import Image from "next/image";
import { Control, UseFormWatch } from "react-hook-form";
import { type CheckoutFormData } from "@/schemas/checkout.schema";
import { FormInput } from "@/components/forms/FormInput";
import { FormRadio } from "@/components/forms/FormRadio";
import Label from "@/components/ui/Label";
import { useFocusFirstInput } from "@/core/hooks/useFocusFirstInput";

interface CheckoutFormProps {
  readonly control: Control<CheckoutFormData>;
  readonly watch: UseFormWatch<CheckoutFormData>;
  readonly disabled?: boolean;
}

export default function CheckoutForm({
  control,
  watch,
  disabled = false,
}: CheckoutFormProps) {
  const formContainerRef = useFocusFirstInput<HTMLDivElement>();

  const selectedPaymentMethod = watch("paymentMethod");

  return (
    <div
      ref={formContainerRef}
      className="md:col-span-2 flex flex-col gap-y-12 p-3 rounded-lg bg-white"
    >
      <h1
        id="checkout-form-heading"
        className="text-[32px] font-bold uppercase tracking-[1px] mb-10"
      >
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
            disabled={disabled}
          />
          <FormInput
            control={control}
            name="email"
            label="Email"
            mask="EMAIL_CHARS"
            placeholder="eg. john.doe@email.com"
            inputMode="email"
            maxLength={100}
            disabled={disabled}
          />
          <FormInput
            control={control}
            name="phoneNumber"
            label="Phone Number"
            mask="PHONE_NUMBER"
            placeholder="eg: 123456789"
            inputMode="numeric"
            maxLength={15}
            disabled={disabled}
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
            disabled={disabled}
          />
          <FormInput
            control={control}
            name="city"
            label="City"
            mask="ALPHA_NUMERIC_WITH_SPACES"
            placeholder="eg. New York"
            inputMode="text"
            maxLength={50}
            disabled={disabled}
          />
          <FormInput
            control={control}
            name="country"
            label="Country"
            mask="ALPHA_NUMERIC_WITH_SPACES"
            placeholder="eg. USA"
            inputMode="text"
            maxLength={50}
            disabled={disabled}
          />
          <FormInput
            control={control}
            name="zipCode"
            label="Zip Code"
            mask="INTEGER_NUMBERS"
            placeholder="eg. 98144"
            inputMode="numeric"
            maxLength={5}
            disabled={disabled}
          />
        </div>
      </fieldset>

      <fieldset aria-labelledby="payment-details-label">
        <legend
          id="payment-details-label"
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
              disabled={disabled}
            />
            <FormRadio
              control={control}
              name="paymentMethod"
              label="Cash on Delivery"
              value="cash-on-delivery"
              disabled={disabled}
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
              alt="Cash on delivery icon"
              className="h-[48px] w-[48px]"
            />
            <p className="text-black/50 font-medium text-[15px]">
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          </div>
        )}
      </fieldset>
    </div>
  );
}
