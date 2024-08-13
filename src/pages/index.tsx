import { CardLink } from "@/components/atoms/CardLink";
import { BlockfulCredits } from "@/components/atoms/homepage/BlockfulCredits";
import { HomepageBackground } from "@/components/atoms/homepage/HomepageBackground";
import { ArrowRightIcon } from "@/components/atoms/icons/ArrowRightIcon";
import { BadgeIcon } from "@/components/atoms/icons/BadgeIcon";
import { VerifyReputationIcon } from "@/components/atoms/icons/VerifyReputationIcon";
import cc from "classcat";

const HomePage = () => {
  return (
    <div className="relative mx-auto h-full flex items-center justify-center bg-[var(--primary-black)] z-[0]">
      <HomepageBackground />
      <div className="h-[calc(100vh-72px)] w-[100vw]">
        <div className="flex h-full w-full">
          <div className="flex px-[5%] pt-[5%] pb-[2%] flex-col h-full w-full justify-between">
            <div className="max-w-[400px]">
              <span className="font-space-grotesk text-7xl">
                Online Reputation made easy
              </span>
            </div>
            <div className="w-[564px] h-[39px]">
              <BlockfulCredits />
            </div>
          </div>
          <div className="pr-[5%] pt-[2%] pb-[2%] flex flex-col h-full w-full justify-around">
            <CardLink
              title="Issue Badge"
              mainIcon={<BadgeIcon color="var(--primary-green)" />}
              actionIcon={<ArrowRightIcon color="var(--primary-black)" />}
              onClick={() => console.log("issue badge")}
            />
            <CardLink
              title="Verify Reputation"
              mainIcon={<VerifyReputationIcon color="var(--primary-green)" />}
              actionIcon={<ArrowRightIcon color="var(--primary-black)" />}
              onClick={() => console.log("verify reputation")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
