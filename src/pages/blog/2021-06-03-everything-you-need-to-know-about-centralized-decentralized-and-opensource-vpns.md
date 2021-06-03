---
templateKey: blog-post
public: true
url: everything-you-need-to-know-about-centralized-decentralized-and-opensource-vpns
title: Everything you need to know about centralized, decentralized, and open-source VPNs
date: 1622721600000
description: VPNs are an essential tool for Internet privacy. But not all privacy tools are created equal, and it’s important to understand the differences between them in order to make informed choices.
featuredpost: false
featuredimage: /img/uploads/OrchidBlog_VPNvsVPNvsVPN-tiny.png
tags:
  - VPN
  - Decentralization
---
VPNs are an essential tool for Internet privacy. But not all [privacy tools](/whats-the-best-vpn-for-crypto-users/) are created equal, and it's important to understand the differences between them in order to make informed choices. No one, for example, should trust a VPN claiming to offer "free" services. But there are considerations that go beyond revenue models, reaching into the technical architecture of a VPN itself. Key distinctions to consider are whether a service is centralized or decentralized, and whether its technology is open-source. What do we mean by this?

Before we dive into the differences between centralized and decentralized VPNs, and the role of open-source software, it's worth taking a moment to recap how VPNs work.

A VPN acts as an intermediary between Internet users and the web. When you use a VPN, Internet traffic that originates on your device is encrypted and sent anonymously through the VPN's server before reaching its final destination. The opposite is also true: data that is sent from a website is routed through your VPN on its way back to you.

On a basic level, both centralized and decentralized VPNs provide this service. The fundamental difference between these two has to do with control and connection.

Centralized VPNs are controlled and operated by centralized entities (usually private companies). These companies provide their users with access to a set of private servers through which their VPN is operated. What are the implications of this? Let's get into the details.

**Centralized VPNs rely on static connections**

When you use a centralized VPN, your data packets are sent through the provider's centralized servers. On a practical level, this means that if the provider's network experiences problems, those problems are passed on to the VPN's users. Because the provider is, by definition, restricted to a set number of VPN servers, a problem that affects even a small part of the network can cause congestion.

Imagine this: Centralized VPN Provider XYZ has 20 servers that support 10,000 users. One night, ten of the servers are suddenly compromised. Because the provider's network relies on a static connection, the 10,000 users are then forced to use the 10 servers that are still active.

As a result, each of the users' connections operates at half speed. Users can try to solve this problem by switching to another private server in Provider XYZ's network, but they cannot switch providers. Thus, they are stuck with slow connection speeds until the problem is resolved.

The static connections that centralized VPN providers rely on are based on a flat, monthly, "use-it-or-lose-it" revenue model. Because of this fixed payment structure, the network has no incentive to respond dynamically to changes in user demand. Simply put, the network uses static connections offering a fixed amount of capacity to offer the same amount of bandwidth at all times of the day, regardless of demand.

Finally, while centralized VPNs do protect your data from onlookers and hackers, the VPN provider itself can still see the full picture. And if the service decides to keep records of your data, these records could be compromised: the data could be stolen by hackers, sold to advertisers, or shared with government offices.

**How decentralization strengthens privacy and performance**

There are, then, some fundamental weaknesses inherent to the structure of centralized VPN servers. Even the most reputable and reliable centralized VPN providers can be vulnerable to hacks, exploitation, or government interference, and are most likely not offering bandwidth in the most efficient or dynamic way.

By their very nature, **decentralized VPNs** offer solutions to some of these problems. Rather than relying on a static connection, decentralized VPNs use **dynamic connections**: flexible, distributed networks of independently-operated servers. As such, a decentralized VPN is able to leverage a wide universe of trusted, high-quality providers. This larger number of secure servers can allow decentralized VPNs to operate more efficiently and securely than a centralized VPN.

Decentralized VPNs also have economic incentives that are opposed to those of their centralized counterparts: the more they scale up, the more revenue they are likely to earn. And since more providers are likely to be behind a decentralized VPN, the chance that any number of them will attempt to very quickly respond to demand for bandwidth is much higher than with a single, centralized VPN service.

**Why are decentralized VPNs more secure than centralized VPNs?**

Because there are more, and more widely distributed, servers available to decentralized VPNs than to their centralized counterparts, the path of a user's data is more random: it has more possible paths to choose from. This randomness makes user information more difficult for would-be trackers and hackers to exploit.

Additionally, because of the larger number of servers available to a decentralized VPN, the service is much more resilient. If some of the servers become compromised, there are still many other, independently operated alternatives for traffic to flow through. Therefore, if one connection dies or slows down, the other connections can compensate better than in the case of a centralized service.

Having access to so many different servers also means that a user's data can travel through the network more quickly. Bandwidth is only truly limited on the "near side" of the VPN tunnel. In other words, the speed of your data is limited by the speed of your personal Internet connection at the beginning of its journey.

On the "far side" of the tunnel, decentralized VPNs have the capability to distribute data across multiple channels. Not only does this speed up the connection; it also makes data more difficult to track.

Decentralized VPN networks can therefore be larger and more dynamic than centralized VPN networks. And if a VPN is also [**open source**](https://opensource.com/resources/what-open-source), a community of developers is actively contributing to the safety and resilience of its code.

**What is an open-source VPN?**

When software is **open-source**, its source code is freely available: anyone can view or inspect it at any time. The purpose of making [software open-source](https://www.orchid.com/about-us) is so that no single company or individual can control the "keys to the kingdom." Because anyone can inspect the source code, developers cannot hide any back doors that onlookers can use to access your data.

The concept of open-source software is decentralized in and of itself: instead of relying on a single authoritative source to audit and improve a piece of software, open-source software is audited and improved by a community of volunteers. Any developer can audit open-source code to ensure that there are no errors or vulnerabilities that may unintentionally leave your data unprotected.

On platforms like Github, volunteer developers can suggest changes and improvements that will make source code more secure. Some of these volunteers are individuals that contribute their own time. However, as a sort of community service, companies may also pay their employees to contribute to open-source code as part of their day-to-day duties.

Because so many different developers have the ability to audit and improve the code, open-source platforms tend to be more secure than those that run on closed-source software. Many decentralized VPNs run on open-source software. For example, Orchid's decentralized VPN source code is [freely available on Github. ](https://github.com/OrchidTechnologies/orchid)

**Decentralization, open-source software, and the development of the Internet**

The principles of both open-source software and decentralization are crucial to the future of Internet security and privacy. Their importance is particularly visible when we look at the ways in which the Internet has developed since its creation. The life cycle of the Internet so far tends to be divided as follows: **Web 1.0**, **Web 2.0**, and **Web 3.0**.

**Web 1.0**, also known as the "static web," describes the Internet in the first 13 years of its existence, from around 1991 to 2004. Tim Berners-Lee, the director of World Wide Web Consortium and the inventor of the World Wide Web, describes this phase as the "read-only" Internet. Users of Web 1.0 could publish information online; other users could search for this information and read it, but that was about it. The ability of Web 1.0 users to interact with the Internet was very limited.

If Web 1.0 was the "read-only" phase of the Internet, **Web 2.0** is the "read-write" phase. This stage of the Internet's development is also known as the "dynamic web." This is the stage that most of the Internet is currently in. In Web 2.0, Internet users can interact with one another. Instead of simply reading information that has been published on a website, users have the ability to contribute content of their own. This includes things like uploading YouTube videos, leaving comments on Facebook posts, and writing tweets on Twitter.

While the interactive elements of Web 2.0 have revolutionized the ways in which people share and receive information, this phase has also been characterized by massive Internet centralization. Much of the activity on Web 2.0 is **platform-centric**: centralized organizations mine their users' data in exchange for the users' rights to operate on the platform. Users also contribute content to platforms without receiving monetary compensation.

The developers of **Web 3.0**, however, imagine a more **user-centric** Internet. Instead of centralized platforms that mine data for profit, the Internet platforms of Web 3.0 will be decentralized -- primarily through the use of blockchain technology -- and premised on an economy that rewards users directly for their contributions.

Decentralization will also allow Web 3.0 to be far more interoperable than the Internet we know today. The centralized platforms of Web 2.0 have a strong incentive to keep their services closed and siloed: the more services a person gets from a single source, the greater the revenue and market power of that source. Therefore, keeping users in-platform for as long as possible is important to Web 2.0 businesses.

However, because Web 3.0 applications are decentralized, they are not financially incentivized to keep users in-platform. This promises to enable higher levels of interoperability across services and networks.

**Interoperability on Web 3.0 will support a new class of applications**

This higher level of interoperability promises to enable an entirely new class of web applications. Because decentralized networks rely on consensus mechanisms to operate, security is essentially "baked in": in order to manipulate a blockchain network, more than 50 percent of the computers or "nodes" that support it would need to be compromised.

Web 3.0 applications therefore promise to be much more secure than Web 2.0 applications. And decentralized applications are always open source. Since there is no single centralized authority, there is no incentive to keep source code private. This adds an additional layer of security and safety to Web 3.0 applications.

**Choosing the right decentralized VPN for your needs and budget**

Because decentralized VPNs operate on the principles of both decentralization and open-source software, they offer an unparalleled level of security. But when you're choosing which decentralized VPN to use, there are a few important things to consider:

- **Cost**: Ideally, a decentralized VPN should have a scaling cost model; people should not have to pay for bandwidth they don't use. At the same time, paying too little for any VPN service can be a red flag. There's no such thing as free lunch: if a VPN is offering its services at no cost, it's likely that the VPN is collecting and selling your personal information.

- **Bandwidth**: If you're a private individual that uses a VPN for casual browsing, you aren't going to need the same level of bandwidth that a major corporation would need. Conversely, if you're trying to broadcast video over a VPN, you will likely require significant bandwidth in order to have a positive experience. Choose a decentralized VPN provider that can provide you with the appropriate amount of bandwidth that suits your specific needs.

- **Ease of use**: Depending on what you're using your VPN for, you may require varying degrees of customization. Ideally, a VPN's user interface should include statistics and a real-time dashboard. Other options might include the ability to optimize bandwidth for certain streams or ports (such as gaming, streaming videos, or transferring large files).

- **Compatibility**: If you're a casual Internet user, your VPN's capabilities for interoperability may not be an issue for you. However, if you are planning on using your decentralized VPN with roaming clients or other pieces of software, be sure to check whether a particular provider's VPN is compatible with the software you'd like to use.

Orchid brings leading providers together through a unique, decentralized privacy marketplace. You purchase bandwidth on a pay-as-you-go basis, so you will never pay for capacity that you don't use. There are no monthly fees or minimums. And Orchid's native digital currency, [OXT](https://www.orchid.com/oxt), and innovative payments system known as [probabilistic nanopayments](/introducing-nanopayments/) are designed to ensure Orchid users can rely on fast, consistent connections and download speeds.

People can get started on Orchid for [as little as $1](/starting-today-it-only-costs-1-to-get-started-with-orchid/). Through [in-app purchases](/get-started-with-orchid-on-android-for-just-1/) on Orchid's mobile and desktop applications, [it's easy](/how-to-start-using-orchids-crypto-vpn-in-seconds/) to set up an Orchid account [with an ordinary credit card](/why-orchids-in-app-purchases-are-a-game-changer-for-dapp-usage/). By making privacy affordable, accessible, and fast, Orchid's decentralized VPN network is helping reclaim the Internet as a place of freedom and curiosity.

[Download Orchid](https://www.orchid.com/download) today to start exploring the Internet freely.