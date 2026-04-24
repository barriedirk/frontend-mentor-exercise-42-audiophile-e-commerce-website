import { cn } from "@/core/utils/cn";

export default function AboutSection() {
  return (
    <section
      className="px-6 xl:px-0 mb-32 md:mb-24 lg:mb-40"
      aria-labelledby="best-gear-heading"
    >
      <div
        className={cn(
          "max-w-[1110px] mx-auto",
          "flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-32",
        )}
      >
        <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
          <div className="max-w-[445px]">
            <h2
              id="best-gear-heading"
              className="text-black font-bold text-[28px] md:text-[40px] tracking-[1px] md:tracking-[1.5px] uppercase leading-tight mb-8"
            >
              Bringing you the <span className="text-primary">best</span> audio
              gear
            </h2>
            <p className="text-black/50 font-medium text-[15px] leading-[25px]">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </div>

        <div className="flex-1 w-full overflow-hidden rounded-lg">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="/shared/desktop/image-best-gear.jpg"
            />
            <source
              media="(min-width: 768px)"
              srcSet="/shared/tablet/image-best-gear.jpg"
            />
            <img
              src="/shared/mobile/image-best-gear.jpg"
              alt="A person wearing premium headphones enjoying high-quality audio."
              className="w-full h-auto lg:h-[588px] object-cover"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
