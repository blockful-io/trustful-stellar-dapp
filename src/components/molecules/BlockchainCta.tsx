import { toast } from "react-hot-toast";
import { awaitBlockchainTxReceipt } from "@/lib/wallet/utils";
import { useAccount } from "wagmi";
import { TransactionReceipt } from "viem";
import { useEffect, useState } from "react";
import { TransactionErrorType } from "@/lib/wallet/error";
import { DEFAULT_CHAIN_ID, isTestnet } from "@/lib/wallet/chains";
import { ConnectWallet } from "../organisms";

enum BlockchainCTAState {
  CONFIRMED,
  OPEN_WALLET,
  APPROVING_IN_WALLET,
  WAITING_FOR_CONFIRMATION,
}

interface BlockchainCTAProps {
  /*
    When no authenticated address is defined (we use wagmi useAccount hook to get it),
    the component will render a ConnectMetamask button. Otherwise, it will render a Button
    with a transactionRequest callback onClick and a onSuccess callback on transaction 
    success. The only possibility of these callbacks being undefined is if the component
    is being used in a context where the user is not authenticated. Otherwise, if these 
    callbacks are undefined and an authenticated address is identified by wagmi useAccount,
    an error will be thrown in sendBlockchainTx.
  */
  transactionRequest?: () => Promise<
    `0x${string}` | TransactionErrorType | null
  >;
  onSuccess?: (txReceipt: TransactionReceipt) => void;
}

export const BlockchainCTA = ({
  transactionRequest,
  onSuccess,
}: BlockchainCTAProps) => {
  const [blockchainCtaStatus, setBlockchainCtaStatus] =
    useState<BlockchainCTAState>(BlockchainCTAState.OPEN_WALLET);
  const [txHashOrError, setTxHashOrError] = useState<
    `0x${string}` | undefined
  >();

  const { chain, address } = useAccount();

  useEffect(() => {
    if (!address) {
      setBlockchainCtaStatus(BlockchainCTAState.OPEN_WALLET);
    }
  }, [address]);

  const sendBlockchainTx = async () => {
    if (!address) {
      setBlockchainCtaStatus(BlockchainCTAState.OPEN_WALLET);
      return;
    }

    if (chain && chain?.id !== DEFAULT_CHAIN_ID) {
      toast.error(`Please switch to ${isTestnet ? "Sepolia" : "Ethereum"}.`);
      return;
    }

    if (!transactionRequest || !onSuccess) {
      throw new Error(
        "The component should not trigger blockchain related events without a transactionRequest or onSuccess callback"
      );
    }

    setBlockchainCtaStatus(BlockchainCTAState.APPROVING_IN_WALLET);

    const txHashOrError: `0x${string}` | TransactionErrorType | null =
      await transactionRequest();

    const transactionReverted =
      txHashOrError === TransactionErrorType.REVERTED ||
      txHashOrError === TransactionErrorType.NO_MATCHING_KEY;
    const transactionDeclined = txHashOrError === TransactionErrorType.DECLINED;
    const transactionFailedDueToInsufficientBalance =
      txHashOrError === TransactionErrorType.INSUFFICIENT_BALANCE;
    const transactionFailed = txHashOrError === TransactionErrorType.UNKNOWN;
    const transactionNotNeeded =
      txHashOrError === TransactionErrorType.NOT_NEEDED;
    const transactionSucceededInDBResolver = txHashOrError === null;

    if (transactionReverted) {
      console.error(txHashOrError);
      toast.error(`Request failed: check logs for more info`);
      setBlockchainCtaStatus(BlockchainCTAState.OPEN_WALLET);
    } else if (transactionDeclined) {
      console.error(txHashOrError);
      toast.error(`Rejected: please approve transaction`);
      setBlockchainCtaStatus(BlockchainCTAState.OPEN_WALLET);
    } else if (transactionFailed) {
      console.error(txHashOrError);
      toast.error(`Request failed: please try again`);
      setBlockchainCtaStatus(BlockchainCTAState.OPEN_WALLET);
    } else if (transactionFailedDueToInsufficientBalance) {
      console.error(txHashOrError);
      toast.error(`Insufficient wallet balance: add funds and try again`);
      setBlockchainCtaStatus(BlockchainCTAState.OPEN_WALLET);
    } else if (transactionSucceededInDBResolver) {
      setBlockchainCtaStatus(BlockchainCTAState.CONFIRMED);

      onSuccess({} as TransactionReceipt);
    } else if (transactionNotNeeded) {
      setBlockchainCtaStatus(BlockchainCTAState.OPEN_WALLET);
      toast.success(
        "A wallet confirmation is not needed! Due to the current blockchain state you will be sent directly to the next step."
      );
      onSuccess({} as TransactionReceipt);
    } else {
      setTxHashOrError(txHashOrError);

      setBlockchainCtaStatus(BlockchainCTAState.WAITING_FOR_CONFIRMATION);

      const txReceipt = await awaitBlockchainTxReceipt(txHashOrError);

      if (txReceipt.status === "success") {
        setBlockchainCtaStatus(BlockchainCTAState.CONFIRMED);

        setTimeout(() => {
          toast.success("Transaction confirmed!");
          onSuccess({} as TransactionReceipt);
          setBlockchainCtaStatus(BlockchainCTAState.OPEN_WALLET);
        }, 5000);
      } else {
        console.error(txReceipt);
        toast.error(`Request failed: please try again`);
        setBlockchainCtaStatus(BlockchainCTAState.OPEN_WALLET);
      }
    }
  };

  return BlockchainCTAComponent({
    onClick: () => sendBlockchainTx(),
    txHash: txHashOrError,
  })[blockchainCtaStatus];
};

const OpenWalletCTA = ({ onClick }: BlockchainCTAComponentProps) => {
  const { address } = useAccount();

  if (!address) {
    return <ConnectWallet customClassNames="w-full text-sm" />;
  }

  return (
    <button
      className="hover:bg-yellow hover:brightness-110 transition text-sm text-black font-semibold bg-green p-2 px-3 rounded-full w-full"
      onClick={onClick}
    >
      Open wallet
    </button>
  );
};

const TransactionRequestConfirmedCTA = ({
  onClick,
  txHash,
}: BlockchainCTAComponentProps) => {
  return (
    <div className="w-full flex flex-col space-y-6 justify">
      <button
        className="hover:bg-yellow hover:brightness-110 transition text-sm text-black font-semibold bg-green p-2 px-3 rounded-full w-full"
        onClick={onClick}
      >
        Waiting blockchain confirmation
      </button>
    </div>
  );
};

const TransactionRequestSentCTA = ({
  onClick,
}: BlockchainCTAComponentProps) => {
  return (
    <div className="w-full relative group pb-3">
      <div className="z-10 group-hover:translate-y-0 absolute left-0 top-0 w-full">
        <button
          className="hover:bg-yellow hover:brightness-110 transition text-sm text-black font-semibold bg-green p-2 px-3 rounded-full w-full"
          onClick={onClick}
        >
          Check your wallet
        </button>
      </div>

      <button
        className="pointer-events-none group-hover:translate-y-0"
        onClick={onClick}
      >
        <div className="text-transparent">
          Transaction Request To Your Wallet
        </div>
      </button>
    </div>
  );
};

export const TransactionConfirmedInBlockchainCTA = ({
  onClick,
}: BlockchainCTAComponentProps) => {
  return (
    <button
      className="hover:bg-yellow hover:brightness-110 transition text-sm text-black font-semibold bg-green p-2 px-3 rounded-full w-full"
      onClick={onClick}
    >
      Success
    </button>
  );
};

interface BlockchainCTAComponentProps {
  onClick: () => void;
  txHash?: `0x${string}`;
}

const BlockchainCTAComponent = ({
  onClick,
  txHash,
}: BlockchainCTAComponentProps) => {
  return {
    [BlockchainCTAState.OPEN_WALLET]: <OpenWalletCTA onClick={onClick} />,
    [BlockchainCTAState.APPROVING_IN_WALLET]: (
      <TransactionRequestSentCTA onClick={onClick} />
    ),
    [BlockchainCTAState.WAITING_FOR_CONFIRMATION]: (
      <TransactionRequestConfirmedCTA onClick={onClick} txHash={txHash} />
    ),
    [BlockchainCTAState.CONFIRMED]: (
      <TransactionConfirmedInBlockchainCTA onClick={onClick} />
    ),
  };
};
