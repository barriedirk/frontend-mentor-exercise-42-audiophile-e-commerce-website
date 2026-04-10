export type Category = "headphones" | "speakers" | "earphones";

export interface ProductImage {
  readonly mobile: string;
  readonly tablet: string;
  readonly desktop: string;
}

export interface Product {
  readonly id: number;
  readonly slug: string;
  readonly name: string;
  readonly image: ProductImage;
  readonly category: Category;
  readonly description: string;
  readonly price: number;
  readonly features: string;
  readonly isNew: boolean;
}

export interface CartItem extends Pick<Product, "id" | "name" | "price"> {
  readonly quantity: number;
  readonly thumbnail: string;
}
