import { BaseError } from "viem";

export enum TransactionErrorType {
  UNKNOWN = "unknown",
  REVERTED = "reverted",
  DECLINED = "declined",
  NO_MATCHING_KEY = "no_matching_key",
  INSUFFICIENT_BALANCE = "insufficient_balance",

  /*
    Used on the frontend to determine if the transaction is
    not needed based on the current state of the blockchain
  */
  NOT_NEEDED = "not_needed",
}

const namesForRevertedTxStatus = ["reverted"];

const namesForDeclinedTxStatus = [
  "cancelled",
  "declined",
  "rejected",
  "denied",
];

export const getBlockchainTransactionError = (
  error: any
): TransactionErrorType => {
  if (
    namesForRevertedTxStatus.some(
      (nameForRevertedTxStatus) => error.status === nameForRevertedTxStatus
    )
  ) {
    return TransactionErrorType.REVERTED;
  } else if (
    namesForDeclinedTxStatus.some((nameForDeclinedTxStatus: string) => {
      return (
        (error as BaseError).details &&
        (error as BaseError).details.includes(nameForDeclinedTxStatus)
      );
    })
  ) {
    return TransactionErrorType.DECLINED;
  } else {
    return TransactionErrorType.UNKNOWN;
  }
};
