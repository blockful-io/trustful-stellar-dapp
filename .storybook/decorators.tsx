import React from "react";
import { WagmiProvider } from "wagmi";
import {
  getSiweMessageOptions,
  queryClient,
  wagmiConfig,
} from "../src/lib/wallet/wallet-config";
import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClientProvider } from "@tanstack/react-query";
import colors from 'tailwindcss/colors';

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const withWagmiProvider = (StoryFn) => (
  <>
    <style>
      {`
        :root {
          --font-inter: ${inter.style.fontFamily}
        }
        html {
          font-family: var(--font-inter);
        }
      `}
    </style>
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <StoryFn />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </>
);
