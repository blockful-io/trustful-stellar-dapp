import { ReactNode } from "react";

export type CommunityContext = {
  communityBadges: CommunityBadge[];
  setCommunityBadges: (communityBadges: CommunityBadge[]) => void;
};

export type CommunityContextProviderProps = {
  children: ReactNode;
};

export type CommunityBadge = {
  communityName: string;
  badgesQuest: string;
  assetCode: string;
  score: number;
  issuer: string;
  description: string;
};
