import { CommunityBadge } from "@/components/community/types";
import { communityBadgeAdapter } from "./adapters/CommunityAdapters";
import httpClient from "./HttpClient";
import { BadgesFromBadgeSetResponse, CommunityBadgeFromApi } from "./types";
import { computePublicKey } from "ethers/lib/utils";

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
    community: string | undefined
  ): Promise<CommunityBadge[]> {
    try {
      const { badges } = await httpClient.get<
        BadgesFromBadgeSetResponse,
        { community: string }
      >(CommunityClient.badgeSetsBadgesPath, {
        community: community ?? CommunityClient.defaultCommunity,
      });
      let communityBadges: CommunityBadge[] = [];
      Object.keys(badges).forEach((badgeSetName) => {
        Object.entries(badges[badgeSetName]).forEach(([assetCode, badge]) =>
          communityBadges.push(
            communityBadgeAdapter.fromApi(
              badge,
              assetCode,
              badgeSetName,
              community ?? CommunityClient.defaultCommunity
            )
          )
        );
      });
      return communityBadges;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}

const communityClient = new CommunityClient();
export default communityClient;
