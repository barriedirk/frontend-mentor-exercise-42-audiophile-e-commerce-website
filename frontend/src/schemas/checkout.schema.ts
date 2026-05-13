import * as z from "zod";

export const checkoutSchema = z
  .object({
    name: z.string().min(2, "Name is required"),
    email: z.email("Invalid email"),

    phoneNumber: z.string().min(10, "Invalid phone number"),

    address: z.string().min(10, "Invalid address"),
    city: z.string().min(2, "City is required"),
    country: z.string().min(2, "Country is required"),

    zipCode: z
      .string()
      .regex(/^\d{5}$/, { message: "Zip code must be 5 digits" }),

    paymentMethod: z.enum(["e-money", "cash-on-delivery"]),
    eMoneyNumber: z.string().optional(),
    eMoneyPin: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.paymentMethod === "e-money") {
        return !!data.eMoneyNumber && data.eMoneyNumber.length === 11;
      }
      return true;
    },
    {
      message: "e-Money Number must be 11 digits",
      path: ["eMoneyNumber"],
    },
  )
  .refine(
    (data) => {
      if (data.paymentMethod === "e-money") {
        return !!data.eMoneyPin && data.eMoneyPin.length === 4;
      }
      return true;
    },
    {
      message: "e-Money PIN must be 4 digits",
      path: ["eMoneyPin"],
    },
  );

export type CheckoutFormData = z.infer<typeof checkoutSchema>;
