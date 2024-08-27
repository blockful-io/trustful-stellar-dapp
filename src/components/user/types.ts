import { ReactNode } from "react";

export type UserContext = {
  userBadges: UserBadge[];
  setUserBadges: (userBadges: UserBadge[]) => void;
};

export type UserContextProviderProps = {
  children: ReactNode;
};

export type UserBadge = {
  balance: string;
  limit?: string;
  buyingLiabilities: string;
  sellingLiabilities: string;
  sponsor?: string;
  lastModifiedLedger?: number;
  isAuthorized?: boolean;
  isAuthorizedToMaintainLiabilities?: boolean;
  isClawbackEnabled?: boolean;
  assetType: string;
  assetCode?: string;
  assetIssuer?: string;
};
