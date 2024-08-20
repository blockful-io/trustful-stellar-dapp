import React, { createContext, useContext, useState } from "react";
import { AuthContext, AuthProviderProps } from "./types";

const authCtx = createContext<AuthContext | undefined>(undefined);

const AuthProvider: React.FC<AuthProviderProps> = (
  props: AuthProviderProps
) => {
  const [userAddress, setUserAddress] = useState<string>("");
  return (
    <authCtx.Provider value={{ userAddress, setUserAddress }}>
      {props.children}
    </authCtx.Provider>
  );
};

const useAuthContext = () => {
  const ctx = useContext(authCtx);
  if (ctx === undefined) {
    throw new Error("userAuthContext: ctx is undefined");
  }
  return ctx;
};

export { useAuthContext, AuthProvider };
