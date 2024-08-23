import { UserBadge } from "@/components/users/types";
import { userBadgeAdapter } from "./adapters/UsersAdapters";
import httpClient from "./HttpClient";
import { UserBadgeFromApi } from "./types";

export class UsersClient {
  static badgesPath = "users/badges";
  static badgesTrustfulPath = "users/badges/trustful";
  static badgesBySetPath = "users/badges/bySet";
  static availableClaimableBalancesPath = "users/available-claimable-balances";
  static scorePath = "users/score";

  async getBadges(publicKey: string): Promise<UserBadge[]> {
    const badgesFromApi: UserBadgeFromApi[] = await httpClient.get<
      any,
      { publicKey: string }
    >(UsersClient.badgesPath, {
      publicKey,
    });
    return badgesFromApi.map(userBadgeAdapter.fromApi);
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

const usersClient = new UsersClient();
export default usersClient;
