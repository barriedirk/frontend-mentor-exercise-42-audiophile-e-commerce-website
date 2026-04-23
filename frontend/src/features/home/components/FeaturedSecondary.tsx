import { cn } from "@/core/utils/cn";
import Button from "@/components/ui/Button";

export default function FeaturedSecondary() {
  return (
    // 1. Semantic Wrap: Use <section> for major page blocks
    <section className="px-6 xl:px-0 mb-12" aria-labelledby="zx7-heading">
      <div
        className={cn(
          "max-w-[1110px] mx-auto rounded-lg overflow-hidden",
          "h-[320px]",
          "flex items-center",
          "bg-no-repeat bg-right md:bg-center bg-cover",
          "bg-[url('/home/mobile/image-speaker-zx7.jpg')]",
          "md:bg-[url('/home/tablet/image-speaker-zx7.jpg')]",
          "lg:bg-[url('/home/desktop/image-speaker-zx7.jpg')]",
        )}
      >
        <div className="px-6 md:px-14 lg:px-24">
          <div className="flex flex-col items-start gap-8">
            <h2
              id="zx7-heading"
              className="text-black font-bold text-[28px] tracking-[2px] uppercase"
            >
              ZX7 SPEAKER
            </h2>
            <Button
              variant="outline"
              className="w-[160px] border-black text-black hover:bg-black hover:text-white transition-colors"
            >
              See Product
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
