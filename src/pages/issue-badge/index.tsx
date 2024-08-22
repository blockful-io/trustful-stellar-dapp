import {
  AttestationBadge,
  CalculatorIcon,
  ContentTabs,
  StarIcon,
} from "@/components";
import { CardWrapper } from "@/components/templates/CardWrapper";
import { PageTemplate } from "@/components/templates/PageTemplate";

export default function IssueBadgePage() {
  return (
    <PageTemplate className="" title={"Generate Attestation"}>
      <ContentTabs
        tabs={{
          Import: {
            content: (
              <CardWrapper>
                <AttestationBadge
                  icon={StarIcon}
                  title="Stellar Quest"
                  imported={false}
                />
                <AttestationBadge
                  icon={CalculatorIcon}
                  title="Soroban Quest"
                  imported={true}
                />
                <AttestationBadge
                  icon={StarIcon}
                  title="Stellar Quest"
                  imported={false}
                />
                <AttestationBadge
                  icon={CalculatorIcon}
                  title="Soroban Quest"
                  imported={true}
                />
              </CardWrapper>
            ),
            tabNumber: 1,
          },
        }}
      ></ContentTabs>
    </PageTemplate>
  );
}
