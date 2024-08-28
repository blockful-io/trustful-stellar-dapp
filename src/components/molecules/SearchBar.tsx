import React, { useState } from "react";
import { IconicButton } from "../atoms";
import cc from "classcat";
import { SearchIcon } from "../atoms/icons/SearchIcon";
import { IconPosition } from "@/types/iconPosition";

interface SearchBarProps extends React.ComponentPropsWithoutRef<"div"> {
  placeholder: string;
  onButtonClick: (value: string) => void;
}

export const SearchBar = (props: SearchBarProps) => {
  const [value, setValue] = useState("");
  return (
    <div className="flex flex-row">
      <input
        className={cc([
          "h-10 p-2 pl-5 w-full w-[200px] bg-whiteOpacity008 border border-whiteOpacity008",
          "rounded-l-lg active:border active:border-brandWhite focus-visible:outline-none",
        ])}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={props.placeholder}
      ></input>
      <IconicButton
        className="rounded-r-lg rounded-l-none"
        label="Search"
        icon={<SearchIcon/>}
        iconPosition={IconPosition.LEFT}
        onClick={() => props.onButtonClick(value)}
      ></IconicButton>
    </div>
  );
};
