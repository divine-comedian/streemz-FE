"use client"

import "@rainbow-me/rainbowkit/styles.css"

import { ReactNode } from "react"
import { env } from "@/env.mjs"
import {
  darkTheme,
  getDefaultConfig,
  lightTheme,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { WagmiProvider } from "wagmi"

import { chains, transports } from "@/config/networks"
import { siteConfig } from "@/config/site"
import { useColorMode } from "@/lib/state/color-mode"
import { config } from "@/lib/wagmi"

const wagmiConfig = getDefaultConfig({
  appName: siteConfig.name,
  projectId: env.NEXT_PUBLIC_WC_PROJECT_ID,
  chains,
  transports,
  ssr: true,
})

const queryClient = new QueryClient()

interface RainbowKitProviderProps {
  children: ReactNode
}

export function RainbowKitProviderWrapper({
  children,
}: RainbowKitProviderProps) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          appInfo={{
            appName: siteConfig.name,
          }}
          theme={darkTheme()}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
