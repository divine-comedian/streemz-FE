import "@/styles/globals.css"

import { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { MusicPlayer } from "@/components/app/MusicPlayer"
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { Providers } from "@/components/providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Streemz",
    "Music",
    "Streaming",
    "Web3",
    "Superfluid",
    "Ethereum",
    "Artists",
    "Decentralized",
  ],
  authors: [
    {
      name: "Streemz Team",
    },
  ],
  creator: "Streemz Team",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@streemz",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <Providers>
          <div className="relative flex min-h-screen flex-col bg-gray-950 text-white">
            <SiteHeader />
            <main className="flex-1 pb-20">{children}</main>
            <MusicPlayer />
            <SiteFooter />
          </div>
        </Providers>
      </body>
    </html>
  )
}
