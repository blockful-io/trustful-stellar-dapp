import { IssuerTableCell } from "@/components/atoms/verify-reputation/IssuerTableCell";
import {
  TableEmptyScreen,
} from "@/components/atoms/TableEmptyScreen";
import { SearchBar } from "@/components/search/SearchBar";
import { CustomTable } from "@/components/organisms/CustomTable";
import { ProfileBox } from "@/components/organisms/ProfileBox";
import { PageTemplate } from "@/components/templates/PageTemplate";
import { useState } from "react";
import {
  SearchContextProvider,
  useSearchContext,
} from "@/components/search/Context";
import { isValidStellarAddress } from "@/lib/stellar/isValidStellarAddress";
import communityClient from "@/lib/http-clients/CommunityClient";
import usersClient from "@/lib/http-clients/UsersClient";
import { SearchIcon } from "@/components/atoms/icons/SearchIcon";
import tailwindConfig from "tailwind.config";

function VerifyReputationPage() {
  const [inputText, setInputText] = useState("");
  const {
    searchedUserAddress,
    setSearchedUserAddress,
    setSearchedUserBadges,
    searchedUserBadges,
  } = useSearchContext();
  const onSearch = async (address: string) => {
    if (!isValidStellarAddress(address)) {
      setInputText("");
      alert("Invalid User Address");
      return false;
    }
    setSearchedUserAddress(address);
    const communityBadges = await communityClient.getCommunityBadges();
    const userTrustfulBadges = await usersClient.getBadgesTrustful(address);
    const userTrustfulBadgesAssetCodes = userTrustfulBadges.map(
      ({ assetCode }) => assetCode
    );
    const userCommunityBadges = communityBadges.filter(({ assetCode }) =>
      userTrustfulBadgesAssetCodes.includes(assetCode)
    );
    const searchedUserBadges = userCommunityBadges.map((badge) => ({
      badgeName: (
        <div className="flex flex-row items-center h-7">
          {badge.description}
        </div>
      ),
      issuer: <IssuerTableCell issuerAddress={badge.issuer} />,
    }));
    setSearchedUserBadges(searchedUserBadges);
  };
  return (
    <PageTemplate className="h-full" title={"Verify Reputation"}>
      <div className="p-12 pt-2">
        <ProfileBox
          userAddress={searchedUserAddress}
          userBadgesQuantity={searchedUserBadges.length}
          onClear={() => {
            setInputText("");
            setSearchedUserAddress("");
            setSearchedUserBadges([]);
          }}
          isClearButtonVisible={!!searchedUserAddress}
          searchBar={
            <SearchBar
              placeholder={"Paste the address..."}
              onButtonClick={onSearch}
              inputText={inputText}
              onChangeInputText={setInputText}
            />
          }
        />
        <CustomTable
          childrenForEmptyTable={
            <TableEmptyScreen
              icon={
                <SearchIcon
                  color={tailwindConfig.theme.extend.colors.whiteOpacity05}
                />
              }
              title="Search to start"
              description="Check a user's reputation by searching for their address"
            />
          }
          className="mt-6"
          headers={["badgeName", "issuer"]}
          data={searchedUserBadges}
        ></CustomTable>
      </div>
    </PageTemplate>
  );
}

export default function VerifyReputationPageWithContext(
  props: React.ComponentPropsWithRef<"div">
) {
  return (
    <SearchContextProvider>
      <VerifyReputationPage {...props}></VerifyReputationPage>
    </SearchContextProvider>
  );
}
