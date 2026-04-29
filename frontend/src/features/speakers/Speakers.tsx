import CategoryCard from "@/components/ui/CategoryCard";
import Heading from "@/components/ui/Heading";
import ProductRecommendation from "@/components/ui/ProductRecommendation";

export default function Speakers() {
  return (
    <>
      <Heading text="Speakers" level="h1" />
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex flex-col gap-[120px] my-[64px] lg:my-[160px]">
          <ProductRecommendation
            isNewProduct={true}
            images={{
              mobile:
                "/product-zx9-speaker/mobile/image-category-page-preview.jpg",
              tablet:
                "/product-zx9-speaker/tablet/image-category-page-preview.jpg",
              desktop:
                "/product-zx9-speaker/desktop/image-category-page-preview.jpg",
            }}
            name="ZX9 SPEAKER"
            title="ZX9 SPEAKER"
            description="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
          />
          <ProductRecommendation
            reversed={true}
            isNewProduct={true}
            images={{
              mobile:
                "/product-zx7-speaker/mobile/image-category-page-preview.jpg",
              tablet:
                "/product-zx7-speaker/tablet/image-category-page-preview.jpg",
              desktop:
                "/product-zx7-speaker/desktop/image-category-page-preview.jpg",
            }}
            name="ZX7 SPEAKER"
            title="ZX7 SPEAKER"
            description="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
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
