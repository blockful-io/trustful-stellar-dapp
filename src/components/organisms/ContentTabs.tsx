import { Tabs } from "@/components/organisms/types";
import cc from "classcat";
import React, { useState } from "react";

interface ContentTabsProps extends React.ComponentPropsWithoutRef<"div"> {
  tabs: Tabs;
}

export const ContentTabs: React.FC<ContentTabsProps> = ({
  className,
  tabs,
  ...props
}) => {
  const [selectedTab, setSelectedTab] = useState(Object.keys(tabs)[0] ?? null);
  return (
    <div className={cc([className, "w-screen h-max bg-brandBlack"])} {...props}>
      <nav className="flex nav-bar">
        {Object.entries(tabs)
          .sort(([_, a], [__, b]) => a.tabNumber - b.tabNumber)
          .map(([tabName, tabProps]) => {
            return (
              <div
                className={cc([
                  { "tab-active": tabName == selectedTab },
                  "tab p-2 px-4",
                ])}
                onClick={() => setSelectedTab(tabName)}
              >
                {tabProps.tab ? tabProps.tab : <span>{tabName}</span>}
              </div>
            );
          })}
      </nav>
      <div className="w-full">
        {Object.entries(tabs).map(([tabName, tabProps]) => {
          return (
            <div className={cc({ hidden: selectedTab !== tabName })}>
              {tabProps.content}
            </div>
          );
        })}
      </div>
    </div>
  );
};
