import Image from "next/image";
import Button from "./Button";
import { cn } from "@/core/utils/cn";

interface ProductRecommendationProps {
  readonly name: string;
  readonly imageSrc: string;
  readonly className?: string;
}

export default function ProductRecommendation({
  name,
  imageSrc,

  className,
}: ProductRecommendationProps) {
  return (
    <div
      className={cn("flex flex-col gap-2 items-center text-center", className)}
    >
      <div className="relative w-full h-[120px] bg-gray-light rounded-lg flex items-center justify-center mb-8 md:h-[318px]">
        <div className="relative w-1/2 h-full">
          <Image src={imageSrc} alt={name} fill className="object-contain" />
        </div>
      </div>

      <h3 className="text-black text-[24px] font-bold uppercase tracking-[1.71px] mb-8 min-h-[40px]">
        {name}
      </h3>

      <Button variant="primary">See Product</Button>
    </div>
  );
}
