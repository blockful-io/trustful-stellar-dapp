import tailwindConfig from "tailwind.config";
import { SearchIcon } from "../icons/SearchIcon";

export const SearchTableEmptyScreen = () => {
  return (
    <div className="h-full w-full min-h-[200px] flex items-center justify-center">
      <div className="w-max h-max flex flex-col items-center justify-center">
        <div className="rounded-full bg-whiteOpacity008 h-20 w-20 items-center justify-center flex">
          <div className="w-7 h-7">
            <SearchIcon
              color={tailwindConfig.theme.extend.colors.whiteOpacity05}
            ></SearchIcon>
          </div>
        </div>
        <div className="w-full items-center justify-center text-center pt-4">
          <span>Search to start</span>
        </div>
        <div className="w-full items-center justify-center text-center">
          <span className="text-whiteOpacity05 text-sm font-light">
            Check a user's reputation by searching for their address
          </span>
        </div>
      </div>
    </div>
  );
};
