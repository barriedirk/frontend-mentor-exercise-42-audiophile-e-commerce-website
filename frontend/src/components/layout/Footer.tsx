import Image from "next/Image";

export default function Footer() {
  return (
    <footer className="bg-black pt-12 pb-10 md:pb-12 text-center md:text-left">
      <div className="max-w-[1110px] mx-auto px-6 lg:px-0 relative">
        {/* The Orange Accent Line */}
        <div className="absolute top-[-48px] left-1/2 -translate-x-1/2 w-[101px] h-1 bg-primary md:left-0 md:translate-x-0" />

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-9">
          <Image
            src="/desktop/logo.svg"
            alt="logo"
            width={143}
            height={25}
            className="mx-auto md:mx-0 mb-12 lg:mb-0"
          />
          <nav className="flex flex-col md:flex-row gap-8 items-center">
            {["Home", "Headphones", "Speakers", "Earphones"].map((link) => (
              <a
                href="# "
                key={link}
                className="text-white text-[13px] font-bold uppercase tracking-[2px] hover:text-primary"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between gap-12 lg:gap-0">
          <p className="text-white/50 text-[15px] leading-6 max-w-[540px]">
            Audiophile is an all in one stop to fulfill your audio needs...
          </p>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between lg:flex-col lg:justify-start gap-12">
            <div className="flex justify-center gap-4">
              {/* Facebook, Twitter, Instagram Icons would go here */}
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
