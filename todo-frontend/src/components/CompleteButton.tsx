import { Icon } from "@iconify/react";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type CompleteButtonProps = HTMLAttributes<HTMLButtonElement> & {
  completed: boolean;
};

export const CompleteButton = ({
  completed,
  ...props
}: CompleteButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(
        "flex items-center justify-center w-5 h-5 rounded transition-all",
        completed
          ? "bg-green-500 hover:bg-green-600"
          : "bg-gray-200 hover:bg-gray-300"
      )}
    >
      {completed && <Icon icon="lucide:check" />}
    </button>
  );
};
