import Image from "next/image";
import Link from "next/link";
import { ConnectStellarWallet } from "../auth/ConnectStellarWallet";
import { useUsersContext } from "../user/Context";

export const DappHeader = () => {
  const { userScore } = useUsersContext();
  return (
    <div className="w-screen flex items-center mx-auto p-6 max-w-[100vw] h-[72px] justify-between border-t-none border border-r-none border-l-none border-whiteOpacity008 bg-brandBlack">
      <div className="flex items-center gap-6">
        <Link href="/">
          <Image
            alt="Trustful Stellar Icon"
            src="/trustful-logo.svg"
            height={20}
            width={103}
          />
        </Link>
      </div>
      <div className="flex flex-row">
        {userScore !== undefined ? (
          <div className="p-3">
            <span className="text-whiteOpacity05">Points: {userScore}</span>
          </div>
        ) : (
          <></>
        )}
        <ConnectStellarWallet />
      </div>
    </div>
  );
};
