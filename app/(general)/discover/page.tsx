import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function DiscoverPage() {
  // Mock data for genres
  const genres = [
    'Electronic',
    'Hip Hop',
    'Rock',
    'Indie',
    'Pop',
    'Ambient',
    'Jazz',
    'Classical',
  ]

  // Mock data for trending songs
  const trendingSongs = [
    { id: 1, title: 'Web3 Wonderland', artist: 'Ethereal Echoes', image: '/songs/song1.jpg', duration: '3:45' },
    { id: 2, title: 'Blockchain Bounce', artist: 'Blockchain Beats', image: '/songs/song2.jpg', duration: '2:55' },
    { id: 3, title: 'NFT Nights', artist: 'Crypto Collective', image: '/songs/song3.jpg', duration: '4:12' },
    { id: 4, title: 'Smart Contract Symphony', artist: 'Decentralized Dreamers', image: '/songs/song4.jpg', duration: '3:30' },
    { id: 5, title: 'Ethereum Echoes', artist: 'Ethereal Echoes', image: '/songs/song5.jpg', duration: '3:22' },
    { id: 6, title: 'Solidity Serenade', artist: 'Blockchain Beats', image: '/songs/song6.jpg', duration: '4:05' },
    { id: 7, title: 'Decentralized Dreams', artist: 'Crypto Collective', image: '/songs/song7.jpg', duration: '3:18' },
    { id: 8, title: 'Metaverse Melody', artist: 'Decentralized Dreamers', image: '/songs/song8.jpg', duration: '2:47' },
  ]

  // Mock data for new releases
  const newReleases = [
    { id: 9, title: 'Crypto Carnival', artist: 'Ethereal Echoes', image: '/songs/song9.jpg', duration: '3:33' },
    { id: 10, title: 'Blockchain Ballad', artist: 'Blockchain Beats', image: '/songs/song10.jpg', duration: '4:21' },
    { id: 11, title: 'Token Tango', artist: 'Crypto Collective', image: '/songs/song11.jpg', duration: '3:09' },
    { id: 12, title: 'DeFi Daydream', artist: 'Decentralized Dreamers', image: '/songs/song12.jpg', duration: '3:55' },
  ]

  // Mock data for featured playlists
  const featuredPlaylists = [
    { id: 1, title: 'Web3 Hits', tracks: 12, image: '/playlists/playlist1.jpg' },
    { id: 2, title: 'Crypto Chill', tracks: 8, image: '/playlists/playlist2.jpg' },
    { id: 3, title: 'Blockchain Beats', tracks: 15, image: '/playlists/playlist3.jpg' },
    { id: 4, title: 'DeFi Anthems', tracks: 10, image: '/playlists/playlist4.jpg' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-6 text-3xl font-bold">Discover</h1>
        <div className="relative mb-6">
          <Input
            type="search"
            placeholder="Search for songs, artists, or albums"
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
        
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-bold">Browse by Genre</h2>
          <div className="flex flex-wrap gap-2">
            {genres.map((genre) => (
              <Button
                key={genre}
                variant="outline"
                className="border-gray-700 bg-gray-800 text-white hover:bg-gray-700"
              >
                {genre}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <Tabs defaultValue="trending" className="w-full">
        <TabsList className="mb-6 bg-gray-800">
          <TabsTrigger value="trending">Trending</TabsTrigger>
          <TabsTrigger value="new">New Releases</TabsTrigger>
          <TabsTrigger value="playlists">Playlists</TabsTrigger>
        </TabsList>
        
        <TabsContent value="trending" className="space-y-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trendingSongs.map((song) => (
              <Card key={song.id} className="overflow-hidden bg-gray-900 text-white">
                <div className="relative aspect-square w-full">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                  <div className="h-full w-full bg-gray-800" />
                  <Button
                    size="icon"
                    className="absolute bottom-2 right-2 h-10 w-10 rounded-full bg-purple-500 hover:bg-purple-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </Button>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium">{song.title}</h3>
                  <p className="text-sm text-gray-400">{song.artist}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="new" className="space-y-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {newReleases.map((song) => (
              <Card key={song.id} className="overflow-hidden bg-gray-900 text-white">
                <div className="relative aspect-square w-full">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                  <div className="h-full w-full bg-gray-800" />
                  <Button
                    size="icon"
                    className="absolute bottom-2 right-2 h-10 w-10 rounded-full bg-purple-500 hover:bg-purple-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </Button>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium">{song.title}</h3>
                  <p className="text-sm text-gray-400">{song.artist}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="playlists" className="space-y-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredPlaylists.map((playlist) => (
              <Card key={playlist.id} className="overflow-hidden bg-gray-900 text-white">
                <div className="relative aspect-square w-full">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                  <div className="h-full w-full bg-gray-800" />
                  <Button
                    size="icon"
                    className="absolute bottom-2 right-2 h-10 w-10 rounded-full bg-purple-500 hover:bg-purple-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </Button>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium">{playlist.title}</h3>
                  <p className="text-sm text-gray-400">{playlist.tracks} tracks</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 