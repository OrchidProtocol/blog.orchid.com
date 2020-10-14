---
templateKey: blog-post
public: true
url: how-to-make-sure-your-vpn-is-working-properly
title: "How to make sure your VPN is working properly"
date: 1602684000000
description: "VPN leaks can jeopardize users’ privacy. Here’s how to find them and fix them."
featuredpost: false
featuredimage: /img/uploads/Orchid_BlogImage_VPNLeak.jpg
tags:
  - VPN
  - Privacy
  - Decentralization
---

Orchid is a decentralized VPN market designed to offer people the strongest digital privacy available. To do this, the platform brings together the services of the leading VPN providers and allows people to configure multiple "[hops](/what-is-a-hop/)" between them. This ensures that not even the individual providers have the full picture of users' web activity. Underlying this is a system of economic incentives, including [nanopayments](/introducing-nanopayments/).

Orchid believes in the power of VPNs to help people maintain privacy online. We've written before on how best to maintain online privacy and how important the right tools and habits are to staying safe on today's Internet. VPNs are a key component of these strategies; they obfuscate web traffic so that it cannot be monitored by websites, Internet service providers, or hackers lurking on an unsecured network. When used in combination, VPNs become even more powerful, since the "puzzle" of a user's web traffic is divided into even more pieces.

But how can we be sure a VPN is actually protecting our data? Like any service, VPNs are sometimes subject to errors. Even when the VPN is not at fault, there are certain situations where private information can inadvertently be made public. These developments are called "leaks," and their consequences can be severe and irreversible. That's why it's important to understand how and why VPNs go wrong, how to identify problems, and what to do about them.

There are a number of reasons why a VPN might leak. In general, higher quality, more reputable VPNs are less likely to experience this problem, but there is no true way to know without running a test. If you find a leak, immediate steps must be taken to rectify the problem. Below are some key facts about VPN leaks, how to test for them, and how to rectify them and ensure they don't happen in the future.

**How VPNs work, and why they leak**

VPNs route traffic through a separate, encrypted server, so web activity appears to travel to and from a different IP address than that of the user. From the point of view of an Internet Service Provider (ISP), identifiable traffic is initiated but appears to travel only to the VPN server. On the other end of the journey, the destination website sees visiting traffic as originating from the same encrypted server, rather than the user's actual IP address.

Imagine that a hypothetical person using a particular ISP in a particular country visits a website. Their ISP knows their location and can see that they are accessing the web, but nothing more. The destination website, on the other hand, knows that someone has visited, but it doesn't know who or where they are. The lack of an identifiable origin point is one of the reasons that VPNs allow people to get around geographic restrictions on web use.

While some VPNs provide better service than others, any of them can experience a leak -- just like even the best-built car can get a flat tire. A leak isn't in itself evidence of poor design or duplicity on the part of a VPN. Nevertheless, it's something that must be addressed and remedied immediately.

VPNs can leak in several different ways. These different types of leaks have different causes, ramifications, and remedies. Below are details on the most common -- and dangerous -- VPN leaks, how to check for them, and how to address them. People should be aware that in many cases, leaks aren't the result of a flaw in the VPN provider, but arise due to apps, plugins, or operating systems routing traffic through default servers rather than those of the VPN. For instance, we have highlighted elsewhere that using social media apps makes it much more difficult to maintain privacy, even with a VPN.

People interested in minimizing the risk of VPN leaks of all sorts, and of maintaining the strongest privacy online, should read our guides to [staying private while working remotely](/tips-for-protecting-your-privacy-while-working-from-home/) and [maintaining privacy on a mobile device](/how-to-protect-your-privacy-on-a-mobile-phone/).

**IP leaks**

An IP leak occurs when a VPN accidentally shares  a user's real IP address. Should such a leak occur, it poses a major problem to the user, since an IP address can be used to determine the real-world identity of anyone using the Internet. An IP leak means, fundamentally, you are no longer private: the websites you visit and services you use -- and the third parties with whom they share metadata -- can see who you are and where you're accessing the Internet from. This type of leak completely undermines online privacy.

If you discover an IP leak, your first instinct might be to blame the VPN. But in fact, IP leaks usually aren't the fault of the privacy solution itself. Rather, they develop due to issues in other software such as browser plugins or desktop or mobile operating systems. IP leaks can arise if plugins or apps are accessing the default server instead of the special VPN server. The VPN isn't leaking the info -- certain functions outside the VPN are simply defaulting to the normal channels. Many of the top VPNs are aware of this problem and include workarounds to minimize the risk of IP leaks.

The good news is that IP leaks can be relatively easy to spot. If you use a VPN to access a site or service that is blocked in your country -- and it's still blocked, even with the VPN switched on -- you may have an IP leak.

If you're not sure, there is a quick way to see if your IP address is being leaked. First, disconnect your VPN. Once you're sure it's switched off, go to Google and type "What is my IP address?" The search will reveal your true address. Now, turn on your VPN, and repeat the process. Google should now show you a different IP address, corresponding to the country the VPN is simulating. If it still displays your true address, you have a leak.

There are also a number of sites that provide free IP leak tests. [Tenta](https://tenta.com/), one of Orchid's VPN partners, has [one of the best](https://tenta.com/test/).

To minimize the risk of IP leaks, it's a good idea to use a VPN that offers a "kill switch" option. The term refers to a piece of code that monitors your IP address and, if it detects a change in activity, will automatically stop all Internet connectivity until the VPN is reactivated or you reset the network adapter. Orchid has a kill switch built-in and always enabled. And of course, configuring multiple hops with Orchid further mitigates the risk of an IP leak, since traffic is routed through multiple VPN providers. Even if one leaks, the others can still protect your identity.

**DNS leaks**

The term DNS refers to the Domain Name Systems that regulate web traffic. Whereas IP leaks relate to vulnerabilities at the origin of web traffic, DNS leaks concern its destination. DNS servers convert web domains into numeric values that are used as IP addresses (e.g., 111.222.333.444). Almost all ISPs assign a DNS server to their users to identify and log the web domains their customers are accessing. When you use a VPN, the privacy solution routes your traffic through a different DNS server, making it harder for the ISP to log you or for destination websites to see who or where you are.

In effect, a DNS leak is when DNS requests -- which occur every time you access a website -- are sent outside the VPN server, making it possible for your ISP to see which sites you visit. Where an IP leak can reveal your identity to the pages you access, a DNS leak lets your ISP see what sites you are browsing. Because they reveal the entire "picture" of a person's Internet use, DNS leaks are just as dangerous as IP leaks; both severely undermine online privacy.

As with IP leaks, DNS leaks usually are not the fault of the VPN itself. They can occur if an operating system, for instance, continues to access the default DNS server rather than the one assigned by the VPN. Unlike in the case of IP leaks, however, DNS leaks may not come with warning signs. Many services provide free DNS leak tests -- though it should be noted that in many of these cases, the test is offered by the same VPN that is being tested. For those who prefer to make the determination themselves, LiquidVPN, one of Orchid's bandwidth providers, also offers [a detailed guide](https://www.liquidvpn.com/ip-dns-browser-leak-test/) for identifying DNS leaks.

**WebRTC leaks**

Web Real-Time Communication, or WebRTC, is an open-source protocol that lets browsers establish real-time peer-to-peer connections with the websites you access. The protocol facilitates a great deal of web functionality; for example, it allows different users of a website to share a live audio/video feed without the need to download special software.

However, WebRTC contains a vulnerability through which browsers can inadvertently leak their users' true IP addresses, even when using a VPN. The reason for this is that the special communications channels the browser establishes with the website may share information, **including your IP address**, outside the normal routes -- potentially bypassing the VPN's encrypted tunnel.

Since a WebRTC leak is a form of IP leak, you can follow the steps outlined in that section to see if you have a problem. Use Google to find your true IP address with the VPN switched off, then try the query again with the VPN activated. If you see a different IP address the second time, you do not have a leak; if it's the same, you do.

The most straightforward way to stop WebRTC leaks is to disable WebRTC altogether; how to do this depends on the specific browser. (Guides such as [this one](https://mullvad.net/en/help/webrtc/) lay out the detailed steps involved.) But as with other areas of privacy, simply switching off may not be the most practical option. After all, WebRTC enables important functionality without which the Internet would be much less convenient.

Fortunately for those who prefer to stay as protected as possible while still enjoying the benefits of the Internet, many of the leading VPN providers have developed fixes that mitigate the risk of a WebRTC leak. And while none of these is totally foolproof, by configuring multiple hops on Orchid, people can greatly reduce their risk of having their data leaked and explore the Internet freely and confidently.

**As always, knowledge and good habits are key**

There is no perfect solution for online privacy, and there is no perfect protection against VPN leaks. But by arming ourselves with knowledge, and following the best privacy practices, we can go a long way toward mitigating some of the greatest risks to digital security. This is as true for VPN leaks as for any other aspect of privacy.

It's crucial, first, to understand the causes of leaks as well as the risks they pose. As discussed in the sections above, some leaks may come with warning signs, such as apps or websites that should work with a VPN still being blocked. But even if there are no red flags, it's a good idea to test your VPN regularly to make sure there are no undetected problems. If you detect an issue, take immediate steps to remedy it. Usually, this includes disconnecting and reconnecting the VPN and running the test again to ensure the leak is fixed. If the problem persists, it may be time to switch VPN providers.

No matter what, always use a high quality VPN. For the best online security, configure multiple hops with Orchid. This way, even if one VPN experiences a leak and reveals your IP address or DNS requests, your traffic will still be routed through multiple other providers -- as many as you wish to string together. Unless all of those providers also experience leaks, your traffic will still be private. The more hops a person configures, the less likely it is that their information will become publicly visible. This is one of the key ways Orchid is working to help reclaim the Internet as a place of freedom and curiosity.

[Download the Orchid app](https://www.orchid.com/download) today for iOS, MacOS, and Android.
