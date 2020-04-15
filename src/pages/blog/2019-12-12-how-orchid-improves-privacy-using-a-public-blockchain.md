---
templateKey: blog-post
public: false
url: how-orchid-improves-privacy-using-a-public-blockchain
title: 'How Orchid improves privacy using a public blockchain'
date: 1576154856651
description: 'Orchid is an incentivized privacy network, Open Source project and consumer VPN service aimed to deliver new levels of privacy. But what does privacy mean? How private is Orchid, which relies on pseudo-anonymous payments on Ethereum?'
featuredpost: false
featuredimage: /img/Orchid_BlogPost_Privacy.png
tags: 
    - Privacy
    - Blockchain
    - VPN
---

*Orchid is an incentivized privacy network, Open Source project and consumer VPN service aimed to deliver new levels of privacy. But what does privacy mean? How private is Orchid, which relies on pseudo-anonymous payments on Ethereum? In this post, we explore the concept of “privacy” and how Orchid leverages multiple innovations to deliver on its goals.*

## What do we mean when we say privacy?
One of a typical VPN app’s central UI features is a prominent “on/off” button. The simple two state design will feel familiar to anyone who uses a VPN. It makes for a simple user experience in which it is obvious to people whether or not the VPN is engaged and they are receiving the benefit or not.

But in truth, privacy is more nuanced than a simple binary of “on” or “off”. It’s a spectrum. Different users have different objectives and use cases for employing privacy tools. Some are trying to access content from a geography where that content is blocked. Others simply want to browse the Internet while keeping their identity and activity private. Even within private browsing, there are sub-use cases, depending on whom you want privacy from. Do you want to keep the medical condition you were researching private, so that your mobile carrier or home Internet provider can’t sell the data those websites collect to advertisers? Are you a political dissident in a country that would jail you for your views? The more sophisticated the organization and the harder they’re trying to track you, the more difficult it is to achieve privacy from them.

## Different use cases require different levels of privacy
To illustrate where various privacy needs and solutions fall relative to one another, it’s worth considering a few different use cases. At the most severe end, a person might be looking for privacy from an extremely sophisticated actor, such as a hostile government. This could be for a number of reasons, and we won’t get into the ethics of those here. One key point we would like to make is a technical one. A major government intelligence apparatus is exceedingly difficult to maintain privacy from. A fugitive -- Edward Snowden, for example -- could not depend on a VPN alone. Advanced state actors possess extremely sophisticated technical as well as legal tools, some beyond the abilities and understanding of commercially available security techniques.

VPNs can and do, however, play a vital part in protecting the privacy of dissidents, journalists, and others who are under threat from governments in many cases. In Venezuela, for example, they are an essential tool for opposition figures.

That said, most people want Internet privacy for far more quotidian and relatable reasons: either to access content that is blocked in a particular geography, or to protect themselves from being hacked or tracked as they browse the Internet day to day. In these cases, a VPN solves the problem by encrypting traffic, protecting a user’s IP address and by exiting in a different geography.

Take the example of a startup executive using a public WiFi network while on an airport layover. Hackers often take advantage of public, unsecured networks to steal sensitive information from unsuspecting users. The executive in this example could -- should -- use a VPN to protect herself and her company’s intellectual property from the bad actors that may be lurking. In this case, the VPN adds a critical layer of protection.

## Enter Orchid: the Privacy Network
The Orchid network is a new kind of p2p network for privacy. Instead of relying on volunteers, Orchid uses financial incentives to align the actors in the system and reward healthy network growth. Enough supply and demand will exist on the network at launch to provide sufficient capabilities for users. Over time, Orchid can grow to the point that it offers network security beyond anything currently available. One thing is for sure: Orchid will take on a life of its own — it is permissionless, decentralized, and incentivized to grow.

The Orchid app is the first client side application that can harness the new Orchid network, allowing users to create VPN connections for privacy. The app goes further than a typical VPN in two important ways: by offering advanced features for multi-hop circuits, and by providing a monitoring tool to reveal insecure connections.

## What protections does the Orchid app provide today?
Standard Internet connections operate by transmitting packets of data. Different routers and physical infrastructure can see these packets as they move from the source to the destination Their owners are therefore in a position to build a profile of the Internet usage of their paying user (you!) They can also block content as they see fit. Typically these infrastructure owners are ISPs — mobile carriers providing phone data connections, home cable Internet providers, and WiFi hotspot operators. In all these cases, the ISP is in an advantaged position to monitor and/or restrict Internet usage. It is common in many countries for ISPs to restrict content so that users cannot load certain websites.

In Orchid, users gain privacy by configuring a single- or multi-hop circuit and funding it with OXT. With a single-hop circuit, Orchid:

- Prevents websites from seeing your real IP address and physical location;
- Prevents your ISP from seeing what websites you are visiting and when;
- Enables access to the open Internet--once a user can connect to Orchid, they are not restricted by ISP level firewalls and can browse the entire Internet freely.

A potential problem with using only a single VPN provider is that the provider running the single node circuit knows both your IP address and the content you are accessing. One solution is to trust no single provider with enough information to know both who you are and what information you are accessing. To that end, Orchid supports an advanced feature that allows users to configure multi-hop routes by stringing together multiple nodes into a flexible multi-hop circuit. Orchid currently supports several underlying protocols including the native Orchid VPN protocol and OpenVPN, allowing users to mix and match Orchid nodes with traditional VPN nodes.  While the potential is there to protect the user from any one provider knowing enough information to reveal their circuit, this is an advanced feature that is currently “use at your own risk”.

## Privacy and public payments
The Orchid app pays for it’s circuit by authorizing a continuous stream of tiny nanopayments to providers for the duration of the connection. While the [nanopayment architecture](https://blog.orchid.com/introducing-nanopayments) locks user funds into a smart contract and only issues on-chain payments to providers very rarely, occasional winning tickets result in OXT payments posted on the public Ethereum blockchain. When that happens, the user’s Ethereum address, the provider’s Ethereum address, and a timestamp are stored publically on the Ethereum blockchain. Note that the payment address of the provider is not a mapping to any single server; instead it is an arbitrary (and potentially temporary) payment address that the provider created specifically to receive funds. Also, the frequency of how often on-chain payments occur is configurable.

All information gained by a potential network attacker constitutes an advantage. However, consider exactly what information is revealed. For an Orchid user running a single hop circuit, the information revealed includes:

- The user’s payment address when service starts is seen by the provider
- The user’s real IP and destination addresses is seen by the provider
- When a rare on-chain payment is made, the user’s address and provider’s address are stored on Ethereum with a timestamp available to the public

When considering anonymity, it is important to understand if the user is linked to the OXT used in their circuit. Worst case, if the user purchased OXT on an exchange with their real identity, or the VPN provider used in the circuit maintained logs, then either of those two entities could be compelled to give information that could deanonymize the user. Similarly, a user who paid for a VPN service that maintained logs with a credit card could be deanonymized with that provider being compelled.

A multi-hop circuit affords greater network protections, but to setup a multi-hop Orchid circuit, it would be naive to pay for each hop from the same Ethereum wallet. In that configuration, each provider would be able to see that wallet’s address and potentially use that address to get information about the user. To mitigate that, a better way to setup multi-hop circuits would be to use different wallet addresses for each Orchid hop. If every wallet address is independently dissociated from the user, the full circuit might be quite difficult to link back to the user. Again, multi-hop circuits in Orchid are an advanced feature; use at your own risk.

Orchid is working on additional features to mitigate payment leakage, such as onion payment routing.  The idea of this technique is to help obfuscate payments by routing them through several layers of indirection (paying Alice to pay Bob to pay Charlie). The payments then take a different random route than the traffic, preventing the rare occasional public payment records from indirectly revealing route information.

## Orchid is a privacy movement
The goal of Orchid is to start a new network, ecosystem and Open Source movement to create new privacy tools with stronger protections and capabilities than we have right now. Our mission is to restore the open and accessible Internet for everyone. Please join us.