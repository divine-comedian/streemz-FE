import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { WalletConnect } from '@/components/blockchain/wallet-connect'

export default function ArtistRegisterPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-6 text-3xl font-bold">Register as an Artist</h1>
        <p className="mb-8 text-gray-500 dark:text-gray-400">
          Join Streemz as an artist and receive fair compensation through Superfluid streaming payments based on listener activity.
        </p>

        <Card className="bg-gray-900 text-white">
          <CardHeader>
            <CardTitle>Artist Profile</CardTitle>
            <CardDescription className="text-gray-400">
              Create your artist profile to start receiving streaming payments
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="mb-4 w-full">
              <WalletConnect />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="artistName">Artist/Band Name</Label>
              <Input id="artistName" placeholder="Enter your artist or band name" className="bg-gray-800 text-white" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea 
                id="description" 
                placeholder="Describe your music style and background" 
                className="bg-gray-800 text-white"
                rows={4}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="genre">Primary Genre</Label>
              <Input id="genre" placeholder="e.g. Electronic, Hip Hop, Rock" className="bg-gray-800 text-white" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="bandMembers">Band Member Wallet Addresses (Optional)</Label>
              <Textarea 
                id="bandMembers" 
                placeholder="Enter wallet addresses of band members, one per line" 
                className="bg-gray-800 text-white"
                rows={3}
              />
              <p className="text-xs text-gray-400">
                If you're a band or group, enter the wallet addresses of other members to split payments.
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
              Register Artist Profile
            </Button>
          </CardFooter>
        </Card>
        
        <div className="mt-8 rounded-lg bg-gray-800 p-4 text-sm text-gray-400">
          <h3 className="mb-2 font-medium text-white">How Artist Registration Works</h3>
          <ol className="list-decimal pl-5">
            <li className="mb-1">Connect your wallet to verify ownership</li>
            <li className="mb-1">Fill out your artist profile information</li>
            <li className="mb-1">Submit your profile to create an Anchor contract that will receive streaming payments</li>
            <li className="mb-1">Once approved, your music will be available on the platform</li>
            <li className="mb-1">Receive streaming payments based on listener activity</li>
          </ol>
        </div>
      </div>
    </div>
  )
} 