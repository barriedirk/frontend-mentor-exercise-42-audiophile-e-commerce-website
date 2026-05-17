"use client";

import { useRouter } from "next/navigation";
import Button from "./Button";
import { cn } from "@/core/utils/cn";

interface BackButtonProps {
  readonly className?: string;
}

export default function BackButton({ className }: BackButtonProps) {
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      size={"lg"}
      className={cn("capitalize", className)}
      onClick={() => router.back()}
    >
      Go Back
    </Button>
  );
}
