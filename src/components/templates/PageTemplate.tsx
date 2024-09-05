import cc from "classcat";
import { ReactNode } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";

interface PageTemplateProps extends React.ComponentPropsWithoutRef<"div"> {
  className: string;
  title: string;
  children: ReactNode;
}

export const PageTemplate = ({
  className,
  title,
  children,
}: PageTemplateProps) => {
  return (
    <div
      className={cc([
        className,
        "flex flex-col w-full h-[calc(100vh-74px)] bg-brandBlack",
      ])}
    >
      <PerfectScrollbar className="h-full flex flex-col">
        <div className="text-left text-[26px] pl-12 pt-8 pb-6">
          <h1 className="font-space-grotesk">{title}</h1>
        </div>
        <div className="flex">{children}</div>
      </PerfectScrollbar>
    </div>
  );
};
