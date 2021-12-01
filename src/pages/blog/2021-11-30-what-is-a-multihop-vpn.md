---
templateKey: blog-post
public: true
url: what-is-a-multihop-vpn
title: What is a Multi-Hop VPN?
date: 1638273600000
description: In a world of widespread Internet surveillance and non-consensual data collection, maintaining online privacy is more important than ever. Using a multi-hop VPN is one of the easiest and best ways to protect your personal information. These services encrypt data and route it through multiple servers to prevent tracking. In this article, we’ll explore more about what multi-hop VPNs are, why they’re so effective at maintaining privacy online, and how they work.
featuredpost: false
featuredimage: /img/uploads/OrchidBlog_MultiHop.jpg
tags:
  - VPN
  - Privacy
  - Decentralization
---
In a world of widespread Internet surveillance and non-consensual data collection, maintaining online privacy is more important than ever. Using a **multi-hop VPN** is one of the easiest and best ways to protect your personal information. These services encrypt data and route it through multiple servers to prevent tracking. In this article, we'll explore more about what multi-hop VPNs are, why they're so effective at maintaining privacy online, and how they work.

## What are VPN "hops"?

Anytime someone visits a web page, searches for something on Google, or takes any other action online, they are sending data from their home device to an online server somewhere else in the world. Without a VPN, this transfer happens directly: the user's Internet Service Provider (ISP) can see which websites they visit. At the other end of the journey, the receiving server can see the data being sent, as well as other identifying data regarding who sent it (such as [IP addresses](https://en.wikipedia.org/wiki/IP_address).)

Certain information is visible to third parties as well. On the surface, the fact that these entities can see your data may seem harmless. But since your information is exposed, there is real risk. And while this may not lead to an immediate problem, data could eventually be exploited for any number of reasons, from the commercial to the criminal.

This is where VPNs come into the picture. When you use a VPN, your data takes a detour on the way from your device to its final destination. After departing its point of origin, the data is routed through the VPN's server before completing its journey.

This process protects data in a couple of ways. It hides it from onlookers by encrypting the data while it travels, and disguises the user's IP address so that the receiving server cannot determine where it originated. The same process is repeated in reverse order for data that is sent to your device.

## How do VPN hops protect user data?

Each instance of data being routed through a new server in this way is called a **hop**. Most VPNs offer their users just one hop. Other VPNs use **double-hop authentication**, which place *two servers* between the data's origin and endpoint. A **multi-hop VPN** allows users to send their data through *more than two* different servers.

It's important to note that while hops conceal the nature of your browsing data, they do not hide the volume of it. No matter how many hops you have in your VPN connection, your ISP will still see *how much* web traffic you generate. Therefore, if your ISP is [throttling traffic](https://blog.orchid.com/vpn-lag-its-a-drag/) based on the amount of bandwidth you're using, a VPN will not solve the problem.

In addition, while VPN hops can hide the nature of web browsing from ISPs and website operators, the traffic is not completely private or anonymous. VPNs themselves have access to their customers' browsing data, and can view and record it if they so choose. This practice, known as "logging," is unlikely if you use a high-quality VPN, since customer privacy is a high priority and logging would quickly lead to a loss of reputation in the market.

Nevertheless, relying on a VPN is still an exercise in trust. Users must rely on service providers to follow through on their privacy promises. The best way to determine whether a VPN is trustworthy is to do plenty of due diligence. And you get what you pay for—"free" VPN services [often take payment](https://blog.orchid.com/whats-the-best-vpn-for-crypto-users/) in the form of your personal data.

## Double-hop vs. multi-hop VPNs

If you're seeking a higher level of security, it's a good idea to choose a multi-hop VPN. Single-hop VPNs offer just one layer of protection between users and potential malicious actors. And while it's unlikely that a hacker could trace the original IP address of data sent through a VPN server, it's not impossible. If there's just one hop between the origin and endpoint of the data's journey, someone determined to trace the data would only have to hack through one server.

Moreover, VPNs, like all digital services, are prone to periodic errors and outages. If this happens, your VPN may unintentionally expose your data—a phenomenon known as data [leakage](https://blog.orchid.com/how-to-make-sure-your-vpn-is-working-properly/). If you only have a single-hop configuration, your data is now exposed. Similarly, if the server is compromised, your data could be immediately [exposed to ISPs](https://www.privacypolicies.com/blog/isp-tracking-you/), government agencies, network administrators, websites, apps, or malicious actors.

Just as single-hop VPNs route your data through one server, double-hop VPNs route data through two servers. For example, on a double-hop VPN, your device could establish an initial encrypted connection with a server in Italy. While maintaining the connection to this server, a second encrypted connection occurs between the server in Italy and a server in Singapore. This second connection acts as an additional layer of protection. Even if the Italian server was compromised, the encryption between your device and Singapore still guards your data.

This method hides the source of the connection from the exit server while concealing the final destination from the initial server. The exact locations of these servers depend on the VPN provider that you're using—some providers allow users to choose where both servers are based, while others allow users to choose the locations of one or neither. The level of encryption used in double-hop connections also depends on the provider—some providers may not re-encrypt data at each hop it passes through.

Crucially, double-hop VPNs *are not* private internet multi-hop VPNs, even though some of them may advertise themselves as such. Double-hop servers will always have just two hops, while multi-hop servers have more than two. More importantly, services that offer a double-hop configuration still control both the servers involved, meaning the VPN itself still has full visibility into users' Internet activity.

## How do multi-hop VPNs protect privacy?

The more servers that data passes through on its journey across the web, the more difficult it is to trace. This is the main reason that a multi-hop configuration is more secure than a single or double-hop alternative: it uses multiple layers of obfuscation and encryption to protect data. Moreover, multi-hop services can route traffic between different VPN providers, meaning no single party—including the VPN—has full visibility into a user's activity.

How do multi-hop VPNs operate on a practical level? Recall the double-hop VPN example that linked your device with two servers in Italy and Singapore. A multi-hop VPN has the capacity to add even more layers of security. After establishing connections with servers in Italy and Singapore, for instance, a multi-hop VPN could route data through additional servers in the United States, India, and South Africa. Therefore, in order to trace data back to your device, an onlooker would have to make their way through five (or more) different servers located across the globe—a very difficult task, if not completely impossible.

Multi-hop VPN routes also make it more difficult for onlookers to spy on data while it travels across the web. Only the operators at the origin and destination point can see any meaningful information—specifically, the source and destination of web traffic. The hops in between these two can only see encrypted traffic. While this doesn't completely prevent service providers from accessing your data, it can render any data they collect effectively useless. Through the multi-hop encryption process, this data has effectively been put through a metaphorical "shredder."

But if your data's entire journey from entrance to exit takes place through servers controlled by the same VPN provider, that provider still has *full visibility* into your activity. For a multi-hop route to truly enable meaningful improvement in user privacy, the servers that traffic travels through should come from different sources. True multi-hop configurations allow users to route their web traffic not just through multiple servers but across different VPN providers. This capability is crucial for stronger privacy, since it makes it nearly impossible for any single third-party—including the VPNs themselves.

## VPNs, encryption, and onions

Multi-hop encryption generally uses a "tunnel within a tunnel" mechanism—also known as an [onion route](https://en.wikipedia.org/wiki/Onion_routing)—to encrypt data. When someone uses a multi-hop VPN, their data is first encrypted on its device of origin according to the number of hops in its route (e.g., 3 hops = 3 layers of encryption; 4 hops = 4 layers of encryption).

With each additional hop, layers of encryption are removed in the reverse order that they were applied. In other words, the outermost layer of encryption is "peeled away" first, much like the outer layer of an onion. Eventually, the data is fully decrypted before arriving at its destination. This makes it more difficult for onlookers to correlate outgoing traffic with incoming traffic. The onion architecture was pioneered by Tor, an open-source privacy-focused browser.

While data routed through multi-hop VPNs are more secure than data routed in single or double-hop VPNs, there is a tradeoff in terms of speed. The more hops involved, the longer it takes for data to travel to its final destination. If speed is a priority for you, it may therefore be beneficial to use your VPN's **[split-tunneling](https://blog.orchid.com/what-is-split-tunneling/)** feature.

Split-tunneling allows you to select which data will be routed through the VPN and which will not. For example, you could send sensitive financial transactions through your VPN, while simultaneously streaming video on a non-encrypted connection.

Notably, there are some situations in which split-tunneling can make sensitive data more vulnerable. For example, in a corporate environment, split-tunneling could allow employees to evade company safeguards or bypass software that tracks their activities and blocks certain kinds of content. In remote work environments, a hacker could exploit an unsecured home network to hack into a VPN's open channel and infect the employee's computer in order to gain access to the VPN's secure channel. Therefore, in situations when personal data contained on a device is highly sensitive, users may wish to run all of their data through a VPN's secure tunnel.

## Orchid's multi-hop VPN solution

Orchid's unique VPN marketplace offers true multi-hop capability. Users can configure an unlimited number of hops between the many [leading VPN providers](https://www.orchid.com/partners/) Orchid partners with. Notably, **Orchid is the only VPN service that allows users to include external servers in their multi-hop circuits**: besides Orchid-based hops, users can [add OpenVPN and Wireguard servers](https://docs.orchid.com/en/v0.9.8/using-orchid/) to their setups.

This feature grants Orchid users a higher level of security than VPNs that only include hops from a single provider. No other VPN service allows for the inclusion of hops from other providers—the closest comparison is Tor, which routes user data through three hops from different service providers before exiting.

And Orchid's decentralized VPN marketplace makes it easy for users to create multi-hop VPN routes on their desktop computers and iOS/macOS & Android devices. Anyone can configure a multi-hop connection on Orchid. To get started, use the app's menu to navigate to the circuit builder interface. Select "add new hop" to connect a new server to your connection. There is no limit to the number of hops that users can incorporate.

<p style="text-align: center;">
<img src="https://lh6.googleusercontent.com/4ZEXwycIxD8UEvMP3fiBIv_yMmGldN5VpnWb8gKFtZJfWKoD9kj9oSr8p3TCEhpabl3T25-20A-VMC8oONTW0xMLEKwDb1EDANdBaQ0mbHc-bmceGQYVv44f8822J9kAQezdgABO"
  style="max-width: 240px; margin: auto;" />
<br />
<a href="https://blog.orchid.com/orchid-0935-gives-you-more-control-than-ever-when-you-use-the-internet/">Source</a>
</p>

Just as it's easy to set up multi-hop connections on Orchid, it's also easy to pay for them. 

With the release of [Orchid 0.9.35](https://blog.orchid.com/orchid-0935-gives-you-more-control-than-ever-when-you-use-the-internet/), people can now start using Orchid with an easy one-tap purchase feature that streamlines the onboarding process.

Using the one-tap process, people can purchase pre-paid Orchid accounts and create single-hop circuits from the app's home screen. It's easy to pay for multi-hop connections, too --  they can be purchased with prepaid xDAI accounts along with OXT, Orchid's native digital asset. Anyone with an ordinary credit card can purchase a prepaid xDAI account for [as little as $1](https://blog.orchid.com/starting-today-it-only-costs-1-to-get-started-with-orchid/)—and with Orchid's unique system of [probabilistic nanopayments](https://medium.com/orchid-labs/probabilistic-nanopayments-4aa423c3f22f), users only pay for the bandwidth they use with **no monthly fees or subscriptions**.

Ultimately, each user must decide what level of performance they require and how much online risk they are comfortable with. With its robust multi-hop circuit capabilities, Orchid brings together many leading VPN providers within a single decentralized privacy marketplace.

Privacy is Orchid's mission. Our team is constantly working to build tools that allow people to choose how their data travels online. Orchid's flexible multi-hop interface is an essential part of this objective—it gives users complete control over their devices' Internet connections.

[Download Orchid today](https://www.orchid.com/download) to start exploring the Internet freely. [Click here](https://github.com/OrchidTechnologies/orchid) to view Orchid's source code on GitHub.