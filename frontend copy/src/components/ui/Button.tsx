import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/core/utils/cn";
import Link from "next/link";
import Loader from "./Loader";

const buttonVariants = cva(
  "px-8 py-4 uppercase tracking-[1px] text-[13px] font-bold transition-colors duration-300 disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary-light",
        secondary: "bg-black text-white hover:bg-grey-dark",
        outline:
          "border border-black text-black hover:bg-black hover:text-white",

        ghost:
          "bg-transparent text-gray-400 hover:text-primary p-0 min-h-0 min-w-0 flex items-center gap-2 pointer-cursor",
      },
      size: {
        sm: "px-4 py-2 text-[11px]",
        md: "px-8 py-4",
        lg: "px-10 py-5 text-[15px]",
      },
      fullWidth: {
        true: "w-full",
        false: "w-fit",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  },
);

type ButtonAsButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
};

type ButtonAsLink = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

type ButtonProps = VariantProps<typeof buttonVariants> &
  (ButtonAsButton | ButtonAsLink) & {
    disabled?: boolean;
    loading?: boolean;
    type?: "button" | "submit" | "reset";
  };

const Button = ({
  className,
  variant,
  size,
  fullWidth,
  disabled,
  loading,
  type = "button",
  ...props
}: ButtonProps) => {
  const classes = cn(
    buttonVariants({ variant, size, fullWidth, className }),
    "pointer-cursor flex justify-center items-center gap-2",
  );

  if ("href" in props && props.href !== undefined) {
    const { href, ...linkProps } = props as ButtonAsLink;

    return (
      <Link href={href} className={classes} {...linkProps}>
        {props.children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button
      className={classes}
      {...buttonProps}
      disabled={disabled || loading}
      type={type}
    >
      {loading && <Loader />} {props.children}
    </button>
  );
};

export default Button;
