import { cn } from "@/core/utils/cn";

interface ProductFeaturesProps {
  readonly features: string;
  readonly className?: string;
}

export default function ProductFeatures({
  features,
  className,
}: ProductFeaturesProps) {
  const paragraphs = features.split("\n\n");

  return (
    <div className={cn("flex flex-col gap-8 lg:max-w-[635px]", className)}>
      <h2 className="text-[24px] md:text-[32px] font-bold uppercase tracking-[0.86px] md:tracking-[1.14px]">
        Features
      </h2>
      <div className="flex flex-col gap-6">
        {paragraphs.map((text, index) => (
          <p
            key={index}
            className="text-black/50 text-[15px] leading-[25px] font-medium"
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}
