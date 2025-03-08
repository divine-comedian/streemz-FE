# Streemz - Decentralized Music Streaming Platform

Streemz is a decentralized music streaming platform that uses Superfluid to create fair and transparent compensation for artists through real-time streaming payments.

## 🎵 Overview

Streemz works like a traditional music streaming platform (e.g., Spotify) but with a key difference: users subscribe by creating a Superfluid stream of ETH, and their subscription fees are automatically distributed to artists based on their listening history.

- Users pay 0.01 ETH per month via Superfluid streaming
- 90% of subscription fees go directly to artists
- 10% goes to platform maintenance
- Distribution is based on listening history over 30-day periods

## 🚀 Features

- **Music Streaming**: Browse and listen to music from various artists
- **Artist Profiles**: View artist details and their music
- **Subscription Management**: Create and manage your Superfluid subscription
- **Distribution Dashboard**: See how your subscription is distributed to artists
- **Artist Registration**: Artists can register to receive streaming payments

## 🔧 Technology Stack

- **Frontend**: Next.js, React, TailwindCSS
- **Web3 Integration**: wagmi, viem, RainbowKit
- **Smart Contracts**: Superfluid, Allo Protocol
- **Key Contracts**:
  - StreemzSuperAppFlow: Handles subscription streams and council membership
  - StreemzCouncil: Manages distribution to artists
  - Registry: Artist profile registration (Allo Protocol)
  - Anchor: Receives streamed funds for artists

## 🏗️ Architecture

1. **User Subscription**:
   - User creates a Superfluid stream to StreemzSuperApp
   - StreemzSuperApp validates the stream amount
   - User is added as a council member to StreemzCouncil

2. **Listening & Distribution**:
   - Platform tracks user's listening history
   - Every 30 days, distribution is updated based on listening history
   - StreemzCouncil allocates budget to artists based on listening data

3. **Artist Registration**:
   - Artists create profiles using Registry.sol
   - Admin adds artist profile as grantee on StreemzCouncil
   - Artists receive streaming payments through their Anchor contract

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18+)
- pnpm
- MetaMask or another Ethereum wallet

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/streemz-FE.git
   cd streemz-FE
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Create a `.env` file based on `.env.example` and fill in your environment variables.

4. Run the development server:
   ```bash
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🧪 Testing

```bash
pnpm test
```

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [Superfluid](https://www.superfluid.finance/) for their streaming payment protocol
- [Allo Protocol](https://allo.gitcoin.co/) for their grant distribution framework
- [TurboETH](https://turboeth.xyz/) for the web3 template starter
