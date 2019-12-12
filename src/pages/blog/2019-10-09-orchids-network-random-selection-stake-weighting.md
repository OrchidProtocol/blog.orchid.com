---
templateKey: blog-post
public: true
url: orchids-network-random-selection-stake-weighting
title: 'Orchid’s Network: Random Selection + Stake Weighting'
date: 2019-10-9T18:47:36.651Z
description: 'When you wake up in the morning and flick on a light switch, do you pause to think about how many tiny fractions of a penny that electricity costs? Or do you just flick on the light so you don’t bump your head?'
featuredpost: true
featuredimage: /img/random-selection-stake-weighting.png
tags:
  - Blockchain
  - Ethereum
  - VPN
---
Like Bitcoin, Ethereum, and most other decentralized systems, Orchid is designed as an open network built from open-source software; anyone can download the Orchid node software and run as many nodes as their resources permit. The viable defenses against systemic attacks in an open decentralized system are ultimately economic — a system is secure to the extent that the cost of an attack to an attacker outweighs the benefits to that attacker, or is too costly to execute regardless. Decentralized systems use these security parameters to secure their networks and provide incentives by which miners or participants can earn in return. Most open blockchains today use one of two models: proof-of-work, which requires electricity; or proof-of-stake, which requires coordination efforts and governance. The Orchid Network is expected to use a derivative of proof-of-stake, called stake weighting, to authenticate peer-to-peer bandwidth agreements combined with Ethereum’s consensus to settle transactions.

This means that bandwidth providers stake Orchid cryptocurrency for commercial use on the Orchid Network (OXT) in time-locked deposits to prove identity and receive traffic in proportion to relative stake deposit size. We evolved our design to use stake-weighting after originally considering using proof-of-work, which is described in our original white paper as Medallions. We moved away from that system because:

- Proof-of-work creates an additional compute burden on end users
- Proof-of-work has far lower attack costs than stake-weighting with delay, even assuming rental markets
- General compute rental markets already exist with far more relative liquidity than we expect will exist in any future OXT stake deposit rental markets

## The Orchid Network
The Orchid Network is designed to be a set of data structures stored on the Ethereum blockchain that allows clients to efficiently select bandwidth sellers’ nodes. Essentially, it forms a simple Orchid-specific overlay on the Ethereum network.

At a high level, the Orchid Network is expected to provide the following key operations:

- A means for bandwidth providers to register their nodes via staking
- A method for bandwidth providers to register custom services and metadata
- A means for clients to query nodes for custom services and metadata
- A method for selecting a random node, with probability proportional to stake

The use of stake-weighting is intended to allow the economic security of the Orchid Network to scale linearly with the size of the total deposited stake. The stake-weighted selection process itself is implemented using an on-chain tree data structure, which is intended to allow a client to outsource the selection of nodes to other nodes in a scalable trustless manner, avoiding the need for lightweight clients to ever download, store, or process the complete node directory.

## Node directory tree
To implement the scan function efficiently, we use an on-chain binary weighted tree data structure. Each node in the tree is expected to be a stake entry, which stores a stakee, an amount, and a delay, in addition to the tree pointers and stake subtotals for the left and right subtrees. This structure effectively forms a prefix sum tree over all the stake deposits, allowing a simple descent decision at each node to find the subtree (or internode) containing a given random point; finding the exact node containing the given random point is expected to require only a logarithmic number of steps.

## Node metadata registry
The Node metadata registry is anticipated to allow providers to ‘tag’ nodes with metadata. Bandwidth providers can use this to store custom metadata associated with their nodes on the blockchain and advertise services. The metadata registry is structured to be generic in order to enable a simple means for future custom extensions. This is intended to allow node operators to advertise new services, which clients can then select for without code updates.

Orchid App users interested in filtering service based on certain criteria, such as geography, are expected to be able to use tags to do so. Since tags are pieces of metadata added by providers, ultimately the Orchid App must check whether the provider is acting honestly. In many cases, we expect the checks will be automated.

Examples of Metadata Tags:

- **Geolocation**: Providers are expected to be able to advertise their service in a particular region so that clients can filter based on location (similar to a typical VPN service). The Orchid App will use a public IP database to confirm the location.
- **Latency**: In some cases users will desire connections with lower latency than randomly chosen nodes. The Orchid App is designed to employ a ‘guess-and-check’ strategy by using the same public IP database to find routes with a shorter distance. Ultimately, the actual latency must be measured once a route is constructed. If the latency is higher than the target threshold, we expect that a new, different route must be sampled. The lightweight nature of Orchid routes and nanopayments is anticipated to allow for fast route setup and parallel route testing.
- **Price**: Providers are anticipated to set their bandwidth prices and the client can filter on price. The Orchid App intends to use a budgeting algorithm to determine a current spending cap based on the user’s balance and a target timespan representing how long the budget should last.

## Curated lists
The Orchid App is designed to also filter based on arbitrary exit or relay node lists, which limits the viable nodes to a custom subset. Initial releases of the official Orchid App is expected to use this feature to prevent certain kinds of attacks from malicious exit nodes (e.g. SSL downgrade attacks) by using a default exit node list consisting of trusted VPN partners. Customized Orchid clients can use their own lists, and eventually we expect well known third parties to emerge as whitelist curators. Curated lists are a simple means for the importation of external reputational trust to supplement the economic, incentive-based trust provided by staking.

## How to sell bandwidth on Orchid
The Orchid Market uses a decentralized architecture to connect users to bandwidth providers via tokenized, peer-to-peer commercial nano-transactions.

![Orchid bandwidth process](/img/nanopayment-illustration)

## Nanopayments
To sell bandwidth, providers register nodes on the Ethereum blockchain, which clients select through calls to Ethereum smart contracts. The user running the Orchid App then initiates proxy chain connections, which connect through one or more relay nodes before an exit node to their destination. Clients are expected to pay bandwidth providers to forward packets using probabilistic nanopayments. Occasionally the seller is expected to receive a winning nanopayment ticket which they redeem for Orchid Tokens (OXT) through a smart contract function call.

A requirement for registering a node in the Orchid Network is to stake OXT. The size of the stake is crucial for the stake-weighted selection and the more OXT that is staked, the greater the probability that the provider will receive requests for traffic from the Orchid App users.

We anticipate that there are three steps to earning as a Node operator:

- **Acquire OXT**: Buy OXT tokens from an exchange or recieve OXT in a wallet through transfer, or earn OXT by registering as a node provider.
- **Stake OXT**: Deposit OXT tokens into the node directory contract
- **Provide**: Sell services to the Orchid App users
- **Payment**: Receive OXT payment for services in a provider controlled wallet

## User stake deposit
For Orchid App users to join the network, they must have a valid deposit in the nanopayment smart contract in order to issue tickets to a provider in exchange for bandwidth. A small portion of this deposit is intended to be held in escrow as a user “stake” to align their incentives with that of the network as a whole.

## How nodes are selected
Apps are expected to select nodes for proxy chains using a two-step process of random relative stake-weighted linear selection followed by secondary constraint filtering. The first stage linear selection is designed to be performed by the scan function on the node directory tree. The App generates a random point locally and passes it on as the single argument to scan, which then descends down the node directory tree. The search terminates in the single unique leaf — or internode — whose stake segment intersects the chosen random point.

Using a smart contract to implement the main node scan function allows the selection process to be easily outsourced to server nodes. A client requests one or more scan calls and a remote server node executes each scan locally and send back simple proofs of the execution trace.

After selecting one or more nodes based on linear relative stake weighting, it is designed such that the client can then filter by additional criteria such as exit location, latency (ping), price, custom node metadata tags, and arbitrary whitelists.

## Stake withdrawal delay
Orchid stake deposits can not be withdrawn immediately; they are subject to an intentional withdrawal delay limitation. The withdrawal delay is an important security restriction. It creates an obstacle for attackers attempting to acquire a large portion of Orchid App connection requests. In particular, it helps prevent a systemic takeover attack. This is an attack in which an adversary acquires a large fraction of the total deposit stake and then directs clients to malicious servers, which provide intentionally poor connections, log and report traffic, or attempt active connection attacks (e.g. SSL downgrades).

We believe the main defense against systemic takeover attacks is the high cost barrier to acquiring and locking up a significant fraction of the total OXT stake. Without a withdrawal delay, this barrier becomes simply an issue of access to sufficient liquidity, with little actual net cost to an attack.

A sufficiently long withdrawal delay is more likely to create an additional loss for the attacker when they finally end the attack and sell their large OXT position. The App software then filters based on withdrawal delay, ignoring stake deposits with delays that do not meet the App threshold. Orchid’s initial App software will accept withdrawal delays of three months or greater, but the flexible parameterization allows future App updates to change this parameter without the equivalent of a hard fork and associated coordination difficulties.

## Conclusion
By adopting a stake-weighting approach to disincentivize attacks and creating an incentivized marketplace backed by the Orchid Token, we’re one step closer to achieving our ultimate goal: making the Internet a more open, inclusive space for users around the world. Whether you want to purchase or sell resources using the Orchid, the Orchid Network is designed to give users private and secure access to the internet, regardless of geographic location. If you would like to stay up to date with the latest Orchid news, sign up for our newsletter and be the first to try the network when it launches later this year.

## Follow the Orchid journey
If you want to keep current on the latest Orchid news and be among the first to test out the network, [sign up for our newsletter](https://www.orchid.com/#newsletter-signup) to receive launch updates.

Website: [www.orchid.com](https://www.orchid.com/)

Twitter: [https://twitter.com/OrchidProtocol](https://twitter.com/OrchidProtocol)

Linkedin: [https://www.linkedin.com/company/orchidprotocol/](https://www.linkedin.com/company/orchidprotocol/)

Telegram (Announcements): [https://t.me/officialorchidlabs](https://t.me/officialorchidlabs)

Telegram (Community): [https://t.me/OrchidOfficial](https://t.me/OrchidOfficial)

Facebook: [https://www.facebook.com/OrchidProtocol/](https://www.facebook.com/OrchidProtocol/)

Medium: [https://medium.com/orchid-labs](https://medium.com/orchid-labs)

Github: [https://github.com/OrchidTechnologies](https://github.com/OrchidTechnologies)

Reddit: [https://www.reddit.com/r/orchid](https://www.reddit.com/r/orchid)