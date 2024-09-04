import tailwindConfig from "tailwind.config";
import { UserIcon } from "../icons";
import { getEllipsedAddress } from "@/lib/utils/getEllipsedAddress";

interface IssuerTableCellProps extends React.ComponentPropsWithoutRef<"div"> {
  userAddress: string;
}

export const IssuerTableCell = ({ userAddress }: IssuerTableCellProps) => {
  return (
    <div className="flex flex-row items-center">
      <div className="w-7 h-7 mr-4 rounded-md bg-whiteOpacity008 flex items-center justify-center">
        <div className="w-3 h-3">
          <UserIcon
            color={tailwindConfig.theme.extend.colors.brandGreen}
          ></UserIcon>
        </div>
      </div>
      <div>{getEllipsedAddress(userAddress)}</div>
    </div>
  );
};
