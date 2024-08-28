import { kit } from "@/components/auth/ConnectStellarWallet";
import { WalletNetwork } from "@creit.tech/stellar-wallets-kit";
import * as StellarSdk from "@stellar/stellar-sdk";
import toast from "react-hot-toast";

const signTransaction = async (transactionXdr: string) => {
  const { address } = await kit.getAddress();
  const { signedTxXdr } = await kit.signTransaction(transactionXdr, {
    address,
    networkPassphrase: WalletNetwork.PUBLIC,
  });
  const transaction = new StellarSdk.Transaction(
    signedTxXdr,
    StellarSdk.Networks.PUBLIC
  );
  return transaction;
};

const signFeeBumpTransaction = async (transactionXdr: string) => {
  const { address } = await kit.getAddress();
  const { signedTxXdr } = await kit.signTransaction(transactionXdr, {
    address,
    networkPassphrase: WalletNetwork.PUBLIC,
  });
  const feeBumpTransaction = new StellarSdk.FeeBumpTransaction(
    signedTxXdr,
    StellarSdk.Networks.PUBLIC
  );
  return feeBumpTransaction;
};

export const sendSignedTransaction = async (
  transactionXdr: string,
  userAddress: string
) => {
  try {
    const network = StellarSdk.Networks.PUBLIC;
    const horizonServer = new StellarSdk.Horizon.Server(
      "https://horizon.stellar.org"
    );

    // 2. Re build the original transaction
    const originalTransaction = new StellarSdk.Transaction(
      transactionXdr,
      network
    );
    const signedTransaction = await signTransaction(
      originalTransaction.toXDR()
    );

    const multipliedBaseFee = String(parseInt(StellarSdk.BASE_FEE) * 2);
    // 3. Fee bump the original transaction
    const feeBumpTransaction: StellarSdk.FeeBumpTransaction =
      StellarSdk.TransactionBuilder.buildFeeBumpTransaction(
        userAddress,
        multipliedBaseFee,
        signedTransaction,
        network
      );

    const signedFeeBumpTransaction = await signFeeBumpTransaction(
      feeBumpTransaction.toXDR()
    );

    // 4. Submit the fee-bumped transaction
    const res = await horizonServer.submitTransaction(signedFeeBumpTransaction);
    if (res) {
      return res.hash;
    }
  } catch (error) {
    if (error instanceof StellarSdk.NetworkError) {
      console.error(error?.response.data);
      throw new Error("Transaction Failed: " + error.message);
    }
    throw error;
  }
};
