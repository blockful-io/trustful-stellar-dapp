import cc from "classcat";
import { ReactNode } from "react";
import "@/styles/card-link.css";
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
    <div className={cc(["flex min-w-[572px] min-h-[232px]", className])}>
      <div className={cc(["card-link-main-card"])} {...props}>
        <div className={cc(["flex-col w-full h-full py-[32px] px-[32px]"])}>
          <div className={cc(["w-[80px] h-[80px]"])}>
            {mainIcon}
          </div>
          <div className={cc(["w-max-content h-[26px] mt-[62px]"])}>
            <span className={cc([inter.className, "text-2xl"])}>{title}</span>
          </div>
        </div>
      </div>
      <div className={cc(["flex flex-col flex-[1]"])}>
        <div className={cc(["card-link-triangle"])}></div>
        <div className={cc(["card-link-action-icon-container"])}>
          <div className={cc(["w-[24px] h-[24px]"])}>
            {actionIcon}
          </div>
        </div>
      </div>
    </div>
  );
};
