import cc from "classcat";
import { CheckIcon } from "./icons/CheckIcon";
import React from "react";
import { XIcon } from "./icons/XIcon";

interface AttestationSymbolProps extends React.ComponentPropsWithoutRef<"div"> {
  checked: boolean;
}

export const AttestationSymbol: React.FC<AttestationSymbolProps> = ({
  className,
  checked,
  ...props
}) => {
  return (
    <div className={cc([className, "w-3"])} {...props}>
      <div className={cc([{ hidden: !checked }])}>
        <CheckIcon />
      </div>
      <div className={cc([{ hidden: checked }])}>
        <XIcon />
      </div>
    </div>
  );
};
