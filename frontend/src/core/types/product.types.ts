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
  readonly categoryImage: ProductImage;
  readonly new: boolean;
  readonly price: number;
  readonly description: string;
  readonly features: string;
  readonly includes: ProductIncludes[];
  readonly gallery: ProductGallery;
  readonly others: ProductOther[];
}

export interface Image {
  readonly mobile: string;
  readonly tablet: string;
  readonly desktop: string;
}

export interface CategoryImage {
  readonly mobile: string;
  readonly tablet: string;
  readonly desktop: string;
}

export interface ProductIncludes {
  readonly quantity: number;
  readonly item: string;
}

export interface ProductGallery {
  readonly first: Image;
  readonly second: Image;
  readonly third: Image;
}

export interface ProductOther {
  readonly slug: string;
  readonly name: string;
  readonly image: Image2;
}

export interface Image2 {
  readonly mobile: string;
  readonly tablet: string;
  readonly desktop: string;
}
