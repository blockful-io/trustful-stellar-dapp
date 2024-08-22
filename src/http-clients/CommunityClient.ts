import httpClient from "./HttpClient";

export class CommunityClient {
  static badgeSetsBadgesPath = "community/badgeSets/badges";
  static badgeSets = "community/badgeSets";

  getBadgeSets(community: string) {
    return httpClient.get<any, { community: string }>(
      CommunityClient.badgeSetsBadgesPath,
      {
        community,
      }
    );
  }

  getBadgeSetsBadges(community: string, badgeSetName: string) {
    return httpClient.get<any, { community: string; badgeSetName: string }>(
      CommunityClient.badgeSetsBadgesPath,
      {
        community,
        badgeSetName,
      }
    );
  }
}
