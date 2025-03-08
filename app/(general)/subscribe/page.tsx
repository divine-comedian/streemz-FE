import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'
import { SuperfluidSubscription } from '@/components/app/SuperfluidSubscription'

export default function SubscribePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-6 text-3xl font-bold">Subscribe to Streemz</h1>
        <p className="mb-8 text-gray-500 dark:text-gray-400">
          Join Streemz and enjoy unlimited music streaming while supporting your favorite artists through Superfluid streaming payments.
        </p>

        <SuperfluidSubscription />

        <Alert className="mt-8 bg-gray-800 text-white">
          <AlertTitle>How Streemz Works</AlertTitle>
          <AlertDescription>
            <p className="mb-2">
              Streemz uses Superfluid to create a continuous payment stream from your wallet to our platform.
            </p>
            <ol className="list-decimal pl-5">
              <li className="mb-1">Connect your wallet and approve the subscription stream of 0.01 ETH per month</li>
              <li className="mb-1">Listen to your favorite music on Streemz</li>
              <li className="mb-1">Every 30 days, your listening history determines how your subscription is distributed to artists</li>
              <li className="mb-1">90% goes to artists, 10% to platform maintenance</li>
            </ol>
            <Separator className="my-4 bg-gray-700" />
            <p className="text-sm text-gray-400">
              You can cancel your subscription at any time by setting your stream rate to zero.
            </p>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  )
} 