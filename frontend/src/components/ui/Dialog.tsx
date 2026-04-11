"use client";

import { ReactNode } from "react";
import { cn } from "@/core/utils/cn";

interface DialogProps {
  readonly children: ReactNode;
  readonly className?: string;
}

export default function Dialog({ children, className }: DialogProps) {
  return (
    <dialog
      open
      aria-modal="true"
      className={cn(
        "block border-none bg-white rounded-lg p-8 w-full max-w-[377px] shadow-2xl outline-none",
        "static m-0",
        className,
      )}
    >
      {children}
    </dialog>
  );
}
