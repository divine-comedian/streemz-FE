// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Site
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
    docs: string
    discord: string
  }
}

export const SITE_CANONICAL = "https://turboeth.xyz"

export const siteConfig: SiteConfig = {
  name: "Streemz",
  description: "Decentralized music streaming platform with fair artist compensation",
  url: "https://streemz.xyz",
  ogImage: "/og.jpg",
  links: {
    twitter: "https://twitter.com/streemz",
    github: "https://github.com/streemz",
    docs: "https://docs.streemz.xyz",
    discord: "https://discord.gg/streemz",
  },
}

export const DEPLOY_URL =
  "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fturbo-eth%2Ftemplate-web3-app&project-name=TurboETH&repository-name=turbo-eth&demo-title=TurboETH&env=NEXTAUTH_SECRET,DATABASE_URL&envDescription=How%20to%20get%20these%20env%20variables%3A&envLink=https%3A%2F%2Fgithub.com%2Fturbo-eth%2Ftemplate-web3-app%2Fblob%2Fintegrations%2F.env.example"
