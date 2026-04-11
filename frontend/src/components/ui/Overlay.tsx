"use client";

import { ReactNode } from "react";
import { cn } from "@/core/utils/cn";

interface OverlayProps {
  readonly onClick?: () => void;
  readonly children?: ReactNode;
  readonly className?: string;
}

export default function Overlay({
  onClick,
  children,
  className,
}: OverlayProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px]",
        "flex p-6 justify-center md:justify-end md:pr-[max(24px,calc((100vw-1110px)/2))]",
        className,
      )}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick?.();
        }
      }}
      role="button"
      tabIndex={0}
    >
      <div className="mt-[90px] w-full max-w-[377px]">{children}</div>
    </div>
  );
}
