import { ReactNode } from "react"

import { NetworkStatus } from "@/components/blockchain/network-status"
import { SiteFooter } from "@/components/layout/footer"

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <div className="relative flex min-h-screen flex-col">
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </div>
      <NetworkStatus />
    </>
  )
}
