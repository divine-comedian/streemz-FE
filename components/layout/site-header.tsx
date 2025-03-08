"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WalletConnect } from "@/components/blockchain/wallet-connect"
import { useAccount } from "wagmi"

import useScroll from "@/lib/hooks/use-scroll"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
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
      <div className="container flex h-20 items-center">
        <MainNav />
        <MobileNav />
        <div className="hidden flex-1 items-center justify-between space-x-2 md:flex md:justify-end">
          <Link
            href="/dashboard"
            className={buttonVariants({ variant: "ghost" })}
          >
            Dashboard
          </Link>
          <ModeToggle />
        </div>
        <div className="flex items-center gap-4">
          {isConnected ? (
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white"
              asChild
            >
              <Link href="/dashboard">My Account</Link>
            </Button>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white"
              asChild
            >
              <Link href="/subscribe">Subscribe</Link>
            </Button>
          )}
          <WalletConnect />
        </div>
      </div>
    </header>
  )
}
