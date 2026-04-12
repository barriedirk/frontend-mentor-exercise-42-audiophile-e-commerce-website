"use client";

import { ReactNode } from "react";
import { cn } from "@/core/utils/cn";

interface DialogProps {
  readonly children: ReactNode;
  readonly titleClassName?: string;
  readonly title?: string;
  readonly titleId?: string;
}

export default function Dialog({
  children,
  title,
  titleId,
  titleClassName,
}: DialogProps) {
  return (
    <dialog
      open
      aria-modal="true"
      className={cn(
        "block border-none bg-white rounded-lg p-8 w-full max-w-[377px] shadow-2xl outline-none",
        "static m-0",
        titleClassName,
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
