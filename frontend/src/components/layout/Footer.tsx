import { navLinks } from "@/core/constants/navLinks";
import Image from "next/image";
import Link from "next/link";

import FacebookIcon from "../icons/icons/FacebookIcon";
import InstagramIcon from "../icons/icons/InstagramIcon";
import TwitterIcon from "../icons/icons/TwitterIcon";

export default function Footer() {
  return (
    <footer className="bg-black pt-12 pb-10 md:pb-12 text-center md:text-left px-10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-0 relative">
        <div className="absolute top-[-48px] left-1/2 -translate-x-1/2 w-[101px] h-1 bg-primary md:left-0 md:translate-x-0" />

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-9">
          <Link href="/" aria-label="Home">
            <Image
              src="/desktop/logo.svg"
              alt="audiophile"
              width={143}
              height={25}
              className="mx-auto md:mx-0 mb-12 lg:mb-0"
            />
          </Link>
          <nav className="flex flex-col md:flex-row gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                href={link.href}
                key={link.label}
                className="text-white text-[13px] font-bold uppercase tracking-[2px] hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between gap-12 lg:gap-0">
          <p className="text-white/50 text-[15px] leading-6 max-w-[540px]">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between lg:flex-col lg:justify-start gap-12">
            <div className="flex justify-center gap-4">
              <ul className="flex gap-4">
                <li>
                  <Link
                    href="https://www.linkedin.com/in/barriefreyre/"
                    target="_blank"
                    aria-label="Facebook"
                  >
                    <FacebookIcon />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/barriefreyre/"
                    target="_blank"
                    aria-label="Twitter"
                  >
                    <TwitterIcon />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/barriefreyre/"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <InstagramIcon />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-white/50 font-bold mt-12">
          Copyright {new Date().getFullYear()}. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
