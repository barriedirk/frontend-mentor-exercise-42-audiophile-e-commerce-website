import Link from "next/link";
import Button from "@/components/ui/Button";

interface EmptyCartProps {
  readonly onClose: () => void;
}

export default function EmptyCart({ onClose }: EmptyCartProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="bg-gray-light p-6 rounded-full mb-6" aria-hidden="true">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#D87D4A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      </div>

      <h2 className="text-black uppercase font-bold text-xl tracking-wider mb-4">
        Your cart is empty
      </h2>

      <p className="text-black/50 text-[15px] max-w-[280px] mb-8 leading-relaxed">
        It looks like you haven't added anything to your cart yet. Let's find
        some great gear!
      </p>

      <Link href="/" onClick={onClose} className="w-full">
        <Button variant="primary" className="w-full">
          Back to Shop
        </Button>
      </Link>
    </div>
  );
}
