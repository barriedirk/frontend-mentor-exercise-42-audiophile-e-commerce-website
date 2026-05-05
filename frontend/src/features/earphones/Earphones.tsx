import CategoryCard from "@/components/ui/CategoryCard";
import Heading from "@/components/ui/Heading";
import ProductRecommendation from "@/components/ui/ProductRecommendation";

export default function Earphones() {
  return (
    <>
      <Heading text="Earphones" level="h1" />

      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex flex-col gap-[120px] my-[64px] lg:my-[160px]">
          <ProductRecommendation
            isNewProduct={true}
            images={{
              mobile:
                "/product-yx1-earphones/mobile/image-category-page-preview.jpg",
              tablet:
                "/product-yx1-earphones/tablet/image-category-page-preview.jpg",
              desktop:
                "/product-yx1-earphones/desktop/image-category-page-preview.jpg",
            }}
            name="YX1 WIRELESS EARPHONES"
            title="YX1 WIRELESS EARPHONES"
            description="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
            href="/product/yx1-earphones"
          />
        </div>

        <nav aria-label="Category navigation" className="pt-20 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-8">
            <CategoryCard
              title="Headphones"
              href="/headphones"
              imageSrc="/desktop/image-category-thumbnail-headphones.png"
            />
            <CategoryCard
              title="Speakers"
              href="/speakers"
              imageSrc="/desktop/image-category-thumbnail-speakers.png"
            />
            <CategoryCard
              title="Earphones"
              href="/earphones"
              imageSrc="/desktop/image-category-thumbnail-earphones.png"
            />
          </div>
        </nav>
      </div>
    </>
  );
}
