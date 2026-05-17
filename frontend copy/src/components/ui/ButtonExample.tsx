import React from "react";

import { cn } from "@/core/utils/cn";

interface ButtonExampleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  fullWidth?: boolean;
}

const ButtonExample = ({
  children,
  variant = "primary",
  fullWidth,
  className = "",
  ...props
}: ButtonExampleProps) => {
  return (
    <button
      className={cn(
        "px-8 py-4 uppercase tracking-[1px] text-[13px] font-bold transition-colors duration-300",

        variant === "primary" && "bg-primary text-white hover:bg-primary-light",
        variant === "secondary" && "bg-black text-white hover:bg-[#4C4C4C]",
        variant === "outline" &&
          "border border-black text-black hover:bg-black hover:text-white",
        fullWidth ? "w-full" : "w-fit",
        className,
      )}
      {...props}
    >
      {children}
      {variant === "ghost" && <span>&gt;</span>}
    </button>
  );
};

export default ButtonExample;
