import { HTMLAttributes } from "react"
import Link from "next/link"
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { LinkComponent } from "../shared/link-component"
import { buttonVariants } from "../ui/button"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Link href="/" aria-label="Streemz homepage">
            <p className="text-lg font-bold">{siteConfig.name}</p>
          </Link>
          <p className="text-center text-sm leading-loose md:text-left">
            Built by{" "}
            <a
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Streemz
            </a>
            . The source code is available on{" "}
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
        <div className="flex gap-4">
          <a
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            aria-label="GitHub"
          >
            <FaGithub className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.twitter}
            aria-label="Twitter"
          >
            <FaTwitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.discord}
            aria-label="Discord"
          >
            <FaDiscord className="h-5 w-5" />
            <span className="sr-only">Discord</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
