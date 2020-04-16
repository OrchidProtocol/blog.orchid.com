---
templateKey: blog-post
public: true
url: introducing-nanopayments
title: Introducing Nanopayments
title_ja: ナノペイメントの紹介
title_ko: 나노 지불 소개
title_zh: 极微支付简介
date: 1570639656651
description: 'When you wake up in the morning and flick on a light switch, do you pause to think about how many tiny fractions of a penny that electricity costs? Or do you just flick on the light so you don’t bump your head?'
description_ja: '朝起きて電灯のスイッチを入れるとき、その電気代が 1 ペニーの何分 の 1 くらいか考えることがありますか?それとも、頭をぶつけないように 電灯をつけるだけですか？'
description_ko: '아침에 일어나서 전등 스위치를 켤 때 잠시 멈추고 전기 요금이 얼마나 나올지 생각하십니까? 아니면 어딘가 부딪치지 않도록 바로 스위치를 켜십니까?'
description_zh: '当您早上醒来按下电灯开关时，您是会停下来用一丁点时间来思考要花多少电费， 还是直接按开灯，以免撞到头？'
featuredpost: true
featuredimage: /img/nanopayments.jpg
tags:
  - VPN
  - Network Analysis
body_ja: |-
  朝起きて電灯のスイッチを入れるとき、その電気代が 1 ペニーの何分の 1 くらいか考えることがありますか?それとも、頭をぶつけないように電灯をつけるだけですか？

  他の種類のサービスも電気代と同じように支払えるとしたら、つまり、いつでもオンオフできる、リソースのごくわずかな部分について支払いができるとしたら、どのような可能性が開かれるでしょうか？


  イーサリアム向けのオーキッドのレイヤー 2 スケーリングアーキテクチャは、確率的ナノペイメントを使用して、ユーザーが、まさにこの方法でサービスの支払いを行えるようにします。ナノペイメントは、ごくわずかな部分を、自由にオンまたはオフにできる仕組みと言えます。しかし、毎月の電気代とは異なり、ナノペイメントは価値が動くときに伝達されます。私たちはこのコアテクノロジーを使用して帯域幅市場を強化しています。これは、オーキッドアプリのユーザーに、VPN ルートを構 築し、それらを管理する新しい方法を提供することを目的としています。その方法はまさに電灯を点けるときの方法と同じです。

  ## オーキッドを使用したイーサリアム上での支払いのスケーリング
  オーキッドネットワークの帯域幅市場は、買い手（オーキッドアプリのユーザー）と売り手（オーキッドサーバーのオペレーター）の両面から成り立っています。帯域幅の交換には、基本的なサービスと支払いの両方をサポートするために高い取引スループットが必要です。支払いは、パケットごとのレベルで高頻度で行われることが期待されています。イーサリアムのレイヤー 1 は、エコシステムの買い手と売り手間に必要な帯域幅交換のレベルでナノ取引を決済するには速度が遅すぎ、かつ高価です。この問題を解決するために、オーキッドはパケットごとのネットワーク支払いのために確率的ナノペイメントとして知られる高度な支払いアーキテクチャを使用します。

  ## 既存のレイヤー 2 スケーリング ソリューシ ョン
  すでにいくつかの既存のレイヤー 2 スケーリング案が存在しており、その中には、ビットコインにおける[ライトニングネットワーク](https://lightning.network/)やイーサリアムにおける[ライデンネットワーク](https://raiden.network/)などがあります。これらのアプローチは両方とも、ネットワーク化された支払いチャネルのカテゴリに分類され、理論的には、オーキッドの帯域幅マーケットプレイスの支払いレイヤーとして機能します。

  ただし、ネットワーク化された支払いチャネルには、いくつかの重要な欠点があります。ユーザーは特定のネットワークノードに資金をデポジットしてロックアップする必要があるため、カウンターパーティリスクが生じます。ネットワーク化された支払いチャネルを使用した支払いコストは実質的に O(log N) であり、確率的支払いの O(C) と比較すると、スケーリングの効率が低下します。回路内の単一ノードに障害が発生した場合、ネットワークチャネルの支払いにも、ルーティングの失敗やタイムリーな配信の不成功などが発生する可能性があります。最後に、ネットワークチャネルによる支払いでは、確率的支払いよりも多くの関係者に支払い情報が漏洩されます。これらの理由から、オーキッドの利用事例では、ネットワーク決済チャネルはナノペイメントほど実用的ではありません。


  ## オーキッドナノペイメントが機能する仕組み
  確率的支払いでは、買い手は 1 ドルに相当する取引を直接送信する代わりに、100 ドルを獲得できる 1% のチャンスを送信できます。オーキッドの設計はこれを極限まで極めたもので、ナノペイメントのチケットは 1 ペニーの数千分の 1 以下の価値を表しています。チケットはすべてオフチェーンで送信されます。当選チケットが引き換えられたときのみ、その受信者は額面金額を請求するためにオンチェーン取引を行う必要がありますが、これはまれです。受信者は、チケットが当選であるかどうかを事前に知る方法がないため、すべてのチケットに暗黙の価値を与えます。


  ## 予想されるナノペイメントの流れ
  1. 送信者は OXT をイーサリアムスマートコントラクトにデポジットして、ナノペイメントアカウントを開設します。
  2. そうすることで送信者は、サービスの支払いを受け入れているネットワーク上のプロバイダーに、デポジットを担保とした有効なナノペイメントを発行できるようになります。
  3. 最終的に、ユーザーは「当選する」ナノペイメントを発行することが期待されます。これによりプロバイダーは、オンチェーン取引を介してチケットと支払いを引き換えることができます。
  4. ユーザーは、自身のアカウントの資金レベルに応じて、ナノペイメントアカウントにさらに OXT を追加する必要がある場合と必要がない場合があります。
  5. 時間が経つにつれて、オンチェーンで送信される値が確率的ナノペイメントで表される値と一致することが予想されます。

  ![Nanopayments](/img/uploads/oxt-provider-illustration-ja.jpg)

  上の図は、オーキッドアプリユーザーが、イーサリアムブロックチェーンで単一のデポジット設定を行った後、どのように複数のプロバイダーにナノペイメントを送信できると期待されているかと、支払いの一般的なフローがどのように機能するかを示しています。

  このシステムの一般的な特性は、ユーザーがさまざまなプロバイダーを自由に選択し、サービス対支払いの関係を非常に迅速に確立する必要がある帯域幅マーケットプレイスに適していると考えています。ユーザーは、速度、可用性、価格やロケーションに基づいて、VPN プロバイダーを迅速かつ任意に変更できる必要があります。イーサリアムでのナノペイメントアカウントの設定はユーザーが負担するように構成されていますが、ユーザーが VPN サービスのプロバイダーと月次、年次、または複数年契約に署名する現在の VPN 市場と互換性があります。オーキッドユーザーには、サービスの使用を停止した場合はナノペイメントアカウントからデポジットを取り戻すことができるという追加の利点があると期待されています。

  ## 残高の分散
  オーキッドナノペイメントには、1 つの注目すべき制限があります。それは分散です。オーキッドアプリがナノペイメントを発行するたびに、他のこととは無関係にチケットが当選するわずかな確率があるため、受信者のアカウント残高が減少します。クライアントの残高が 1 人の当 選者をカバーするのに十分な額しかない場合、これは重大な制限になります。これを説明するために、1 週間に 100 万回、100 万分の 1 の 確率で 2 ドルを獲得できるチャンスがあるチケットを発行するクライアントを想像してみてください。平均では 1 週間に 1 人の当選者しかいませんが、確率的には当選チケットが初日または最初の数時間で発行される論理的蓋然性があります。プラス面としては、当選者が数週間 現れない合理的な可能性もあります。幸いなことに、これについてはかなり簡単な解決策があると考えられます。クライアントが単に額面額の数倍をデポジットするだけで、分散を滑らかにすることができます。これを二項分布としてモデル化し、クライアントのアカウントに 2 ドルではなく 20 ドルがある場合、予想より 2 倍速く残高が枯渇する可能性は約 10％ から約 2％ に減少します。

  ## 支払いの匿名性
  ほとんどのナノペイメントチケットは「当選する」ことがないため、オンチェーンに掲載されません。ただしまれに、当選チケットがイーサリアムブロックチェーンの公式記録になる場合があります。したがって、オーキッドのナノペイメントは疑似匿名のみです。マルチホップ回路の場合、オーキッドクライアントはホップごとに個別のアカウントを使用することが予想されます。これにより、誰もが公開の支払い情報を使用して回線をトレースするのを防ぐことができます。一般的な状況では週に 1 回程度と予想される当選チケットはまれであるため、マルチホップ回路の公的支払記録は、シングルホップ回路のそれと本質的に見分けがつかないように設計されています。ルートを追跡しようとする攻撃者は、支払者のパブリックアドレスに関連付けられた支払いプロバイダーの情報の一部を知ることになると予想されますが、同じ回路内の異なるノードへの 2 つ以上のチケットが同時に獲得される可能性は非常に小さいため、取引の追跡可能性は低下します。

  ## 検閲抵抗
  ほとんどのパブリックブロックチェーンネットワークと同様に、イーサリアムの取引は、バリデーター（イーサリアムネットワークのマイナー）が作成済みのブロックにその取引を含めないことを選択しない限り、検閲できません。ブロックは、ハッシュパワーに比例してすべてのマイナー間でランダムにマイニングされるため、オーキッドのネットワークを大幅に混乱させるには、圧倒的多数のマイナーがオーキッドの支払いを積極的に検閲する必要があります。たとえば、ハッシュパワーの 90％ がオーキッド関連の取引をブロックに含めないことを選択した場合でも、取引の確認に平均で 10 倍の時間がかかることにはなりますが、オーキッドのネットワークは依然として機能します。

  大規模なマイナーのグループ（51％など）がオーキッド関連の取引を含むブロックを拒否した場合には、さらに厳しい形式の検閲が可能になります。これはイーサリアムのプロトコルのルールに従って有効であり、実質的にソフトフォークを形成します。ただし、このようなソフトフォークを作成するために大規模にマイナーを共謀させることは、共謀者にとって重大な金銭的損失のリスクを伴います。ソフトフォークが十分なハッシュパワーを達成できない場合、共謀しているマイナーたちはブロック報酬を得られないことになるからです。経済的損失のリスクがなくても、イーサリアムのマイニングコミュニティの分散化された性質と、ブロックチェーンマイニング戦略に関する法的および規制上の制限がないことから、この可能性は非常に低いと考えています。

  ## 結論
  私たちは、オーキッドナノペイメントは既存の支払いチャネルソリューションよりも優れており、ユーザーに継続的なサービスを提供するために最適化されていると考えています。取引手数料の削減により、イーサリアム自体のアップグレードを必要とせずに、最大数百万人のユーザーをサポートできます。セットアップコストは対で発生するのではなく、ユーザーが開始することによってのみ発生します。つまり、プロバイダーはセットアップコストを負担することなしにユーザーへのサービスをすぐに開始でき、ユーザーは気まぐれにプロバイダーを切り替えることができます。私たちはこれが、現代の VPN アプリケーションの設計要件だと考えています。

  ## オーキッドで最新情報を入手
  常に最新のオーキッドニュースを入手し、最初にネットワークをテストしてオーキッドトークンを使用するユーザーになるには、[ニュースレターにご登録ください](https://www.orchid.com/#newsletter-signup)。

  Webサイト: [www.orchid.com](https://www.orchid.com)

  Twitter: [https://twitter.com/OrchidProtocol](https://twitter.com/OrchidProtocol)

  Linkedin: [https://www.linkedin.com/company/orchidprotocol/](https://www.linkedin.com/company/orchidprotocol/)

  Telegram (お知らせ): [https://t.me/officialorchidlabs](https://t.me/officialorchidlabs)

  Telegram (コミュニティ): [https://t.me/OrchidOfficial](https://t.me/OrchidOfficial)

  Facebook: [https://www.facebook.com/OrchidProtocol/](https://www.facebook.com/OrchidProtocol/)

  Medium: [https://medium.com/orchid-labs](https://medium.com/orchid-labs)

  Github: [https://github.com/OrchidTechnologies](https://github.com/OrchidTechnologies)

  Reddit: [https://www.reddit.com/r/orchid](https://www.reddit.com/r/orchid)
body_zh: |-
  当您早上醒来按下电灯开关时，您是会停下来用一丁点时间来思考要花多少电费，还是直接按开灯，以免撞到头？

  如果您可以像用电付费一样（可以随时打开或关闭少量资源）支付其他类型的服务费用，这会带来怎样的可能性？

  Orchid 针对以太坊推出的新型第 2 层扩展架构使用概率极微支付，让用户可以像用电付费一样付费购买服务。顾名思义，极微支付就是支付额很小，而且可以随意打开或关闭。但是，与每月的电费单不同，极微支付在转移时会传递价值。我们正使用这项核心技术支持我们的带宽市场，旨在为 Orchid App 的用户提供一种全新的 VPN 路线建立和管理方法，就像拨按电灯开关一样。

  ## 使用 Orchid 扩展以太坊上的付款
  Orchid 网络的带宽市场是双方市场，包括买方（Orchid App 用户）和卖方（Orchid Server 运营商）。带宽交换需要很高的交易吞吐量，才能支持基本的服务和付款。付款会在数据包级别高频率进行。以太坊的第 1 层太慢且太昂贵，无法在生态系统中的买卖双方之间所需的带宽交换级别上结算极微交易。为了解决此问题，Orchid 使用一种高级支付架构按数据包完成网络支付，这种架构叫做概率极微支付。


  ## 现有的第 2 层扩展解决方案
  如今已经有多种第 2 层扩展提案，其中包括比特币上的[闪电网络](https://lightning.network/)和以太坊上的[雷电网络](https://raiden.network/)。这两种方法都属于网络支付渠道的范畴，从理论上讲，都可以作为 Orchid 带宽市场的支付层。

  但是，网络支付渠道有几个重大的劣势。它们要求用户使用特定的网络节点来存放和锁定资金，产生了交易对手风险。与概率支付的成本 O(C) 相比，使用网络支付渠道的支付成本基本为 O(log N)，因而扩展效率较低。如果回路中的单个节点发生故障，则网络渠道付款也可能无法路由或无法及时交付。最后，与随机支付相比，它们将支付信息泄露给更多的相关方。鉴于这些原因，在 Orchid 的用例中，网络支付渠道不如极微支付实用。

  ## Orchid 极微支付：运行机制
  通过概率支付，买方不用直接发送价值 1 美元的交易，而是可发送1％ 的赢得 100 美元的机会。Orchid 的设计将这一点发挥到了极致，极微支付彩币代表的价值为千分之几美分或更低。这些彩币都是在链下发送的；仅当兑换中奖彩币时，接收者才需要进行链上交易以索取票面价值，而这种概率很低。接收者无法事先知道彩币是否能中奖，因此向所有彩币赋予了隐含价值。

  ## 极微支付的预期流量
  1. 发送方通过将 OXT 存入以太坊智能合约来开设极微支付账户。
  2. 然后，发送方可以将有效的极微付款（以保证金为保障）发给网络上接受服务付款的任何提供商。
  3. 最终，该用户将发出“中奖”的极微付款，因而提供商可以通过链上交易将彩币兑换为付款。
  4. 根据账户中的资金量，用户可能需要或不需要向其极微支付账户中添加更多 OXT。
  5. 链上传输的价值将逐渐按照预期与概率极微支付中所代表的价值相匹配。

  ![Nanopayments](/img/uploads/oxt-provider-illustration-zh.jpg)

  上图显示了 Orchid App 用户在以太坊区块链上引发一次保证金设立后向多个提供商发送极微付款的过程，以及一般支付流程的运作机制。

  我们认为，该系统的一般属性非常适合带宽市场，该市场的用户需要能够随意选择不同的提供商，并能够非常快速地建立服务付费关系。用户应能够根据速度、可用性、价格和/或位置任意地快速更改 VPN 提供商。以太坊上的极微支付账户由用户负责设立，但与当前的 VPN 市场兼容，该市场的用户每月、每年甚至每半年与提供商签订一次 VPN 服务协议。如果 Orchid 用户停止使用服务，则可以享有额外的好处—从极微支付账户中取回保证金。

  ## 余额波动
  Orchid 极微支付确实有一个显著的局限性：余额波动。每次Orchid App 发出极微付款时，中奖彩币的独立概率很小，因而会减少接收者的账户余额。如果客户端的余额仅够支付一个中奖彩币，那么这个限制会很严重。为了说明这一点，假设有一个客户端以每周 100 万的速度发行有百万分之一机会的 2 美元彩币。虽然平均每周只有 1 位中奖者，但中奖彩币在第一天甚至前几小时内发出处于合理的概率范围内。从好的方面来说，几周内不出现中奖者也在合理的概率范围内。幸运的是，我们认为该问题有一个相当简单的解决方案：客户端只需存入数倍面值的金额即可顺利应对波动。如果我们将此情形建模为二项分布，并且客户端的账户中有 20 美元，而不是 2 美元，那么余额耗尽速度比预期快两倍的概率将从大约10％ 降低到大约 2％。

  ## 支付匿名
  大多数极微支付彩币不会“中奖”，因此不会在链上发布。但是，罕见的中奖彩币会在以太坊区块链上产生公开记录。因此，Orchid极微支付只是伪匿名的。对于多跳回路，Orchid 客户端应该每一跳使用一个单独的账户，这有助于防止任何人使用公共支付信息追踪回路。由于中奖彩币很罕见（通常情况下预计约每周一次），所以在设计上来自多跳回路的公共支付记录与单跳回路的记录基本上没有区别。我们料想到，试图追踪路线的攻击者会学习一些与付款人公共地址相关联的付款提供商，但是同一时间在同一回路中的不同节点上出现两个或更多中奖彩币的概率微乎其微，因而降低了交易的可追溯性。


  ## 抗审查
  在大多数公共区块链网络上，无法审查以太坊交易，除非验证者（以太坊网络中的矿机）选择不将其包括在自己创建的区块中。由于区块是在所有矿机中随机开采出来的，与哈希算力成比例，因此绝大多数矿机不得不主动审查 Orchid 付款，给 Orchid 网络造成显著干扰。例如，如果 90％ 的哈希算力选择不包括 Orchid 相关交易，则 Orchid 网络仍将正常运行，但确认交易的时间平均长十倍。

  如果一大批矿机（例如 51％）选择通过拒绝包含 Orchid 相关交易的区块来审查这些交易，那么审查形式可能会更加严格。根据以太坊协议的规则，这种做法是有效的，并且将有效地创建软分叉。但是，组织大规模的矿机共谋以致产生这种软分叉会给共谋者带来巨大的财务损失风险；如果软分叉达不到足够的哈希算力，则共谋的矿机将错过区块奖励。即使没有财务损失的风险，我们也认为这种可能性极小，因为以太坊采矿社区是去中心化的，而且对区块链采矿策略的法律和法规限制不足。


  ## 结语
  我们认为，Orchid 极微支付具有现有支付渠道解决方案所不具备的优势，并且经过优化，可为用户提供连续服务。由于降低了交易费用，所以无需对以太坊本身进行任何升级，便能够支持多达数百万的用户。设置成本不是成对产生的，而是仅由发起的用户产生。这意味着，提供商能够立即开始为用户提供服务而不会产生设置成本，并且用户能够随意切换提供商，我们认为这是现代 VPN 应用的设计要求。

  ## 关注 Orchid 最新动态
  如果您想随时了解最新的 Orchid 新闻，率先测试网络并使用Orchid 代币，请[注册接收我们的新闻通讯](https://www.orchid.com/#newsletter-signup)，了解最新发布信息。

  网站: [www.orchid.com](https://www.orchid.com)

  Twitter: [https://twitter.com/OrchidProtocol](https://twitter.com/OrchidProtocol)

  Linkedin: [https://www.linkedin.com/company/orchidprotocol/](https://www.linkedin.com/company/orchidprotocol/)

  Telegram (Announcements): [https://t.me/officialorchidlabs](https://t.me/officialorchidlabs)

  Telegram (Community): [https://t.me/OrchidOfficial](https://t.me/OrchidOfficial)

  Facebook: [https://www.facebook.com/OrchidProtocol/](https://www.facebook.com/OrchidProtocol/)

  Medium: [https://medium.com/orchid-labs](https://medium.com/orchid-labs)

  Github: [https://github.com/OrchidTechnologies](https://github.com/OrchidTechnologies)

  Reddit: [https://www.reddit.com/r/orchid](https://www.reddit.com/r/orchid)
body_ko: |-
  아침에 일어나서 전등 스위치를 켤 때 잠시 멈추고 전기 요금이 얼마나 나올지 생각하십니까? 아니면 어딘가 부딪치지 않도록 바로 스위치를 켜십니까?

  어느 때고 소량의 자원을 사용하거나 중단할 수 있는 전기와 같은 방식으로 다른 종류의 서비스에 대해서도 요금을 지불할 수 있다면 어떤 일이 일어날 수 있을까요?

  Orchid 의 새로운 이더리움용 레이어 2 스케일링 아키텍처는 확률적 나노 지불 방식을 사용하기 때문에 사용자가 전기 요금과 같은 방식으로 서비스 요금을 지불할 수 있습니다. 나노 지불의 특징은 다음과 같습니다. 크기가 작기 때문에 원하는 대로 켜거나 끌 수 있습니다. 그러나 월간 전기 요금과 달리 나노 지불은 움직임에 따라 가치가 함께 전달됩니다. Orchid 는 이 핵심 기술을 사용하여 Orchid 앱 사용자에게 전등 스위치를 켜는 것처럼 간단하게 VPN 경로를 구성하고 관리할 수 있는 새로운 방법을 제공하는 방식으로 대역폭 시장에 참여합니다.

  ## Orchid 의 이더리움 기반 규모 비례 지불 방식
  Orchid 네트워크의 대역폭 시장은 구매자(Orchid 앱 사용자)와 판매자(Orchid 서버 운영자)로 구성된 양면 시장입니다. 대역폭 교환에는 기본 서비스와 지불을 모두 지원하기 위해 높은 거래 처리량이 요구됩니다. 지불은 빈도가 높은 패킷 단위로 이루어질 것으로 예상됩니다. 생태계에서 구매자와 판매자 사이에 필요한 대역폭 교환 수준에서의 나노 거래 정산에 이더리움 레이어 1 을 사용하는 것은 너무 느리고 비용이 많이 소요됩니다. 이 문제를 해결하기 위해 Orchid 는 패킷당 네트워크 지불에 확률적 나노 지불이라고하는 첨단 지불 아키텍처를 사용합니다.

  ## 기존의 레이어 2 스케일링 솔루션
  이미 다수의 레이어 2 스케일링 솔루션이 존재합니다(예: 비트코인의 [라이트닝 네트워크](https://lightning.network/) 및 이더리움의 [라이덴 네트워크](https://raiden.network/) ). 이 두 가지 접근 방식은 모두 네트워크형 지불 채널 범주에 속하며, 이론적으로 Orchid 의 대역폭 시장에서 지불 레이어 역할을 수행할 수 있습니다.

  하지만 네트워크형 결제 채널에는 몇 가지 주요 단점이 존재합니다. 네트워크형 지불 채널의 경우 사용자가 특정 네트워크 노드로 예치금을 입금하고 동결해야 하기 때문에 거래 상대방 위험이 발생합니다. 네트워크형 지불 채널을 사용한 결제 비용은 본질적으로 O(log N)이어서 O(C)인 확률적 지불 방식에 비해 스케일링 효율성이 떨어집니다. 또한 네트워크 채널 지불 방식은 회로의 단일 노드에 장애가 발생하면 라우팅에 오류가 발생하거나 적시에 전달되지 않을 수 있습니다. 끝으로, 확률론적 지불보다 더 많은 당사자에게 지불 정보를 유출합니다. 이러한 이유로 네트워크 지불 채널은 Orchid 의 사용 사례에 있어 나노 지불 방식보다 덜 실용적입니다.

  ## Orchid 나노 지불: 작동 방식
  확률적 지불 방식의 경우 구매자는 1 달러 가치의 거래에 대한 대금을 직접 송금하는 대신 100 달러를 수취할 수 있는 1%의 확률을 전송할 수 있습니다. Orchid 는 이를 가액이 아주 적은 나노 지불 티켓을 사용하여 극한까지 끌어올리는 설계를 채택했습니다. 티켓은 모두 오프체인으로 전송되며, 티켓이 실물로 교환된 경우에만 수령자가 온체인 거래를 통해 액면가 금액을 청구해야 하는데, 이는 매우 드문 경우입니다. 수령자는 티켓이 당첨될 것인지 미리 알 수 없으므로 모든 티켓에 내재 가치를 부여합니다.


  ## 나노 지불의 예상 흐름
  1. 송금인이 OXT 를 이더리움 스마트 계약에 예치함으로써 나노 지불 계좌를 개설합니다.
  2. 그런 다음 예치금에 의해 보증되는 유효한 나노 지불을 해당 금액을 서비스 대금으로 수락하는 네트워크 상의 제공자에게 발행할 수 있습니다.
  3. 결국, 사용자는 "당첨"된 나노 지불을 발행하고, 이를 통해 제공자는 온체인 거래를 통해 티켓을 대금으로 교환할 수 있습니다.
  4. 사용자는 계좌에 있는 자금 수준에 따라 나노 지불 계좌에 더 많은 OXT 를 추가하거나 추가하지 않아도 될 수 있습니다.
  5. 시간이 지남에 따라, 온체인으로 전송된 가치는 확률적 나노 지불에 표시된 가치와 일치하게 됩니다.

  ![Nanopayments](/img/uploads/oxt-provider-illustration-ko.jpg)

  위의 그래픽은 Orchid 앱 사용자가 이더리움 블록체인에 단일 예치금을 설정한 후 복수의 제공자에 나노 지불을 보낼 수 있을 것으로 예상되는 방법과 일반적인 지불 흐름이 어떻게 작동하는지를 보여줍니다.

  Orchid 는 이 시스템의 일반적인 특성이 사용자가 원하는 대로 다른 제공자를 선택할 수 있고 신속하게 서비스 대금 지불 관계를 수립할 수 있어야 하는 대역폭 시장에 매우 적합하다고 생각합니다. 사용자가 속도, 가용성, 요금 및/또는 위치에 따라 VPN 제공자를 임의로 신속하게 변경할 수 있어야 합니다. 이더리움의 나노 지불 계정 설정은 사용자가 부담을 안도록 구성되어 있지만, 사용자가 VPN 서비스를 위해 제공자와 월간, 연간 또는 다년 계약을 체결하는 현재의 VPN 시장과도 호환됩니다. Orchid 사용자는 서비스 사용을 중단하는 경우 나노 지불 계좌에서 예치금을 회수 할 수 있다는 추가적인 이점을 가집니다.


  ## 잔액 변동
  Orchid 나노 지불에는 한 가지 주목할 만한 한계가 있는데, 바로 변동성입니다. Orchid 앱에서 나노 지불을 발행 할 때마다 당첨 티켓 확률이 작지만 독립적으로 존재하므로 수령자의 계좌 잔액이 줄어들게 됩니다. 클라이언트의 잔고가 단일 당첨 티켓만 충당할 수 있는 정도라면 이는 심각한 제한 요소입니다. 이를 설명하기 위해, 클라이언트가 일주일에 백만의 비율로 확률이 2 달러의 1 백만 분의 1 에 해당하는 티켓을 발행한다고 상상해 보겠습니다. 평균적으로 주당 한 명의 당첨자가 발생하지만, 당첨 티켓의 발급은 첫날 또는 처음 몇 시간 안에 이루어질 가능성도 상당합니다. 긍정적인 측면에서 보면, 당첨자가 몇 주 동안 나타나지 않을 확률도 상당합니다. 다행히도 Orchid 는 이를 꽤 간단히 해결할 수 있다고 생각합니다. 클라이언트가 액면가의 배수를 입금하여 변동성을 완화할 수 있습니다. Orchid 에서 이항 분포로 이를 모형화한다면 클라이언트가 계좌에 2 달러가 아닌 20 달러를 보유하고 있는 경우, 잔고가 예상보다 두 배 더 빠르게 고갈될 가능성이 약 10%에서 약 2%로 줄어들 것입니다.

  ## 지불 익명성
  대부분의 나노 지불 티켓은 "당첨"되지 않으므로 체인에 게시되지 않습니다. 그러나 드물게 당첨된 티켓은 이더리움 블록체인에 공개적으로 기록됩니다. 따라서 Orchid 나노 지불은 의사 익명성만을 지닙니다. 다중 홉 회선의 경우, Orchid 클라이언트가 각 홉마다 별도의 계정을 사용하므로 임의의 자가 공개 지불 정보를 사용하여 회선을 추적하는 것을 방지하는 데 도움이 됩니다. 당첨 티켓이 드물기 때문에(일반적인 상황에서 약 1 주일에 한 번으로 예상) 멀티 홉 회선의 공개 지불 레코드는 단일 홉 회선과 본질적으로 구별할 수 없는 것처럼 보이도록 설계되어 있습니다. 경로 추적을 시도하는 공격자가 지불자의 공용 주소와 관련된 결제 서비스 업체 중 일부를 알게 될 것으로 예상되지만 동일한 회선에서 서로 다른 노드에 대해 둘 이상의 티켓이 당첨될 확률은 무시할 정도로 낮기 때문에 거래의 추적성이 줄어듭니다.

  ## 검열 저항
  대부분의 퍼블릭 블록체인 네트워크에서와 마찬가지로 이더리움 거래는 검증자(이더리움 네트워크의 채굴자)가 생성된 블록에 거래를 포함시키지 않기로 결정하지 않는 한 검열할 수 없습니다. 블록이 해시 파워에 비례하여 모든 채굴자 간에 무작위로 채굴되기 때문에, 대다수의 채굴자가 Orchid 지불을 적극적으로 검열함에 따라 Orchid 네트워크에 상당한 정체 및 혼란을 야기합니다. 예를 들어, 해시 파워의 90%가 Orchid 관련 거래를 포함하지 않기로 선택한 경우에도 Orchid 네트워크가 여전히 작동하지만 거래를 확인하기까지 평균적으로 10 배 더 오래 소요됩니다.

  다수의 채굴자 그룹(예: 51%)이 Orchid 관련 거래를 포함하는 블록을 거부함으로써 Orchid 관련 거래를 검열하기로 선택한 경우 더 심각한 형태의 검열이 가능할 것입니다. 이는 이더리움 프로토콜의 규칙에 따라 유효하며, 소프트 포크를 효과적으로 생성합니다. 하지만 그와 같은 소프트 포크를 생성하기 위해 대규모 채굴자 담합을 조직하는 경우 담합 당사자에게 상당한 재정적 손실 위험을 야기합니다. 소프트 포크가 충분한 해시 파워를 구현하지 못하면, 담합 채굴자들이 블록 보상을 놓치게 됩니다. 재정 손실 위험이 없다 하더라도 이더리움 채굴 커뮤니티의 분산 특성과 블록체인 채굴 전략에 대한 법적 및 규제 제한 부재 때문에 이러한 가능성은 극히 낮다고 판단됩니다.


  ## 결론
  Orchid 나노 지불은 기존 지불 채널 솔루션에 비해 유리하며 사용자에게 지속적인 서비스를 제공하도록 최적화되어 있습니다. 거래 수수료가 줄어들기 때문에 이더리움 자체로 업그레이드하지 않고서도 최대 수백만 명의 사용자를 지원할 수 있습니다. 설치 비용이 쌍방을 기준으로 하지 않고 사용자가 시작할 때만 발생합니다. 즉, 제공자는 설치 비용을 발생시키지 않고 즉시 사용자에게 서비스를 제공할 수 있으며 사용자는 마음대로 제공자를 변경할 수 있다는 의미입니다. Orchid 는 이를 현대식 VPN 애플리케이션이 충족해야 할 설계 요건으로 간주합니다.

  ## 최신 Orchid 뉴스 수신
  다른 사람보다 먼저 최신 Orchid 뉴스를 접하고 네트워크를 테스트하고 Orchid 토큰을 사용해 보려면, [ Orchid 뉴스레터를 신청](https://www.orchid.com/#newsletter-signup) 하십시오.

  웹사이트: [www.orchid.com](https://www.orchid.com)

  Twitter: [https://twitter.com/OrchidProtocol](https://twitter.com/OrchidProtocol)

  Linkedin: [https://www.linkedin.com/company/orchidprotocol/](https://www.linkedin.com/company/orchidprotocol/)

  Telegram (공지 사항): [https://t.me/officialorchidlabs](https://t.me/officialorchidlabs)

  Telegram (커뮤니티): [https://t.me/OrchidOfficial](https://t.me/OrchidOfficial)

  Facebook: [https://www.facebook.com/OrchidProtocol/](https://www.facebook.com/OrchidProtocol/)

  Medium: [https://medium.com/orchid-labs](https://medium.com/orchid-labs)

  Github: [https://github.com/OrchidTechnologies](https://github.com/OrchidTechnologies)

  Reddit: [https://www.reddit.com/r/orchid](https://www.reddit.com/r/orchid)
  
---
When you wake up in the morning and flick on a light switch, do you pause to think about how many tiny fractions of a penny that electricity costs? Or do you just flick on the light so you don’t bump your head?

And if you could pay for other kinds of services the same way you pay for electricity — a tiny flow of resources that could be turned on or off at any moment — what possibilities would that open up?

Orchid’s novel layer 2 scaling architecture for Ethereum uses probabilistic nanopayments to allow users to pay for services in just this way. Nanopayments are what they sound like: they are tiny, and you can turn them on or off at will. But unlike a monthly electric bill, nanopayments transmit value as they move. We’re using this core technology to power our bandwidth marketplace, which is intended to offer users of the Orchid App a new way to construct VPN routes and manage them — just like flicking on a light switch.

## Scaling payments on Ethereum with Orchid
The Orchid Network’s bandwidth marketplace is two-sided, comprising buyers (Orchid App users) and sellers (Orchid Server operators). The exchange of bandwidth requires a high transaction throughput to support both basic service and payments. Payments are expected to be made at a per-packet level with high frequency. Ethereum’s layer 1 would be too slow and expensive to settle nano transactions at the level of bandwidth exchange required between buyers and sellers in the ecosystem. To solve this issue, Orchid uses an advanced payments architecture known as probabilistic nanopayments for per-packet network payments.

## Existing layer 2 scaling solutions
Several layer 2 scaling proposals already exist, including the [Lightning Network](https://lightning.network/) on Bitcoin and the [Raiden Network](https://raiden.network/) on Ethereum. Both of these approaches fall into the category of networked payment channels, which could, in theory, serve as the payments layer for Orchid’s bandwidth marketplace.

However, networked payment channels have several key disadvantages. They require users to deposit and lockup funds with specific network nodes, creating counterparty risk. The cost of a payment using networked payment channels is essentially O(log N), compared with O(C) for probabilistic payments, making them less scaling efficient. Network channel payments can also fail to route or fail to deliver in a timely manner if a single node in the circuit fails. Finally, they leak payment information to more parties than stochastic payments. For these reasons, network payment channels are less practical than nanopayments for Orchid’s use case.

## Orchid Nanopayments: how they work
Instead of sending a transaction worth $1 directly, with probabilistic payments the buyer could send a 1% chance of winning $100. Orchid’s design takes this to an extreme, with nanopayment tickets representing the value of thousandths of a penny, or smaller. The tickets are all sent off-chain; only when a winning ticket is redeemed would its receiver have to make an on-chain transaction to claim the face value amount, which is rare. The receiver has no way to know if a ticket is a winner beforehand, therefore giving all tickets implied value.

## The expected flow of nanopayments
- Sender opens nanopayment account by depositing OXT into an Ethereum smart contract.
- Sender can then issue valid nanopayments, backed by the deposit, to any provider on the network that is accepting payments for service.
- Eventually, the user is expected to issue a nanopayment that “wins”, which allows the provider to redeem the ticket as a payment via an on-chain transaction.
- The user may or may not need to add more OXT to their nanopayment account, depending on the level of funds in the account.
- Over time, the value transmitted on-chain will in expectation match the value represented in the probabilistic nanopayments.

![Nanopayments](/img/uploads/oxt-provider-illustration.png)

The graphic above demonstrates how the Orchid App users are expected to be able to send nanopayments to multiple providers after incurring a single deposit setup on the Ethereum blockchain, as well as how the general flow of payments is intended to operate.

We believe the general properties of this system are well suited for a bandwidth marketplace, where the user requires the ability to select different providers at will and for them to very quickly establish a payment-for-services relationship. Users should be able to quickly change VPN providers arbitrarily based on speed, availability, price and/or location. The setup of the nanopayment account on Ethereum is structured to be shouldered by the user, but is compatible with the current VPN market where users sign monthly, annual, or even multi-annual agreements with providers for VPN service. The Orchid user is expected to have the added benefit of being able to take back the deposit from the nanopayment account if they stop using the service.

## Balance Variance
Orchid nanopayments do have one notable limitation: variance. Each time the Orchid App issues a nanopayment, there is a small independent probability of a winning ticket, which would decrease the receiver’s account balance. If the client’s balance was only large enough to cover a single winner, this would be a serious limitation. To illustrate this, imagine a client issuing tickets that have a 1-in-a-million chance of $2 at a rate of 1 million per week. While on average there will only be 1 winner per week, there is a reasonable probability that the winning ticket will be issued on the first day or even in the first few hours. On the plus side, there’s also a reasonable chance the winner won’t pop up for a few weeks. Fortunately we believe there’s a fairly simple solution: clients can just deposit a multiple of the face value, thereby smoothing out the variance. If we model this as a binomial distribution and if the client has $20 in their account instead of $2, the chance of their balance being depleted twice as fast as expected is reduced from around 10% to about 2%.

## Payment Anonymity
Most nanopayment tickets do not “win,” and therefore would not be posted on-chain. However, rare winning tickets result in a public record on the Ethereum blockchain. Therefore, Orchid nanopayments are only pseudo-anonymous. For multi-hop circuits, it is anticipated that the Orchid client uses a separate account for each hop, which helps prevent anyone tracing the circuit using public payment information. As winning tickets are rare — anticipated to be approximately once per week in common circumstances — the public payment record from a multi-hop circuit is designed to appear essentially indistinguishable from that of a single-hop circuit. We expect that an adversary trying to trace the route will learn some of the payment providers associated with a payer’s public address, but the probability of two or more winning tickets to different nodes in the same circuit at the same time is vanishingly small, which reduces the traceability of transactions.

## Censorship resistance
As on most public blockchain networks, Ethereum transactions cannot be censored unless their validators (miners in the Ethereum network) choose not to include them in their created blocks. As blocks are mined randomly among all miners in proportion to hash power, the vast majority of miners would have to actively censor Orchid payments to significantly disrupt the Orchid Network. For example, if 90% of the hash power chose not to include Orchid-related transactions, the Orchid Network would still function, albeit with transactions taking, on average, ten times longer to confirm.

A more severe form of censorship would be possible if a large group of miners — say 51% — chose to censor Orchid-related transactions by rejecting blocks that included them. This would be valid according to the rules of the Ethereum protocol, and would effectively create a soft fork. However, organizing large-scale miner collusion to create such a soft fork carries significant risk of financial loss for the colluders; if the soft fork fails to achieve sufficient hashing power, the colluding miners would miss out on their block rewards. Even without the risk of financial loss, we consider this possibility extremely unlikely due to the decentralized nature of Ethereum mining communities and the lack of legal and regulatory limitations on blockchain mining strategies.

## Conclusion
We believe that Orchid nanopayments have advantages over existing payment channel solutions and are optimized to provide a continuous service to users. The reduction in transaction fees makes it possible to support up to millions of users, without requiring any upgrades to Ethereum itself. Setup costs are not pairwise, but are only incurred by the user to start. This means providers are expected to be able to immediately begin servicing users without incurring setup costs and users are expected to have the ability to switch between providers on a whim, which we view as a design requirement for a modern-day VPN application.

## Stay Up to date with Orchid
If you want to keep current on the latest Orchid news and be among the first to test out the network, [sign up for our newsletter](https://www.orchid.com/#newsletter-signup) to receive launch updates.

Website: [www.orchid.com](https://www.orchid.com)

Twitter: [https://twitter.com/OrchidProtocol](https://twitter.com/OrchidProtocol)

Linkedin: [https://www.linkedin.com/company/orchidprotocol/](https://www.linkedin.com/company/orchidprotocol/)

Telegram (Announcements): [https://t.me/officialorchidlabs](https://t.me/officialorchidlabs)

Telegram (Community): [https://t.me/OrchidOfficial](https://t.me/OrchidOfficial)

Facebook: [https://www.facebook.com/OrchidProtocol/](https://www.facebook.com/OrchidProtocol/)

Medium: [https://medium.com/orchid-labs](https://medium.com/orchid-labs)

Github: [https://github.com/OrchidTechnologies](https://github.com/OrchidTechnologies)

Reddit: [https://www.reddit.com/r/orchid](https://www.reddit.com/r/orchid)