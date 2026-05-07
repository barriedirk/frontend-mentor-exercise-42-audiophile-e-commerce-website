import type { Product } from "./product.types";

// export interface CartItem extends Pick<Product, "id" | "name" | "price"> {
//   readonly quantity: number;
//   readonly thumbnail: string;
// }

export interface CartItem extends Product {
  quantity: number;
}
