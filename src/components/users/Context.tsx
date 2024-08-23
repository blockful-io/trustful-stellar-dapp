import React, { createContext, useContext, useState } from "react";
import { UserBadge, UsersContext, UsersContextProviderProps } from "./types";

const usersCtx = createContext<UsersContext | undefined>(undefined);

const UsersContextProvider: React.FC<UsersContextProviderProps> = (
  props: UsersContextProviderProps
) => {
  const [userBadges, setUserBadges] = useState<UserBadge[]>([]);
  return (
    <usersCtx.Provider value={{ userBadges, setUserBadges }}>
      {props.children}
    </usersCtx.Provider>
  );
};

const useUsersContext = () => {
  const ctx = useContext(usersCtx);
  if (ctx === undefined) {
    throw new Error("userAuthContext: ctx is undefined");
  }
  return ctx;
};

export { useUsersContext, UsersContextProvider };
