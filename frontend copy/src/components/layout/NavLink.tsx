"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/core/utils/cn";

interface NavLinkProps {
  readonly href: string;
  readonly label: string;
  readonly className?: string;
}

export default function NavLink({ href, label, className }: NavLinkProps) {
  const pathname = usePathname();

  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={cn(
        "text-[13px] font-bold uppercase tracking-[2px] transition-colors duration-300 hover:text-primary",
        className,
        isActive ? "text-primary" : "text-white",
      )}
    >
      {label}
    </Link>
  );
}
