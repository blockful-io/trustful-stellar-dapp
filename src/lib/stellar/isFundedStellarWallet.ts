import * as StellarSdk from "@stellar/stellar-sdk";

export const isFundedStellarWallet = async (address: string) => {
  try {
    const horizonServer = new StellarSdk.Horizon.Server(
      "https://horizon.stellar.org"
    );
    const account = await horizonServer.loadAccount(address);
    if (!!account) {
      return true;
    }
    throw new Error("Not able to load account using horizon server");
  } catch (error) {
    return false;
  }
};
