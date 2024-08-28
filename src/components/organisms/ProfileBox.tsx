import React, { useState } from "react";

interface ProfileBoxProps extends React.ComponentPropsWithoutRef<"div"> {
  address: string;
  onButtonClick: (value: string) => void;
}

export const ProfileBox = (props: ProfileBoxProps) => {
  return (
    <div className="flex flex-row">
    </div>
  );
};
