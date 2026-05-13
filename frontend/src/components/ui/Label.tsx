import { cn } from "@/core/utils/cn";

interface InputProps {
  readonly label: string;
  readonly className?: string;
  readonly htmlFor?: string;
}

const Label = ({ label, className, htmlFor }: InputProps) => {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="flex justify-between">
        <label htmlFor={htmlFor} className={cn("text-[12px] font-bold")}>
          {label}
        </label>
      </div>
    </div>
  );
};

export default Label;
