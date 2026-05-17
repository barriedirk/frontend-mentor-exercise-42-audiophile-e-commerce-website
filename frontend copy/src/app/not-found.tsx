import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[65vh] flex flex-col items-center justify-center px-6 text-center bg-white">
      <div className="max-w-md flex flex-col items-center">
        {/* Large stylized status code */}
        <span className="text-primary font-bold text-7xl md:text-9xl tracking-widest animate-pulse">
          404
        </span>

        <h1 className="mt-6 text-black-rich font-bold text-3xl md:text-4xl uppercase tracking-[1px]">
          Page Not Found
        </h1>

        <p className="mt-4 text-grey-dark text-base max-w-[350px]">
          The page you are looking for doesn't exist, has been moved, or perhaps
          you typed the wrong link.
        </p>

        <Link
          href="/"
          className="mt-10 px-8 py-4 bg-primary text-white text-[13px] font-bold tracking-[1px] uppercase transition-all duration-300 hover:bg-primary-light"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
