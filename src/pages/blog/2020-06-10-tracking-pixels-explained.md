---
templateKey: blog-post
public: true
url: tracking-pixels-explained
title: "Tracking pixels, building blocks of Internet surveillance, explained"
date: 1591734301662
description: "The Internet has changed life in ways so profound that it's easy to lose sight of their full extent."
featuredpost: false
featuredimage: /img/uploads/Orchid_BlogImage_PixelData.png
tags:
  - Privacy
  - VPN
---

The Internet has changed life in ways so profound that it's easy to lose sight of their full extent. We've built a new, digital world that exists in parallel to the physical one. More and more, people's essential activities take place in the latter, not the former. And the covid-19 pandemic has opened many people's eyes to the fact that much of life, for many people, can now be lived almost entirely digitally. In countless ways, this new world has made life easier, quicker, and more convenient.

But there are unseen changes that go along with all this convenience, particularly around the tracking of online activity. It's no secret that Internet privacy is in tatters, with polls [showing](https://www.pewresearch.org/internet/2019/11/15/americans-and-privacy-concerned-confused-and-feeling-lack-of-control-over-their-personal-information/) that a majority of people are concerned about the security of their personal information online. Even the most well-informed observers are sometimes shocked when they learn how all-encompassing the Internet surveillance machine really is. As New York Times columnist Farhad Manjoo [writes](https://www.nytimes.com/interactive/2019/08/23/opinion/data-internet-privacy-tracking.html), the tracking of online activity "is happening every day, all the time, and the only reason we're O.K. with it is that it's happening behind the scenes, in the comfortable shadows."

This is true -- businesses use a number methods to track the activities of users in order to tailor content and advertising to their perceived interests. One of these tools is something most people have never heard of: a tracking pixel. This is a small snippet of code that allows a third party to record people's behavior online. It typically consists of a single 1x1 pixel image embedded into a webpage or email, containing a tag that tracks information about the user. Invisible to the naked eye, tracking pixels follow users, even after they've left a website.

**A boon for online businesses**

Not everyone has a problem with pixel tracking. In fact, online advertisers and other businesses [actively promote](https://www.digitaland.tv/blog/what-is-tracking-pixel-ht/) it as a positive good. The fact is, given a free hand in a lightly regulated environment lacking traditional revenue sources, corporations and marketing firms have designed and built an infrastructure that systematically follows users in order to direct targeted ads based on their habits and anticipated needs. This strategy has been wildly successful: tracking pixels are estimated to be present on [75% of websites](https://www.emarketer.com/content/ad-trackers-are-on-more-than-75-of-web-pages), helping drive over [$100 billion in annual advertising revenue](https://www.iab.com/wp-content/uploads/2019/05/Full-Year-2018-IAB-Internet-Advertising-Revenue-Report.pdf) in the United States alone.

With each click, tracking pixels gather and record the following information:

- Exact date and time
- Type of client used (e.g., browser or email platform) and screen resolution
- Operating system and type of device
- Activity on a website during the session
- IP address, and by extension, Internet Service Provider (ISP) and device location

Every move a person makes online is tracked and used to create profiles -- which can be linked back to their real-world identity. To understand the effects of this, we need to understand how this digital surveillance occurs in the first place.

**Pixels, cookies and the Internet surveillance machine**

To understand pixels, it's important to understand cookies -- a term many people are familiar with. A cookie is a small file that stores a record of each activity we perform online. When you see a pop-up asking you to consent to the use of cookies, what you're really being asked for is permission to let the site use these to track your movements and share them with advertisers. Cookies are triggered by pixels: the latter recognizes when a user clicks and "calls" the former to download onto a browser. With a size of 1x1 -- hence the name -- pixels consist of code placed on websites that is not visible to the naked eye. There are two main types of pixels: retargeting pixels and conversion pixels.

Retargeting pixels monitor your behavior on a particular website and use that to direct similar content to you when you browse later on. When you see ads for umbrellas after looking up the weather, it's because of retargeting pixels.

Conversion pixels track purchases you actually make. Often, they are embedded in confirmation or "thank you" pages that conclude a sale. These are useful to advertisers in understanding what people actually spend money on, rather than sites they simply browse.

**Digital gold and surveillance capitalism**

The widespread use of tracking pixels for advertising is the result of decades of design and policy decisions whose consequences were not always foreseen. The Internet was first conceived of as a free and open place. As such, charging users to browse websites has always been considered unacceptable. Though it was born with the noblest of intentions, this "free" model spawned unanticipated consequences. If they couldn't charge for their products, how would the giants of the Internet -- search engines, social networks, media hubs -- maintain their businesses? They were forced to seek alternative ways to make money.

The solution they found lay in advertising. This was a goldmine of possibilities: with businesses of all kinds looking to identify and reach key target demographics, Internet businesses found themselves sitting on colossal stockpiles of user data that suddenly had immense value. [Surveillance capitalism](https://www.theguardian.com/technology/2019/jan/20/shoshana-zuboff-age-of-surveillance-capitalism-google-facebook) was born.

**Pixel data is shared with anonymous third parties**

Tracking pixels don't simply generate a one-to-one exchange in which information from a website is downloaded to a browser. When a user makes a request to a website -- by clicking on a link, for example -- a vast [set of requests](https://twitter.com/poa_nyc/status/1220199103658971143) goes out to a constellation of third-party vendors. These third parties then buy, sell, and recombine the data they've collected in a process called "enriching." This enriched data is used for a range of purposes well beyond what most users expect when they read an article or use an app.

You can use [this tool](http://requestmap.herokuapp.com/) to explore the webs of requests that are generated by a single click.

![A map of web requests generated by a single webpage](/img/uploads/web-request-map.png)

Tracking pixels can be aggregated to compile a detailed dossier -- known as a [digital fingerprint](https://blog.mozilla.org/internetcitizen/2018/07/26/this-is-your-digital-fingerprint/) -- on everybody who uses the Internet. The primary use of these digital dossiers today is advertising. With such an abundance of products and services available online, and such diversity of people, cultures, and habits, digital fingerprints help businesses target their advertising at people they judge more likely to be interested in their products. This is known as intent generation.

**Intent generation versus intent harvesting**

The abundance and mass aggregation of pixel data has allowed Internet advertising models to become ever more complex and savvy. Over the past several years, the model has shifted from intent harvesting to intent generation.

Intent harvesting is where a user searches for a desired product, and sees ads related to that search. In this case, advertisers are responding to an interest users themselves initiate -- a straightforward concept. If you search college basketball, tracking pixels add this as a data point to your dossier. Advertisers, deducing your interest, can now place ads for jerseys on websites you subsequently visit, based on your search history.

Intent generation goes further, anticipating a need a person may not yet know they have. Here, pixels are also used to steer users toward content likely to interest them even if they haven't expressly searched for it. For example, a user of in-flight wi-fi might see ads for taxi companies at their destination airport. The complex picture painted by tracking pixels lets advertisers understand that the user is likely in transit and may need transportation from the airport -- they are able to anticipate the user's likely need.

Internet giants understand the power of being able to anticipate their users' emotions and desires. This was a major factor in [Facebook's recent $400 million purchase of Giphy](https://www.theverge.com/2020/5/15/21259965/facebook-giphy-gif-acquisition-buy-instagram-integration-cost), which enables the sharing of millions of small animated images. Executives at the company clearly understand the [power of memes to predict trends](https://www.researchgate.net/publication/224253314_Detecting_emerging_topics_and_trends_via_predictive_analysis_of_'meme'_dynamics), and believe they can gain lucrative insights from their users' sharing habits.

**Tracking is not all positive for businesses**

But tracking pixels have drawbacks for businesses as well. They impair the Internet's user experience by slowing download speeds. Each request made to download a cookie uses bandwidth, and enough such actions can materially slow down a website. Think of all the news sites that take 30 seconds to load, whose text jumps up and down as new ads and pop-ups materialize, making it almost impossible to read the story itself. The economic impacts of this are material: it's estimated that for every second tracking pixels slow down a website, [revenue drops by 7.5%](https://thegood.com/insights/how-tracking-pixels-slow-your-site/).

At Orchid, we never use pixels because we have a firm commitment to user privacy. This has the added benefit of making our user experience better, faster, and smoother for people browsing the web.

**Do pixels put privacy at risk?**

The uses of pixels outlined so far are relatively mundane and may even seem harmless to those comfortable with consumer mass marketing. But it's worth remembering that for each person around the world who uses the Internet, there is a detailed, multi-dimensional, constantly evolving portrait. These profiles are not anonymous -- they can easily be linked back to real-world identities through email addresses, social media profiles, and IP addresses.

It doesn't take too much imagination to recognize the breadth of potential dangers posed by pixel tracking. Many people appear unbothered by or resigned to the current state of online surveillance. The Internet is governed largely by economic incentives that reward the harvesting of data in order to predict future behavior and interests. While this has proven lucrative, it also raises obvious questions about privacy and accountability. This is borne out in public opinion surveys: in the U.K., for example, [only 23% of respondents](https://econsultancy.com/tag/us/) said they would opt in to being tracked on websites if given the choice.

**What do regulators have to say?**

Where do governments stand on the issue of tracking pixels?

The answer to this has a complicated history and underscores the ways in which the Internet, a phenomenon wholly new in human history, does not fit neatly into existing modes of legal thought. Democratic governments have struggled from the start to define which statutes apply to online activity and which don't. For example, online activity in the U.S. is still [governed by the Electronic Communications Privacy Act of 1986](https://www.liquidvpn.com/outdated-internet-communications-laws/), which became law before the Internet existed and was written with electronic wires and voice communication in mind. The law defines any communication stored for more than three years as "abandoned" -- so everything you did online before 2017 can be searched by the authorities without a warrant.

Recently, some governments have begun trying to update legal systems to address Internet privacy specifically. The European Union was the first to act, implementing the General Data Protection Rule (GDPR) in 2018. The U.S. state of California followed in 2020 with its California Consumer Privacy Act (CCPA), which covers broadly the same areas of concern. Both laws have detailed rules around the collection, use, and disaggregation of personal data, though they establish differing definitions and standards.

These differences are instructive in revealing the degree to which the appropriate way to regulate online activity is still not settled. For example, GDPR [requires](https://bakerlaw.com/webfiles/Privacy/2018/Articles/CCPA-GDPR-Chart.pdf) "data controllers and data processors to take appropriate technical and organizational measures to ensure a level of security appropriate to the risk." CCPA has only a vague promise of recourse to individuals if businesses fail to establish "reasonable" data security standards.

**How to disable tracking pixels on your own**

Fortunately for the privacy-minded, there are ways to opt out of pixel tracking. Any attempt at this should start with choosing a web browser. In terms of dedication to privacy, not all are created equal. Mozilla Firefox, for instance, has demonstrated a clear philosophical commitment to privacy, and [unilaterally implemented DNT in 2011](https://www.wsj.com/articles/SB10001424052748704213404576100441609997236). There are also other Internet platforms with a specific focus on privacy, such as the search engine [DuckDuckGo](https://duckduckgo.com/?va=z&t=hk).

It's possible to disable or limit pixel tracking in a web browser's settings, though each browser has different capabilities. Firefox enables what it calls "[enhanced tracking protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-preview)" by default, and lets users customize the level of tracking they want to allow. Users of Google Chrome [can disallow the collection and retention of cookies](https://support.google.com/chrome/answer/2790761?co=GENIE.Platform%3DDesktop&hl=en), though this may result in reduced functionality. Chrome does not implement "do not track" as its default setting, so users must manually turn it on. On the social media side, Facebook's privacy settings also include [an option to disable pixels](https://www.facebook.com/business/help/223929738210704), though this is not a default setting.

For additional tools, tips, and best practices for minimizing the risk of tracking pixels, [Tom's Guide](https://forums.tomsguide.com/faq/secure-your-browser-and-stop-facebook-tracking.191976/) can be a valuable resource.

**Knowledge is power**

For now, at least, tracking pixels are part of the fabric of the Internet. Whether you view them as helpful business tools or frightening components of a dystopian world, understanding how they work can help everyone make informed decisions when going online. For those who are dedicated to privacy and transparency, Orchid, the decentralized VPN marketplace, [is available for download](https://www.orchid.com/download/) today.