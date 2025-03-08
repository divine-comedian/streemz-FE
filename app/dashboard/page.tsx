"use client"

import { motion } from "framer-motion"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { WalletConnect } from '@/components/blockchain/wallet-connect'
import { ArtistDistribution } from '@/components/app/ArtistDistribution'

import { FADE_DOWN_ANIMATION_VARIANTS } from "@/config/design"
import { WalletAddress } from "@/components/blockchain/wallet-address"
import { WalletBalance } from "@/components/blockchain/wallet-balance"
import { WalletEnsName } from "@/components/blockchain/wallet-ens-name"
import { IsWalletConnected } from "@/components/shared/is-wallet-connected"
import { IsWalletDisconnected } from "@/components/shared/is-wallet-disconnected"

export default function DashboardPage() {
  // Mock data for listening history
  const listeningHistory = [
    { artist: 'Ethereal Echoes', percentage: 35, streams: 142 },
    { artist: 'Blockchain Beats', percentage: 25, streams: 98 },
    { artist: 'Crypto Collective', percentage: 20, streams: 82 },
    { artist: 'Decentralized Dreamers', percentage: 15, streams: 61 },
    { artist: 'Other Artists', percentage: 5, streams: 22 },
  ]

  // Mock data for active streams
  const activeStreams = [
    { artist: 'Ethereal Echoes', percentage: 35, amount: '0.00315 ETH', status: 'Active' },
    { artist: 'Blockchain Beats', percentage: 25, amount: '0.00225 ETH', status: 'Active' },
    { artist: 'Crypto Collective', percentage: 20, amount: '0.00180 ETH', status: 'Active' },
    { artist: 'Decentralized Dreamers', percentage: 15, amount: '0.00135 ETH', status: 'Active' },
    { artist: 'Platform Fee', percentage: 10, amount: '0.00090 ETH', status: 'Active' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold">Your Dashboard</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Manage your subscription and view your listening activity
          </p>
        </div>
        <WalletConnect />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <ArtistDistribution />
        </div>

        <Card className="bg-gray-900 text-white">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-800">
              Manage Subscription
            </Button>
            <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-800">
              View Transaction History
            </Button>
            <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-800">
              Edit Profile
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <Tabs defaultValue="listening" className="w-full">
          <TabsList className="bg-gray-800">
            <TabsTrigger value="listening">Listening History</TabsTrigger>
            <TabsTrigger value="streams">Active Streams</TabsTrigger>
          </TabsList>
          <TabsContent value="listening" className="mt-4">
            <Card className="bg-gray-900 text-white">
              <CardHeader>
                <CardTitle>Your Listening History (Last 30 Days)</CardTitle>
                <CardDescription className="text-gray-400">
                  This data determines how your subscription fee is distributed
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-800">
                        <th className="pb-2 text-left text-sm font-medium">Artist</th>
                        <th className="pb-2 text-left text-sm font-medium">Streams</th>
                        <th className="pb-2 text-left text-sm font-medium">Percentage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listeningHistory.map((item, index) => (
                        <tr key={index} className="border-b border-gray-800">
                          <td className="py-3 text-sm">{item.artist}</td>
                          <td className="py-3 text-sm">{item.streams}</td>
                          <td className="py-3 text-sm">{item.percentage}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="streams" className="mt-4">
            <Card className="bg-gray-900 text-white">
              <CardHeader>
                <CardTitle>Your Active Streams</CardTitle>
                <CardDescription className="text-gray-400">
                  Current payment streams to artists and platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-400">
                  Your active streams match your current distribution settings.
                  Update your distribution to change how your subscription fee is streamed to artists.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
