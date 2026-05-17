import { cn } from "@/core/utils/cn";

interface HeadingProps {
  readonly text: string;
  readonly level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  readonly className?: string;
}

export default function Heading({ text, level, className }: HeadingProps) {
  const Tag = level;

  return (
    <section
      className={cn(
        "bg-black text-white text-[23px] lg:text-[40px] tracking-[2px] font-bold uppercase",
        "flex items-center justify-center text-center",
        "h-[120px] lg:h-[250px]",
        "w-full",
        className,
      )}
    >
      <Tag>{text}</Tag>
    </section>
  );
}
