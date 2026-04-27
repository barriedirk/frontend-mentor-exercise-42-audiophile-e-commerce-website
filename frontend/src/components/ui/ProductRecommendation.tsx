import Image from "next/image";
import Button from "./Button";
import { cn } from "@/core/utils/cn";
import Picture from "./Picture";

interface ProductImages {
  readonly mobile: string;
  readonly tablet: string;
  readonly desktop: string;
}

interface ProductRecommendationProps {
  readonly name: string;
  readonly title?: string;
  readonly description?: string;
  readonly imageSrc?: string;
  readonly images?: ProductImages;
  readonly className?: string;
  readonly isNewProduct?: boolean;
  readonly reversed?: boolean;
}

export default function ProductRecommendation({
  name,
  imageSrc,
  className,
  title,
  images,
  description,
  isNewProduct = false,
  reversed = false,
}: ProductRecommendationProps) {
  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center gap-4 md:gap-12 lg:gap-20 px-2.5",
        reversed ? "md:flex-row-reverse" : "md:flex-row",
        className,
      )}
    >
      <div className="flex-1 relative h-auto rounded-lg flex items-center justify-center mb-8">
        {images ? (
          <Picture
            {...images}
            alt=""
            className="rounded-lg object-contain mx-auto h-[352px] lg:h-[560px]"
          />
        ) : (
          imageSrc && (
            <Image
              src={imageSrc}
              alt={name}
              fill
              className="rounded-lg object-contain mx-auto h-[352px] lg:h-[560px]"
            />
          )
        )}
      </div>
      <div className="flex-1 flex justify-center">
        <div
          className={cn(
            "max-w-[445px]",
            "flex flex-col gap-4 md:gap-6 items-center justify-center text-center md:text-left md:items-start gap-3",
          )}
        >
          {isNewProduct && (
            <p className="uppercase text-primary text-[15px] tracking-[10px] font-normal">
              New product
            </p>
          )}
          <h2 className="text-black text-[24px] lg:text-[40px] font-bold uppercase tracking-[1.71px] leading-[120%]">
            {title ?? name}
          </h2>
          {description && (
            <p className="text-black/50 text-[15px] leading-[25px] font-medium">
              {description}
            </p>
          )}
          <Button variant="primary" aria-label={`See product ${name}`}>
            See Product
          </Button>
        </div>
      </div>
    </div>
  );
}
