"use server";

import { CheckoutFormData } from "@/schemas/checkout.schema";

export async function processOrder(data: CheckoutFormData) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // mock db call
  console.log("Order processed for:", data);

  return { success: true };
}
