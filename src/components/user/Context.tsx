import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { UserBadge, UserContext, UserContextProviderProps } from "./types";
import { CommunityBadge } from "../community/types";
import usersClient from "@/lib/http-clients/UsersClient";
import { useAuthContext } from "../auth/Context";

const userCtx = createContext<UserContext | undefined>(undefined);

const UserContextProvider: React.FC<UserContextProviderProps> = (
  props: UserContextProviderProps
) => {
  const { userAddress } = useAuthContext();
  const [userBadges, setUserBadges] = useState<UserBadge[]>([]);
  const [userScore, setUserScore] = useState<number>();
  const [userBadgesImported, setUserBadgesImported] = useState<UserBadge[]>([]);
  const [userBadgesToImport, _setUserBadgesToImport] = useState<UserBadge[]>(
    []
  );
  const fetchScore = useCallback(async () => {
    if (!!userAddress) {
      const newScore = await usersClient.getScore(userAddress);
      setUserScore(newScore);
    }
  }, [userAddress]);

  useEffect(() => {
    fetchScore();
  }, [fetchScore]);

  const setUserBadgesToImport = (
    _userBadges: UserBadge[],
    _userBadgesImported: UserBadge[],
    _communityBadges: CommunityBadge[]
  ) => {
    const _userBadgesToImport = _userBadges.filter(({ assetCode }) => {
      if (!assetCode) return false;
      const communityIncludesBadge = _communityBadges.some(
        ({ assetCode: communityBadgeAssetCode }) => {
          communityBadgeAssetCode.toLocaleLowerCase() ===
            assetCode.toLocaleLowerCase();
        }
      );
      const userBadgesImportedIncludesBadge = _userBadgesImported.some(
        ({ assetCode: importedBadgeAssetCode }) =>
          !!importedBadgeAssetCode &&
          assetCode.toLocaleLowerCase() ===
            importedBadgeAssetCode.toLocaleLowerCase()
      );
      return communityIncludesBadge && !userBadgesImportedIncludesBadge;
    });
    _setUserBadgesToImport(_userBadgesToImport);
  };
  return (
    <userCtx.Provider
      value={{
        userBadges,
        setUserBadges,
        userScore,
        setUserScore,
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
