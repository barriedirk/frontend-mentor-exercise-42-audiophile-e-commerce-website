import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/core/utils/cn";
import { useId } from "react";

const radioContainerVariants = cva(
  "inline-flex items-center gap-4 px-6 py-5 rounded-lg border cursor-pointer transition-all hover:border-primary w-full",
  {
    variants: {
      checked: {
        true: "border-primary ring-1 ring-primary",
        false: "border-[#CFCFCF]",
      },
    },
    defaultVariants: {
      checked: false,
    },
  },
);

interface RadioProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "checked">,
    VariantProps<typeof radioContainerVariants> {
  readonly label: string;
  readonly name: string;
  readonly value: string;
  readonly checked?: boolean;
  readonly disabled?: boolean;
}

const Radio = ({
  label,
  id,
  checked,
  className,
  name,
  disabled = false,
  ...props
}: RadioProps) => {
  const elemId = useId();
  const labelId = `${elemId}-label`;
  const inputId = id ?? `${elemId}-input`;

  return (
    <label
      id={labelId}
      htmlFor={inputId}
      className={cn(radioContainerVariants({ checked, className }))}
    >
      <input
        id={inputId}
        type="radio"
        name={name}
        className="sr-only"
        checked={checked}
        disabled={disabled}
        {...props}
      />

      <span className="w-5 h-5 rounded-full border border-[#CFCFCF] flex items-center justify-center shrink-0">
        <span
          className={cn(
            "w-2.5 h-2.5 rounded-full bg-primary transition-transform scale-0",
            checked && "scale-100",
          )}
        />
      </span>

      <span className="text-[14px] font-bold leading-none">{label}</span>
    </label>
  );
};

export default Radio;
