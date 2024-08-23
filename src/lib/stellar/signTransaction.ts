import { kit } from "@/components/auth/ConnectStellarWallet";
import { useAuthContext } from "@/components/auth/Context";
import { WalletNetwork } from "@creit.tech/stellar-wallets-kit";
import * as StellarSdk from "@stellar/stellar-sdk";

const signTransaction = async (transactionXdr: string) => {
  const { address } = await kit.getAddress();
  const { signedTxXdr } = await kit.signTransaction(transactionXdr, {
    address,
    networkPassphrase: WalletNetwork.PUBLIC,
  });
  return new StellarSdk.Transaction(signedTxXdr, StellarSdk.Networks.PUBLIC);
};

export const sendSignedTransaction = async (transactionXdr: string) => {
  const network = StellarSdk.Networks.PUBLIC;
  const { userAddress } = useAuthContext();
  const horizonServer = new StellarSdk.Horizon.Server(
    "https://horizon.stellar.org"
  );
  // 2. Re build the original transaction
  const originalTransaction = new StellarSdk.Transaction(
    transactionXdr,
    network
  );
  const signedTransaction = await signTransaction(originalTransaction.toXDR());

  // 3. Fee bump the original transaction
  const feeBumpTransaction =
    StellarSdk.TransactionBuilder.buildFeeBumpTransaction(
      userAddress,
      StellarSdk.BASE_FEE,
      signedTransaction,
      network
    );
  const signedFeeBumpTransaction = await signTransaction(
    feeBumpTransaction.toXDR()
  );

  // 4. Submit the fee-bumped transaction
  const res = await horizonServer
    .submitTransaction(signedFeeBumpTransaction)
    .catch((error: any) => {
      console.error(
        "Transaction submission failed:",
        error.response.data.extras.result_codes
      );
    });
  if (res) {
    console.log("Success! Tx hash is: ", res?.hash);
  }
};
