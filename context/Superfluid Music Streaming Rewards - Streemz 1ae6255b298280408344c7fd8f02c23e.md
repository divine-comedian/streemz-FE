# Superfluid Music Streaming Rewards - Streemz

A music platform like spotify that users subscribe to for a fixed monthly stream amount (0.01 ETH). Users listen to music and the platform tracks their listening history over the course of 30 days. Their subscription fee is split into 2 pots - one for the platform’s revenue and another into a pot that redistributes to artists’ wallets. a snapshot of the user’s listening history is taken on every 30 day period and this then is submitted to the artists rewards contract. the reward contracts sets up multiple streams going to the artists wallet based on the weights dictated by users listening history. 

# Core Features

### Music Streaming Platform

- Feels like Spotify UX
- Sign up to the platform by creating a superfluid stream with your monthly subscription fee
- subscription fees are taken in ETH
- Discover and listen to artists songs
- MVP style with some placeholder artist profile images and song track images
- user logs in with eth wallet

### Subscription Fees

- user signs up and gains access to service by starting superlfuid stream with required subscription fee amount
- subscription fees are split, going out to artists and to the platform treasury
- subscription fee is 0.01 ETH streamed monthly
- platform takes 10% of the subscription fee as a superfluid stream
- the remaining 90% is sent to artists that the given user has been listening to
- the artists portion of subscription fee is split based on the previous 30 days of listening history of the given user
- the more the user listens to music from a given artists, the higher proportion of the users subscription fees are streamed forward to the artists profile address

### Viewing Streams

- user can view their listening history, divided into what % of their total listening history was spent on each artist they listened to
- user can see in same view what % of their subscription fee is being streamed to given artist
- user clicks button to confirm distribution which triggers smart contract function on StreemzSuperApp

### Artists View

Artists can make a profile on the platform and enter basic information 

- name of artist or band
- description of their music
- additional wallet addresses of band members
- artist must connect with wallet
- submit button which calls function on streemzcouncil to add them as grantee

# Design Aesthetic

- dark, sleek
- gradient color patterns
- rounded corner components
- card views of songs
- similar spotify look and feel in UX

# System Overview

![image.png](Superfluid%20Music%20Streaming%20Rewards%20-%20Streemz%201ae6255b298280408344c7fd8f02c23e/image.png)

## Contracts Overview

- SuperAppBaseFlow.sol
- StreemzSuperAppBaseFlow.sol
- GDAv1Forwarder.sol
- CFAv1Forwarder.sol
- Registry.sol
- Anchor.sol
- CouncilHaus.sol
- StreemzCouncil.sol

### Artists create profiles

- each artist creates a profile using Registry.sol using Allo Protocol
    - artist name
    - description
    - band member wallet addresses
    - anchor contract is deployed for artist which will receive streamed funds from subscribers
- admin adds artist profile by their profileId from Registry as grantee on StreemzCouncil.sol

### Subscriber Sign Up

- User creates stream with required subscription fee to StreemzSuperApp.sol
- StreemzSuperApp.sol validates stream is expected amount matching sub fee
- StreemzSuperApp.sol adds user as council member to StreemzCouncil.sol and issues them voting power

### Subscriber Distribution

- Subscriber allocates to grantees from their voting power
- calls allocateBudget to update streams through StreemzCouncil.sol

### Subscriber Unsubscribe

- user unsubscribes setting their stream to streemzSuperApp to 0 or less than expected flowrate
- streemzSuperApp checks on callback functions and removes user as council member and removes their voting power on StreemzCouncil.sol

# Random Notes

[Contract Notes](https://www.notion.so/Contract-Notes-1b06255b298280c48b1dea5dc044998b?pvs=21)