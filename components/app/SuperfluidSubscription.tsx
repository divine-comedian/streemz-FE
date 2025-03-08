"use client"

import { useState } from "react"
import { parseEther } from "viem"
import { useAccount, useWalletClient } from "wagmi"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

// This is a placeholder for the actual Superfluid SDK integration
// In a real implementation, you would import the Superfluid SDK and use it to create streams
const STREEMZ_SUPER_APP_ADDRESS = "0x1234567890abcdef1234567890abcdef12345678" // Replace with actual contract address

interface SuperfluidSubscriptionProps {
  onSuccess?: () => void
  onError?: (error: Error) => void
}

export function SuperfluidSubscription({
  onSuccess,
  onError,
}: SuperfluidSubscriptionProps) {
  const { address, isConnected } = useAccount()
  const { data: walletClient } = useWalletClient()
  const [isLoading, setIsLoading] = useState(false)
  const [txHash, setTxHash] = useState<string | null>(null)

  const monthlySubscriptionFee = "0.01" // ETH

  // This is a placeholder function for creating a Superfluid stream
  // In a real implementation, you would use the Superfluid SDK to create the stream
  const createSubscriptionStream = async () => {
    if (!address || !walletClient || !isConnected) {
      onError?.(new Error("Wallet not connected"))
      return
    }

    setIsLoading(true)
    setTxHash(null)

    try {
      // This is a placeholder for the actual Superfluid SDK integration
      // In a real implementation, you would use the Superfluid SDK to create the stream
      console.log(
        `Creating subscription stream of ${monthlySubscriptionFee} ETH per month to ${STREEMZ_SUPER_APP_ADDRESS}`
      )

      // Mock transaction hash for demo purposes
      const mockTxHash = `0x${Array.from({ length: 64 }, () =>
        Math.floor(Math.random() * 16).toString(16)
      ).join("")}`
      setTxHash(mockTxHash)

      onSuccess?.()
    } catch (error) {
      console.error("Error creating subscription stream:", error)
      onError?.(error as Error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="bg-gray-900 text-white">
      <CardHeader>
        <CardTitle>Streemz Subscription</CardTitle>
        <CardDescription className="text-gray-400">
          Create a Superfluid stream to subscribe to Streemz
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 space-y-2">
          <div className="flex items-center justify-between">
            <span>Monthly Subscription Fee:</span>
            <span className="font-bold">{monthlySubscriptionFee} ETH</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Platform Fee (10%):</span>
            <span>{parseFloat(monthlySubscriptionFee) * 0.1} ETH</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Artist Distribution (90%):</span>
            <span>{parseFloat(monthlySubscriptionFee) * 0.9} ETH</span>
          </div>
        </div>

        <div className="rounded-md bg-gray-800 p-4 text-sm">
          <p className="mb-2">By subscribing, you agree to:</p>
          <ul className="list-inside list-disc space-y-1">
            <li>
              Create a continuous payment stream of {monthlySubscriptionFee} ETH
              per month
            </li>
            <li>
              Allow Streemz to distribute 90% of your subscription to artists
              based on your listening history
            </li>
            <li>
              You can cancel your subscription at any time by stopping the
              stream
            </li>
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col">
        <Button
          onClick={createSubscriptionStream}
          disabled={!isConnected || isLoading}
          className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
        >
          {isLoading ? "Creating Stream..." : "Start Subscription Stream"}
        </Button>

        {txHash && (
          <div className="mt-4 text-center text-sm text-green-500">
            Stream created successfully! Transaction: {txHash.slice(0, 10)}...
            {txHash.slice(-8)}
          </div>
        )}
      </CardFooter>
    </Card>
  )
}
