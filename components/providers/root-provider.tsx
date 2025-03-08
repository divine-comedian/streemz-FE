"use client"

import { ReactNode } from "react"

import { useIsMounted } from "@/lib/hooks/use-is-mounted"
import { Toaster } from "@/components/ui/toaster"
import HandleWalletEvents from "@/components/blockchain/handle-wallet-events"
import { RainbowKitProviderWrapper } from "@/components/providers/rainbow-kit"
import { ThemeProvider } from "@/components/providers/theme-provider"

interface RootProviderProps {
  children: ReactNode
}

export default function RootProvider({ children }: RootProviderProps) {
  const isMounted = useIsMounted()
  return isMounted ? (
    <RainbowKitProviderWrapper>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <HandleWalletEvents>{children}</HandleWalletEvents>
        <Toaster />
      </ThemeProvider>
    </RainbowKitProviderWrapper>
  ) : null
}
