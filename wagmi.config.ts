import { defineConfig } from "@wagmi/cli"
import { react } from "@wagmi/cli/plugins"
import { erc20Abi } from "./lib/abis/erc20"

export default defineConfig({
  out: "lib/generated/blockchain.ts",
  contracts: [
    {
      name: "erc20",
      abi: erc20Abi,
    },
  ],
  plugins: [react()],
})
