import { cn } from "@/core/utils/cn";
import Button from "@/components/ui/Button";

export default function FeaturedMain() {
  return (
    <section className="px-6 lg:px-0 mb-12" aria-labelledby="zx9-heading">
      <div
        className={cn(
          "max-w-[1110px] mx-auto bg-primary text-white rounded-lg overflow-hidden relative",
          "grid grid-cols-1 lg:grid-cols-2 items-center",
          "pt-14 pb-14 lg:pt-0 lg:pb-0 lg:h-[560px]",
          "bg-[url('/home/desktop/pattern-circles.svg')] bg-no-repeat",
          "bg-[position:center_-120px] lg:bg-[position:-150px_-150px] bg-[length:150%_auto] lg:bg-[length:auto_170%]",
        )}
      >
        <div className="flex justify-center items-center h-full relative lg:static">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="/home/desktop/image-speaker-zx9.png"
            />
            <source
              media="(min-width: 768px)"
              srcSet="/home/tablet/image-speaker-zx9.png"
            />
            <img
              src="/home/mobile/image-speaker-zx9.png"
              alt="ZX9 Speaker"
              className="max-w-[172px] md:max-w-[197px] lg:max-w-none lg:h-[493px] h-auto lg:absolute lg:bottom-0 lg:left-[8%] z-10"
            />
          </picture>
        </div>

        <div className="flex justify-center lg:justify-start items-center px-6 md:px-10 mt-8 lg:mt-0">
          <div className="max-w-[349px] flex flex-col items-center lg:items-start gap-6 lg:gap-10 text-center lg:text-left">
            <h2
              id="zx9-heading"
              className="text-white font-bold text-[36px] md:text-[56px] leading-[1] tracking-[1.29px] md:tracking-[2px] uppercase"
            >
              ZX9 <br className="hidden md:block" /> SPEAKER
            </h2>
            <p className="text-white/75 font-medium text-[15px] leading-[25px]">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Button variant="secondary" className="w-[200px]">
              See Product
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
