"use client";

import { usePathname } from "next/navigation";
import React from "react";

interface ConditionalWrapperProps {
  readonly children: React.ReactNode;
  readonly noShowPath: string;
}

export default function ConditionalWrapper({
  children,
  noShowPath,
}: ConditionalWrapperProps) {
  const pathname = usePathname();
  const isCheckout = pathname === noShowPath;

  return <>{!isCheckout && children}</>;
}
