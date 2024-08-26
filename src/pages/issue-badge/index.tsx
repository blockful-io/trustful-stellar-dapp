import {
  AttestationBadge,
  CalculatorIcon,
  ContentTabs,
  StarIcon,
} from "@/components";
import { useAuthContext } from "@/components/auth/Context";
import { useCommunityContext } from "@/components/community/Context";
import { CardWrapper } from "@/components/templates/CardWrapper";
import { PageTemplate } from "@/components/templates/PageTemplate";
import { useUsersContext } from "@/components/users/Context";
import communityClient from "@/lib/http-clients/CommunityClient";
import usersClient from "@/lib/http-clients/UsersClient";
import { getBadgeSetIcon } from "@/lib/getBadgeSetIcon";
import { convertBadgeSetNameToPresentation } from "@/lib/utils/convertBadgeSetNameToPresentation";
import { useCallback, useEffect, useState } from "react";

export default function IssueBadgePage() {
  const { userAddress } = useAuthContext();
  const { communityBadges, setCommunityBadges } = useCommunityContext();
  const { userBadges, setUserBadges } = useUsersContext();

  const [badgeSets, setBadgeSets] = useState<string[]>([]);

  const fetchBadges = useCallback(async () => {
    if (userAddress) {
      const userBadges = await usersClient.getBadges(userAddress);
      setUserBadges(userBadges);
      const communityBadgeSets: string[] = await communityClient.getBadgeSets();
      setBadgeSets(communityBadgeSets);
      communityBadgeSets.forEach(async (badgeSet) => {
        const badgesFromBadgeSet = await communityClient.getBadgeSetsBadges(
          undefined,
          badgeSet
        );
        setCommunityBadges([...communityBadges, ...badgesFromBadgeSet]);
      });
    }
  }, [userAddress]);

  useEffect(() => {
    fetchBadges();
  }, [fetchBadges]);

  const isImported = (badgeSetName: string) => {
    // Compare user trustful and normal badges with badge set badges.
    return false;
  };

  return (
    <PageTemplate className="" title={"Generate Attestation"}>
      <ContentTabs
        tabs={{
          Import: {
            content: (
              <CardWrapper>
                {badgeSets.map((badgeSetName) => (
                  <AttestationBadge
                    title={convertBadgeSetNameToPresentation(badgeSetName)}
                    icon={getBadgeSetIcon(badgeSetName)}
                    imported={isImported(badgeSetName)}
                  ></AttestationBadge>
                ))}
              </CardWrapper>
            ),
            tabNumber: 1,
          },
        }}
      ></ContentTabs>
    </PageTemplate>
  );
}
