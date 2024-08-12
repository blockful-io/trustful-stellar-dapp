import { IconPosition } from "@/types/iconPosition";
import cc from "classcat";

interface IconicButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  label: string;
  onClick: () => void;
  iconPosition?: IconPosition;
}

export const IconicButton = ({
  icon,
  label,
  onClick,
  className,
  iconPosition = IconPosition.LEFT,
  ...props
}: IconicButtonProps) => {
  return (
    <button
      {...props}
      onClick={onClick}
      className={cc([
        "flex w-full space-x-3 items-center justify-center gap-2 px-4 py-2 text-base font-medium text-brandBlack bg-brandGreen rounded-md hover:bg-primary transition",
        { "flex-row-reverse": iconPosition === IconPosition.RIGHT },
        className,
      ])}
    >
      {icon}
      {label}
    </button>
  );
};
