---
templateKey: blog-post
public: true
url: orchids-ama-recap
title: "Orchid's AMA Recap"
date: 1600178400001
description: "Orchid recently held two Ask Me Anything (AMA) sessions in our official Reddit and Telegram groups giving our community members the opportunity to ask their most burning questions of our CEO, Dr. Steven Waterhouse."
featuredpost: false
featuredimage: /img/uploads/Orchid_BlogImage_AMArecap.jpg
tags:
  - Company Updates
  - Events
---
Orchid recently held two Ask Me Anything (AMA) sessions in our official [Reddit](https://reddit.com/r/orchid) and [Telegram](https://t.me/OrchidOfficial) groups giving our community members the opportunity to ask their most burning questions of our CEO, Dr. Steven Waterhouse. It was inspiring to see the community's passion to learn about all things Orchid, from staking to VPN providers to nanopayments and even to DeFi. Dr. Waterhouse, with some added perspective from fellow Orchid founder Jay Freeman, clearly enjoyed providing a flurry of answers.

Here are the highlights from the AMAs:

### Reddit Q&A

**outgraph** asked Dr. Waterhouse, "as a company, where do you see Orchid in 5 years?"

> To which Dr. Waterhouse replied, "I am hopeful we are able to make a strong impact on people's lives from a privacy perspective and that we continue to develop interesting and relevant technology."

**mpatrikeyev** wanted to know, "Ok so just to make things clear here, staking in the Orchid network is not the same as proof of stake. We get a lot of questions about this and it's important to be clear on the differences. There are 2 kinds of staking in the Orchid network:

- client staking - in which each client stakes a small amount of OXT
- provider staking - in which providers stake OXT and traffic is directed in a random stake weighted model to providers with more stake

Both kinds of staking are important security features of Orchid. Client staking -- in the form of membership deposits -- ensures that Orchid nanopayments are a trustable solution despite primarily taking place off-chain. Provider staking is more like the kind of staking you're probably familiar with, but it's not a turnkey solution like with some other platforms. We believe this is an important distinction and a security feature of our system that those platforms lack.

As the network grows we anticipate more providers coming online and staking more OXT as a result. There could be opportunities for delegated staking in the future also. A lot depends on where the community takes things of course."


**pixeltot** had a question about non-USA providers and nodes, asking "Have you guys partnered with any VPN's that are not in the US, or thinking about partnering with VPN's outside of the country? I think people want the option to choose their location, as this is a common feature of VPN's"

> To which Dr. Waterhouse answered, "Good question. We have already partnered with non US VPNs such as Boleh and Liquid. [Full list of VPN partners here](https://www.orchid.com/partners). Most of the partners have server presence globally.
> 
> Currently the app does not enable geolocation switching."


**bjw9000** queried, "Can i use OXT nano-payments for my own project?"

> At this time Jay "saurik" Freeman decided to chime in, answering that "Yes! Our contract is published on Ethereum mainnet for anyone to use. As far as technical integration is concerned, you just use any off-the-shelf Ethereum SDK on the server to process winning tickets (which is simply a function call you make on the contract given parameters and a signature provided by the client) and to watch the user's account to verify that they have enough money (and a high enough escrow).
> 
> Really, the "hard part" is mostly that you have to make sure that nanopayments fits within the economic model of your service offering: in our case, we know that there are sufficient incentives from repeat interactions, combined with a sufficient high overhead to "find a new customer" (which is really paying in stake to wait for customers to find you, but it is still a customer acquisition cost; but this also includes the network costs of setting up the connection and bootstrapping the symmetric cryptography), to ensure that people aren't going to just run away with the client's tiny fraction of a penny."

**bjw9000** was over the moon that "THE saurik responded to me!" And bitman_moon had a terrific follow-up question with "Is it similar to state channels?"

> Jay also responded saying, "Both payment channels and state channels provide a way of doing efficient payments to a single party under an assumption that eventually you will do enough transactions to make the total transfer "worth" the setup cost; Orchid nanopayments are related to this space, but approach the problem entirely differently, allowing efficient broadcast of payments to large numbers of providers under an assumption that both users and providers are, "in aggregate", sending and receiving enough payments that the probability distribution of payments each party sends and receives has low enough variance to be "a wash". (I personally thereby do not find any of the work on "channels" interesting, but that's clearly a bias from the use cases I'm interested in, where payments to individual service providers might never total more than thousands of a penny.)"

**pixeltot** came back with another great question later, asking "Can you give us 1 more example of a possible use case for OXT, other than providing a marketplace for bandwidth? (which I feel is groundbreaking btw)"

> Dr. Waterhouse replied, "We'd love to explore different use cases with the community. A general framework for decentralized services would be an exciting one to see Orchid as part of. Some of the ideas that come to mind are things like paying for content instead of using paywalls, streaming services and possibly interesting new network routing architectures. As always I believe that the new successful ideas that emerge from a new technology are the ones that enable people to do something they previously couldn't do and take advantage of the new capabilities of the technology in unique ways."

If you want to read the full Reddit AMA, you can find the [thread here](https://www.reddit.com/r/orchid/comments/ifrrzc/reddit_ama_with_orchid_ceo_steven_waterhouse_aug/). 

### Telegram Q&A

A week later during the Telegram AMA, we had several great questions and discussions come up including the ones below.

**®RiiO®** asked, "DeFi is one of the hottest topic in the blockchain space right now. Can you share your opinion about DeFi with us? Do you think that DeFi will disrupt the existing financial system? What is ORCHID approach towards the DeFi sector?"

> Dr. Waterhouse responded saying, "I think DEFI is enabling people to do things they couldnt do in the existing financial system - e.g. flash loans without KYC, so in that sense it is a disruption. I see it enabling new products we havent seen before rather than simply replacing existing financial systems. We are interested in the mechanisms some of these projects are using for governance and growth hacking and I think there is a lot to learn there."
 
**J** wanted some more info about the smart contract, stating "i am unable to understand the how the contract works, will be great if i get some docs that explains the contract methods"

> Dr. Waterhouse pointed out that, "We have diligence [done here](https://diligence.consensys.net/audits/2019/11/orchid-network-protocol/)"

The audit is not a short read, but it's a good one for anyone out there looking for more technical analysis and documentation on Orchid's protocol and the results of Consensys' due diligence.

If you want to read the full Telegram session, you can [do so here](https://t.me/OrchidOfficial/53781). It lasted roughly one hour.

We were thrilled at the level of engagement and we are excited to continue to interact with our active community in various ways and using multiple platforms. We can't wait to meet you wherever you are as often as we can. Please feel free to send us any feedback you have via [Twitter](http://twitter.com/orchidprotocol), [Facebook](https://www.facebook.com/OrchidProtocol/), [Telegram](https://t.me/OrchidOfficial), [Reddit](https://reddit.com/r/orchid), or [LinkedIn](https://www.linkedin.com/company/orchidprotocol/).