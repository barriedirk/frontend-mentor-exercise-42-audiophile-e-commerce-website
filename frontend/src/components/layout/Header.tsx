"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CartIcon from "../icons/icons/CartIcon";
import { navLinks } from "@/core/constants/navLinks";
import CategoryLinks from "../ui/CategoryLinks";
import { cn } from "@/core/utils/cn";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-black border-b border-white/10 sticky top-0 z-50 px-10">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between h-[90px] px-6 lg:px-0">
          <button
            className="lg:hidden cursor-pointer bg-transparent border-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
              <g fill="#FFF" fillRule="evenodd">
                <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
              </g>
            </svg>
          </button>

          <Link href="/" aria-label="Home">
            <Image
              src="/desktop/logo.svg"
              alt="audiophile"
              width={143}
              height={25}
            />
          </Link>

          <nav className="hidden lg:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white text-[13px] font-bold uppercase tracking-[2px] hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="cursor-pointer">
            <CartIcon className="h-[20px] w-[23px]" />
          </div>
        </div>

        <div
          className={cn(
            "absolute top-[90px] left-0 w-full bg-white transition-all duration-300 lg:hidden z-40 overflow-hidden",
            isMenuOpen ? "max-h-screen pb-10 overflow-y-scroll" : "max-h-0",
          )}
        >
          <CategoryLinks
            className="mt-8"
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
      </header>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
