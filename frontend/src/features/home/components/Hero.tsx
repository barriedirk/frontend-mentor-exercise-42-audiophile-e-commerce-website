import { cn } from "@/core/utils/cn";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      className={cn(
        "bg-[#101010] w-full border-b border-white/10",
        "bg-[url(/home/desktop/pattern-hero.png)] bg-repeat",
      )}
    >
      <div
        className={cn(
          "max-w-[1110px] mx-auto relative min-h-[510px] md:min-h-[630px] lg:min-h-[600px]",
          "flex items-center justify-center lg:justify-start",
          "bg-no-repeat bg-bottom bg-[length:auto_100%]",
          "bg-[url('/home/mobile/image-header.jpg')]",
          "md:bg-[url('/home/tablet/image-header.jpg')]",
          "lg:bg-[url('/home/desktop/image-hero.jpg')] lg:bg-right",
        )}
      >
        <div className="z-10 flex flex-col items-center lg:items-start gap-6 max-w-[328px] md:max-w-[396px] px-6 lg:px-0">
          <span className="text-[14px] font-normal tracking-[10px] text-white/50 uppercase">
            NEW PRODUCT
          </span>

          <h1 className="text-white text-[36px] md:text-[56px] font-bold uppercase leading-[1.1] tracking-[1.29px] md:tracking-[2px] text-center lg:text-left">
            XX99 Mark II Headphones
          </h1>

          <p className="text-white/75 text-[15px] font-medium leading-[25px] text-center lg:text-left mb-2 md:mb-4">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <Button variant="primary">See Product</Button>
        </div>
      </div>
    </section>
  );
}
