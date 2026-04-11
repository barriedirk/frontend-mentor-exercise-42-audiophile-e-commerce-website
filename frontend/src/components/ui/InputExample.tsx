import { cn } from "@/core/utils/cn";
import { useId } from "react";

interface InputExampleProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const InputExample = ({
  label,
  error,
  className,
  ...props
}: InputExampleProps) => {
  const elemId = useId();
  const labelId = `${elemId}-label`;
  const inputId = `${elemId}-input`;

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex justify-between">
        <label
          id={labelId}
          htmlFor={inputId}
          className="text-[12px] font-bold tracking-[-0.21px]"
        >
          {label}
        </label>
        {error && (
          <span className="text-[12px] text-[#CD2C2C] font-medium">
            {error}
          </span>
        )}
      </div>

      <input
        id={inputId}
        className={cn(
          "px-6 py-4 rounded-lg border border-[#CFCFCF] text-[14px] font-bold caret-primary transition-all outline-none",
          "placeholder:text-black/40 focus:border-primary",
          error && "border-[#CD2C2C] focus:border-[#CD2C2C] border-2",
          className,
        )}
        {...props}
      />
    </div>
  );
};

export default InputExample;
