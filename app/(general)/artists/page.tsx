import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export default function ArtistsPage() {
  // Mock data for artists
  const artists = [
    { id: 1, name: 'Ethereal Echoes', image: '/artists/artist1.jpg', genre: 'Electronic', followers: 12453 },
    { id: 2, name: 'Blockchain Beats', image: '/artists/artist2.jpg', genre: 'Hip Hop', followers: 8721 },
    { id: 3, name: 'Crypto Collective', image: '/artists/artist3.jpg', genre: 'Indie Rock', followers: 6543 },
    { id: 4, name: 'Decentralized Dreamers', image: '/artists/artist4.jpg', genre: 'Ambient', followers: 5432 },
    { id: 5, name: 'Token Titans', image: '/artists/artist5.jpg', genre: 'Pop', followers: 9876 },
    { id: 6, name: 'Web3 Wonders', image: '/artists/artist6.jpg', genre: 'Electronic', followers: 7654 },
    { id: 7, name: 'NFT Noise', image: '/artists/artist7.jpg', genre: 'Rock', followers: 4321 },
    { id: 8, name: 'Solidity Sound', image: '/artists/artist8.jpg', genre: 'Jazz', followers: 3210 },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-6 text-3xl font-bold">Artists</h1>
        <div className="relative mb-6">
          <Input
            type="search"
            placeholder="Search for artists"
            className="bg-gray-800 pl-10 text-white"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {artists.map((artist) => (
          <Card key={artist.id} className="overflow-hidden bg-gray-900 text-white">
            <div className="relative h-48 w-full">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
              <div className="h-48 w-full bg-gray-800" />
            </div>
            <CardContent className="p-4">
              <h3 className="mb-1 font-medium">{artist.name}</h3>
              <p className="mb-2 text-sm text-gray-400">{artist.genre}</p>
              <p className="text-xs text-gray-500">{artist.followers.toLocaleString()} followers</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button asChild variant="ghost" className="w-full hover:bg-gray-800">
                <Link href={`/artists/${artist.id}`}>View Profile</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 rounded-lg bg-gradient-to-r from-purple-900 to-indigo-900 p-8 text-white">
        <div className="max-w-2xl">
          <h2 className="mb-4 text-2xl font-bold">Are you an artist?</h2>
          <p className="mb-6">
            Join Streemz and start receiving fair compensation for your music through Superfluid streaming payments.
          </p>
          <Button asChild className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
            <Link href="/artists/register">Register as Artist</Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 