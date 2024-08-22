import httpClient from "./HttpClient";

export class UsersClient {
  static badgesPath = "user/badges";
  static badgesTrustfulPath = "user/badges/trustful";
  static badgesBySetPath = "user/badges/bySet";
  static availableClaimableBalancesPath = "users/available-claimable-balances";
  static scorePath = "users/score";

  getBadges(publicKey: string) {
    return httpClient.get<any, { publicKey: string }>(UsersClient.badgesPath, {
      publicKey,
    });
  }

  getBadgesTrustful(publicKey: string) {
    return httpClient.get<any, { publicKey: string }>(
      UsersClient.badgesTrustfulPath,
      {
        publicKey,
      }
    );
  }

  getBadgesBySet(publicKey: string, badgeSetName: string) {
    return httpClient.get<any, { publicKey: string; badgeSetName: string }>(
      UsersClient.badgesBySetPath,
      {
        publicKey,
        badgeSetName,
      }
    );
  }

  getAvailableClaimableBalancesPath(publicKey: string) {
    return httpClient.get<any, { userPublicKey: string }>(
      UsersClient.availableClaimableBalancesPath,
      {
        userPublicKey: publicKey,
      }
    );
  }

  getScore(publicKey: string) {
    return httpClient.get<any, { publicKey: string }>(UsersClient.scorePath, {
      publicKey,
    });
  }
}
