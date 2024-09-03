import { UserIcon } from "@/components";
import { IssuerTableCell } from "@/components/atoms/verify-reputation/IssuerTableCell";
import { SearchTableEmptyScreen } from "@/components/atoms/verify-reputation/SearchTableEmptyScreen";
import { SearchBar } from "@/components/molecules/SearchBar";
import { CustomTable } from "@/components/organisms/CustomTable";
import { ProfileBox } from "@/components/organisms/ProfileBox";
import { PageTemplate } from "@/components/templates/PageTemplate";
import { useState } from "react";

export default function VerifyReputationPage() {
  const [value, setValue] = useState("");
  const mockIssuerAddress =
    "GD6IAJEYOCPKJYTYVRJU75TXJGYUW7Z2ONMMJKXF2BFVGCMS3SQDFYWS";
  return (
    <PageTemplate className="h-full" title="Verify Reputation">
      <div className="p-12 pt-2">
        <ProfileBox
          userAddress=""
          onClear={() => {
            setValue("");
          }}
          isClearButtonVisible={value !== ""}
          searchBar={
            <SearchBar
              placeholder={"Paste the address..."}
              onButtonClick={(currentValue) => {
                alert("onButtonClick: " + currentValue);
              }}
              inputText={value}
              onChangeInputText={setValue}
            />
          }
        />
        <CustomTable
          childrenForEmptyTable={<SearchTableEmptyScreen />}
          className="mt-6"
          headers={["badgeName", "issuer"]}
          data={[
            {
              badgeName: "Stellar Quests",
              issuer: <IssuerTableCell userAddress={mockIssuerAddress} />,
            },
            {
              badgeName: "Stellar Quests",
              issuer: <IssuerTableCell userAddress={mockIssuerAddress} />,
            },
            {
              badgeName: "Stellar Quests",
              issuer: <IssuerTableCell userAddress={mockIssuerAddress} />,
            },
            {
              badgeName: "Stellar Quests",
              issuer: <IssuerTableCell userAddress={mockIssuerAddress} />,
            },
            {
              badgeName: "Stellar Quests",
              issuer: <IssuerTableCell userAddress={mockIssuerAddress} />,
            },
          ]}
        ></CustomTable>
      </div>
    </PageTemplate>
  );
}
