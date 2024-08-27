import React, { createContext, useContext, useState } from "react";
import { UserBadge, UserContext, UserContextProviderProps } from "./types";
import { CommunityBadge } from "../community/types";

const userCtx = createContext<UserContext | undefined>(undefined);

const UserContextProvider: React.FC<UserContextProviderProps> = (
  props: UserContextProviderProps
) => {
  const [userBadges, setUserBadges] = useState<UserBadge[]>([]);
  const [userBadgesImported, setUserBadgesImported] = useState<UserBadge[]>([]);
  const [userBadgesToImport, _setUserBadgesToImport] = useState<UserBadge[]>(
    []
  );
  const setUserBadgesToImport = (
    _userBadges: UserBadge[],
    _userBadgesImported: UserBadge[],
    _communityBadges: CommunityBadge[]
  ) => {
    const _userBadgesToImport = _userBadges.filter(({ assetCode }) => {
      if (!assetCode) return false;
      const communityIncludesBadge =
        _communityBadges.findIndex(({ assetCode: communityBadgeAssetCode }) => {
          communityBadgeAssetCode.toLocaleLowerCase() ===
            assetCode.toLocaleLowerCase();
        }) > 0;
      const userBadgesImportedIncludesBadge =
        _userBadgesImported.findIndex(
          ({ assetCode: importedBadgeAssetCode }) =>
            !!importedBadgeAssetCode &&
            assetCode.toLocaleLowerCase() ===
              importedBadgeAssetCode.toLocaleLowerCase()
        ) > 0;
      return communityIncludesBadge && !userBadgesImportedIncludesBadge;
    });
    _setUserBadgesToImport(_userBadgesToImport);
  };
  return (
    <userCtx.Provider
      value={{
        userBadges,
        setUserBadges,
        userBadgesImported,
        setUserBadgesImported,
        userBadgesToImport,
        setUserBadgesToImport,
      }}
    >
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
