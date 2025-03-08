import { useChainId } from "wagmi"

import { cn } from "@/lib/utils"
import { getBlockExplorerUrl } from "@/lib/utils/getBlockExplorerUrl"

export interface BlockExplorerLinkProps {
  address: string | undefined
  className?: string
  showExplorerName?: boolean
  type?: "address" | "tx"
}

export function BlockExplorerLink({
  address,
  className,
  showExplorerName = false,
  type = "address",
}: BlockExplorerLinkProps) {
  const chainId = useChainId()

  if (!address) return null

  const blockExplorerUrl = getBlockExplorerUrl(address, chainId, type)

  return (
    <a
      href={blockExplorerUrl}
      target="_blank"
      rel="noreferrer"
      className={cn("underline", className)}
    >
      {showExplorerName ? "Block Explorer" : "View on Explorer"}
    </a>
  )
}
