import dotenv from "dotenv";

dotenv.config();

export enum SupportedNetwork {
  MAINNET = 1,
  TESTNET = 11155111,
}

export const ETHEREUM_MAINNET_CHAIN_ID = SupportedNetwork.MAINNET;
export const ETHEREUM_TESTNET_CHAIN_ID = SupportedNetwork.TESTNET;

export const DEFAULT_CHAIN_ID = process.env.NEXT_PUBLIC_USE_TESTNET
  ? ETHEREUM_TESTNET_CHAIN_ID
  : ETHEREUM_MAINNET_CHAIN_ID;

export const isTestnet = !!parseInt(process.env.NEXT_PUBLIC_USE_TESTNET ?? "0");
