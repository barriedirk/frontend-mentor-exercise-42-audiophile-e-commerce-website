import { cn } from "@/core/utils/cn";
import { useId } from "react";

interface RadioExampleProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const RadioExample = ({
  label,
  id,
  checked,
  className,
  ...props
}: RadioExampleProps) => {
  const elemId = useId();
  const labelId = `${elemId}-label`;
  const inputId = id ?? `${elemId}-input`;

  return (
    <label
      id={labelId}
      htmlFor={inputId}
      className={cn(
        "flex items-center gap-4 px-6 py-4 rounded-lg border cursor-pointer transition-all",
        "hover:border-primary",
        checked ? "border-primary" : "border-[#CFCFCF]",
        className,
      )}
    >
      <input
        type="radio"
        id={inputId}
        checked={checked}
        className="hidden" // We hide the native radio
        {...props}
      />

      <span className="w-5 h-5 rounded-full border border-[#CFCFCF] flex items-center justify-center">
        {checked && <span className="w-2.5 h-2.5 rounded-full bg-primary" />}
      </span>

      <span className="text-[14px] font-bold">{label}</span>
    </label>
  );
};

export default RadioExample;
