---
templateKey: blog-post
public: true
url: staking-oxt-on-the-orchid-network
title: 'Staking OXT on the Orchid network'
date: 2020-3-17T16:47:36.651Z
description: "Orchid takes a unique approach to rewarding OXT stakers"
featuredpost: false
featuredimage: /img/uploads/Orchid_BlogImage_Staking.jpg
tags:
  - Orchid Protocol
---
The staking of OXT is an important component of Orchid’s design. Staking is a process whereby an asset is deposited and locked into an illiquid contract or mechanism in exchange for revenue or rewards.  On Orchid, providers stake OXT tokens in an Ethereum smart contract (the directory) to advertise their services to clients. Orchid users then select providers at random. The choice is weighted by proportional stake, so the probability of picking a particular provider is equal to their fraction of the total stake.

Staking in Orchid serves multiple purposes:
- The linear stake-weighted random selection mechanism allows clients to create decorrelated circuits immune to sybil attacks.
- Staking helps align incentives of bandwidth providers with the network, ensuring that they have “skin in the game.”
- Staking requirements create a simple natural load-balancing mechanism and advertising analogue

**Delegated Staking**

Any OXT holder can stake OXT tokens on a provider’s address, creating a form of “delegated staking.” There are no automatic benefits to staking on someone else’s behalf, but the staking mechanism could be combined with additional features, such as a revenue sharing contract between the staker and the stakee, to create an Orchid staking market.

Staking in Orchid is similar to proof of stake systems only in the sense of using stake as a linear weighting mechanism. In most proof-of-stake systems stakeholders can automatically earn revenue just by running nodes with stake.  Orchid has no such automatic mechanism, and has no inflation to fund staking. All income on Orchid comes from users paying for bandwidth -- there is no rent-seeking.

**Withdrawal Delay**

Staking in Orchid has an important intentional limitation: due to economic security concerns, there is a significant delay imposed on the withdrawal of staked funds. Staking is accomplished by calling the “push” function on the directory contract which transfers OXT from the caller to the contract, locking up those funds. Regaining access to the funds requires a two-step process.  First the owner calls “pull,” which removes the stake deposit entry and starts a pending withdrawal. Then after waiting through the delay period, the owner can call “take” to claim the funds, transferring them to any payable address.

The withdrawal delay is a flexible parameter that could be any value chosen by the staker when they first call push to deposit funds. However, clients can view the withdrawal delay parameter and filter on it -- ignoring stake deposit entries with withdrawal delays shorter than their acceptable minimum.  This allows the withdrawal delay to change if needed without requiring an update to the smart contract.  Currently the Orchid Client imposes a minimum three month withdrawal delay.

During the withdrawal process (after the call to pull, but before take can be called) the stake is unusable - as the pull function removes it from the directory tree. This creates a significant burden for stakers who may want to move their stake between providers, or just convert back to OXT for liquidity.

**Stake Rental**

OXT stakeholders looking for passive revenue could partner with Orchid bandwidth providers, staking on their address in exchange for a share of revenue or recurring payments -- using any on-chain or off-chain mechanism.

An Ethereum smart contract could be used to help automatically split revenue between a staker and a provider. The staker would stake on an instance of this “revsplit” smart contract, and the provider would then direct client payments referred from the corresponding stake deposit entry to that revsplit contract, which would then allow each party to withdraw some parameterized fraction of the funds.

Note that any such delegated staking arrangement (even using on-chain mechanisms) cannot guarantee that the provider will actually honor the contract: the provider could easily direct clients to a different payment address. And even if the provider is perfectly honest, there is still ultimately uncertainty in revenue and consequent return on stake.  

As an alternative to revenue sharing, providers could send recurring payments to the staker - essentially a stake rental or leasing arrangement. In this case the return is more predictable, but there is still no guarantee that the provider will make the scheduled payments. Again a smart contract could be used to help automate the payments, but can not guarantee the provider will have the necessary funds. There is always risk.

When a staker wishes to repoint their stake to a different provider, they are constrained by the withdrawal delay (currently about 3 months). So it is important for stakers to choose providers carefully. Stakers should start with small allocations and slowly increase them based on measured profitability.

Eventually third party websites could provide an interface to help simplify and automate the process of finding, evaluating and staking on Orchid bandwidth providers.

For more information about staking and Orchid’s token economics, read our [blog on stake weighting](https://blog.orchid.com/orchids-network-random-selection-stake-weighting/) and our [white paper](https://www.orchid.com/assets/whitepaper/whitepaper.pdf).

**Orchid is a privacy movement**

The goal of Orchid is to start a new network, ecosystem and Open Source movement to create new privacy tools with stronger protections and capabilities than we have right now. Our mission is to restore the open and accessible Internet for everyone. Please join us.
