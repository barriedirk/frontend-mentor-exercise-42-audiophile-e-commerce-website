import CategoryCard from "@/components/ui/CategoryCard";
import Heading from "@/components/ui/Heading";
import ProductRecommendation from "@/components/ui/ProductRecommendation";

export default function Speakers() {
  return (
    <>
      <Heading text="Speakers" level="h1" />
      <div className="max-w-[1440px] mx-auto px-6">
        <ProductRecommendation
          className="my-[40px] lg:my-[120px]"
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
          className="my-[40px] lg:my-[120px]"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-8 pt-20 my-[40px] lg:my-[120px]">
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
      </div>
    </>
  );
}
