import { ReactElement, ReactFragment, ReactNode, SVGProps } from "react";
import { inter } from "@/pages/_app";
import cc from "classcat";
import { CheckIcon } from "./icons/CheckIcon";
import { ArrowIcon } from "./icons/ArrowIcon";
import React from "react";

interface AttestationBadgeProps extends React.ComponentPropsWithoutRef<"div"> {
  title: string;
  imported: boolean;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

export const AttestationBadge: React.FC<AttestationBadgeProps> = ({
  title,
  className,
  imported,
  icon,
  ...props
}) => {
  const Icon = icon;
  return (
    <div
      className="rounded-lg flex border border-[--md-light-gray] w-[278px] h-[134px] bg-[var(--md-dark-gray)]"
      {...props}
    >
      <div className="flex flex-1 max-w-[50%] flex-col p-3 justify-between">
        <div className="flex-1 p-2 w-max">
          <div className="w-full h-full max-h-[36px] p-2 rounded-full bg-[--md-light-gray]">
            <Icon
              color={imported ? "var(--primary-green)" : "var(--light-gray)"}
            />
          </div>
        </div>
        <div className={"title p-2 mt-3 h-max justify-center w-max"}>
          <span>{title}</span>
        </div>
      </div>
      <div className="flex flex-1 max-w-[50%] flex-col align-center">
        <div className="flex-1 m-4 ml-6 h-[25px]">
          <div
            className={cc([{ hidden: !imported }, "flex text-xs font-medium"])}
          >
            <div className="w-[12px] mr-2">
              <CheckIcon />
            </div>
            <span className="text-[var(--primary-green)]">IMPORTED</span>
          </div>
          <div
            className={cc([{ hidden: imported }, "flex text-xs font-medium"])}
          >
            <div className="w-[12px] mr-2">
              <ArrowIcon />
            </div>
            <span className="text-[var(--light-gray)]">IMPORT</span>
          </div>
        </div>
      </div>
    </div>
  );
};
