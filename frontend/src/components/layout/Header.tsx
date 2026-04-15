import Link from "next/link";
import Image from "next/image";
import CartIcon from "../icons/icons/CartIcon";
import { navLinks } from "@/core/constants/navLinks";

export default function Header() {
  return (
    <header className="bg-black border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-[1110px] mx-auto flex items-center justify-between h-[90px] px-6 lg:px-0">
        <div className="lg:hidden cursor-pointer">
          <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
            <g fill="#FFF" fillRule="evenodd">
              <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
            </g>
          </svg>
        </div>

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
    </header>
  );
}
