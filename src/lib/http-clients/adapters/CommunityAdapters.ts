import { CommunityBadgeFromApi } from "../types";

export const communityBadgeAdapter = (() => {
  const fromApi = (
    communityBadgeFromApi: CommunityBadgeFromApi,
    assetCode: string,
    badgeSet: string,
    community: string
  ) => {
    const { score, issuer, description } = communityBadgeFromApi;
    return {
      badgeSet,
      assetCode,
      community,
      score,
      issuer,
      description,
    };
  };
  return { fromApi };
})();
