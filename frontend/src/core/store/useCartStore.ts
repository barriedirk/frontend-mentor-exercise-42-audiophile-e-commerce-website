import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/core/types/product.types";
import { CartItem } from "@/core/types/cartItem.types";

interface CartState {
  cart: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],

      updateQuantity: (productId, quantity) => {
        const currentCart = get().cart;
        const existingItem = currentCart.find((item) => item.id === productId);

        if (existingItem) {
          set({
            cart: currentCart.map((item) =>
              item.id === productId ? { ...item, quantity } : item,
            ),
          });
        }
      },

      addToCart: (product, quantity) => {
        const currentCart = get().cart;
        const existingItem = currentCart.find((item) => item.id === product.id);

        if (existingItem) {
          set({
            cart: currentCart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item,
            ),
          });
        } else {
          set({ cart: [...currentCart, { ...product, quantity }] });
        }
      },

      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        })),

      clearCart: () => set({ cart: [] }),

      getTotalPrice: () => {
        return get().cart.reduce(
          (total, item) => total + item.price * item.quantity,
          0,
        );
      },
    }),
    {
      name: "audiophile-cart-storage",
    },
  ),
);
