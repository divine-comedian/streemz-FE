"use client"

import React, { useState } from "react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"
import { LuMenu } from "react-icons/lu"
import { useAccount } from "wagmi"

import { menuDashboard } from "@/config/menu-dashboard"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { WalletConnect } from "@/components/blockchain/wallet-connect"
import { LightDarkImage } from "@/components/shared/light-dark-image"

import { ModeToggle } from "../shared/mode-toggle"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const { isConnected } = useAccount()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <div className="flex w-full items-center justify-between md:hidden">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <LightDarkImage
            LightImage="/logo-dark.png"
            DarkImage="/logo-light.png"
            alt="Streemz"
            className="rounded-full"
            height={32}
            width={32}
          />
          <span className="inline-block bg-gradient-to-br from-black to-stone-500 bg-clip-text text-xl font-bold text-transparent dark:from-stone-100 dark:to-yellow-200 sm:text-2xl">
            {siteConfig.name}
          </span>
        </Link>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="ml-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          >
            <LuMenu className="size-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
      </div>
      <SheetContent side="right" className="pr-0">
        <div className="flex items-center gap-x-4">
          <MobileLink
            href="/"
            className="flex items-center"
            onOpenChange={setOpen}
          >
            <LightDarkImage
              LightImage="/logo-dark.png"
              DarkImage="/logo-light.png"
              alt="Streemz"
              height={32}
              width={32}
            />
          </MobileLink>
          <ModeToggle />
        </div>
        <ScrollArea className="my-4 mr-4 h-[calc(100vh-8rem)] pb-10">
          <div className="flex flex-col space-y-4">
            <Accordion type="single" collapsible className="mx-auto w-full">
              <AccordionItem value="dashboard">
                <AccordionTrigger className="text-base font-medium">
                  Dashboard
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-2">
                    {menuDashboard?.map((item, index) =>
                      item.href ? (
                        <Link
                          key={index}
                          href={item.href}
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <div
                          key={index}
                          className="text-muted-foreground/70 transition-colors"
                        >
                          {item.label}
                        </div>
                      )
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Link
              href="/subscribe"
              className="font-medium"
              onClick={() => setOpen(false)}
            >
              Subscribe
            </Link>
            <Link
              href="/register-artist"
              className="font-medium"
              onClick={() => setOpen(false)}
            >
              Register as Artist
            </Link>
            {isConnected ? (
              <Link
                href="/dashboard"
                className="font-medium"
                onClick={() => setOpen(false)}
              >
                My Account
              </Link>
            ) : null}
            <Separator />
            <div className="py-2">
              <WalletConnect />
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  )
}
