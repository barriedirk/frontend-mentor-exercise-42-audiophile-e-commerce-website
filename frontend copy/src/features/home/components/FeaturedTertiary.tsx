import { cn } from "@/core/utils/cn";
import Button from "@/components/ui/Button";

export default function FeaturedTertiary() {
  return (
    <section
      className="px-6 xl:px-0 mb-12 md:mb-24 lg:mb-48"
      aria-labelledby="yx1-heading"
    >
      <div
        className={cn(
          "max-w-[1110px] mx-auto",
          "grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 lg:gap-[30px]",
        )}
      >
        <div className="overflow-hidden rounded-lg">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="/home/desktop/image-earphones-yx1.jpg"
            />
            <source
              media="(min-width: 768px)"
              srcSet="/home/tablet/image-earphones-yx1.jpg"
            />
            <img
              src="/home/mobile/image-earphones-yx1.jpg"
              alt="YX1 Earphones"
              className="w-full h-full object-cover"
            />
          </picture>
        </div>

        <div
          className={cn(
            "flex flex-col justify-center items-start",
            "bg-gray-light rounded-lg",
            "p-6 md:pl-10 lg:pl-24",
            "h-[200px] md:h-auto",
          )}
        >
          <div className="flex flex-col gap-8">
            <h2
              id="yx1-heading"
              className="text-black font-bold text-[28px] tracking-[2px] uppercase"
            >
              YX1 EARPHONES
            </h2>
            <Button
              variant="outline"
              className="w-[200px] border-black text-black hover:bg-black hover:text-white transition-colors"
            >
              See Product
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
