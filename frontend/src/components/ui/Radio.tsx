import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/core/utils/cn";
import { useId } from "react";

const radioContainerVariants = cva(
  "inline-flex items-center gap-4 px-6 py-5 rounded-lg border cursor-pointer transition-all hover:border-primary w-full",
  {
    variants: {
      isSelected: {
        true: "border-primary",
        false: "border-[#CFCFCF]",
      },
    },
    defaultVariants: {
      isSelected: false,
    },
  },
);

interface RadioProps
  extends
    React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof radioContainerVariants> {
  label: string;
}

const Radio = ({ label, id, isSelected, className, ...props }: RadioProps) => {
  const elemId = useId();
  const labelId = `${elemId}-label`;
  const inputId = id ?? `${elemId}-input`;

  return (
    <label
      id={labelId}
      htmlFor={inputId}
      className={cn(radioContainerVariants({ isSelected, className }))}
    >
      <input id={inputId} type="radio" className="hidden" {...props} />

      <span className="w-5 h-5 rounded-full border border-[#CFCFCF] flex items-center justify-center shrink-0">
        <span
          className={cn(
            "w-2.5 h-2.5 rounded-full bg-primary transition-transform scale-0",
            isSelected && "scale-100",
          )}
        />
      </span>

      <span className="text-[14px] font-bold leading-none">{label}</span>
    </label>
  );
};

export default Radio;
