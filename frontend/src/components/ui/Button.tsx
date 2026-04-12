import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/core/utils/cn";

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
          "bg-transparent text-gray-400 hover:text-primary p-0 flex items-center gap-2",
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

interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = ({
  className,
  variant,
  size,
  fullWidth,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, fullWidth, className }))}
      {...props}
    />
  );
};

export default Button;
