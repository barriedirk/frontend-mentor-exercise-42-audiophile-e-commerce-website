import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";
import Input from "@/components/ui/Input";
import { useId } from "react";
import { cn } from "@/core/utils/cn";
import { REGEX_MASKS, RegexMaskType } from "@/core/constants/REGEX_MASKS";

interface FormInputProps<T extends FieldValues> {
  readonly name: Path<T>;
  readonly control: Control<T>;
  readonly label: string;
  readonly placeholder?: string;
  readonly type?: string;
  readonly className?: string;
  readonly mask?: RegexMaskType;
  readonly customRegex?: RegExp;
  readonly disabled?: boolean;
  readonly inputMode?: React.InputHTMLAttributes<HTMLInputElement>["inputMode"];
  readonly maxLength?: React.InputHTMLAttributes<HTMLInputElement>["maxLength"];
}

export function FormInput<T extends FieldValues>({
  name,
  control,
  label,
  className,
  mask,
  customRegex,
  disabled,
  ...props
}: FormInputProps<T>) {
  const elemId = useId();
  const inputId = `${elemId}-input`;
  const labelId = `${elemId}-label`;
  const errorId = `${elemId}-error`;
  const activeRegex =
    mask === "Custom" ? customRegex : mask ? REGEX_MASKS[mask] : null;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className={cn("flex flex-col gap-2", className)}>
          <Input
            id={inputId}
            label={label}
            error={error?.message?.toString()}
            aria-labelledby={labelId}
            aria-describedby={errorId}
            disabled={disabled}
            {...field}
            {...props}
            onChange={(e) => {
              const nextValue = e.target.value;

              if (
                activeRegex &&
                nextValue !== "" &&
                !activeRegex.test(nextValue)
              ) {
                return;
              }

              field.onChange(nextValue);
            }}
          />
        </div>
      )}
    />
  );
}
