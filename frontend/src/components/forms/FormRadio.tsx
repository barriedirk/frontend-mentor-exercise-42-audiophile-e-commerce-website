import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";
import Radio from "@/components/ui/Radio";
import { useId } from "react";
import { cn } from "@/core/utils/cn";

interface FormRadioProps<T extends FieldValues> {
  readonly name: Path<T>;
  readonly control: Control<T>;
  readonly label: string;
  readonly value: string;
  readonly className?: string;
}

export function FormRadio<T extends FieldValues>({
  name,
  control,
  label,
  className,
  value,
}: FormRadioProps<T>) {
  const elemId = useId();
  const inputId = `${elemId}-input`;
  const labelId = `${elemId}-label`;
  const errorId = `${elemId}-error`;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className={cn("flex flex-col gap-2", className)}>
          <Radio
            id={inputId}
            label={label}
            value={value}
            checked={field.value === value}
            onChange={() => field.onChange(value)}
            aria-labelledby={labelId}
            aria-describedby={errorId}
            onBlur={field.onBlur}
            name={field.name}
          />
        </div>
      )}
    />
  );
}
