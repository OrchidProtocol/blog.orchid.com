---
templateKey: blog-post
public: true
url: vpn-lag-its-a-drag
title: "VPN Lag: It’s a Drag!"
date: 1636027200000
description: There are many good reasons to use a VPN. These privacy solutions are an excellent way to prevent sensitive information—such as browsing data, financial histories, or private communications—from being exposed to third parties. VPNs have become essential for staying safe online, offering users much stronger opportunities for censorship resistance, and for freer exploration of the web than is possible when simply browsing the Internet unprotected. Particularly in places where website blocks have been put in place by Internet service providers (ISPs) or governments, VPNs can be an essential tool for accessing the Internet.
featuredpost: false
featuredimage: /img/uploads/OrchidBlog_VPNLag.jpg
tags:
  - VPN
  - Privacy
---
*How to understand and prevent latency on a VPN*

There are many good reasons to use a VPN. These privacy solutions are an excellent way to prevent sensitive information—such as [browsing data](https://blog.orchid.com/how-to-completely-clear-your-web-browsing-history/), financial histories, or private communications—from being exposed to third parties. VPNs have become essential for staying safe online, offering users much stronger opportunities for censorship resistance, and for freer exploration of the web than is possible when simply browsing the Internet unprotected. Particularly in places where website blocks have been put in place by Internet service providers (ISPs) or governments, VPNs can be an essential tool for accessing the Internet.

It is no overstatement, then, to say that VPNs have become a fundamental tool in safe and open Internet browsing. But the technology has trade-offs when it comes to Internet speed: because VPNs route traffic through at least one additional server, they necessarily slow Internet surfing speed—a phenomenon known as **VPN lag**.

On the Internet, **lag** (also known as **ping** or **latency**) refers to the period between user actions and server responses. The topic is frequently discussed in online gaming circles, for example, where even a few milliseconds of lag can have significant consequences for players. In the worst cases, high lag can cause ​​games to freeze or prevent player updates from happening in real-time.

And online games aren't the only place where lag can cause problems. Anyone who's ever participated in a voice-over-IP (VoIP) call, streamed video, or, in many cases, simply visited a website has probably experienced lag—and knows how frustrating it can be. Internet lag is particularly strong in geo-satellite Internet connections, which first route the signal to a satellite in a high synchronous orbit, before sending it to an ISP's ground location and ultimately its final destination.

Factors like server distance and congestion can cause high amounts of lag on any Internet connection, whether or not a VPN is activated. But VPNs can contribute to the amount of latency experienced. To understand why VPNs can cause lag, it's useful to understand a bit about how they work.

**What causes VPN lag?**

Each time someone visits a website, sends an email, or attends a Zoom meeting, their device sends and receives data through an Internet service provider (ISP). When you type a URL into your browser's search bar, a request is sent to the website's host server to load the page. This request can include information submitted intentionally (i.e., a user's email address, username, and password), as well as information that the user does not actively intend to share: IP address, location, and browser cookies, for instance.

VPNs protect privacy by routing traffic through an intermediary server, often referred to as a "tunnel." The VPN tunnel encrypts and anonymizes all of the information that is sent through it so that the ISP can only see a single encrypted connection for all Internet traffic. The tunnel also uses the  IP address of the VPN server that masks the location of its user.

The addition of this intermediary server is the main reason that using a VPN slows down connection speeds. The server is an extra step, or "hop," that data needs to travel through to reach its target destination. But the addition to the journey doesn't necessarily mean that data moves slower when it travels through a VPN—in fact, the leading cause of VPN lag has less to do with how data travels than with how centralized providers distribute bandwidth.

**How high volumes can cause "traffic jams" on centralized VPNs**

Just like cars on a packed highway, high volumes of Internet traffic cause lag on centralized VPN services. Centralized VPN services run many VPN servers that are all connected to high-bandwidth backbones; users pick individual servers.

But if lots of users pick the same VPN server, that server will become slow. VPNs can also become overwhelmed as a result of [too many people](https://www.techradar.com/news/the-vpn-traffic-jam) trying to connect at the same time. For example, if 1,000 users simultaneously attempt to connect to a server that can only handle 300 requests at a time, it will become overloaded—causing, in effect, a digital "traffic jam." In other words, networks can become congested when large amounts of traffic is passing through servers, slowing speeds dramatically. And while centralized providers do have the technical capacity to scale up, some choose not to since their fixed subscription models give them little incentive. Of course, practices vary widely across different providers.

The phenomenon is, in many ways, similar to a highway traffic jam. An early-morning or late-night trip, when there are few other travelers on the road, may be fast and efficient. But attempting to make it from A to B during rush hour is another story. And if there is trouble on the road and some of the lanes are closed, the problem becomes even worse.

When a VPN experiences a WAN error, its server begins queueing or dropping requests. This can significantly slow loading times for all of the VPN's users. Because centralized VPN providers can't flexibly add new servers to their networks, their users are stuck with slow connections during spikes in demand and have to pick servers that might be faster from the list of centralized servers the VPN provider is running.

**VPNs can help users avoid "throttling"**

It's no secret that ISPs regularly take steps to slow down certain types of online traffic artificially. The practice is so common that it has its own terminology: bandwidth throttling. In some cases, [ISPs employ this tactic](https://www.avast.com/c-how-to-stop-isp-throttling) to prevent server crashes. If traffic is exceptionally high at any given time, they may slow down the pace at which requests are sent and received. ISPs may also slow down a particular user's connection if they use [large amounts of bandwidth](https://surfshark.com/blog/am-i-being-throttled) or engage in certain types of online activity, [like torrenting](https://www.downloadprivacy.com/how-to-block-throttling-and-speed-up-your-torrents).

Sometimes, bandwidth throttling has purposes that are more cynical. Some ISPs have been accused of [slowing the loading speeds](https://www.theverge.com/2014/5/6/5686780/major-isps-accused-of-deliberately-throttling-traffic) of services offered by their competitors. For example, a provider that offers a paid streaming service may throttle the buffering rates of third-party services like Netflix and Hulu.

Some governments also use bandwidth throttling as a censorship tactic. Instead of banning certain websites and online platforms outright, they can use throttling tactics to slow them down. Government bandwidth throttling [can complicate](https://podcasts.apple.com/us/podcast/internet-shutdowns-and-the-rise-of/id1516705670?i=1000531730843) people's ability to measure their Internet performance, since [its presence is usually debatable](https://internews.org/blog/measurement-of-internet-throttling/). Since Internet speeds can be slowed by many factors, bandwidth throttling can prove to be a useful tool for state actors looking to control public narratives, hide their own behavior, and avoid accountability.

VPNs can [help users avoid](https://broadbandnow.com/guides/am-i-being-throttled) these kinds of anti-competitive or censorious practices by disguising their activities from ISPs, websites, and other third parties. VPN encryption prevents Internet providers from knowing which services their users are communicating with. A high-quality VPN would prevent a provider from seeing who is using a service at any given time—therefore stopping it from artificially limiting access. The exception is if the ISP throttles the user for using a VPN or using too much bandwidth through the VPN.

Bandwidth throttling is just one example of how ISPs and other third parties can monitor and try to control their users' activities online—including by creating lag and slowing loading times. VPNs can offer strong protection in these circumstances. And crucially, they also keep user data private from Internet providers, who have been known [to do much more](https://www.lifewire.com/ask-isp-for-internet-history-5183929) than throttle bandwidth based on user activity—which, in some countries, is legal.

**How to optimize your VPN experience**

In situations where ISPs are not applying bandwidth throttling techniques, it is possible that using a VPN could result in some latency. Even if a VPN has unlimited bandwidth, the process of data encryption can lead to minor delays in Internet loading times.

It is a myth, though, that the most secure kinds of encryption are more time-consuming, and that they are likely to create the most VPN lag. The truth is that high-lag VPNs are more likely to utilize [outdated encryption systems and protocols.](https://www.vpn.com/gaming-vpn/how-to-reduce-lag/#section4)

Orchid addresses this problem with a flexible architecture that makes high-bandwidth activities possible, even when users choose to send their data through multiple hops. As Orchid chief executive Dr. Steven Waterhouse (Seven) [told CNet in 2020](https://www.cnet.com/tech/services-and-software/this-vpn-built-on-blockchain-could-be-the-next-step-in-privacy-tech/), "We're able to do things like WhatsApp video streaming, even over two hops."

There are several steps that you can take to optimize your VPN's speed even further:

-   **[Split tunneling](https://blog.orchid.com/what-is-split-tunneling/)** is one of the simplest ways to ensure that you're getting the most out of your VPN. The process forms two channels: one for data that is sent through a VPN, and one for data that is sent directly over the Internet. Users can easily set up their VPNs to route Internet traffic related to sensitive matters (like online banking) through an encrypted tunnel, while simultaneously streaming YouTube videos through a non-encrypted connection.

-   **Reducing the number of devices connected to a wi-fi network** can also prevent lag. Devices that are idly connected to a wi-fi signal can absorb a surprising amount of bandwidth. Disconnecting them can improve the speed of the overall wi-fi connection, leading to faster loading times on the device(s) connected to the VPN. If there's only one device online, make sure to close any applications that may be running, and using bandwidth, in the background. Reducing the number of active devices is useful in addressing lag whether or not a VPN is operating.

-   **Using an ethernet cable** can strengthen a device's underlying Internet connection, which can help to reduce latency while a VPN is in use. Ethernet connections maintain direct pathways to the Internet—there's no possibility of signal interference. Wi-fi may be more convenient, but a dedicated Ethernet connection will ensure that your Internet is running as smoothly and quickly as possible—whether our not you are using a VPN.

-   If your VPN offers the ability to choose which servers it connects to, **selecting servers that are geographically closer to your physical location** can help improve the speed of the connection. Closer servers will almost always work more quickly than more distant ones. When possible, choose servers that are relatively uncongested.

Orchid's decentralized VPN marketplace is powered by a system of incentives designed to ensure that ample bandwidth is always available to users. The service is pay-as-you-go, so users never pay for bandwidth they don't use. And [it's easy to start using Orchid](https://blog.orchid.com/how-to-start-using-orchids-crypto-vpn-in-seconds/)—after downloading the app, people can get started with [just $1](https://blog.orchid.com/starting-today-it-only-costs-1-to-get-started-with-orchid/#:~:text=IAPs%20allow%20people%20to%20set,charge%20a%20monthly%20subscription%20fee.) and an ordinary credit card.

[Download Orchid](https://www.orchid.com/) today to start exploring the Internet freely.