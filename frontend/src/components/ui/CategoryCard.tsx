import Image from "next/image";
import Link from "next/link";

import { cn } from "@/core/utils/cn";

interface CategoryCardProps {
  readonly title: string;
  readonly href: string;
  readonly imageSrc: string;
  readonly className?: string;
  readonly onClick?: () => void;
}

export default function CategoryCard({
  title,
  href,
  imageSrc,
  className,
  onClick,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "group relative flex flex-col items-center w-full bg-gray-light rounded-lg pb-5 px-4 lg:pb-8",
        className,
      )}
    >
      <div className="absolute top-0 -translate-y-1/2 w-32 h-32 lg:w-40 lg:h-40 transition-transform duration-300 group-hover:scale-110">
        <Image src={imageSrc} alt={title} fill className="object-contain" />
      </div>
      <div className="flex flex-col items-center gap-4 mt-14 lg:mt-20">
        <h3 className="text-black font-bold uppercase tracking-[1.07px] text-[15px] lg:text-[18px]">
          {title}
        </h3>

        <div className="flex items-center gap-3">
          <span className="text-black/50 font-bold uppercase text-[13px] group-hover:text-primary transition-colors">
            Shop
          </span>
          <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.322 1l5 5-5 5"
              stroke="#D87D4A"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
