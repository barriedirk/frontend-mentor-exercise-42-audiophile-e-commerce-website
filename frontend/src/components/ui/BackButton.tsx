"use client";

import { useRouter } from "next/navigation";
import Button from "./Button";

export default function BackButton() {
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      size={"lg"}
      className="capitalize"
      onClick={() => router.back()}
    >
      Go Back
    </Button>
  );
}
