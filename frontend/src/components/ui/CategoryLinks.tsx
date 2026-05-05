import CategoryCard from "@/components/ui/CategoryCard";
import { cn } from "@/core/utils/cn";

interface CategoryLinksProps {
  readonly className?: string;
  readonly cardClassName?: string;
}

export default function CategoryLinks({
  className,
  cardClassName,
}: CategoryLinksProps) {
  return (
    <aside
      aria-label="Related categories"
      className={cn("px-10 relative py-16 lg:py-[110px]", className)}
    >
      <nav className="max-w-[1110px] mx-auto px-6 lg:px-0">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-y-20 md:gap-x-8 pt-20 list-none p-0 m-0">
          <li>
            <CategoryCard
              href="/headphones"
              imageSrc="/shared/desktop/image-category-thumbnail-headphones.png"
              title="Headphones"
              className={cn("max-w-[350px] mx-auto", cardClassName)}
            />
          </li>
          <li>
            <CategoryCard
              href="/speakers"
              imageSrc="/shared/desktop/image-category-thumbnail-speakers.png"
              title="Speakers"
              className={cn("max-w-[350px] mx-auto", cardClassName)}
            />
          </li>
          <li>
            <CategoryCard
              href="/earphones"
              imageSrc="/shared/desktop/image-category-thumbnail-earphones.png"
              title="Earphones"
              className={cn("max-w-[350px] mx-auto", cardClassName)}
            />
          </li>
        </ul>
      </nav>
    </aside>
  );
}
