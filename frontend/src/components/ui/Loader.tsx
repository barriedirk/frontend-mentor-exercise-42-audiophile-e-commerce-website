import { cn } from "@/core/utils/cn";

interface LoaderProps {
  readonly size?: string;
  readonly color?: string;
}

const Loader = ({
  size = "h-5 w-5",
  color = "border-grey-300",
}: LoaderProps) => {
  return (
    <div className="flex justify-center items-center">
      <output
        className={cn(
          size,
          color,
          "border-4 border-t-transparent rounded-full animate-spin",
        )}
      >
        <span className="sr-only">Loading...</span>
      </output>
    </div>
  );
};

export default Loader;
