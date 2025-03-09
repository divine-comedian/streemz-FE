"use client"

import Link from "next/link"
import { useAccount } from "wagmi"

import useScroll from "@/lib/hooks/use-scroll"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { WalletConnect } from "@/components/blockchain/wallet-connect"
import { MainNav } from "@/components/layout/main-nav"
import { MobileNav } from "@/components/layout/mobile-nav"
import { ModeToggle } from "@/components/shared/mode-toggle"

export function SiteHeader() {
  const scrolled = useScroll(0)
  const { isConnected } = useAccount()

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b backdrop-blur transition-all",
        scrolled && "bg-background/50 "
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center">
          <MainNav />
          <MobileNav />
        </div>
        <div className="flex items-center gap-4">
          {isConnected ? (
            <Button
              variant="ghost"
              size="sm"
              className="mr-2 text-gray-400 hover:text-white"
              asChild
            >
              <Link href="/dashboard">My Account</Link>
            </Button>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              className="mr-2 text-gray-400 hover:text-white"
              asChild
            >
              <Link href="/subscribe">Subscribe</Link>
            </Button>
          )}
          <div className="mr-4">
            <ModeToggle />
          </div>
          <WalletConnect />
        </div>
      </div>
    </header>
  )
}
