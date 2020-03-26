---
templateKey: blog-post
public: true
url: how-oxt-works-on-the-orchid-network
title: 'How OXT works on the Orchid network'
date: 2020-3-26T16:46:36.651Z
description: "Orchid lets users explore the Internet freely. Key to its design is OXT."
featuredpost: false
featuredimage: /img/uploads/Orchid_BlogImage_HowOXT.png
tags:
  - Company Updates
---

Orchid lets users explore the Internet freely. Key to its design is OXT. There are a number of reasons we chose to build OXT as an integral component of Orchid, including market incentives, security, and the efficient operation of the network. OXT facilitates access and sharing on the network, as well as incentivizing activity and an adequate supply of bandwidth. Here, we want to explore how OXT functions to ensure a secure and seamless experience for Orchid’s users.

**OXT is the native currency of Orchid**

All transactions on Orchid involve OXT. It is the network’s native digital currency and a fundamental component of its operation. OXT is Ethereum-based and ERC20-compatible; supply is fixed at 1 billion. While it can be used as a simple means of payment and exchange, it also plays a crucial role in the efficient running of the network. Even when later versions of the app remove the requirement for users to obtain and hold OXT, it will still have an essential function “under the hood.” A few of the main elements of OXT’s utility are explained below.

**OXT for users**

When a user creates an Orchid account, they move OXT into a smart contract, called the nanopayment smart contract, where the OXT is bound to a key and held as collateral. Using that key, users are able to send valid nanopayments — a scalable layer 2 solution for Ethereum. The first application to be built using this technology is Orchid’s own app and network, although the architecture will support more applications in the future.

On Orchid, the OXT held in the nanopayment contract is split into a balance and deposit. The balance is the collateral that will slowly be drawn down by providers as the user pays for VPN service. There is also a small portion locked as a deposit which guarantees that if the user’s account gets overdrawn, that funds are available to cover the overdraft.

**OXT staking for bandwidth providers**

Providers are required to stake OXT in order to offer bandwidth on Orchid. Staking involves depositing an asset and locking it into an illiquid contract or mechanism in exchange for revenue or rewards, and is an important component of Orchid’s design. On Orchid, providers stake OXT tokens in an Ethereum smart contract (the directory) to advertise their services to clients. Orchid users then select providers at random. The choice is weighted by proportional stake, so the probability of picking a particular provider is equal to their fraction of the total stake.

Staking in Orchid serves multiple purposes:
- The linear stake-weighted random selection mechanism allows clients to create decorrelated circuits immune to sybil attacks.
- Staking helps align incentives of bandwidth providers with those of the network, ensuring that they have “skin in the game.”
- Staking requirements create a simple natural load-balancing mechanism and advertising analogue

It is important to distinguish how this staking is different from typical layer-1 staking on a consensus network. Staking on Orchid is like advertising your VPN business — you get more customers and could potentially make more profit. You are not guaranteed any return.

Read more about how staking works on Orchid [here](https://blog.orchid.com/staking-oxt-on-the-orchid-network/).

**OXT is helping reclaim the Internet as a place to explore freely**

When building Orchid, we designed OXT as a fundamental component of the network. As Orchid’s native currency, it plays a key role in incentivizing bandwidth providers and providing service to users. It is the basic unit of exchange bringing people together on Orchid so that they can stay curious and explore freely. 
