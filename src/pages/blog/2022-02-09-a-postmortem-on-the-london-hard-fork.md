---
templateKey: blog-post
public: true
url: a-postmortem-on-the-london-hard-fork
title: A Post-Mortem on the London Hard Fork
date: 1644408000000
description: Ethereum has long been considered the backbone of the decentralized application (dApp) world. As the first-ever blockchain with smart contract capabilities, it has the longest-lasting and most sizeable community of builders and users. And despite the fact that many more smart contract-enabled blockchains have appeared on the scene in the past several years, Ethereum is still the chain of choice for many dApp developers, non-fungible token (NFT) creators, and DeFi users. OXT itself is an ERC-20 digital asset, and we have previously outlined our reasons for choosing Ethereum.
featuredpost: false
featuredimage: /img/uploads/OrchidBlog_LHFpostmortem.jpg
tags:
  - Blockchain
  - Ethereum
  - Decentralization
---
Ethereum has long been considered the backbone of the decentralized application (dApp) world. As the first-ever blockchain with smart contract capabilities, it has the longest-lasting and most sizeable community of builders and users. And despite the fact that many more smart contract-enabled blockchains have appeared on the scene in the past several years, Ethereum is still the chain of choice for many dApp developers, non-fungible token (NFT) creators, and DeFi users. OXT itself is an ERC-20 digital asset, and we have previously outlined [our reasons for choosing Ethereum](https://blog.orchid.com/why-ethereum/).

However, while Ethereum's popularity has resulted in a robust community and numerous technological advances, there have been some growing pains along the way.

As the network's popularity has grown, so too has the amount of traffic passing through it. Over the past several years, transactions have become increasingly slow, and fees have skyrocketed—at one point in 2020, the average cost of an Ethereum transaction cost [peaked above $700](https://ycharts.com/indicators/ethereum_average_gas_price). Even though Ethereum was (and is) an attractive chain for both users and developers, it had begun to struggle to scale to serve the level of traffic it was experiencing.

![](/img/uploads/LHF_graph1.png)

<p style="margin-top: -15px; text-align: center;"><em>
  Ethereum's gas fees have grown exponentially over the last five years. (<a href='https://ycharts.com/indicators/ethereum_average_gas_price' target="_blank" rel="noopener">Source</a>)
</em></p>

These scaling challenges were not entirely unforeseen. Ethereum developers have been preparing to increase the network's scalability since 2014. Among other things, their plans include the introduction of shard chains, a smart contract upgrade, and an algorithmic transition from Proof-of-Work to Proof-of-Stake. Once completed, these changes will culminate in the full realization of the more efficient **Ethereum 2.0**, formerly known as **Serenity**.

When it was originally conceptualized, Eth2.0 was slated for a full launch in 2019. Over time, however, it became clear that the transition would happen more gradually. For instance, the Beacon Chain—the spine that will support the whole of the new Eth2.0 system—was not launched until [December of 2020](https://finance.yahoo.com/news/first-anniversary-ethereum-2-0-141232894.html#:~:text=The%20Ethereum%20community%20is%20celebrating,1%2C%202020.). To ensure that the switch to Eth2.0 is successful, the process has been divided into a number of smaller pieces—software upgrades known as **forks**.

### The London Hard Fork

In blockchain parlance, **forks** refer to what happens when the code running on the chain's supporting computers, or **nodes**, diverges from the main blockchain. There are two types of forks: **hard forks**, and **soft forks**. In a soft fork, transactions that were previously invalid become valid. Previously valid transactions remain so. In a hard fork, previously invalid blocks and transactions become valid, or *valid blocks become invalid*. In effect, a hard fork creates a clean break between a newer protocol design and its predecessor, requiring nodes to "choose" one or the other.

Because soft forks recognize the new blocks as valid, they do not require their supporting nodes to install software upgrades. But with a hard fork, all nodes or users are required to upgrade to the latest version of the protocol software in order to keep using the network.

All of the forks that are included on the pathway to Eth2.0 are hard forks—each of them is considered essential to reach the final outcome. For example, the **'Istanbul'** hard fork, which took place in [late 2019](https://consensys.net/blog/news/everything-you-need-to-know-about-the-istanbul-hard-fork/), was implemented to prevent spamming blocks and improve resilience against denial-of-service attacks. The next, called **'Berlin,'** took place in [April of 2021](https://www.coindesk.com/tech/2021/04/15/berlin-hard-fork-is-now-live-on-ethereum/), and introduced four different measures aimed at increasing the efficiency of transaction costs and improving network security.

The most recent upgrade, known as the [London hard fork](https://blog.orchid.com/what-the-london-hard-fork-means-for-ethereum-and-orchid/), took place in August of 2021. To this day, it is widely considered to be the most radical fork yet. It was intended to make the network capable of handling higher levels of traffic and to stabilize transaction fees, ultimately making Ethereum faster and more cost-efficient. The change was slated to be so radical that at the time, it was met with resistance by some factions within the Ethereum community --- most notably, miners, who were concerned that their ability to earn rewards would be negatively affected.

### What did the London Hard Fork do for Ethereum?

Despite the initial uproar around how the London hard fork would affect the Ethereum network, the upgrade seems not to have been as disruptive as many believed it would be.

Much of the excitement around the London hard fork seemed to surround just one of the network's five Ethereum Improvement Proposals (EIPs), known as [EIP-1559](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1559.md). Among other things, EIP-1559 affected how transaction fees, also known as **gas fees**, are determined on the network. Importantly, however, EIP-1559 did not affect the price of gas itself—rather, it changed the way that transaction fees are calculated. 

The cost of gas on Ethereum is denominated in small amounts of ETH called **gwei** (1 gwei = 0.000000001 ETH.) The cost of a single unit of gas can range significantly depending on how congested the network is at any given time. On a slow day, a unit of gas could cost just a few dozen gwei. However, on a busy day, the same unit can cost thousands of gwei.

This is why Ethereum transaction costs have historically been so volatile. The minimum amount needed for a simple, wallet-to-wallet ETH transaction on Ethereum is 21,000 units of gas. Depending on how expensive gas is, even a simple transaction such as this can cost [hundreds of dollars](https://ycharts.com/indicators/ethereum_average_gas_price). The cost increases for more complex kinds of transactions: buying ERC-20 tokens or NFTs, staking ETH, and other tasks that involve smart contracts require more gas, and therefore have higher minimum costs. 

### How did the London Hard Fork Lower Transaction Fees on Ethereum? 

Before the London hard fork, variance in the amount of network traffic alone was enough to produce massive volatility in Ethereum transaction fees. Costs could range from just a few dollars to a few hundred dollars. But gas prices were made even more volatile because of the way that fees were determined in practice: costs were based on an [auction system](https://discover.luno.com/ethereum-london-hard-fork-easy-on-the-gas-eyes-on-the-future/) in which users would bid on a mining price when sending a transaction. Miners would then choose which transactions they would process, opting for the most profitable bids. This would often result in so-called "[Gas Wars](https://coinmarketcap.com/alexandria/article/3-minute-tips-what-are-gas-wars)" that led to exorbitantly high fees. And because users couldn't set an upper limit on how much they were willing to pay for transactions, fees could be even higher than anticipated. 

The London hard fork switched Ethereum away from the auction model and towards a more predictable system. Today, there is a set minimum amount of gas required to send any transaction, known as a [base fee](https://ethereum.org/en/developers/docs/gas/). The network automatically calculates transaction fees based on demand for block space: if the amount of transaction data in a single block [exceeds a predetermined "gas target"](https://thedefiant.io/eip-1559-economics/#:~:text=EIP%2D1559%20will%20also%20increase,the%20base%20fee%20is%20lowered.), the base fee will increase by 12.5%, and vice versa. 

This new pricing mechanism is designed to prevent fees from unexpectedly spiking. And just before it went live, many believed that it would also serve to lower transaction costs across the board.The reality of how the London hard fork has affected transaction costs on Ethereum has turned out to be a bit different from the expectation. 

It's true that since the implementation of the hard fork, gas fees have not climbed as steeply as they did in the preceding months and years. But looking at the period from late May 2021 to late August (when London was implemented), transaction fees have not significantly decreased either. In fact, transaction fees in October reached higher levels than those seen in May, June, July, or August. Therefore, it now appears unlikely that the London hard fork will significantly lower transaction costs going forward. 

A look at historical gas price trends may suggest, however, that there have been fewer sharp price fluctuations since the implementation of the hard fork—potentially indicating that it has had a beneficial effect on volatility, even as average gas prices have not fallen as much as some had hoped.

![](/img/uploads/LHF_graph2.png)

<p style="margin-top: -15px; text-align: center;"><em>
  Ethereum's average transaction fees from January 2021 - January 2022. (<a href='https://ycharts.com/indicators/ethereum_average_transaction_fee' target="_blank" rel="noopener">Source</a>)
</em></p>

The London hard fork has also negatively affected mining revenue. This is because of the introduction of a so-called "burn mechanism" to the network's token economics, or tokenomics. The mechanism destroys, or "burns," the portion of each transaction fee equivalent to the minimum amount it costs to send the transaction, also known as the  [base fee](https://ethereum.org/en/developers/docs/gas/). The introduction of the base fee and the burn mechanism changed the way that mining rewards are calculated.

Before the London hard fork, transaction costs were determined according to the formula **Gas units x Gas price per unit**. Under this system, the miner who processed the transaction would collect the entire sum of the transaction fee.

>Imagine that **Sender A** sent 1 ETH to **Receiver B**. The transaction was processed by **Miner C**. The Gas limit is 21,000 units, and at the time of the transaction, the Gas price was 150 gwei. Therefore, the transaction fee would cost 3,150,000 gwei (0.00315 ETH.) The sum that **Sender A** would send would amount to 1.00315 ETH. **Receiver B** would receive 1 ETH, and **Miner C** would get 0.00315 ETH.

However, after the London hard fork was passed, transaction costs and mining rewards were calculated differently. The new equation multiplied the number of gas units times the base fee, plus an optional tip (**Gas units x (Base fee + Tip)**). And under the new rules, the base fee is burned.

>Imagine that **Sender A** will send 1 ETH to **Receiver B**, and the transaction is processed by **Miner C**. The Gas limit is 21,000 units, the base fee is 140 gwei, and **Sender A** includes a tip of 10 gwei. The total transaction fee and tip would cost 3,150,000 gwei or (0.00315  ETH.) Therefore, the total amount **Sender A** sends is 1.00315  ETH. **Receiver B** receives 1 ETH, and 140 gwei is burned, and **Miner C** receives just 10 gwei.

Therefore, by virtue of mathematics, this change did [significantly lower](https://www.tomshardware.com/news/ethereum-london-hard-fork-drastically-cuts-mining-profitability) mining revenue on Ethereum.

### Did the London Hard Fork Make ETH into "Ultra-Sound Money"?

However, while Ethereum miners were not happy about the introduction of the burn mechanism to the network's token economics, ETH "[hodlers](https://www.investopedia.com/terms/h/hodl.asp#:~:text=HODL%2C%20as%20an%20acronym%20for,term%20approach%20to%20cryptocurrency%20investing.&text=The%20prices%20of%20Bitcoin%20and,They%20simply%20HODL.)" as a whole viewed it as a positive change.

The fork introduced the first-ever deflationary force on the supply of Ether ($ETH). Before the implementation of EIP-1559, there was no set limit on the supply of ETH—new tokens minted to pay mining fees increased the total number of ETH to the tune of [4 percent](https://finbold.com/ethereums-annual-inflation-rate-is-10-higher-than-doges/) each year.

While the burn mechanism does not impose a set limit on the number of ETH that can exist at any given time, EIP-1559 is slated to limit the supply of ETH to a total of [119.3 million](https://ultrasound.money/). Some analysts believe that this will make ETH more effective as a store of value, with some proponents of the proposal referring to ETH as "ultra-sound [money](https://twitter.com/ultrasoundmoney?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor)." 

As of January 2021, there is possible evidence that ETH has become more effective as a store of value. While it is true that the amount of ETH in circulation has increased over the same period, the rate of its increase has [slowed](https://coinmarketcap.com/currencies/ethereum/#:~:text=How%20Many%20Ethereum%20(ETH)%20Coins,block%20on%20the%20Ethereum%20blockchain.). 

![](/img/uploads/LHF_graph3.png)

<p style="margin-top: -15px; text-align: center;"><em>
  The total amount of ETH in circulation. (<a href='https://ycharts.com/indicators/ethereum_supply' target="_blank" ref="noopener">Source</a>)
</em></p>

### Eth2.0 and Orchid

While the London hard fork may not have brought change to the network in the precise ways that some expected it would, it nevertheless marks an important step on the journey to Eth2.0. And though the Ethereum network of today is still experiencing scalability issues, the way forward is a little more clear. 

Orchid is proud to be a member of the Ethereum community. The five design principles that have guided Ethereum's development—Simplicity, Resilience, Longevity, Security, and Decentralization—are closely aligned with Orchid's mission to restore the Internet as a place of freedom and self-expression, leveraging decentralized, open-source technology to make online privacy available to everyone. 

To make this vision a reality, Orchid has designed its decentralized VPN marketplace to be accessible to as many people as possible. Orchid's app is supported by most [desktop operating systems](https://www.orchid.com/download/), as well as [iOS](https://blog.orchid.com/how-to-start-using-orchids-crypto-vpn-in-seconds/) and [Android](https://blog.orchid.com/get-started-with-orchid-on-android-for-just-1/) handheld devices. VPN service on Orchid is pay-as-you-go, so users never pay for bandwidth they don't use. [It costs just $1 to start](https://blog.orchid.com/starting-today-it-only-costs-1-to-get-started-with-orchid/), and people can pay [with nothing more than an ordinary credit card](https://blog.orchid.com/how-to-start-using-orchids-crypto-vpn-in-seconds/). And now, [Orchid's multi-chain capability makes the service much easier and cheaper for people to use](https://blog.orchid.com/orchid-nanopayments-now-streaming-on-8-blockchains/).

[Download Orchid](https://www.orchid.com/)  today to begin exploring the Internet freely.