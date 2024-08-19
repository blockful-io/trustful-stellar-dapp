import {
  ALBEDO_ID,
  AlbedoModule,
  ISupportedWallet,
  StellarWalletsKit,
  WalletNetwork,
} from "@creit.tech/stellar-wallets-kit";
import cc from "classcat";
import dynamic from "next/dynamic";

interface ConnectWalletProps {
  customClassNames?: string;
}

const kit: StellarWalletsKit = new StellarWalletsKit({
  network: WalletNetwork.TESTNET,
  selectedWalletId: ALBEDO_ID,
  modules: [new AlbedoModule()],
});

export const ConnectStellarWallet = ({
  customClassNames = "",
}: ConnectWalletProps) => {
  return (
    <button
      className={cc([
        "text-base text-brandBlack font-medium bg-brandGreen p-2 px-6 rounded-lg",
        customClassNames,
      ])}
      onClick={async (e: any) => {
        kit.setWallet(ALBEDO_ID);
        const { address } = await kit.getAddress();
        console.log(address);
      }}
    >
      Connect
    </button>
  );
};
