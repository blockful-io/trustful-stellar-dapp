import React, { createContext, useContext, useState } from "react";
import { CommunityBadge, CommunityContext, CommunityContextProviderProps } from "./types";

const communityCtx = createContext<CommunityContext | undefined>(undefined);

const CommunityContextProvider: React.FC<CommunityContextProviderProps> = (
  props: CommunityContextProviderProps
) => {
  const [communityBadges, setCommunityBadges] = useState<CommunityBadge[]>([]);
  return (
    <communityCtx.Provider value={{ communityBadges, setCommunityBadges }}>
      {props.children}
    </communityCtx.Provider>
  );
};

const useCommunityContext = () => {
  const ctx = useContext(communityCtx);
  if (ctx === undefined) {
    throw new Error("userAuthContext: ctx is undefined");
  }
  return ctx;
};

export { useCommunityContext, CommunityContextProvider };
