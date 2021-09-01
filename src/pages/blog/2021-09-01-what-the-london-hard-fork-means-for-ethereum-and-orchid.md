---
templateKey: blog-post
public: true
url: what-the-london-hard-fork-means-for-ethereum-and-orchid
title: What the London hard fork means for Ethereum and Orchid
date: 1630497600000
description: Ethereum has garnered a reputation as the most popular blockchain network for decentralized application (dApp) development. The network has the most dApps and the largest community of developers. Among other things, these were essential factors in the Orchid team’s decision to select Ethereum as the basis for its decentralized VPN marketplace.
featuredpost: false
featuredimage: /img/uploads/OrchidBlog_LondonHardFork.jpg
tags:
  - Blockchain
  - Ethereum
  - VPN
---
Ethereum has garnered a reputation as the most popular blockchain network for decentralized application (dApp) development. The network has the most dApps and the largest community of developers. Among other things, these were essential factors in the [Orchid team's decision to select Ethereum](https://blog.orchid.com/why-ethereum/) as the basis for its decentralized VPN marketplace.

However, as Ethereum has become more popular, it has faced its share of growing pains. High gas fees and limited scalability, in particular, have restricted the network's growth. Now, a complete overhaul of Ethereum—a network-wide upgrade known as [Ethereum 2.0](https://ethereum.org/en/eth2/), or Eth2.0—is reshaping the dynamics of the network altogether, with important implications for the entire ecosystem.

According to Ethereum.org, the [main goals](https://ethereum.org/en/eth2/) of the upgrade are to make the network more "scalable, secure, and sustainable." To this end, the network is undergoing a series of structural changes—most notably, a switch from a Proof-of-Work (PoW) consensus algorithm to a Proof-of-Stake (PoS) algorithm.

Originally, Eth2.0 was expected to be fully implemented by mid-2021. However, the launch of the upgrade has been postponed several times due to [development hitches](https://vaultoro.com/what-has-delayed-the-ethereum-2-0-rollout/). While further delays are possible, the launch of a fully-functional Eth2.0 is slated to be completed in late 2021 or early 2022. To ensure that the upgrade is successful, the installation of new features has been divided into three smaller milestones referred to as **[hard forks](https://www.investopedia.com/terms/h/hard-fork.asp#:~:text=A%20hard%20fork%20requires%20all,offered%20by%20existing%20blockchain%20implementations.&text=A%20hard%20fork%20can%20be%20contrasted%20with%20a%20soft%20fork.)**.

Hard forks are what happen when a cryptocurrency's blockchain essentially splits in two: a new version and an old version. This is caused by changes to the blockchain's protocol. When a hard fork happens, the two versions of the blockchain are incompatible. This has two possible outcomes: the older version of the protocol can be abandoned by nodes, meaning that the new version effectively replaces the old one. If enough nodes refuse to adopt the upgrade, and continue to support the old version, two seperate blockchains are formed—each with a unique token. This latter scenario resulted in the creation of [Ethereum Classic (ETC)](https://en.wikipedia.org/wiki/Ethereum_Classic) in 2015.

The first of the upgrades leading up to the launch of Eth2.0, dubbed the [Berlin hard fork](https://blog.ethereum.org/2021/03/08/ethereum-berlin-upgrade-announcement/), was successfully implemented in April of this year. The upgrade included several Ethereum Improvement Proposals, or EIPs, designed to optimize fee usage and improve network security. These included [EIP-2565](https://eips.ethereum.org/EIPS/eip-2565), which helped to reduce gas fees for most transactions, and [EIP-2929](https://eips.ethereum.org/EIPS/eip-2929), which deters Denial-of-Service (DoS) attacks.

**The London hard fork**

The [London hard fork, ](https://blog.ethereum.org/2021/07/15/london-mainnet-announcement/)which went live on the mainnet earlier in August, is the second of these upgrades.  The primary objectives of London are to make the network more scalable and to stabilize transaction fees. If you think of Ethereum as a transactional "highway," London effectively adds a few lanes to reduce traffic volumes and standardize toll prices. Despite these positive changes the fork was met with resistance by some factions within the Ethereum community — most notably, miners.

**Will mining on Ethereum become obsolete?**

The switch to Eth2.0 will ultimately convert Ethereum into a PoS network. When that happens,  miners will become obsolete, with stakers assuming the responsibility of confirming transactions on the network. Naturally, miners have met this shift with resistance. While the London hard fork did not complete the move to PoS, it did implement some significant changes that affect miners' ability to earn rewards. Perhaps more importantly, it served as a reminder that miners' time on Ethereum appears to be limited.

Most of the controversy around the London hard fork stems from one of the upgrade's five improvement proposals: [EIP-1559](https://hackmd.io/@timbeiko/1559-update-001). Among other things, this proposal introduces a "burn mechanism" to Ethereum's fee structure. A portion of each transaction fee known as the **base fee**—the minimum amount it costs to send the transaction—will now be destroyed or "burned," adding a deflationary element to Ethereum's token economics.

Before this change, Ethereum was an [inflationary currency](https://www.finder.com/fi/ethereum-inflation-rate), and there was no cap on the supply of ETH. New tokens minted to pay miners would increase the supply by [4% per year](https://finbold.com/ethereums-annual-inflation-rate-is-10-higher-than-doges/). While increases in ETH's price counteracted inflation's effects on the token, ETH has not traditionally been considered a [sound store of value](https://www.soundmoneydefense.org/sound-money-explained). In other words, it could be prone to appreciation or depreciation in purchasing power.

The introduction of the deflationary mechanism is intended to change this. There is still no cap on ETH supply. However, the burn mechanism is [projected to limit the number of tokens](https://ultrasound.money/) to no more than 119.3 million. This could make ETH more effective as a hedge against inflation, leading some to predict that ETH will become "[ultrasound money](https://cointelegraph.com/news/ethereum-is-becoming-ultrasound-money-consensys-founder-says)."

While ETH holders see this deflationary mechanism as a positive development for the value of their assets, Ethereum's mining community has resisted it over concerns that it will reduce their revenue. Their fears are not without merit—in most circumstances, the new fee structure [is likely to result in lower mining profits](https://www.theblockcrypto.com/post/114334/ethereum-network-burns-100-million-of-eth-in-first-week-after-london-upgrade). By default, miners now receive 2 ETH for confirming each block. However, they do not receive any of the base fees that are paid to send transactions. Instead, they earn [priority fees](https://ethereum.org/pt-br/developers/docs/gas/)—adjustable costs that senders can pay to get their transactions processed more quickly.

**The London hard fork introduces further changes to Ethereum's fee structure**

EIP-1559 also introduces other changes to Ethereum's fee structure that will reduce mining revenue. These stem from the goal of making gas fees on Ethereum more predictable. Before the London hard fork, transaction costs were determined through an auction mechanism. When users were preparing to send a transaction, they would "bid" the maximum amount they were willing to pay for a miner to execute it. Seeking the highest possible profit, miners would then select the most expensive transactions. This caused transaction costs to skyrocket, particularly in times of high network traffic.

EIP-1559 addresses this issue by dynamically adjusting the base fee with an algorithm that measures network activity and the availability of block space. If the number of transactions in a block[ exceeds a predetermined "gas target,"](https://thedefiant.io/eip-1559-economics/#:~:text=EIP%2D1559%20will%20also%20increase,the%20base%20fee%20is%20lowered.) the base fee will increase by 12.5%. The reverse is also true. This new pricing mechanism is designed to prevent fees from unexpectedly spiking—and, consequently, to prevent miners from extracting unreasonably high transaction fees.

All told, the combination of this transaction pricing mechanism and Ethereum's new burn feature is expected to [decrease mining revenue by 20-35%](https://thedefiant.io/eip-1559-economics/). It's also possible that significant increases in transaction volume could make up for the percentage loss—however, there is no guarantee this will be the case.

Naturally, the revenue-reducing implications of EIP-1559 have been met with resistance from the Ethereum mining community, with some [signing petitions](https://stopeip1559.org/) advocating for changes to the proposal. This raised concerns that miners would rebel and [refuse to implement the London hard fork,](https://www.forbes.com/sites/michalgromek/2021/03/31/will-ethereum-miners-engage-in-a-51-attack-to-maintain-high-profits/?sh=314f926a4fcb) thereby causing the update to fail. However, the resistance eventually subsided after miners realized that they [risked losing even more revenue](https://www.coindesk.com/4-myths-about-ethereum-eip-1559) if they refused to support the upgrade.

Mining revenues are not the only thing likely to be affected by the upgrade. Another improvement proposal included in the latest hard fork, known as EIP-3554, will slowly increase [mining difficulty](https://www.bitpanda.com/academy/en/lessons/what-does-mining-difficulty-mean#:~:text=Mining%20difficulty%20is%20a%20measurement,of%20miners%20in%20the%20network) on Ethereum. In other words, the amount of time and money required to confirm transactions will slowly grow. Over time, this increased difficulty will reduce the incentive to continue mining as the switch to PoS approaches—a move that may encourage miners to become stakers.

**Will the London hard fork eliminate the need for layer-two solutions?**

It's not just mining that stands to be remade with the advent of [Ethereum 2.0](https://blog.orchid.com/what-does-ethereum-2-point-0-mean-for-orchid/). Some analysts argue that the London hard fork could render the network's layer-two solutions (also known as "[roll-ups](https://ethereum.org/en/developers/docs/scaling/layer-2-rollups/)") unnecessary. But this is far from the consensus view.

Layer-two solutions are secondary frameworks or protocols that increase transaction speed and lower transaction costs by processing transactions off the Ethereum mainnet. They are often used in situations where large volumes of small transactions must be sent at high speeds. 

Orchid's VPN bandwidth marketplace, for example, is powered by a layer-two solution called [probabilistic nanopayments](https://medium.com/orchid-labs/probabilistic-nanopayments-4aa423c3f22f), which uses a chance-based system to rapidly transmit per-packet network payments.

In a probabilistic payments system, users send payments in the form of "lottery tickets." For example, instead of sending a transaction worth $1 directly, users in a probabilistic payments system might send 100 tickets, each with a 1% chance of "winning" $100. That way 100 payments are sent and, on average, only one transaction fee is incurred with the winning ticket. The probability settings can be tweaked depending on the usage of the system to send millions of payments with only one on-chain fee, on average. Those who believe that the London hard fork could render layer-two solutions obsolete think that the fork's measures to increase scalability and lower costs are enough to meet the transactional needs of all of Ethereum's users.

London will indeed increase transaction throughput, doubling the max gas limit per block [from 12.5 million gwei to 25 million gwei](https://thedefiant.io/eip-1559-economics/), and expanding the network's capacity from roughly 30 transactions per second (tps) to approximately 180 tps.

However, fees on the network may not be any lower than they were before the London hard fork was implemented. While EIP-1559's price mechanism decreases volatility in Ethereum transaction fees, it does not necessarily reduce fees on Ethereum—there is no limit on how much a transaction can cost.

Therefore, even with this scalability increase, Ethereum is still likely to be too slow and expensive to handle transaction throughput requirements as high as Orchid's—much less the needs of thousands of other dApps and individual users sending transactions on the network.

Ultimately, it is conceivable that ​​Ethereum's shift to Proof-of-Stake could make layer-two solutions unnecessary. When the upgrade to Eth2.0 is complete, the network will also introduce a feature called "[sharding](https://ethereum.org/en/eth2/shard-chains/)" that will spread the network's load across 64 seperate chains. This will allow many transactions to be processed simultaneously, with some estimating that the network could process [as many as 100,000](https://www.coindesk.com/sharding-eth-2-podcast) tps after the switch. But even if throughput is no longer a concern, layer-two solutions will still be able to provide important services for Ethereum users.

Orchid's VPN marketplace is an example of a decentralized system that requires tiny payments so that either party doesn't have to trust each other. Even at 100,000 tps, the fees incurred by sending all payments on-chain would be prohibitive for Orchid to run without nanopayments that allows most payments to be off-chain and incur no network fee.

**How does Orchid's layer-two solution work?**

Orchid's probabilistic nanopayments mechanism transmits payment tickets off-chain in order to drastically reduce the cost of sending a single payment.

On-chain transactions only take place when the receiver of the transaction claims the payment. Because most nanopayment tickets do not "win," their associated transactions do not incur any cost.

While it's possible that Ethereum could one day scale to support the millions of transactions handled by Orchid, probabilistic nanopayments will still play an essential role in making Orchid as cost-effective as possible for users. VPN service on the network is pay-as-you-go: users are only charged for the bandwidth they use. It costs just $1 to start, and people can pay with an ordinary credit card.

Privacy is Orchid's mission—the team is continuously working to ensure that users can explore the Internet freely. For the foreseeable future, probabilistic nanopayments will play an essential role in that mission.

[Download Orchid](https://www.orchid.com/) today to begin exploring the Internet freely.