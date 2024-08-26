import { AttestationBadge, ContentTabs } from "@/components";
import { useAuthContext } from "@/components/auth/Context";
import { useCommunityContext } from "@/components/community/Context";
import { CardWrapper } from "@/components/templates/CardWrapper";
import { PageTemplate } from "@/components/templates/PageTemplate";
import { useUsersContext } from "@/components/user/Context";
import communityClient from "@/lib/http-clients/CommunityClient";
import usersClient from "@/lib/http-clients/UsersClient";
import { getQuestIcon as getQuestIcon } from "@/lib/getQuestIcon";
import { convertQuestNameToPresentation } from "@/lib/utils/convertBadgeSetNameToPresentation";
import { useCallback, useEffect } from "react";
import _ from "lodash";
import { CommunityQuests } from "@/components/community/types";

export default function IssueBadgePage() {
  const { userAddress } = useAuthContext();
  const { setCommunityQuests, communityQuests } = useCommunityContext();
  const { userBadges, setUserBadges } = useUsersContext();

  const fetchBadges = useCallback(async () => {
    try {
      if (userAddress) {
        const userBadges = await usersClient.getBadges(userAddress);
        setUserBadges(userBadges);
        const communityBadges = await communityClient.getCommunityBadges();
        const quests: CommunityQuests = _.groupBy(communityBadges, "questName");
        setCommunityQuests(quests);
      } else {
        setUserBadges([]);
      }
    } catch (error) {
      console.error(error);
      setUserBadges([]);
      throw error;
    }
  }, [userAddress]);

  useEffect(() => {
    fetchBadges();
  }, [fetchBadges]);

  const isImported = (badgeSetName: string) => {
    // TODO: Compare user trustful and normal badges with badge set badges.
    return false;
  };

  return (
    <PageTemplate className="" title={"Generate Attestation"}>
      <ContentTabs
        tabs={{
          Import: {
            content: (
              <CardWrapper>
                {Object.keys(communityQuests).map((questName) => (
                  <AttestationBadge
                    title={convertQuestNameToPresentation(questName)}
                    icon={getQuestIcon(questName)}
                    imported={isImported(questName)}
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
