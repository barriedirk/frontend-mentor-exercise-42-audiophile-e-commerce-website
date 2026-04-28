import CategoryCard from "@/components/ui/CategoryCard";
import Heading from "@/components/ui/Heading";
import ProductRecommendation from "@/components/ui/ProductRecommendation";

export default function Headphones() {
  return (
    <>
      <Heading text="Headphones" level="h1" />

      <div className="max-w-[1440px] mx-auto px-6">
        <ProductRecommendation
          className="my-[40px] lg:my-[120px]"
          isNewProduct={true}
          images={{
            mobile:
              "/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg",
            tablet:
              "/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg",
            desktop:
              "/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg",
          }}
          name="XX99 Mark II"
          title="XX99 Mark II Headphones"
          description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
        />
        <ProductRecommendation
          className="my-[40px] lg:my-[120px]"
          reversed={true}
          images={{
            mobile:
              "/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg",
            tablet:
              "/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg",
            desktop:
              "/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg",
          }}
          name="XX99 Mark I"
          title="XX99 Mark I Headphones"
          description="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
        />
        <ProductRecommendation
          className="my-[40px] lg:my-[120px]"
          images={{
            mobile:
              "/product-xx59-headphones/mobile/image-category-page-preview.jpg",
            tablet:
              "/product-xx59-headphones/tablet/image-category-page-preview.jpg",
            desktop:
              "/product-xx59-headphones/desktop/image-category-page-preview.jpg",
          }}
          name="XX59"
          title="XX59 Headphones"
          description="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
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
