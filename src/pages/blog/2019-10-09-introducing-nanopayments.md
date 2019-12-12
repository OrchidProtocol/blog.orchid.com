---
templateKey: blog-post
public: true
url: introducing-nanopayments
title: Introducing Nanopayments
date: 2019-10-9T16:47:36.651Z
description: 'When you wake up in the morning and flick on a light switch, do you pause to think about how many tiny fractions of a penny that electricity costs? Or do you just flick on the light so you don’t bump your head?'
featuredpost: true
featuredimage: /img/nanopayments.jpg
tags:
  - VPN
  - Packet Sniffing
  - Network Analysis
---
When you wake up in the morning and flick on a light switch, do you pause to think about how many tiny fractions of a penny that electricity costs? Or do you just flick on the light so you don’t bump your head?

And if you could pay for other kinds of services the same way you pay for electricity — a tiny flow of resources that could be turned on or off at any moment — what possibilities would that open up?

Orchid’s novel layer 2 scaling architecture for Ethereum uses probabilistic nanopayments to allow users to pay for services in just this way. Nanopayments are what they sound like: they are tiny, and you can turn them on or off at will. But unlike a monthly electric bill, nanopayments transmit value as they move. We’re using this core technology to power our bandwidth marketplace, which is intended to offer users of the Orchid App a new way to construct VPN routes and manage them — just like flicking on a light switch.

## Scaling payments on Ethereum with Orchid
The Orchid Network’s bandwidth marketplace is two-sided, comprising buyers (Orchid App users) and sellers (Orchid Server operators). The exchange of bandwidth requires a high transaction throughput to support both basic service and payments. Payments are expected to be made at a per-packet level with high frequency. Ethereum’s layer 1 would be too slow and expensive to settle nano transactions at the level of bandwidth exchange required between buyers and sellers in the ecosystem. To solve this issue, Orchid uses an advanced payments architecture known as probabilistic nanopayments for per-packet network payments.

## Existing layer 2 scaling solutions
Several layer 2 scaling proposals already exist, including the Lightning Network on Bitcoin and the Raiden Network on Ethereum. Both of these approaches fall into the category of networked payment channels, which could, in theory, serve as the payments layer for Orchid’s bandwidth marketplace.

However, networked payment channels have several key disadvantages. They require users to deposit and lockup funds with specific network nodes, creating counterparty risk. The cost of a payment using networked payment channels is essentially O(log N), compared with O(C) for probabilistic payments, making them less scaling efficient. Network channel payments can also fail to route or fail to deliver in a timely manner if a single node in the circuit fails. Finally, they leak payment information to more parties than stochastic payments. For these reasons, network payment channels are less practical than nanopayments for Orchid’s use case.

## Orchid Nanopayments: how they work
Instead of sending a transaction worth $1 directly, with probabilistic payments the buyer could send a 1% chance of winning $100. Orchid’s design takes this to an extreme, with nanopayment tickets representing the value of thousandths of a penny, or smaller. The tickets are all sent off-chain; only when a winning ticket is redeemed would its receiver have to make an on-chain transaction to claim the face value amount, which is rare. The receiver has no way to know if a ticket is a winner beforehand, therefore giving all tickets implied value.

## The expected flow of nanopayments
- Sender opens nanopayment account by depositing OXT into an Ethereum smart contract.
- Sender can then issue valid nanopayments, backed by the deposit, to any provider on the network that is accepting payments for service.
- Eventually, the user is expected to issue a nanopayment that “wins”, which allows the provider to redeem the ticket as a payment via an on-chain transaction.
- The user may or may not need to add more OXT to their nanopayment account, depending on the level of funds in the account.
- Over time, the value transmitted on-chain will in expectation match the value represented in the probabilistic nanopayments.

## Nanopayments
The graphic above demonstrates how the Orchid App users are expected to be able to send nanopayments to multiple providers after incurring a single deposit setup on the Ethereum blockchain, as well as how the general flow of payments is intended to operate.

We believe the general properties of this system are well suited for a bandwidth marketplace, where the user requires the ability to select different providers at will and for them to very quickly establish a payment-for-services relationship. Users should be able to quickly change VPN providers arbitrarily based on speed, availability, price and/or location. The setup of the nanopayment account on Ethereum is structured to be shouldered by the user, but is compatible with the current VPN market where users sign monthly, annual, or even multi-annual agreements with providers for VPN service. The Orchid user is expected to have the added benefit of being able to take back the deposit from the nanopayment account if they stop using the service.

Balance Variance
Orchid nanopayments do have one notable limitation: variance. Each time the Orchid App issues a nanopayment, there is a small independent probability of a winning ticket, which would decrease the receiver’s account balance. If the client’s balance was only large enough to cover a single winner, this would be a serious limitation. To illustrate this, imagine a client issuing tickets that have a 1-in-a-million chance of $2 at a rate of 1 million per week. While on average there will only be 1 winner per week, there is a reasonable probability that the winning ticket will be issued on the first day or even in the first few hours. On the plus side, there’s also a reasonable chance the winner won’t pop up for a few weeks. Fortunately we believe there’s a fairly simple solution: clients can just deposit a multiple of the face value, thereby smoothing out the variance. If we model this as a binomial distribution and if the client has $20 in their account instead of $2, the chance of their balance being depleted twice as fast as expected is reduced from around 10% to about 2%.

## Payment Anonymity
Most nanopayment tickets do not “win,” and therefore would not be posted on-chain. However, rare winning tickets result in a public record on the Ethereum blockchain. Therefore, Orchid nanopayments are only pseudo-anonymous. For multi-hop circuits, it is anticipated that the Orchid client uses a separate account for each hop, which helps prevent anyone tracing the circuit using public payment information. As winning tickets are rare — anticipated to be approximately once per week in common circumstances — the public payment record from a multi-hop circuit is designed to appear essentially indistinguishable from that of a single-hop circuit. We expect that an adversary trying to trace the route will learn some of the payment providers associated with a payer’s public address, but the probability of two or more winning tickets to different nodes in the same circuit at the same time is vanishingly small, which reduces the traceability of transactions.

## Censorship resistance
As on most public blockchain networks, Ethereum transactions cannot be censored unless their validators (miners in the Ethereum network) choose not to include them in their created blocks. As blocks are mined randomly among all miners in proportion to hash power, the vast majority of miners would have to actively censor Orchid payments to significantly disrupt the Orchid Network. For example, if 90% of the hash power chose not to include Orchid-related transactions, the Orchid Network would still function, albeit with transactions taking, on average, ten times longer to confirm.

A more severe form of censorship would be possible if a large group of miners — say 51% — chose to censor Orchid-related transactions by rejecting blocks that included them. This would be valid according to the rules of the Ethereum protocol, and would effectively create a soft fork. However, organizing large-scale miner collusion to create such a soft fork carries significant risk of financial loss for the colluders; if the soft fork fails to achieve sufficient hashing power, the colluding miners would miss out on their block rewards. Even without the risk of financial loss, we consider this possibility extremely unlikely due to the decentralized nature of Ethereum mining communities and the lack of legal and regulatory limitations on blockchain mining strategies.

## Conclusion
We believe that Orchid nanopayments have advantages over existing payment channel solutions and are optimized to provide a continuous service to users. The reduction in transaction fees makes it possible to support up to millions of users, without requiring any upgrades to Ethereum itself. Setup costs are not pairwise, but are only incurred by the user to start. This means providers are expected to be able to immediately begin servicing users without incurring setup costs and users are expected to have the ability to switch between providers on a whim, which we view as a design requirement for a modern-day VPN application.

## Stay Up to date with Orchid
If you want to keep current on the latest Orchid news and be among the first to test out the network and use the Orchid Token, sign up to our newsletter for launch updates.

Website: www.orchid.com

Twitter: https://twitter.com/OrchidProtocol

Linkedin: https://www.linkedin.com/company/orchidprotocol/

Telegram (Announcements): https://t.me/officialorchidlabs

Telegram (Community): https://t.me/OrchidOfficial

Facebook: https://www.facebook.com/OrchidProtocol/

Medium: https://medium.com/orchid-labs

Github: https://github.com/OrchidProtocol

Reddit: https://www.reddit.com/r/orchid