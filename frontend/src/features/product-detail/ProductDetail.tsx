"use client";

import BackButton from "@/components/ui/BackButton";
import Button from "@/components/ui/Button";
import Gallery from "@/components/ui/Gallery";
import InTheBox from "@/components/ui/InTheBox";
import Picture from "@/components/ui/Picture";
import ProductFeatures from "@/components/ui/ProductFeatures";
import QuantitySelector from "@/components/ui/QuantitySelector";
import type { Product } from "@/core/types/product.types";
import { useState } from "react";
import CategoryLinks from "../../components/ui/CategoryLinks";
import { useCartStore } from "@/core/store/useCartStore";

interface ProductDetailProps {
  readonly product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const addToCart = useCartStore((state) => state.addToCart);
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className="max-w-[1110px] mx-auto px-6 py-20">
      <BackButton />
      <article className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-28 mt-10">
        <div className="aspect-auto md:aspect-square bg-[#F1F1F1] flex items-center justify-center">
          <Picture
            {...product.image}
            alt=""
            className="rounded-lg object-contain mx-auto max-h-[352px] lg:h-[560px]"
          />
        </div>
        <div className="flex flex-col gap-7 justify-center">
          {product.new && (
            <p className="uppercase text-primary text-[15px] tracking-[10px] font-normal">
              New product
            </p>
          )}
          <h1 className="text-black text-[24px] lg:text-[40px] font-bold uppercase tracking-[1.71px] leading-[120%]">
            {product.name}
          </h1>
          <p className="text-black/50 text-[15px] leading-[25px] font-medium">
            {product.description}
          </p>
          <p className="text-black font-bold text-[20px] tracking-[1.25px]">{`$ ${product.price.toLocaleString("en-US")}`}</p>

          <section className="flex flex-row gap-8">
            <QuantitySelector
              onDecrement={() => {
                setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
              }}
              onIncrement={() => {
                setQuantity((prev) => prev + 1);
              }}
              quantity={quantity}
            />

            <Button onClick={() => addToCart(product, quantity)}>
              Add to cart
            </Button>
          </section>
        </div>
      </article>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-28 mt-10">
        <ProductFeatures features={product.features} />
        <InTheBox includes={product.includes} />
      </section>

      <Gallery className="mt-10" gallery={product.gallery} />

      <CategoryLinks className="px-0 py-10" cardClassName="max-w-full" />
    </div>
  );
}
