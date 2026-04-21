import CategoryCard from "@/components/ui/CategoryCard";

export default function CategoryLinks() {
  return (
    <div className="px-10 relative py-16 lg:py-[110px]">
      <div className="max-w-[1110px] mx-auto px-6 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-20 md:gap-x-8 pt-20">
          <CategoryCard
            href="/headphones"
            imageSrc="/shared/desktop/image-category-thumbnail-headphones.png"
            title="Headphones"
            className="max-w-[350px] mx-auto"
          />
          <CategoryCard
            href="/speakers"
            imageSrc="/shared/desktop/image-category-thumbnail-speakers.png"
            title="Speakers"
            className="max-w-[350px] mx-auto"
          />
          <CategoryCard
            href="/earphones"
            imageSrc="/shared/desktop/image-category-thumbnail-earphones.png"
            title="Earphones"
            className="max-w-[350px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
