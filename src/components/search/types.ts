import { ReactNode } from "react";

export type SearchContext = {
  searchedUserAddress: string;
  setSearchedUserAddress: (address: string) => void;
  searchedUserBadges: SearchedUserBadge[];
  setSearchedUserBadges: (badges: SearchedUserBadge[]) => void;
};

export interface SearchContextProviderProps
  extends React.ComponentPropsWithRef<"div"> {
  children: ReactNode;
}

export type SearchedUserBadge = {
  issuer: ReactNode;
  badgeName: ReactNode;
};
