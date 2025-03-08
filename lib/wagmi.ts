import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { http } from 'viem'
import { mainnet, sepolia } from 'viem/chains'

import { env } from '@/env.mjs'

// Define custom chains if needed
const localhost = {
  id: 31337,
  name: 'Localhost',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: { http: ['http://127.0.0.1:8545'] },
  },
} as const

export const config = getDefaultConfig({
  appName: 'Streemz Music Platform',
  projectId: env.NEXT_PUBLIC_WC_PROJECT_ID,
  chains: [mainnet, sepolia, localhost],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [localhost.id]: http(),
  },
  ssr: true,
}) 