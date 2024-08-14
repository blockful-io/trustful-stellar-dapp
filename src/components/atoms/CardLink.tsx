import cc from "classcat";
import { ReactNode } from "react";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"], weight: '400' });

interface CardLinkProps extends React.ComponentPropsWithoutRef<"div"> {
  mainIcon: ReactNode;
  actionIcon: ReactNode;
  title: string;
}

export const CardLink: React.FC<CardLinkProps> = ({
  children,
  mainIcon,
  actionIcon,
  title,
  className,
  ...props
}) => {
  return (
    <div className={cc(["flex min-w-[572px] min-h-[232px] card-link", className])}  {...props}>
      <div className={cc(["card-link-main-card"])}>
        <div className="flex-col w-full h-full py-8 px-8">
          <div className={cc(["card-link-main-icon w-[80px] h-[80px]"])}>
            {mainIcon}
          </div>
          <div className={cc(["w-max-content h-[26px] mt-[62px]"])}>
            <span className={cc([inter.className, "text-2xl card-link-title"])}>{title}</span>
          </div>
        </div>
      </div>
      <div className={cc(["flex flex-col flex-[1]"])}>
        <div className={cc(["card-link-notched-corner"])}></div>
        <div className={cc(["card-link-action-icon-container"])}>
          <div className={cc(["w-[24px] h-[24px]"])}>
            {actionIcon}
          </div>
        </div>
      </div>
    </div>
  );
};
