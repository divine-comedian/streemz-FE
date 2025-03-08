import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  // Mock data for featured artists and songs
  const featuredArtists = [
    { id: 1, name: 'Ethereal Echoes', image: '/artists/artist1.jpg', genre: 'Electronic' },
    { id: 2, name: 'Blockchain Beats', image: '/artists/artist2.jpg', genre: 'Hip Hop' },
    { id: 3, name: 'Crypto Collective', image: '/artists/artist3.jpg', genre: 'Indie Rock' },
    { id: 4, name: 'Decentralized Dreamers', image: '/artists/artist4.jpg', genre: 'Ambient' },
  ]

  const trendingSongs = [
    { id: 1, title: 'Web3 Wonderland', artist: 'Ethereal Echoes', image: '/songs/song1.jpg', duration: '3:45' },
    { id: 2, title: 'Blockchain Bounce', artist: 'Blockchain Beats', image: '/songs/song2.jpg', duration: '2:55' },
    { id: 3, title: 'NFT Nights', artist: 'Crypto Collective', image: '/songs/song3.jpg', duration: '4:12' },
    { id: 4, title: 'Smart Contract Symphony', artist: 'Decentralized Dreamers', image: '/songs/song4.jpg', duration: '3:30' },
    { id: 5, title: 'Ethereum Echoes', artist: 'Ethereal Echoes', image: '/songs/song5.jpg', duration: '3:22' },
    { id: 6, title: 'Solidity Serenade', artist: 'Blockchain Beats', image: '/songs/song6.jpg', duration: '4:05' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <div className="rounded-lg bg-gradient-to-r from-purple-900 to-indigo-900 p-8 text-white">
          <div className="max-w-2xl">
            <h1 className="mb-4 text-4xl font-bold">Welcome to Streemz</h1>
            <p className="mb-6 text-lg">
              The first decentralized music platform that rewards artists fairly through Superfluid streaming payments.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
                <Link href="/subscribe">Subscribe Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="/artists/register">Register as Artist</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Featured Artists</h2>
          <Link href="/artists" className="text-sm text-purple-500 hover:underline">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredArtists.map((artist) => (
            <Card key={artist.id} className="overflow-hidden bg-gray-900 text-white">
              <div className="relative h-48 w-full">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                <div className="h-48 w-full bg-gray-800" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle>{artist.name}</CardTitle>
                <CardDescription className="text-gray-400">{artist.genre}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="ghost" className="w-full hover:bg-gray-800">
                  <Link href={`/artists/${artist.id}`}>View Profile</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Trending Songs</h2>
          <Link href="/discover" className="text-sm text-purple-500 hover:underline">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trendingSongs.map((song) => (
            <Card key={song.id} className="flex overflow-hidden bg-gray-900 text-white">
              <div className="relative h-16 w-16 flex-shrink-0">
                <div className="h-16 w-16 bg-gray-800" />
              </div>
              <div className="flex flex-1 items-center justify-between p-4">
                <div>
                  <h3 className="font-medium">{song.title}</h3>
                  <p className="text-sm text-gray-400">{song.artist}</p>
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
      </section>
    </div>
  )
}
