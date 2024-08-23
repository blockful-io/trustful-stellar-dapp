import { CommunityBadge } from "@/components/community/types";
import { communityBadgeAdapter } from "./adapters/CommunityAdapters";
import httpClient from "./HttpClient";
import { BadgesFromBadgeSetResponse, CommunityBadgeFromApi } from "./types";

export class CommunityClient {
  static badgeSetsBadgesPath = "community/badgeSets/badges";
  static badgeSetsPath = "community/badgeSets";
  static defaultCommunity = "stellar";

  async getBadgeSets(community?: string): Promise<string[]> {
    const { badgeSetNames } = await httpClient.get<
      { badgeSetNames: string[] },
      { community: string }
    >(CommunityClient.badgeSetsPath, {
      community: community ?? CommunityClient.defaultCommunity,
    });
    return badgeSetNames;
  }

  async getBadgeSetsBadges(
    community: string | undefined,
    badgeSetName: string
  ): Promise<CommunityBadge[]> {
    try{
      const { badges } = await httpClient.get<
      BadgesFromBadgeSetResponse,
      { community: string; badgeSetName: string }
      >(CommunityClient.badgeSetsBadgesPath, {
        community: community ?? CommunityClient.defaultCommunity,
        badgeSetName,
      });
      return Object.entries(badges).map(([assetCode, badge]) =>
        communityBadgeAdapter.fromApi(
          badge,
          assetCode,
          badgeSetName,
          community ?? CommunityClient.defaultCommunity
        )
      );
    } catch(error){
      console.error(error);
      return []
    }
  }
}

const communityClient = new CommunityClient();
export default communityClient;
