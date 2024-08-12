import "@rainbow-me/rainbowkit/styles.css";
import "@/styles/globals.css";
import "tailwindcss/tailwind.css";

import {
  queryClient,
  wagmiConfig,
} from "../lib/wallet/wallet-config";
import { WagmiProvider } from "wagmi";
import { darkTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClientProvider } from "@tanstack/react-query";
import { Inter } from "next/font/google";

import { type AppProps } from "next/app";

import { Toaster } from "react-hot-toast";
import { DappHeader } from "@/components/organisms";

const inter = Inter({ subsets: ["latin"] });

export default function App({
  Component,
  pageProps,
}: AppProps) {
  return (
    <WagmiProvider config={wagmiConfig}>

        <QueryClientProvider client={queryClient}>
            <RainbowKitProvider
              theme={darkTheme({
                fontStack: "system",
                overlayBlur: "small",
                borderRadius: "small",
                accentColorForeground: "white",
                accentColor: "rgba(177, 239, 66, 1)",
              })}
            >
              <div className={`${inter.className} h-screen flex flex-col`}>
                <DappHeader />
                <main>
                  <div className="relative h-full flex-grow">
                    <Toaster
                      position="bottom-center"
                      toastOptions={{
                        duration: 5000,
                        style: {
                          background: "rgba(22, 22, 23, 1)",
                          color: "rgba(245, 255, 255, 1)",
                          fontSize: "14px",
                        },
                      }}
                    />
                    <Component {...pageProps} />
                  </div>
                </main>
              </div>
            </RainbowKitProvider>
        </QueryClientProvider>
    </WagmiProvider>
  );
}
