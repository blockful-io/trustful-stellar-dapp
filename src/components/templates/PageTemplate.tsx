import cc from "classcat";
import { ReactNode } from "react";

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
    <div className={cc([className, "flex flex-col w-screen h-screen bg-brandBlack"])}>
      <div className="text-left text-[26px] pl-12 pt-8 pb-6">
        <h1 className="font-space-grotesk">{title}</h1>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};
