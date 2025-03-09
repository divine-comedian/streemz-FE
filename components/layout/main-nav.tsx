"use client"

import React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { LightDarkImage } from "@/components/shared/light-dark-image"

import { LinkComponent } from "../shared/link-component"

export function MainNav() {
  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <LightDarkImage
          LightImage="/logo-dark.png"
          DarkImage="/logo-light.png"
          alt="Streemz"
          className="rounded-full"
          height={32}
          width={32}
        />
        <span className="hidden bg-gradient-to-br from-black to-stone-500 bg-clip-text text-2xl font-bold text-transparent dark:from-stone-100 dark:to-yellow-200 sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-base font-medium">
        <MainNavMenu />
      </nav>
    </div>
  )
}

function MainNavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <LinkComponent href="/subscribe">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <span>Subscribe</span>
            </NavigationMenuLink>
          </LinkComponent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <LinkComponent href="/register-artist">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <span>Register as Artist</span>
            </NavigationMenuLink>
          </LinkComponent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
