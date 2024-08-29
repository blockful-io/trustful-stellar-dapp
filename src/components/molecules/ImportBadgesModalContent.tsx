import { ReactNode } from "react";
import { AttestationSymbol } from "../atoms/AttestationSymbol";
import PerfectScrollbar from "react-perfect-scrollbar";
import cc from "classcat";

interface ImportBadgesModalContentProps {
  badges: {
    description: string;
    isImported: boolean | undefined;
    assetCode: string;
  }[];
  title: string;
  icon?: ReactNode;
}

export const ImportBadgesModalContent = ({
  badges,
  title,
  icon,
}: ImportBadgesModalContentProps) => {
  return (
    <div className="p-2 w-full h-full items-center justify-center flex flex-col">
      {title && (
        <div className="w-full h-full min-h-[20px] items-center justify-center flex py-6">
          {icon && <div className="h-[30px] w-[30px] mx-4">{icon}</div>}
          {<h2 className="text-xl">Stellar Quest</h2>}
        </div>
      )}
      {badges.length > 0 && (
        <div className="w-full h-full min-h-[20px] rounded-lg border border-whiteOpacity008 py-2 flex flex-col">
          <div className="px-4">
            <span className="text-xs text-whiteOpacity05 tracking-wider">
              BADGES AVAILABLE
            </span>
          </div>
          <PerfectScrollbar className="w-full max-h-[300px]">
            {badges.map(({ description, isImported }, index) => (
              <div key={index}>
                <hr className="border-whiteOpacity008 w-full px-0 mx-0 mt-2 mb-3" />
                <div className="px-4 flex">
                  <span
                    className={cc([
                      { "text-whiteOpacity05": isImported === undefined },
                      "flex-1 text-sm",
                    ])}
                  >
                    {description}
                  </span>
                  {isImported !== undefined && (
                    <div>
                      <AttestationSymbol
                        checked={isImported}
                      ></AttestationSymbol>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </PerfectScrollbar>
        </div>
      )}
    </div>
  );
};
