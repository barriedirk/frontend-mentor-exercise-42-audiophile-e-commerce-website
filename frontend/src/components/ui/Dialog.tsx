"use client";

import { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/core/utils/cn";

const dialogVariants = cva("", {
  variants: {
    size: {
      sm: "max-w-[377px]",
      md: "max-w-[689px]",
      lg: "max-w-[1110px]",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

type DialogProps = VariantProps<typeof dialogVariants> & {
  readonly children: ReactNode;
  readonly titleClassName?: string;
  readonly title?: string;
  readonly titleId?: string;
};

export default function Dialog({
  children,
  title,
  titleId,
  titleClassName,
  size,
}: DialogProps) {
  return (
    <dialog
      open
      aria-modal="true"
      className={cn(
        "block border-none bg-white rounded-lg p-8 shadow-2xl outline-none",
        "static m-0",
        "w-full",
        titleClassName,
        dialogVariants({ size }),
      )}
    >
      {title && (
        <h1 id={titleId} className="text-h6 uppercase font-bold">
          {title}
        </h1>
      )}
      {children}
    </dialog>
  );
}
