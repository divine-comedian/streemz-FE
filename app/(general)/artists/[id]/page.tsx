import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { BlockExplorerLink } from '@/components/blockchain/block-explorer-link'

interface ArtistPageProps {
  params: {
    id: string
  }
}

export default function ArtistPage({ params }: ArtistPageProps) {
  const artistId = params.id

  // Mock artist data
  const artist = {
    id: artistId,
    name: 'Ethereal Echoes',
    image: '/artists/artist1.jpg',
    genre: 'Electronic',
    description:
      'Ethereal Echoes is a pioneering electronic music project that blends ambient soundscapes with pulsating beats. Founded in 2020, the project aims to create immersive audio experiences that transport listeners to otherworldly dimensions.',
    walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
    totalStreams: 24892,
    monthlyListeners: 3427,
  }

  // Mock songs data
  const songs = [
    { id: 1, title: 'Web3 Wonderland', duration: '3:45', plays: 8721, image: '/songs/song1.jpg' },
    { id: 2, title: 'Ethereum Echoes', duration: '3:22', plays: 6543, image: '/songs/song5.jpg' },
    { id: 3, title: 'Digital Dreams', duration: '4:12', plays: 5432, image: '/songs/song3.jpg' },
    { id: 4, title: 'Blockchain Lullaby', duration: '2:55', plays: 4321, image: '/songs/song2.jpg' },
    { id: 5, title: 'Crypto Sunset', duration: '3:30', plays: 3210, image: '/songs/song4.jpg' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex flex-col gap-6 md:flex-row">
        <div className="relative h-64 w-64 flex-shrink-0 overflow-hidden rounded-lg bg-gray-800">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="mb-2 text-sm font-medium uppercase text-purple-500">Artist</div>
          <h1 className="mb-2 text-4xl font-bold">{artist.name}</h1>
          <p className="mb-4 text-gray-500 dark:text-gray-400">{artist.genre}</p>
          <div className="mb-4 flex items-center gap-2">
            <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
              Play All
            </Button>
            <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
              Follow Artist
            </Button>
          </div>
          <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
            <div>{artist.totalStreams.toLocaleString()} streams</div>
            <div>{artist.monthlyListeners.toLocaleString()} monthly listeners</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="mb-4 text-2xl font-bold">Popular Tracks</h2>
          <div className="space-y-2">
            {songs.map((song) => (
              <Card key={song.id} className="flex overflow-hidden bg-gray-900 text-white">
                <div className="relative h-16 w-16 flex-shrink-0">
                  <div className="h-16 w-16 bg-gray-800" />
                </div>
                <div className="flex flex-1 items-center justify-between p-4">
                  <div>
                    <h3 className="font-medium">{song.title}</h3>
                    <p className="text-sm text-gray-400">{song.plays.toLocaleString()} plays</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400">{song.duration}</span>
                    <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-bold">About</h2>
          <Card className="bg-gray-900 text-white">
            <CardContent className="p-6">
              <p className="mb-4">{artist.description}</p>
              <Separator className="my-4 bg-gray-800" />
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Artist Details</h3>
                <div>
                  <div className="text-sm font-medium text-gray-400">Wallet Address</div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="truncate">{artist.walletAddress}</span>
                    <BlockExplorerLink address={artist.walletAddress} />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-400">Joined</div>
                  <div className="text-sm">2020</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 