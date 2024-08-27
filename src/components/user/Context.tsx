import React, { createContext, useContext, useState } from "react";
import { UserBadge, UserContext, UserContextProviderProps } from "./types";

const userCtx = createContext<UserContext | undefined>(undefined);

const UserContextProvider: React.FC<UserContextProviderProps> = (
  props: UserContextProviderProps
) => {
  const [userBadges, setUserBadges] = useState<UserBadge[]>([]);
  return (
    <userCtx.Provider value={{ userBadges, setUserBadges }}>
      {props.children}
    </userCtx.Provider>
  );
};

const useUsersContext = () => {
  const ctx = useContext(userCtx);
  if (ctx === undefined) {
    throw new Error("userContext: ctx is undefined");
  }
  return ctx;
};

export { useUsersContext, UserContextProvider };
