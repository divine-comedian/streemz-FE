/**
 * Get the block explorer URL for an address or transaction
 * @param addressOrTx The address or transaction hash
 * @param chainId The chain ID (optional)
 * @param type The type of URL (address or tx)
 * @returns The block explorer URL
 */
export function getBlockExplorerUrl(
  addressOrTx: string,
  chainId?: number,
  type: 'address' | 'tx' = 'address'
): string {
  // Default to Ethereum mainnet
  let baseUrl = 'https://etherscan.io'
  
  // Set the base URL based on the chain ID
  if (chainId) {
    switch (chainId) {
      case 1: // Ethereum Mainnet
        baseUrl = 'https://etherscan.io'
        break
      case 5: // Goerli
        baseUrl = 'https://goerli.etherscan.io'
        break
      case 11155111: // Sepolia
        baseUrl = 'https://sepolia.etherscan.io'
        break
      case 137: // Polygon
        baseUrl = 'https://polygonscan.com'
        break
      case 80001: // Mumbai
        baseUrl = 'https://mumbai.polygonscan.com'
        break
      case 42161: // Arbitrum
        baseUrl = 'https://arbiscan.io'
        break
      case 10: // Optimism
        baseUrl = 'https://optimistic.etherscan.io'
        break
      case 31337: // Localhost
        return '#' // No explorer for localhost
      default:
        baseUrl = 'https://etherscan.io'
    }
  }
  
  return `${baseUrl}/${type}/${addressOrTx}`
} 