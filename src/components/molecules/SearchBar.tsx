import React, { useState } from "react";
import { IconicButton } from "../atoms";
import cc from "classcat";
import { SearchIcon } from "../atoms/icons/SearchIcon";
import { IconPosition } from "@/types/iconPosition";

interface SearchBarProps extends React.ComponentPropsWithoutRef<"div"> {
  placeholder: string;
  onButtonClick: (value: string) => void;
  input: string;
  onChangeInput: (newValue: string) => void;
}

export const SearchBar = (props: SearchBarProps) => {
  return (
    <div className="flex flex-row">
      <input
        className={cc([
          "flex-1 h-10 p-2 pl-5 bg-whiteOpacity008 border border-whiteOpacity008",
          "rounded-l-lg active:border active:border-brandWhite focus-visible:outline-none",
        ])}
        value={props.input}
        onChange={(e) => props.onChangeInput(e.target.value)}
        placeholder={props.placeholder}
      ></input>
      <IconicButton
        className="rounded-r-lg rounded-l-none w-max"
        label="Search"
        icon={<SearchIcon />}
        iconPosition={IconPosition.LEFT}
        onClick={() => props.onButtonClick(props.input)}
      ></IconicButton>
    </div>
  );
};
