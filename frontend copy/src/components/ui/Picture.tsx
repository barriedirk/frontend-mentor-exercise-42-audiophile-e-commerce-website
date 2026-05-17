import { cn } from "@/core/utils/cn";

export interface PictureProps {
  readonly mobile: string;
  readonly tablet: string;
  readonly desktop: string;
  readonly alt: string;
  readonly className?: string;
}

export default function Picture({
  mobile,
  tablet,
  desktop,
  alt,
  className,
}: PictureProps) {
  return (
    <picture>
      <source media="(min-width: 1024px)" srcSet={desktop} />
      <source media="(min-width: 768px)" srcSet={tablet} />
      <img src={mobile} alt={alt} className={cn(className)} />
    </picture>
  );
}
