import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/core/utils/cn";
import { useId } from "react";

const inputVariants = cva(
  "px-6 py-4 rounded-lg border text-[14px] font-bold caret-primary transition-all outline-none placeholder:text-black/40",
  {
    variants: {
      state: {
        idle: "border-[#CFCFCF] focus:border-primary",
        error: "border-[#CD2C2C] focus:border-[#CD2C2C] border-2",
      },
      layout: {
        full: "w-full",
        half: "w-1/2",
      },
    },
    defaultVariants: {
      state: "idle",
      layout: "full",
    },
  },
);

interface InputProps
  extends
    React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label: string;
  error?: string;
}

const Input = ({
  label,
  error,
  state,
  layout,
  className,
  ...props
}: InputProps) => {
  const elemId = useId();
  const labelId = `${elemId}-label`;
  const inputId = `${elemId}-input`;
  const errorId = `${elemId}-error`;
  const activeState = error ? "error" : state;

  return (
    <div
      className={cn(
        "flex flex-col gap-2",
        layout === "half" ? "w-1/2" : "w-full",
      )}
    >
      <div className="flex justify-between">
        <label
          id={labelId}
          htmlFor={inputId}
          className={cn("text-[12px] font-bold", error && "text-[#CD2C2C]")}
        >
          {label}
        </label>
        {error && (
          <span id={errorId} className="text-[12px] text-[#CD2C2C] font-medium">
            {error}
          </span>
        )}
      </div>

      <input
        id={inputId}
        className={cn(inputVariants({ state: activeState, className }))}
        {...props}
      />
    </div>
  );
};

export default Input;
