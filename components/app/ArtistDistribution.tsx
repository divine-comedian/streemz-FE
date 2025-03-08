import { useState } from "react"
import { useAccount } from "wagmi"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface Artist {
  id: string
  name: string
  percentage: number
  streams: number
  currentAllocation: number
}

interface ArtistDistributionProps {
  onUpdateDistribution?: (artists: Artist[]) => void
}

export function ArtistDistribution({
  onUpdateDistribution,
}: ArtistDistributionProps) {
  const { isConnected } = useAccount()

  // Mock data for listening history and current distribution
  const [artists, setArtists] = useState<Artist[]>([
    {
      id: "1",
      name: "Ethereal Echoes",
      percentage: 35,
      streams: 142,
      currentAllocation: 35,
    },
    {
      id: "2",
      name: "Blockchain Beats",
      percentage: 25,
      streams: 98,
      currentAllocation: 25,
    },
    {
      id: "3",
      name: "Crypto Collective",
      percentage: 20,
      streams: 82,
      currentAllocation: 20,
    },
    {
      id: "4",
      name: "Decentralized Dreamers",
      percentage: 15,
      streams: 61,
      currentAllocation: 15,
    },
    {
      id: "5",
      name: "Other Artists",
      percentage: 5,
      streams: 22,
      currentAllocation: 5,
    },
  ])

  const [isUpdating, setIsUpdating] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  // Calculate platform fee (10% of total)
  const platformFee = 10

  // Calculate remaining percentage for artists (90% of total)
  const artistsTotal = 90

  // Function to update distribution based on listening history
  const updateDistributionBasedOnListening = () => {
    setIsUpdating(true)

    // In a real implementation, this would call a smart contract function
    // to update the distribution based on the user's listening history

    // For the MVP, we'll just update the local state to match the listening percentages
    const updatedArtists = artists.map((artist: Artist) => ({
      ...artist,
      currentAllocation: artist.percentage,
    }))

    setArtists(updatedArtists)
    onUpdateDistribution?.(updatedArtists)

    setTimeout(() => {
      setIsUpdating(false)
      setIsEditing(false)
    }, 1500)
  }

  return (
    <Card className="bg-gray-900 text-white">
      <CardHeader>
        <CardTitle>Artist Distribution</CardTitle>
        <CardDescription className="text-gray-400">
          How your subscription fee is distributed to artists
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium">Platform Fee</span>
            <span>{platformFee}%</span>
          </div>
          <Progress
            value={platformFee}
            className="h-2 bg-gray-800"
            indicatorClassName="bg-blue-500"
          />
        </div>

        <div className="mb-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium">Artists Distribution</span>
            <span>{artistsTotal}%</span>
          </div>
        </div>

        <div className="space-y-4">
          {artists.map((artist) => (
            <div key={artist.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">{artist.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400">
                    {artist.streams} streams ({artist.percentage}%)
                  </span>
                  <span className="font-medium">
                    {isEditing ? artist.percentage : artist.currentAllocation}%
                  </span>
                </div>
              </div>
              <Progress
                value={isEditing ? artist.percentage : artist.currentAllocation}
                className="h-2 bg-gray-800"
                indicatorClassName="bg-purple-500"
              />
            </div>
          ))}
        </div>

        {!isEditing && (
          <div className="mt-6 rounded-md bg-gray-800 p-4 text-sm">
            <p>
              Your current distribution is based on your listening history from
              the last 30 days. You can update it at any time to match your
              current listening patterns.
            </p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        {isEditing ? (
          <div className="flex w-full gap-2">
            <Button
              variant="outline"
              onClick={() => setIsEditing(false)}
              className="flex-1 border-gray-700 text-white hover:bg-gray-800"
              disabled={isUpdating}
            >
              Cancel
            </Button>
            <Button
              onClick={updateDistributionBasedOnListening}
              className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
              disabled={!isConnected || isUpdating}
            >
              {isUpdating ? "Updating..." : "Confirm Update"}
            </Button>
          </div>
        ) : (
          <Button
            onClick={() => setIsEditing(true)}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
            disabled={!isConnected}
          >
            Update Distribution
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
