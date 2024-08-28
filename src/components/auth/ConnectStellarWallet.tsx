import { useAuthContext } from "@/components/auth/Context";
import {
  ALBEDO_ID,
  AlbedoModule,
  StellarWalletsKit,
  WalletNetwork,
} from "@creit.tech/stellar-wallets-kit";
import cc from "classcat";
import { UserDropdown } from "../molecules";
import { isTestnet } from "@/lib/wallet/chains";
import dotenv from 'dotenv'
dotenv.config();

interface ConnectWalletProps {
  customClassNames?: string;
}

export const kit: StellarWalletsKit = new StellarWalletsKit({
  network: isTestnet ? WalletNetwork.TESTNET : WalletNetwork.PUBLIC,
  selectedWalletId: ALBEDO_ID,
  modules: [new AlbedoModule()],
});

export const ConnectStellarWallet = ({
  customClassNames = "",
}: ConnectWalletProps) => {
  const { setUserAddress, userAddress } = useAuthContext();
  return userAddress ? (
    <UserDropdown/>
  ) : (
    <button
      className={cc([
        "text-base text-brandBlack font-medium bg-brandGreen p-2 px-6 rounded-lg",
        customClassNames,
      ])}
      onClick={async (e: any) => {
        kit.setWallet(ALBEDO_ID);
        const { address } = await kit.getAddress();
        setUserAddress(address);
      }}
    >
      Connect
    </button>
  );
};
