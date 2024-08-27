import { UserBadge } from "@/components/user/types";
import { userBadgeAdapter } from "./adapters/UserAdapters";
import httpClient from "./HttpClient";
import { UserBadgeFromApi } from "./types";

export class UserClient {
  static badgesPath = "users/badges";
  static badgesTrustfulPath = "users/badges/trustful";
  static badgesBySetPath = "users/badges/bySet";
  static availableClaimableBalancesPath = "users/available-claimable-balances";
  static scorePath = "users/score";

  async getBadges(publicKey: string): Promise<UserBadge[]> {
    if (!publicKey) {
      throw new Error("UserClient getBadges: publicKey empty or invalid");
    }
    const badgesFromApi: UserBadgeFromApi[] = await httpClient.get<
      any,
      { publicKey: string }
    >(UserClient.badgesPath, {
      publicKey,
    });
    return badgesFromApi.map(userBadgeAdapter.fromApi);
  }

  getBadgesTrustful(publicKey: string): Promise<UserBadge[]> {
    if (!publicKey) {
      throw new Error(
        "UserClient getBadgesTrustful: publicKey empty or invalid"
      );
    }
    return httpClient.get<any, { publicKey: string }>(
      UserClient.badgesTrustfulPath,
      {
        publicKey,
      }
    );
  }

  getBadgesBySet(publicKey: string, badgeSetName: string) {
    if (!publicKey) {
      throw new Error("UserClient getBadgesBySet: publicKey empty or invalid");
    }
    return httpClient.get<any, { publicKey: string; badgeSetName: string }>(
      UserClient.badgesBySetPath,
      {
        publicKey,
        badgeSetName,
      }
    );
  }

  getAvailableClaimableBalancesPath(publicKey: string) {
    if (!publicKey) {
      throw new Error(
        "UserClient getAvailableClaimableBalancesPath: publicKey empty or invalid"
      );
    }
    return httpClient.get<any, { userPublicKey: string }>(
      UserClient.availableClaimableBalancesPath,
      {
        userPublicKey: publicKey,
      }
    );
  }

  getScore(publicKey: string) {
    if (!publicKey) {
      throw new Error("UserClient getScore: publicKey empty or invalid");
    }
    return httpClient.get<any, { publicKey: string }>(UserClient.scorePath, {
      publicKey,
    });
  }
}

const usersClient = new UserClient();
export default usersClient;
