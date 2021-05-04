---
templateKey: blog-post
public: true
url: what-is-split-tunneling
title: What is split tunneling?
date: 1620043200000
description: No one likes a traffic jam. Whether you are in Mumbai, Moscow, or Miami, the experience is universally frustrating. But traffic jams don’t just occur on busy roads...
featuredpost: false
featuredimage: /img/uploads/OrchidBlog_SplitTunnel.jpg
tags:
  - VPN
  - Privacy
  - Network Analysis
---
No one likes a traffic jam. Whether you are in Mumbai, Moscow, or Miami, the experience is universally frustrating. But traffic jams don't just occur on busy roads; for the remote workers of the modern world, digital traffic jams can be a major problem too. For some, the everyday exchange of information that takes place online is smooth and seamless. But for others, it can be as frustrating as a slow crawl down a gridlocked highway.

VPNs, for all the benefits they confer, can be a major cause of online traffic jams. Why is this? A VPN acts as a secure, encrypted "tunnel" that moves data through the complex road network that makes up the Internet. When you use a VPN, all of your data, or "traffic," is routed through this tunnel. The VPN treats all data equally, no matter how important or sensitive it is or where it is going. For example, a google search would make the same journey as a secure email or a document downloaded from an intranet.

Thus, these "traffic jams" happen because each VPN "tunnel" has limited capacity. When large amounts of everyday traffic -- particularly in the case of organizations -- pass through a VPN server on a regular basis, large or important data can get "stuck" behind it. For those who sometimes or always work remotely, or who rely on home or public broadband networks to use the Internet, a negative experience can morph into an existential problem, endangering productivity as well as our ability to transact and communicate effectively.

This problem of online gridlock would seem to offer a no-win choice between the security we need and the speed we desire. But it doesn't have to.

Split tunneling can break the deadlock between speed and privacy. By directing traffic through the appropriate tunnel, users get the benefits of a VPN without the need to give up on speed. Here we explore what split tunneling is, how it works, and how best to configure a VPN to use the Internet safely while still enjoying all that it has to offer.

**How does split tunneling work?**

In order to really understand how split tunneling works, it may be useful to briefly review the nature of Virtual Private Networks (VPNs) themselves.

When a VPN is not present on a network, users establish direct connections with the servers that they are accessing. When an Internet user types a website's domain name into a browser's search bar, that user is sending data to that website's server. At a baseline level, this data includes a request for more information from the website's server: essentially, "user at IP address X is requesting website data from the domain at IP address Y."

For example, if you visit Facebook.com on an open network, you are sending a direct request to Facebook's server. You are also sending other data, which can include things like your IP address, your location, cookies, and any other information that you may be submitting on purpose (like an email address, username, or password.)

However, every time you send data on an open network, it can be seen, logged, or otherwise [used by third parties](/data-creep/). This is where VPNs come in: they create a tunnel that [protects users' data](/what-does-a-vpn-hide/) from would-be onlookers and interceptors. Most VPNs also employ encryption, so that even if someone does manage to hack into the tunnel and access your data, they would not be able to decipher it in order to read it.

To form this secure tunnel, the VPN acts as an intermediary server between the data that originates on a user's home network and its final destination. For example, when you use a VPN, any data that you send to a website will first be encrypted and sent to the VPN's server before being sent to the destination website's server.

Split tunneling is what happens **when a VPN user makes decisions about exactly which data will be sent through the VPN's tunnel, and which data will not.** The result is to form two channels: one tunnel for data that is routed through the VPN, and one for data that is not.

**What are the key benefits of split tunneling?**

There are a number of reasons why split tunneling can be useful:

**Split tunneling reduces VPN traffic.** Every time data is sent through a VPN, it must travel through the VPN's server. If traffic volume is high enough, the data can "pile up," forming a sort of traffic jam. Split-tunneling is a method of prioritizing which kinds of data need to be protected, and which do not -- reducing overall levels of congestion and improving performance across the board.

Reducing VPN traffic can **increase Internet speed.** While VPNs are valuable tools that can be used to protect data online, they can operate at speeds that may not be optimal for all online activities. Imagine someone who uses a VPN to upload a large amount of sensitive data. If they choose to watch streaming videos to pass the time, that video traffic will "clog" the tunnel and slow the data upload, since it too is being routed through the VPN server.

With split tunneling, however, the user could route the sensitive data through the VPN and watch the videos on the open network. This way, the VPN operates more efficiently and the sensitive data uploads faster.

Split tunneling can also **enable access to multiple networks** -- specifically, local area network (LAN) connections. LANs connect devices that are present in a single physical location -- such as computers and printers in a home or office building. However, in some cases, VPNs can prevent LAN connections from forming. For example, a VPN could prevent a computer from connecting with a wireless printer, forcing the user to disconnect the VPN in order to print. Split tunneling can facilitate connections with LANs without the need to disconnect from a VPN.

**What are the different types of split tunneling?**

Generally speaking, there are three different kinds of split tunnel configurations:

**URL-based split tunneling** allows users to select specific websites that they would like to be routed through a VPN's secure tunnel. Depending on which VPN you are using, this can be accomplished through the VPN's main console or through a browser extension.

**App-based split tunneling** allows users to determine applications that they wish to be routed through their VPN. This can be particularly useful on mobile devices.

**Inverse split tunneling** routes all of a user's online activities through a VPN by default. Only the websites and/or applications that the user has specifically set to not be routed through the VPN will be routed through the open network.

Regardless of the specific configuration, there are certain scenarios where split tunneling is likely to be a useful option for people in situations where they need to protect specific data without compromising performance.

**Do I need split tunneling?**

Split tunneling can provide the strong Internet security of a VPN without significantly decreasing Internet speed. Therefore, people who work with large amounts of data that needs to be securely transferred online, but that requires a speedy Internet connection, should consider split tunneling, which can also increase performance for those looking to protect personal data or access geo-blocked content without sacrificing connection speed.

However, split tunneling does involve some level of exposure to privacy risks. If your network is unsecured, for example, split tunneling could open a backdoor to malicious attacks. But if you do have a [secure network connection](/tips-for-protecting-your-privacy-while-working-from-home/), and you're willing to divide your Internet activity between (a) the things that you want to keep private and (b) things that you don't mind doing on an open network, split tunneling can be a powerful way to balance Internet security and speed.

Scenarios where split tunneling might be particularly useful include:

**Remote work:** in the post-Covid era, working from home has become ubiquitous. As a result, companies and their employees have had to navigate increased complexity around cybersecurity. Each employee's home network is a possible point of vulnerability that could be exploited by malicious actors. However, remote workers also need reliable, speedy Internet connections to go about their daily business. Therefore, split tunneling could be an important tool for keeping company data secure without losing Internet speed.

**Protecting personal data:** split tunneling is also a good solution for private individuals who primarily use their home Internet connection for casual browsing, but would occasionally like a higher level of cybersecurity. Casual web activities could be sent through the open network, while important personal business can be routed through a VPN's encrypted channel.

**Accessing geo-blocked content:** if a user is interested in accessing content that isn't available in their geographic location, but they don't want to route all of their online activity through a VPN, split tunneling can provide a way to access content without significantly decreasing the speed of the connection.

**What are the risks of split tunneling?**

While split tunneling can be a useful way to protect data while keeping Internet speed relatively high, there are some risks associated with the practice. These risks are somewhat dependent on the context of the specific situation. For example, in a corporate environment, split tunneling could allow employees to evade safeguards that a company has intentionally put in place. These can include things like data loss prevention software, firewalls, and DNS. Split tunneling could also enable employees to bypass software that tracks their activities and blocks certain kinds of content.

Split tunneling can increase certain security risks in remote work environments. For example, if an employee's home network is not properly secured, a hacker could use the network's open channel [to infect the employee's computer](https://resources.infosecinstitute.com/topic/how-your-home-network-can-be-hacked-and-how-to-prevent-it/). Using the compromised computer, the hacker could gain access to the VPN's secure channel and use it to send harmful files to command and control centers. This, in turn, could put a company or organization's entire network at risk.

Therefore, some people may prefer to avoid split tunneling. Those who prefer to keep all of their data at a higher level of security may simply wish to run all of their data through a VPN's secure tunnel. This is known as **full tunneling**. Full tunneling is more secure than split tunneling, but it is more likely to slow down the speed of an Internet connection.

**How do I know if my VPN is split tunneling?**

There are several ways to determine whether or not your VPN is split tunneling. To ensure that the feature is enabled on your network, navigate to the VPN's "Settings" or "Options" menu. When you have located the settings related to split tunneling, make sure that split tunneling is switched on in your preferences.

If you want to determine whether or not your VPN's split tunneling feature is functioning correctly, there are several ways to test it. If you are comfortable with using command lines, you can try [using a traceroute command.](https://stackoverflow.com/questions/5466179/is-there-a-way-to-trace-the-real-route-of-a-packet-if-i-am-behind-a-vpn) For those who are unfamiliar with command lines, an alternative is to visit a website that shows your IP address.

While your VPN is turned off, visit the website and make a note of your IP address. Then, add the website to the list of URLs that you wish to be routed through your VPN's secure tunnel. Ensuring that split tunneling is enabled, turn the VPN on and visit the website again. If the website shows the IP address of your local provider, this is an indication that your VPN's split tunneling feature is not working correctly.

**Orchid's decentralized VPN network provides offers privacy and performance**

Ultimately, each user must determine their own needs when it comes to the level of performance they need and the [level of online risk](/should-you-leave-your-vpn-on-all-the-time/#:~:text=VPNs%20are%20a%20crucial%20tool,a%20single%20decentralized%20privacy%20marketplace.&text=In%20this%20context%2C%20the%20safest,VPN%20running%20at%20all%20times.) they are comfortable with. Orchid brings together the capabilities of many leading VPN providers in a unique decentralized privacy marketplace. Using a digital currency, [OXT](https://www.orchid.com/oxt), and an innovative payments system known as [probabilistic nanopayments](/introducing-nanopayments/), Orchid ensures there is always ample bandwidth on the network. The app offers [fast connections and download speeds](/orchid-just-got-faster/) -- and now people can get started for [as little as $1](/starting-today-it-only-costs-1-to-get-started-with-orchid/).

Users pay for bandwidth on Orchid on a pay-as-you-go basis -- no monthly fees or minimums. And with in-app purchases, people can [buy Orchid credits](/how-to-start-using-orchids-crypto-vpn-in-seconds/#:~:text=Once%20you've%20got%20the,That's%20it!) using nothing more than an ordinary credit card. By making privacy affordable, accessible, and fast through a unique decentralized design, Orchid is helping reclaim the Internet as a place of freedom and curiosity.

[Download the Orchid app](https://www.orchid.com/download) to start exploring the Internet freely.