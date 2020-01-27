---
templateKey: blog-post
public: true
url: why-ethereum
title: '4 Factors We Considered Before Choosing Ethereum'
date: 2020-1-27T16:47:36.651Z
description: 'When we started out designing the Orchid privacy network, we faced the fundamental decision of which blockchain Layer 1 platform to build on.'
featuredpost: false
featuredimage: /img/uploads/Orchid_BlogImage_WhyETH.jpg
tags:
  - Orchid Protocol
  - Ethereum
  - Decentralization
---
### The 4 key factors in choosing Ethereum as Orchid’s Layer 1

*When we started out designing the Orchid privacy network, we faced the fundamental decision of which blockchain Layer 1 platform to build on. Deciding on the best solution required us to take a hard look at multiple options in the market, and the tradeoffs involved with each one. Though no system or solution is perfect, ultimately we selected Ethereum. We concluded that while its full potential remains unrealized, Ethereum is currently the best blockchain for us to execute our vision of a decentralized VPN service that could offer users better digital privacy.*

*To mitigate the drawbacks of building on Ethereum, we have built our own innovations where needed. In particular, our own Layer 2 scaling solution, [probabilistic nanopayments](https://medium.com/orchid-labs/probabilistic-nanopayments-4aa423c3f22f), is designed to bolster speed and throughput in our specific context. In order to truly foster the growth of a new decentralized Web 3.0 world, the community must work together to address Ethereum’s limitations. This post explores the key considerations we made in selecting a Layer 1 blockchain platform and explores the key challenges and benefits of building on Ethereum from our perspective. We hope it will be helpful to other entrepreneurs and blockchain projects currently choosing between options for their Layer 1.*

### 1. Ethereum is the biggest blockchain for dapps

Ethereum is the leading contender to be the base layer for the most decentralized applications going forward. It is already the top choice for new blockchain projects, with over [2,700](https://www.stateofthedapps.com/platforms/ethereum) dapps currently. This represents a majority of the [3,292](https://www.stateofthedapps.com/stats/platform/ethereum#new) total dapps currently active across all protocols. By comparison, EOS [supports](https://www.stateofthedapps.com/rankings/platform/eos) only 320. And Ethereum is [second only](https://coinmarketcap.com/) to Bitcoin in terms of market cap. Size matters: it is both an affirmation of quality from the many teams choosing to base their platforms on this blockchain, and it is a key indicator of future success and adoption. The latter point is important in the context of today’s still-young, fast-evolving blockchain landscape. 

### 2. Ethereum has a large, passionate community

In addition to having the most dapps, Ethereum has the largest community of any blockchain platform. There are [four times as many](https://consensys.net/blog/blockchain-development/ethereum-has-4x-more-developers-than-any-other-crypto-ecosystem/) developers working on Ethereum as there are on any other protocol. This is crucial, because a large community is also central to achieving Orchid’s mission. The more participants there are in the Orchid Network, the greater the security and capability of the Network. That Ethereum is backed by more hash power, more liquidity, and less volatility in price swings represents another advantage. Key to our mission is bringing together bandwidth providers and Internet users (with an initial focus on those with blockchain savvy). So, the larger the network we can tap into, the better.

One of the reasons there are so many developers on Ethereum is its fundamental ability to run smart contracts. It uses a well-supported and well-documented programming language -- Solidity -- for this purpose. This is important, as we believe that there are likely to be, at most, a few major blockchains that end up dominating the space. Ethereum is currently the best positioned to establish itself as the blue-chip standard for decentralized platforms.

The Ethereum community’s strength lies not just in its size but in its level of commitment. The number of full-time developers contributing code to Ethereum [grew 34%](https://consensys.net/blog/blockchain-development/ethereum-has-4x-more-developers-than-any-other-crypto-ecosystem/) between 2018 and 2019. Ethereum, as a project, is supported by a broad, global, decentralized network of people with skills across the spectrum, from business development, to marketing, to engineering. Orchid’s mission is to restore and preserve the Internet as an unlimited world of information that people can explore freely. We believe Ethereum offers the strongest community to facilitate this.

### 3. Ethereum is only pseudonymous

Orchid is, first and foremost, about privacy. So for us, the number-one issue Ethereum presents is that on-chain payments are not fully anonymous, but pseudonymous. This is an obvious challenge for a project like Orchid, where both anonymity and economic incentives are key. Nevertheless, after investigating the alternatives, we came to the conclusion that there really is no decentralized Layer 1 solution that offers truly private payments and programmable smart contracts with sufficient decentralization. 

All payments made on Ethereum are visible in the public ledger. Orchid uses a scaling solution called probabilistic nanopayments that keeps most payments on the Orchid network off-chain. After a period of weeks or months of use, payments will accumulate and leave a public information trail that links a user’s Ethereum wallet address with the wallet addresses of some of the Orchid providers they have paid. The payment ticket does not reveal the particular server the client was connected to, only the public key of the provider’s receiving wallet. It is up to individual users to understand and determine whether this amount of information leakage is a problem for their specific use cases. (More information can be found in our detailed [FAQ](https://www.orchid.com/faq).) Users desiring stronger anonymity may wish to take additional steps to disassociate their OXT from their identity.

Many people have asked: if we are building a privacy solution, why not just use a privacy coin design? The question is understandable. But in reality, we found that privacy coins do not offer a better solution. Obtaining privacy coins from top-tier exchanges, which is necessary for an app with broad utility, can be difficult. This is a reflection of a wider general [sentiment](https://themerkle.com/is-there-a-future-for-privacy-coins-in-the-united-states/) [against](https://finance.yahoo.com/news/okex-korea-delists-privacy-coins-120014891.html) privacy coins. We believe this would hinder our goals of making Orchid  available to as many users as we can, first throughout the crypto community and then to the mainstream.

While pseudonymous payments are a difficult compromise for us to accept, in the end we decided not to make the perfect the enemy of the good. Pseudonymity poses a real challenge, but we still believe we have developed the strongest possible blockchain privacy solution. Ultimately, Ethereum enables Orchid to work.

### 4. Ethereum is slow

The most common criticism of Ethereum is that it does not process transactions fast enough. This is true: currently, Ethereum only processes 12 transactions per second. At this level of throughput, Orchid would not be able to scale to support a large chunk of the world's existing VPN market -- currently [estimated at 26% of the world’s population, or over 1 billion users](https://blog.globalwebindex.com/chart-of-the-day/vpn-usage-2018/), and growing at [almost 15%](https://www.statista.com/statistics/542817/worldwide-virtual-private-network-market/) per year.

In an ideal world, the Layer 1 blockchain would handle all transactions. But that is not feasible with Ethereum (or any other decentralized blockchain) in its current form. So to solve for the inadequacy in transaction processing speed, the team at Orchid developed a Layer 2 solution: probabilistic nanopayments. You can read about nanopayments in depth in our [White Paper](https://www.orchid.com/whitepaper.pdf). They partly mitigate the throughput issue, scaling significantly further than would be possible on Layer 1. Truly superior scalability, though, will be achieved with the release of [Ethereum 2.0](https://docs.ethhub.io/ethereum-roadmap/ethereum-2.0/eth-2.0-phases/). This upgrade, which is one of the Ethereum [community’s top priorities](https://www.coinspeaker.com/ethereum-2-testnet-22000-validators/), could conceivably allow Orchid to scale much further, to billions of transactions per second — enough to serve every Internet user. 

### The best solution for Internet privacy

Ethereum has lots of issues, some of which pose challenges to a privacy solution like Orchid. As part of the Ethereum community ourselves, we will work to help address and alleviate these issues, so that this blockchain can become an even better partner for Orchid — the type of partner that does not currently exist. But even now, despite its shortcomings, Ethereum presents the least friction and most advantages for us in building our network and app. Orchid is a leading use case for decentralization — and Ethereum is the best blockchain to build it on.
