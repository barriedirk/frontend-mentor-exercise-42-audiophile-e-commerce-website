import { CartItem } from "@/core/types/product.types";

export const SHIPPING_FEE = 50;
export const VAT_RATE = 0.2;

export const CartEngine = {
  calculateSubtotal: (items: readonly CartItem[]): number => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  },

  calculateVat: (subtotal: number): number => {
    return subtotal * VAT_RATE;
  },

  calculateTotal: (subtotal: number, vat: number, shipping: number): number => {
    return subtotal + vat + shipping;
  },

  /**
   * Senior Tip: Returns a consolidated summary to avoid multiple
   * calculations across components.
   */
  getCartSummary: (items: readonly CartItem[]) => {
    const subtotal = CartEngine.calculateSubtotal(items);
    const vat = CartEngine.calculateVat(subtotal);
    const total = CartEngine.calculateTotal(subtotal, vat, SHIPPING_FEE);

    return {
      subtotal,
      vat,
      total,
      shipping: SHIPPING_FEE,
    };
  },
};
