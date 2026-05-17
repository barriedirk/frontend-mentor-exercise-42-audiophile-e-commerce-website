import products from "@/core/data/data.json";
import type { Product } from "@/core/types/product.types";

export const getProductBySlug = (slug: string): Product | undefined => {
  return (products as Product[]).find((p) => p.slug === slug);
};

export const getProductsByCategory = (category: string): Product[] => {
  return (products as Product[]).filter((p) => p.category === category);
};
