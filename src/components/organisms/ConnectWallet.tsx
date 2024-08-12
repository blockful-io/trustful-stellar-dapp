import { ConnectButton } from "@rainbow-me/rainbowkit";
import { UserDropdown } from "../molecules";
import { Address } from "viem";
import cc from "classcat";

interface ConnectWalletProps {
  customClassNames?: string;
}

export const ConnectWallet = ({
  customClassNames = "",
}: ConnectWalletProps) => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready && account && chain && authenticationStatus === "authenticated";

        if (!connected) {
          return (
            <button
              className={cc([
                "text-base text-brandBlack font-medium bg-brandGreen p-2 px-6 rounded-lg",
                customClassNames,
              ])}
              onClick={(e: any) => {
                openConnectModal();
                e.preventDefault();
              }}
            >
              Connect
            </button>
          );
        }

        const unsupportedChainClassName = `text-brandWhite inline-flex w-auto flex-shrink-0 appearance-none items-center justify-center space-x-2 rounded-md px-5 py-2.5`;

        if (chain.unsupported) {
          return (
            <button
              onClick={(e: any) => {
                openChainModal();
                e.preventDefault();
              }}
              type="button"
              className={unsupportedChainClassName}
            >
              <span className="flex-shrink-0 text-xs text-brandBlack font-semibold bg-brandGreen p-2 px-3 rounded-full">
                Unsupported network
              </span>
            </button>
          );
        }

        return (
          <div style={{ display: "flex", gap: 12 }}>
            <UserDropdown address={account.address as Address} />
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
