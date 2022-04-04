---
templateKey: blog-post
public: true
url: gas-fees-explained-a-deep-dive-into-ethereums-transaction-fee-structure
title: "Gas Fees Explained: a Deep Dive into Ethereum’s Transaction Fee Structure"
date: 1649174400000
description: Ethereum gas fees play a key role role in the functioning of the network. But they also pose scalability challenges.
featuredpost: false
featuredimage: /img/uploads/OrchidBlog_GasFees.jpg
tags:
  - Ethereum
  - Blockchain
  - Decentralization
---
Ethereum is widely known as the largest smart contract-enabled blockchain in terms of its market capitalization, user base, and the size of its community of developers. But it has also gained notoriety for another distinction: its transaction costs, known as **gas fees**.

Indeed, many of Ethereum's users and developers have practically come to view high gas fees as part-and-parcel of the ecosystem—part of the cost of doing business—and high gas fees have demonstrably constrained the network's growth and scalability. They have served as a bottleneck preventing potential new users and developers from participating in Ethereum projects in the first place.

Ethereum's core developers have been working to address this problem for the past several years with the ongoing transition towards the network-wide software upgrade known as [The Merge](https://ethereum.org/en/upgrades/) (previously **Ethereum 2.0**, or **Eth2.0**.) The upgrade, which is expected to be completed by [the end of 2023](https://www.gfinityesports.com/cryptocurrency/ethereum-2-release-date-eth2-roadmap-phases-is-ethereum-2-new-coin-serenity/), promises to make Ethereum transactions both more efficient and less expensive. In March of 2022, the Proof-of-Stake algorithm that will be implemented during The Merge was successfully deployed on the Ethereum testnet, an event that garnered [much excitement](https://coingape.com/ethereum-proof-stake-pos-merge-successful-kiln-testnet/) in the Ethereum community.

But what are gas fees, and how do they really work? Why are they crucial to the design of Ethereum, and what has caused them to spike so much? It's a question many people are wondering, even if they may be hesitant to ask.

### Ethereum gas fees: a basic definition

Simply put, gas fees are the price that you pay to send a transaction or execute a smart contract on the Ethereum network. Every time you send ETH to someone else, for instance, you pay a gas fee. Similarly, every time you take an action that involves a smart contract—such as minting an NFT, participating in a crowdsale, or playing CryptoKitties—you'll need to pay a gas fee as well.

Importantly, the ETH paid in gas fees does not profit any centralized entity. There is no "Ethereum Inc." or "Ethereum LLC" that collects a cut of the fees that you pay. Rather, gas fees are paid to users known as **miners** for contributing the resources necessary to keep Ethereum running. You can therefore think of gas as the essential "fuel" needed to operate the network.

### How much does Ethereum gas cost?

Gas prices are denoted in small units of ETH called **gwei**, which is a portmanteau of the words giga and wei. Gwei is also sometimes referred to as **shannon**, after the American mathematician and computer scientist Claude E. Shannon, who is credited with laying the foundation for information theory.

Similar to the way that a dollar or euro is divided into a hundred cents, each ETH is divided into gwei. But instead of one hundredth (1/100) as with most fiat currencies, each gwei is equivalent to one billionth (1/1,000,000,000) of 1 ETH, or 0.000000001 ETH.For this reason, gwei is also sometimes referred to as **nanoether**. *Nano* is the prefix that denotes one-billionth of a whole. A gwei is equal to one billion [wei](https://www.thebalance.com/gwei-5194614), which is the smallest unit of measurement in the Ethereum ecosystem.

The amount of gwei contained in a single unit of gas can change quite a bit at any given time depending on supply and demand. When traffic on the network is relatively low, a unit of gas can cost just a handful of gwei. But when traffic is high, the cost of gas can skyrocket—for instance, for a short period in May of 2021, a single unit of gas cost nearly 300 gwei.

In addition to determining the amount of gwei contained in each unit of gas, determining the cost of an Ethereum transaction also depends on what the transaction is for. Transactions that are relatively simple—like sending ETH from one wallet to another—do not take as much gas as more complicated activities, like purchasing ERC-20 tokens or NFTs, playing P2E games, staking ETH, and other smart contract-related actions. 

Paying the right amount of gas for different activities on Ethereum involves setting a **gas limit**. This is an approximation of the total amount of gas it will take to fuel your transaction. Getting this amount right is no easy task, so most wallets and applications will set the Gas Limit for you. Typically, 21,000 Gas will satisfy most simple, wallet-to-wallet ETH transactions. However, depending on how expensive gas is at any given time, even a simple transaction like this can cost tens—or even hundreds—of dollars. At one point in May 2021, the cost of the average Ethereum transaction [surpassed $70](https://cointelegraph.com/news/ethereum-s-average-and-median-transaction-fee-slip-lowest-in-six-months).

### How are gas fees calculated?

Prior to Ethereum's [London Hard Fork](https://blog.orchid.com/a-postmortem-on-the-london-hard-fork/), a mini-upgrade that took place in August of 2021 in preparation for The Merge, the formula used to determine the cost of a transaction was **gas units (limit) * gas price per unit**. So if a transaction's gas limit was 21,000 units with a gas price of 200 gwei, its gas fee would have been calculated as (21,000 * 200) = 4,200,000 gwei (0.0042 ETH).

Under this fee structure, there were no minimum or maximum transaction costs—the price of gas was completely determined by supply and demand in the network at any given time. This made gas fees extremely volatile and difficult to predict. If network traffic unexpectedly increased, the price of gas would spike, causing transaction fees to jump suddenly.

The London Hard Fork aimed to alleviate some of this unpredictability by changing how gas fees are calculated. It introduced a **base fee**, which is the minimum price per unit of gas that a user has to pay if she wants her transaction to be included in a block. In other words, the base fee is the lowest amount that a user can pay to ensure her transaction will be processed relatively quickly. Ethereum automatically calculates the base fee based on the demand for block space at any given time.

In addition to the base fee, users are also expected to include a **priority fee** that will be included in the cost of their transactions. This priority fee helps determine how quickly a transaction will be processed. Most Ethereum-compatible digital wallets will help users by automatically determining where priority fees should be set.

To calculate the cost of an Ethereum transaction today, the base fee is added to the priority fee, which is then multiplied by the gas limit. The formula looks like this: **gas units (limit) * (base fee + priority fee)**. Therefore, if a transaction's gas limit is 21,000 units, and the base fee is 100 gwei, and the priority fee is 10 gwei, the total amount of gas needed to send 1 ETH would be 0.00231 ETH (21,000 * (100 + 10) = 2,310,000 gwei).

### Where do gas fees go?

Notably, the London Hard Fork's introduction of a base fee into Ethereum transactions has had important implications for the network's token economics. This is because the ETH used to pay the base fee is destroyed or **burned**.

This so-called "burn mechanism" is intended to act as a **deflationary force** on the price of ETH. Prior to its introduction, the circulating supply of ETH was growing at a rate of [four percent](https://finbold.com/ethereums-annual-inflation-rate-is-10-higher-than-doges/) per year. While London did not place a cap on the amount of ETH that can exist at any given time, the burn mechanism is expected to limit the supply of ETH to roughly 119.3 million. This has caused some analysts to believe that ETH could be more effective as a [store of value](https://twitter.com/ultrasoundmoney?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor) in the future. And while much of the Ethereum community was happy with this change, one very important constituency has been less sanguine: **miners**.

Currently, miners have the essential job of making sure that Ethereum transactions are successfully completed. They accomplish this by contributing computing power in exchange for token rewards. And these token rewards, as already explained, are generated through gas fees.

Before the implementation of the London Hard Fork, miners would receive **all** of the gas fees for each of the transactions they processed. And since miners are able to select the transactions they wished to process, they were much more likely to choose those that had higher payloads. Knowing this, users who wanted their transactions processed more quickly would increase the amount of gas they paid for each, making them more attractive for miners. In moments of high network traffic, this resulted in **gas wars**, in which Ethereum users were essentially outbidding each other to get their orders processed first. And while these moments were problematic for most Ethereum users, they could be very profitable for miners.

Just before the London Hard Fork was deployed on Ethereum in November 2021, a number of analysts argued that the changes it introduced to the network's transaction fee structure would ultimately drive costs down. But several months after London's implementation, Ethereum fees are still relatively high. But because the base fee is destroyed, miners aren't earning as much profit as they were prior to London's implementation. Today, the only payout that miners receive is the priority fee.

### The future of gas fees

Although users no longer have the ability to change the amount of gas they pay directly to miners, they do have the ability to set higher priority fees. And while miners can no longer select transactions based on the total amount of gas being paid, they can still selectively process transactions that have higher priority fees attached to them—the higher this "tip" is, the quicker the transaction will be processed.

This priority fee system is the main reason Ethereum transaction fees did not significantly decrease after the implementation of the London Hard Fork. Although miners do not earn as much ETH as they did before London, they still have the option to choose transactions that are more profitable for them. And while "gas wars" don't happen in exactly the same way they used to, users are still trying to outbid each other's priority fees.

Importantly, the decrease in mining profits that occurred as a result of the London Hard Fork is a step toward the planned obsolescence of miners that will come as a result of [The Merge](https://ethereum.org/en/upgrades/) software upgrade.

When The Merge is completed, Ethereum's **consensus algorithm**—the system that is used to verify transactions on the network—will switch from **Proof-of-Work (PoW)**, which relies on computing power to determine who processes transactions, to **Proof-of-Stake (PoS)**, which relies on the amount of ETH that users have "locked" in smart contracts to choose transaction processors. In this case, "locking" ETH for staking purposes refers to the process of agreeing to keep ETH inside the Ethereum ecosystem in exchange for the ability to earn rewards for validating transactions. Users who have committed to this process are called **stakers**.

### Gas fees and Orchid

Ethereum's switch to Proof-of-Stake promises to drive transaction costs down significantly. But until this shift is complete, developers and users alike have been identifying other ways of making the Ethereum ecosystem more affordable for users. One of the best solutions is to deploy multiple blockchains; those compatible with the **Ethereum Virtual Machine (EVM)** are capable of running dApps that were originally created for Ethereum, but with the benefit of lower transaction costs. Transactions on some EVM-compatible chains cost [nothing at all](https://hackernoon.com/zero-cost-blockchain-transactions-are-a-reality-on-polkadot).

To make Orchid's decentralized VPN marketplace as accessible as possible, we've deployed Orchid on [eight EVM-compatible chains](https://blog.orchid.com/orchid-nanopayments-now-streaming-on-8-blockchains/). This level of multi-chain compatibility gives users a wide range of alternatives to high gas prices on Ethereum, enabling people all over the world to benefit from the most competitive network fee pricing available. Through these EVM-compatible blockchains, people can use Orchid for [as little as $1](https://blog.orchid.com/starting-today-it-only-costs-1-to-get-started-with-orchid/)—bringing us closer to fulfilling the vision of making a free and open Internet accessible to everyone, everywhere.

[Download the Orchid app](https://www.orchid.com/download) today to start exploring the Internet freely.