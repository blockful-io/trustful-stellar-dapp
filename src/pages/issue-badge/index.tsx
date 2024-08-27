import {
  AttestationBadge,
  ContentTabs,
  GenericModal,
  StarIcon,
} from "@/components";
import { useAuthContext } from "@/components/auth/Context";
import { useCommunityContext } from "@/components/community/Context";
import { CardWrapper } from "@/components/templates/CardWrapper";
import { PageTemplate } from "@/components/templates/PageTemplate";
import { useUsersContext } from "@/components/user/Context";
import communityClient from "@/lib/http-clients/CommunityClient";
import usersClient from "@/lib/http-clients/UsersClient";
import { getQuestIcon as getQuestIcon } from "@/lib/getQuestIcon";
import { convertQuestNameToPresentation } from "@/lib/utils/convertBadgeSetNameToPresentation";
import { useCallback, useEffect, useState } from "react";
import _ from "lodash";
import { CommunityQuests } from "@/components/community/types";
import { ImportBadgesModalContent } from "@/components/molecules/ImportBadgesModalContent";
import { sendSignedTransaction } from "@/lib/stellar/signTransaction";
import { WalletIcon } from "@/components/atoms/icons/WalletIcon";
import tailwindConfig from "tailwind.config";
import { kit } from "@/components/auth/ConnectStellarWallet";
import { ALBEDO_ID } from "@creit.tech/stellar-wallets-kit";
import assetClient from "@/lib/http-clients/AssetClient";
import toast from "react-hot-toast";

export default function IssueBadgePage() {
  const { userAddress, setUserAddress } = useAuthContext();
  const { setCommunityQuests, communityQuests } = useCommunityContext();
  const {
    userBadges,
    setUserBadges,
    userBadgesImported,
    setUserBadgesImported,
    userBadgesToImport,
    setUserBadgesToImport,
  } = useUsersContext();

  const [isImportModalOpen, setImportModalOpen] = useState(false);

  const fetchBadges = useCallback(async () => {
    try {
      const _communityBadges = await communityClient.getCommunityBadges();
      const quests: CommunityQuests = _.groupBy(_communityBadges, "questName");
      setCommunityQuests(quests);
      if (userAddress) {
        const _userBadges = await usersClient.getBadges(userAddress);
        setUserBadges(_userBadges);
        const _userBadgesImported =
          await usersClient.getBadgesTrustful(userAddress);
        setUserBadgesImported(_userBadgesImported);
        setUserBadgesToImport(
          _userBadges,
          _userBadgesImported,
          _communityBadges
        );
      } else {
        setUserBadges([]);
        setUserBadgesImported([]);
        setUserBadgesToImport([], [], []);
      }
    } catch (error) {
      console.error(error);
      toast.error("Error fetching user badges", {
        duration: 2000,
        position: "top-right",
      });
      setCommunityQuests({});
      setUserBadges([]);
      setUserBadgesImported([]);
      setUserBadgesToImport([], [], []);
    }
  }, [userAddress]);

  useEffect(() => {
    fetchBadges();
  }, [fetchBadges]);

  const isImported = (badgeSetName: string) => {
    // TODO: Compare user trustful and normal badges with badge set badges.
    return false;
  };

  const importBadges = async () => {
    try{

      const assetCodesToImport = userBadgesToImport.reduce(
        (assetCodesAcc, currentBadge) => {
          if (currentBadge.assetCode) {
            assetCodesAcc.push(currentBadge.assetCode);
          }
          return assetCodesAcc;
        },
        [] as string[]
      );
      const transaction = await assetClient.postAsset(
        userAddress,
        assetCodesToImport
      );
      await sendSignedTransaction(transaction, userAddress);
      toast.success("The badges were imported with success");
    } catch(error: unknown){
      if((error as Error)?.message.includes("Action request was rejected by the user.")){
        toast.error("Transaction Rejected", {position: "top-right", duration: 2000})
        return;
      }
      else if(!!(error as Error)?.message){
        toast.error((error as Error)?.message, {position: "top-right", duration: 2000})
        return;
      }
      throw error;
    }
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
                    key={questName}
                    title={convertQuestNameToPresentation(questName)}
                    icon={getQuestIcon(questName)}
                    imported={isImported(questName)}
                    onClick={() => {
                      setImportModalOpen(true);
                    }}
                  ></AttestationBadge>
                ))}
              </CardWrapper>
            ),
            tabNumber: 1,
          },
        }}
      ></ContentTabs>
      {userAddress ? (
        <GenericModal
          isOpen={isImportModalOpen}
          buttonLabel="Import"
          title="Import attestations"
          onClose={() => {
            setImportModalOpen(false);
          }}
          onButtonClick={async () => {
            await importBadges();
          }}
          isAsync={true}
        >
          <ImportBadgesModalContent
            badges={[]}
            title="Stellar Quest"
            icon={<StarIcon></StarIcon>}
          />
        </GenericModal>
      ) : (
        <GenericModal
          isOpen={isImportModalOpen}
          buttonLabel="Import"
          title="Import attestations"
          onClose={() => {
            setImportModalOpen(false);
          }}
          onButtonClick={async () => {
            kit.setWallet(ALBEDO_ID);
            const { address } = await kit.getAddress();
            setUserAddress(address);
          }}
          isAsync={true}
        >
          <div className="p-2 w-full h-full items-center justify-center flex flex-col">
            <div className="my-8 p-8 pt-6 w-[150px] h-[150px] rounded-full bg-whiteOpacity005 items-center justify-center">
              <WalletIcon
                color={tailwindConfig.theme.extend.colors.brandGreen}
              ></WalletIcon>
            </div>
            <div className="text-center">
              <span>
                Please connect your wallet to import badges from GitHub Soroban.
              </span>
            </div>
          </div>
        </GenericModal>
      )}
    </PageTemplate>
  );
}
