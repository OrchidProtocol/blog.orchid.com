---
templateKey: blog-post
public: true
url: orchid-a-new-approach-to-vpns
title: 'Orchid: A New Approach to VPNs'
title_ja: 'オーキッド。VPN への新しいアプローチ'
title_ko: 'Orchid: VPN 에 대한 새로운 접근방식'
title_zh: 'Orchid：一种全新的 VPN 方法'
date: 2019-10-9T17:47:36.651Z
description: 'We’re building a next-gen VPN market powered by probabilistic nanopayments, with a design emphasizing these core tenets: scalability, decentralization, usability, simplicity, and extensibility.'
description_ja: '私たちは確率的なナノペイメントを備えた次世代の VPN 市場を構築し、次の中核となる原則を重視した設計を行っています。すなわち、スケーラビリティ、分散化、使いやすさ、シンプルさ、拡張性です。'
description_ko: 'Orchid 는 확장성, 분산성, 사용성, 단순성 및 범위성이라는핵심 원칙을 강조하는 디자인을 통해 확률적 나노 지불을기반으로 하는 차세대 VPN 시장을 구축하고 있습니다.'
description_zh: '我们正在建立一个由概率极微支付支持的新一代 VPN 市场，它的设计强调以下核心原则：可伸缩性、去中心化、可用性、简单性和可扩展性。'
featuredpost: true
featuredimage: /img/new-approach.jpg
tags:
  - VPN
  - Decentralization
  - Blockchain
body_ja: |-
  オーキッドは、ノード プロバイダーがトークンを差し出し、イーサリアムのブロックチェーンを利用してサービスを宣伝して OXT（オーキッドのネイティブ暗号通貨）で支払いを受け取る帯域幅市場を含む、匿名通信および仮想プライベート ネットワーキングのための市場ベースの分散型システムです。


  > 分散型システムを使用すると、ユーザーは、複数の異なる VPN プロバイダーに信頼を分散させることができます。これにより、そのユーザーの情報の流れが分散され、単一のエンティティが全体像を見られなくなります。

  オーキッド マーケットプレイスでは、許可不要の経済的なセキュリティと信頼性をクライアントとサーバー間に作り出すためにインセンティブを使用します。このピアツーピア市場は動的です。クライアントは、ステークに対してランダムに加重され、二次的な要求（価格、場所など）でフィルタリングされたノードを選択することにより、シングルホップまたはマルチホップのオニオン ルーテッド回路を選択できます。シングルホップ ルートには、ユーザーのトラフィックを公開ネットワークまたは、そのユーザーの ISP にルーティングするためのトンネルを作成するという通常の VPN 接続の利点がありますが、マルチホップ接続にはそれに加えて、単一のプロバイダーからユーザーのネットワーク データを保護するというプライバシー上の利点もあります。

  今日の従来型 VPN の能力は限定的です。従来型 VPN は中央集中的であるため、複数の異なるプロバイダーを組み合わせてマルチホップ レベルのセキュリティを提供する分散型プロパティと競合することはできません。また、単一の企業がマルチホップ VPN ルートを提供する場合でも、中央集中的な単一エンティティを信頼する必要があります。分散型システムを使用すると、ユーザーは、複数の異なる VPN プロバイダーに信頼を分散させることができます。これにより、そのユーザーの情報の流れが分散され、単一のエンティティが全体像を見られなくなります。このようなシステムは、単一のプロバイダーから VPN サービスを購入する場合には不可能です。

  ステーキングは、オペレーターの不正行為に対するインセンティブを調整し、特に線形のステーク加重は、シビル攻撃を中和します。確率的ナノペイメント ソリューションは、取引スループットを拡大し、信頼できる集中型当事者なしに流動性の高い帯域幅市場を実現します。パケット規模のナノペイメントで、取引者間の暗黙的なフロートバランスを極小レベルまで低減することにより、信頼が不要な高頻度のやり取りが可能になります。

  ![Illustration of the lifecycle of OXT](/img/uploads/orchid-platform-illustration-ja.jpg)

  ## コア テクノロジー
  オーキッドの技術は高度にモジュール化されています。各コンポーネントは、ある程度分離可能であり、より大きなエコシステムにおける特定の役割と円滑にやりとりすることを目的としています。抽象的には、システムには以下が含まれます。

  - オーキッドのアプリを実行するユーザー
  - オーキッドのサーバーを実行するサービス プロバイダー
  - クライアント/サーバーのやり取りを仲介するプロトコル
  - 経済的に健全で技術的に安全なプロトコルの操作をサポートするイーサリアム ブロックチェーンに展開されたいくつかのスマート コントラクト

  セキュリティを追求するにあたり、長年にわたって基本的に「そのまま」機能し続けるとは思えなかった機能や設計要素は削除する傾向がありました。

  ![A fun illustration of OXT](/img/a-new-approach-decorative-illustration.png)
  ## オーキッド暗号通貨（OXT）
  OXT は、＃ERC-20 標準に基づいた「事前にマイニングされた」暗号通貨となる予定であり、オーキッド マーケットプレイスの買い手と売り手の間の信頼を分散するために使用されます。またプロバイダーは、自身の OXT 持分を調整することで競争力を維持できるため、OXT はセキュリティと健全な市場のダイナミクスを促進するツールとしても機能します。開始時には、10 億（1,000,000,000）に限定された供給を予定しています。追加の OXT を作成する意思はありません。


  ## オーキッドのプロトコル
  オーキッドのソフトウェアは、OpenVPN または WireGuard に対象範囲が似ているカスタム VPN プロトコルを使用するよう指定されています。オーキッドのプロトコルは高性能ネットワーク向けに設計されており、一般的な Web 標準である WebRTC 上で実行されます。WebRTCは、ブラウザ内部からビデオやオーディオを送信するために広く使用されています。私たちのプロトコルは、ユーザーがリモート ネットワークリソースへのアクセスをリクエストし、ナノペイメント システムによってOXT を使用してこれらのリソースの料金を支払えるようにしています。

  ## オーキッドのサーバーの設計
  オーキッドのサービス プロバイダーは、OpenVPN などのプロトコル用の一般的な VPN デーモンと同様のサーバーを走らせる予定ですが、オーキッドのプロトコルを使用します。オーキッドのサーバーは、ステーク レジストリおよびプロバイダー ディレクトリに登録情報を保持します。ステーク レジストリは、オーキッド クライアントが分散型の環境で、ユーザーに代わってランダム サーバーを自動的に検出できるように最適化されています。一方プロバイダー ディレクトリは、サーバー ノードがジオロケーションや提供される追加サービスなどのメタデータを登録できるようになっています。オーキッドのサーバー群が全体としてネットワークを構成します。


  ## オーキッドのネットワークの設計
  オーキッドのネットワークは、イーサリアム ブロックチェーンに保存されるデータ構造のセットを使用して、クライアントが帯域幅販売者のノードを効率的に選択できるようにします。

  クライアントは、ランダムな相対ステーク加重線形選択と、それに続く 2次制約フィルタリングという 2 段階プロセスを使用して、プロキシ チェーンのノードを選択すると期待されています。第 1 段階の線形選択は、ノード ディレクトリ ツリーのスキャン関数によって実行されます。アプリはローカルにランダムなポイントを生成し、それをスキャンの単一引数として渡し、それがノード ディレクトリ ツリーを下っていきます。この検索は、ステーク セグメントが選択されたランダム ポイントと交差する単一かつ一意のリーフ（またはノード間）で終了します。

  線形の相対的なステーク加重に基づいて 1 つ以上のノードを選択した後、アプリは、出口のジオロケーション、レイテンシ（ping）、価格、カスタム ノード メタデータ タグ、任意のホワイトリストなどの追加基準でフィルタリングできます。


  [オーキッドのネットワーク:ランダム選択 + ステーク加重](https://blog.orchid.com/orchids-network-random-selection-stake-weighting/)

  ![Orchid enabling a smartphone to connect to the world wide web](/img/oxt-illustration.png)

  ## オーキッドのアプリの設計

  オーキッドのアプリは、OpenVPN などのプロトコル用の一般的なVPN クライアントと同様のクライアントですが、オーキッドのプロトコルを話します。オーキッド ネットワーク クライアントは、ネットワーク トラフィックの分析や、マルチホップ構成で複数のプロバイダーを選択する機能など、ほとんどの VPN クライアントが提供する基本機能を超える機能の提供を目的としています。オーキッドのクライアントには、iOS、Android、macOS、Linux、および（まもなく）Windows からアクセスできます。

  ## オーキッドのナノペイメントの設計
  オーキッドの構造は、新しい確率的ナノペイメント システムを使用することにより、1 秒あたり数百万取引までのスケーリングを可能にするよう設計されています。そのため、パケットごとに分散型の支払いができるようになります。このナノペイメント システムはオーキッドのピアツーピア帯域幅マーケットプレイスの基盤です。このマーケットプレイスでは、クライアントがノード オペレーターに、プロキシ帯域幅の OXT ロータリー チケットを支払います。このシステムは、多くの取引にまたがって、それどころか複数の当事者にまたがって取引費用を償却することにより、少額の支払いに対する取引手数料を下げるように設計されています。

  詳細については、 [ナノペイメントの紹介](https://blog.orchid.com/introducing-nanopayments/) をご覧ください。

  ## オーキッド マーケットプレイス
  オーキッドのマーケットは分散型のピアツーピア (P2P) ネットワークであり、オーキッドのアプリを実行しているユーザーは、オーキッドのサーバーを実行している 1 人以上の売り手から帯域幅を購入して、インターネット上の特定のリソース（Web サイトなど）へのプロキシ チェーンを形成できます。

  オーキッドのマーケットの主な参加者の役割は次のとおりです。

  - プロキシ チェーン接続を開始する、オーキッドのアプリを実行しているユーザー
  - 暗号化されたトラフィックを転送する 1 つ以上のリレー ノード（オプション）
  - 外部宛先（Web サイトなど）への最終的な接続を提供する出口ノード
  - トラフィック（リレーまたは出口）のためにナノペイメントを受け入れる帯域幅の売り手

  帯域幅の売り手は、ノードをイーサリアム ブロックチェーンに登録し、ユーザー クライアントは、イーサリアム スマート コントラクトへの呼び出しを介してルートに適したノードを選択します。オーキッドの構造は、ステーク加重を使用しています。売り手は OXT 暗号通貨をロックして、ノードに関連付けられたステーク デポジットを形成し、相対的なステークに比例するトラフィックを受け取ります。

  ## 結論
  上記のさまざまなコンポーネントが全体としてオーキッドを形成します。これらのピースをまとめると、私たちは、分散化の性質を利用して複数のプロバイダーに信頼を分散し、最終的に、現在の市場で利用できるよりもはるかに多くのエージェンシーと制御をユーザーに提供する、新しい VPN 製品を作成する過程にあります。分散型設計と市場ベースのインセンティブ構造を組み合わせることにより、ユーザーのプライバシーを保護し、データを制御しながら、健全な市場をサポートする需要を生み出すことができると考えています。

  私たちのプロトコルで開発しているオープン ソース コミュニティは、今後、トラフィック分析の耐性、支払いの匿名性、低分散のナノペイメント、二重支出の検出と防止の改善、トラフィックの難読化、検閲耐性の向上、ホワイトリスト保証債券のソリューションやその他に取り組んでいくと予想されます。

  政府と企業の双方が私たちのオンラインのやり取りを支配しようとしているため、VPN 市場は急騰しています。しかし、VPN サービスでユーザーが望むものを実現するには、新しいモデルが必要です。オーキッドでは、組織ではなく個人が未来をコントロールする新しい時代のオンライン インタラクションへの道を開くのに役立つのは、ピアツーピア市場とイーサリアム ブロックチェーン上の分散アーキテクチャだと考えています。

  ## オーキッドで最新情報を入手
  常に最新のオーキッド ニュースを入手し、このネットワークを試す最初のユーザーになるには、ローンチに関する最新情報をお届けする[ニュースレターにご登録ください](https://www.orchid.com/#newsletter-signup)。

  Webサイト: [www.orchid.com](https://www.orchid.com)

  Twitter: [https://twitter.com/OrchidProtocol](https://twitter.com/OrchidProtocol)

  Linkedin: [https://www.linkedin.com/company/orchidprotocol/](https://www.linkedin.com/company/orchidprotocol/)

  Telegram (お知らせ): [https://t.me/officialorchidlabs](https://t.me/officialorchidlabs)

  Telegram (コミュニティ): [https://t.me/OrchidOfficial](https://t.me/OrchidOfficial)

  Facebook: [https://www.facebook.com/OrchidProtocol/](https://www.facebook.com/OrchidProtocol/)

  Medium: [https://medium.com/orchid-labs](https://medium.com/orchid-labs)

  Github: [https://github.com/OrchidTechnologies](https://github.com/OrchidTechnologies)

  Reddit: [https://www.reddit.com/r/orchid](https://www.reddit.com/r/orchid)
body_ko: |-
  Orchid 는 익명 통신 및 가상 사설 네트워킹을 위한 분산형 시장 기반 시스템으로, 노드 제공자가 토큰 소유를 통해 이더리움 블록체인을 사용하여 서비스를 광고하고 OXT(Orchid 의 고유 암호 화폐)로 대금을 받는 대역폭 시장을 포함합니다.

  > 분산 시스템을 사용하면 사용자가 다수의 개별 VPN 제공자에 신뢰를 분산시킬 수 있으므로 정보 흐름을 분리하여 단일 엔티티가 전체 그림을 파악할 수 없도록 합니다.

  Orchid 시장에서는 인센티브를 사용하여 무허가 방식으로 클라이언트와 서버 간에 경제적인 보안과 안정성을 구현합니다. Orchid 의 P2P 시장은 역동적입니다. 클라이언트는 지분에 무작위로 가중치가 부여되고 이차 필수 조건(가격, 위치 등)을 기준으로 필터링된 노드를 선택함으로써 단일 또는 다중 홉 양파 라우팅 회선을 선택할 수 있습니다. 단일 홉 경로는 일반 VPN 연결의 이점을 제공하여 공용 네트워크 또는 ISP 를 통해 트래픽을 라우팅하기 위한 터널을 생성하는 반면, 다중 홉 연결은 임의의 한 제공자의 네트워크 데이터를 보호함으로써 추가적인 개인 정보 보호 이점을 제공합니다.

  오늘날 기존의 VPN 은 제한적입니다. 전통적인 VPN 의 중앙집중화 특성은 다중 홉 수준의 보안을 제공하는 다수 제공자의 결합에 따른 분산 속성과 경쟁할 수 없습니다. 단일 회사가 다중 홉 VPN 경로를 제공하더라도 사용자가 신뢰를 부여하는 중앙 집중화된 단일 엔티티가 여전히 존재합니다. 분산 시스템을 사용하면 사용자가 다수의 개별 VPN 제공자에 신뢰를 분산시킬 수 있으므로 정보 흐름을 분리하여 단일 엔티티가 전체 그림을 파악할 수 없도록 합니다. 단일 제공자로부터 VPN 서비스를 구매하는 경우에는 이와 같은 시스템이 가능하지 않습니다.

  스테이킹 방식은 운영자의 실수에 대비하여 인센티브를 조정하고 선형 지분 가중 방식은 특히 시빌 공격을 완화합니다. 확률적 나노 지불 솔루션은 거래 처리량을 확장하여 신뢰할 수 있는 중앙 당사자 없이 유동성이 높은 대역폭 시장을 구현합니다. 패킷 수준의 나노 지불은 거래자 간의 내재적인 유동 균형을 최소 수준으로 줄임으로써 높은 빈도의 무신뢰 상호 작용을 가능하게 합니다.

  ![Illustration of the lifecycle of OXT](/img/uploads/orchid-platform-illustration-ko.jpg)

  ## 핵심 기술
  Orchid 의 기술은 고도로 모듈화된 방식입니다. 각 구성 요소는 일부 분리가 가능하며, 더 광범위한 생태계에서 특정 역할과 원활하게 상호 작용하도록 설계되어 있습니다. 요약하자면, 생태계에는 다음이 포함됩니다.
  
  - Orchid 앱을 실행하는 사용자
  - Orchid 서버를 운영하는 서비스 제공자
  - 클라이언트/서버 상호 작용을 중재하는 프로토콜
  - 경제적으로 건전하고 기술적으로 안정적인 프로토콜 작동을 지원하는 이더리움 블록체인에 배치된 여러 스마트 계약
  
  Orchid 는 보안을 위해 기본적으로 수 년 동안 계속해서 "당초 의도대로" 작동하지 않는 기능과 디자인 요소를 제거했습니다.

  ![A fun illustration of OXT](/img/a-new-approach-decorative-illustration.png)
  ## Orchid 암호 화폐(OXT)
  OXT 는 Orchid 시장에서 구매자와 판매자 간에 신뢰를 분산시키는 데 사용되는 ERC-20 표준을 기반으로 한 "사전 채굴" 암호 화폐입니다. 또한 제공자가 OXT 지분 조정을 통해 경쟁력을 유지할 수 있으므로 보안 및 건전한 시장 역학을 촉진하는 도구 역할도 수행합니다. 공급량은 출시 시점을 기준으로 10 억(1,000,000,000)으로 제한될 것입니다. 추가 OXT 를 발행할 계획은 없습니다.

  ## Orchid 프로토콜
  Orchid 소프트웨어는 OpenVPN 또는 WireGuard 와 범위가 유사한 사용자 지정 VPN 프로토콜을 사용합니다. Orchid 프로토콜은 고성능 네트워킹을 위해 설계되었으며, 일반 웹 표준인 WebRTC 의 상위에서 실행되고 브라우저 내부에서 비디오 및 오디오를 전송하는 데 널리 사용됩니다. Orchid 프로토콜을 사용하면 사용자가 원격 네트워크 리소스에 대한 액세스를 요청하고 나노 지불 시스템을 통해 OXT 를 사용하여 이러한 리소스에 대한 요금을 지불할 수 있습니다.

  ## Orchid 서버 설계
  Orchid 서비스 제공자는 OpenVPN 과 같은 프로토콜(Orchid 프로토콜로 지칭)을 위한 일반적인 VPN 데몬과 비슷한 서버를 실행합니다. Orchid 서버는 지분 레지스트리 및 제공자 디렉토리에 등록 정보를 유지합니다. 지분 레지스트리는 Orchid 클라이언트가 분산 환경에서 사용자 대신 임의의 서버를 자동으로 검색할 수 있도록 최적화되어 있으며, 제공자 디렉토리는 서버 노드가 지리적 위치 또는 제공되는 추가 서비스와 같은 메타데이터를 등록할 수 있도록 허용합니다. Orchid 서버는 전체적으로 네트워크를 구성합니다.

  ## Orchid 네트워크 설계
  Orchid 네트워크는 클라이언트가 대역폭 판매자의 노드를 효율적으로 선택할 수 있도록 이더리움 블록체인에 저장된 일련의 데이터 구조로 설계되어 있습니다.

  클라이언트는 이차 제약 조건 필터링이 수반되는 2 단계 무작위 상대적 지분 가중 방식 선형 선택 프로세스를 사용하여 프록시 체인에 대한 노드를 선택하게 됩니다. 1 단계 선형 선택은 노드 디렉토리 트리의 스캔 기능에 의해 수행됩니다. 앱이 로컬에서 임의의 지점을 생성하여 스캔할 단일 인수로 전달한 다음 노드 디렉토리 트리로 내립니다. 지분 세그먼트가 선택된 임의의 지점과 교차하는 단일 고유 리프 내에서 또는 노드 사이에서 검색이 종료됩니다.

  앱은 선형 상대 지분 가중치를 바탕으로 하나 이상의 노드를 선택한 후 종료 위치, 대기 시간(ping), 요금, 사용자 정의 노드 메타데이터 태그 및 무작위 화이트리스트와 같은 추가 기준을 사용하여 필터링할 수 있습니다.

  [Orchid 네트워크: 무작위 선택 + 지분 가중 방식](https://blog.orchid.com/orchids-network-random-selection-stake-weighting/)

  ![Orchid enabling a smartphone to connect to the world wide web](/img/oxt-illustration.png)

  ## Orchid 앱 설계
  Orchid 앱은 OpenVPN 과 같은 프로토콜(Orchid 프로토콜로 지칭)을 위한 일반적인 VPN 클라이언트와 유사한 클라이언트입니다. Orchid 네트워크 클라이언트는 네트워크 트래픽을 분석하고 다중 홉 구성에서 복수 제공자를 선택할 수 있는 기능을 통해 대부분의 VPN 클라이언트가 제공하는 기본 기능을 뛰어넘는 성능을 발휘합니다. Orchid 클라이언트는 iOS, Android, macOS, Linux 및 Windows(곧 출시 예정)를 통해 액세스할 수 있습니다.

  ## Orchid 나노 지불 설계
  Orchid 의 구조는 시스템을 초당 수백만 건의 거래를 처리할 수 있는 수준으로 확장하여 패킷 단위의 분산 결제까지 구현하도록 설계된 새로운 확률적 나노 지불 시스템을 사용합니다. 이 나노 지불 시스템은 클라이언트가 노드 운영자에게 프록시 대역폭에 대한 OXT 복권 티켓을 지불하는 Orchid P2P 대역폭 시장의 기반입니다. 이 시스템은 수많은 거래와 여러 주체에 대한 거래 수수료를 분할함으로써 소액 결제 시의 거래 수수료를 낮추도록 설계되었습니다.

  상세 내용은 [나노 지불 소개](https://blog.orchid.com/introducing-nanopayments/) 를 참조하십시오.

  ## Orchid 시장
  분산형 P2P 네트워크인 Orchid 시장에서는 Orchid 앱을 실행하는 사용자가 인터넷에서 특정 리소스(예: 웹사이트)에 프록시 체인을 형성하기 위해 Orchid 서버를 실행하는 하나 이상의 판매자로부터 대역폭을 구매할 수 있습니다. 

  Orchid 시장에서 주요 참가자가 담당하는 역할은 다음과 같습니다.

  - Orchid 앱을 실행하는 사용자가 프록시 체인 연결을 개시
  - 하나 이상의 릴레이 노드가 암호화된 트래픽을 전달(선택 사항)
  - 종료 노드가 외부 대상(예: 웹사이트)에 대한 최종 연결을 제공
  - 대역폭 판매자가 트래픽(중계 또는 종료)에 대한 나노 지불을 수락

  대역폭 판매자는 이더리움 블록체인에 노드를 등록하고 사용자 클라이언트는 이더리움 스마트 계약에 대한 호출을 통해 경로에 적합한 노드를 선택합니다. Orchid 의 구조는 지분 가중 방식을 사용합니다. 즉, 판매자는 자신의 상대 지분에 비례하여 트래픽을 받기 위해 OXT 암호 화폐를 통해 자신의 노드에 해당하는 지분 예치금을 형성합니다.

  ## 결론
  위에서 설명한 다양한 구성 요소가 전체적으로 Orchid 를 형성합니다. Orchid 는 이러한 조각들을 조합함으로써 분산화의 특성을 활용하여 다수 제공자에 신뢰를 분산시키고 궁극적으로 사용자가 현재 시장에서 가용한 것보다 훨씬 더 많은 에이전시와 통제 수단을 이용할 수 있도록 허용하는 새로운 VPN 제품을 만드는 과정에 있습니다. Orchid 는 분산형 설계를 시장 기반 인센티브 구조와 결합함으로써 사용자로 하여금 프라이버시를 보호하고 데이터를 제어할 수 있도록 하면서 건전한 시장에 대한 수요를 창출할 있다고 생각합니다.

  아울러 향후 프로토콜을 개발하는 오픈소스 커뮤니티가 트래픽 분석 저항, 지불 익명성, 변동성이 적은 나노 지불, 이중 지출 감지 및 예방 개선, 트래픽 난독화, 검열 저항 강화, 화이트리스트 보증 담보 등을 위한 솔루션을 개발할 것으로 예상합니다.

  정부와 기업 모두가 사용자의 온라인 상호 작용을 통제하려고 시도함에 따라 VPN 시장이 급격히 성장하고 있습니다. 그러나 VPN 서비스에서 사용자가 원하는 것을 구현하려면 새로운 모델이 필요합니다. Orchid 는 이더리움 블록체인의 P2P 시장 및 분산 아키텍처가 조직이 아닌 개인이 미래를 통제하는 새로운 온라인 상호 작용의 시대를 열어줄 수 있다고 생각합니다.

  ## 최신 Orchid 뉴스 수신
  다른 사람보다 먼저 최신 Orchid 뉴스를 접하고 네트워크를 테스트해 보려면, [Orchid 뉴스레터를 신청](https://www.orchid.com/#newsletter-signup) 하십시오.

  웹사이트: [www.orchid.com](https://www.orchid.com)

  Twitter: [https://twitter.com/OrchidProtocol](https://twitter.com/OrchidProtocol)

  Linkedin: [https://www.linkedin.com/company/orchidprotocol/](https://www.linkedin.com/company/orchidprotocol/)

  Telegram (공지 사항): [https://t.me/officialorchidlabs](https://t.me/officialorchidlabs)

  Telegram (커뮤니티): [https://t.me/OrchidOfficial](https://t.me/OrchidOfficial)

  Facebook: [https://www.facebook.com/OrchidProtocol/](https://www.facebook.com/OrchidProtocol/)

  Medium: [https://medium.com/orchid-labs](https://medium.com/orchid-labs)

  Github: [https://github.com/OrchidTechnologies](https://github.com/OrchidTechnologies)

  Reddit: [https://www.reddit.com/r/orchid](https://www.reddit.com/r/orchid)
body_zh: |-
  Orchid 是一个基于市场的去中心化匿名通信和虚拟专用网络系统，包括一个带宽市场，其中的节点提供商通过质押代币在以太坊区块链上宣传他们的服务并接收 OXT（Orchid 的原生加密货币）付款。

  > 您作为用户，使用分布式系统可以在多个不同的 VPN 提供商之间分配信任，从而分散信息流，不会让任何实体看到全局。

  Orchid 市场中使用了激励措施实现客户端与服务器之间无许可的经济安全性和可靠性。这个点对点市场是动态的；客户端可以通过选择随机权益加权并按次级需求（价格、位置等）筛选的节点来选择单跳或多跳洋葱路由回路。单跳路线具有普通 VPN 连接的优点，可创建用于在公共网络或您的 ISP 上路由您的流量的隧道，而多跳连接可保护您的网络数据不泄露给任何提供商，提供了更多的隐私优点。

  当今的传统 VPN 受到限制；它们的服务是集中式的，无法与多个不同提供商组合提供多跳级安全性的分布式属性竞争。即使单个公司提供多跳 VPN 路线，仍然会有单个集中式实体受到您的信任。您作为用户，使用分布式系统可以在多个不同的 VPN 提供商之间分配信任，从而分散信息流，不会让任何实体看到全局。从单个提供商处购买 VPN 服务时，不可能得到这种系统。

  质押与激励措施结合，可防范运营商的违法行为，尤其是线性权益加权可以压制女巫攻击。随机的极微支付解决方案可扩展交易吞吐量，建立一个没有受信任的中央方的高流动性带宽市场。数据包规模的极微支付支持高频率的去信任互动，将交易方之间的隐性浮动余额降低到极小的水平。

  ![Illustration of the lifecycle of OXT](/img/uploads/orchid-platform-illustration-zh.jpg)

  ## 核心技术
  Orchid 的技术具有高度模块化的特点。每个组件在一定程度上都可以分离，同时又与更大生态系统中的特定角色很好地交互。从抽象层面上，该系统包含：
  - 运行 Orchid App 的用户
  - 运行 Orchid Server 的服务提供商
  - 作为客户端/服务器交互媒介的协议
  - 部署到以太坊区块链上的几个智能合约，支持经济上有利和技术上安全的协议运行方式

  我们认为一些功能和设计元素不会多年基本保持“原样”运行，为了追求安全，我们通常删除了这些功能和设计元素。

  ![A fun illustration of OXT](/img/a-new-approach-decorative-illustration.png)
  ## Orchid 加密货币 (OXT)
  OXT 将成为基于 ERC-20 标准的“预挖”加密货币，用于分散 Orchid市场中买卖双方之间的信任。它也可以用作提高安全性和健康市场活力的工具，因为提供商可以调整其 OXT 质押金以保持竞争力。在发布之时，我们计划限量供应 10 亿 (1,000,000,000)，决不会增发OXT。


  ## Orchid 协议
  Orchid 软件使用一种自定义 VPN 协议，在范围上类似于 OpenVPN 或 WireGuard。Orchid 协议为高性能网络连接而设计，并且基于WebRTC 运行，这是一种通用 Web 标准，广泛用于从浏览器中传输视频和音频。我们的协议有意支持用户请求访问远程网络资源，并通过极微支付系统使用 OXT 为这些资源付费。

  ## Orchid Server 设计
  Orchid 上的服务提供商为 OpenVPN 等协议运行类似于典型 VPN 守护程序的服务器，但该服务器使用 Orchid 协议。Orchid 服务器在质押注册表和提供商目录中维护注册信息。质押注册表经过优化，使 Orchid 客户端能够在去中心化环境中代表用户自动发现随机服务器，而提供商目录则允许服务器节点注册元数据，如地理位置或提供的其他服务。所有 Orchid Server 构成了整个网络。


  ## Orchid 网络设计
  Orchid 使用存储在以太坊区块链上的一组数据结构，使客户端可以高效地选择带宽销售商的节点。

  客户端将通过两个步骤为代理链选择节点，先进行随机的相对权益加权线性选择，然后按次级约束筛选。第一阶段的线性选择由节点目录树上的扫描功能执行。App 在本地生成一个随机点，将其作为单个参数传递下去，然后沿节点目录树向下扫描该参数。搜索终止于权益段与选定的随机点相交的单个唯一叶节点（或中间节点）。

  在基于线性相对权益加权机制选择一个或多个节点之后，该应用程序可以按其他标准进行筛选，例如出口地理位置、延迟 (ping)、价格、自定义节点元数据标签和任意白名单。

  [Orchid 网络：随机选择 + 权益加权](https://blog.orchid.com/orchids-network-random-selection-stake-weighting/)

  ![Orchid enabling a smartphone to connect to the world wide web](/img/oxt-illustration.png)

  ## Orchid App 设计
  Orchid App 客户端类似于 OpenVPN 等协议的典型 VPN 客户端，但是采用 Orchid 协议。Orchid 网络客户端不仅限于提供大多数VPN 客户端所提供的基本功能，还能够分析网络流量并在多跳配置中选择多个提供商。Orchid 客户端可通过 iOS、Android、macOS、Linux 和（即将支持）Windows 访问。

  ## Orchid 极微支付设计
  Orchid 的结构采用新的概率极微支付系统，旨在让系统可扩展至每秒数百万笔交易，从而实现数据包级的去中心化支付。这种极微支付系统是 Orchid 点对点带宽市场的基础，在该市场中，客户端向节点运营商支付 OXT 彩币以购买代理带宽。该系统旨在通过在多笔交易乃至多方之间分摊小额支付的交易费，从而降低交易成本。

  请参阅[极微支付简介](https://blog.orchid.com/introducing-nanopayments/)了解更多详情。

  ## Orchid 市场
  Orchid 市场是一个去中心式的点对点 (P2P) 网络，支持运行 Orchid App 的用户向运行 Orchid Server 的一个或多个卖方购买带宽，以形成 Internet 上特定资源的代理链（例如网站）。

  Orchid 市场的主要参与者角色是：

  - 启动代理链连接的运行 Orchid App 的用户
  - 转发加密流量的一个或多个中继节点（可选）
  - 提供与外部目的地（例如网站）的最终连接的出口节点
  - 接受流量极微支付（中继或出口）的带宽销售商

  带宽销售商在以太坊区块链上注册他们的节点，用户客户端通过调用以太坊智能合约选择合适的路由节点。Orchid 的结构使用权益加权：销售商锁定 OXT 加密货币，作为与其节点关联的质押保证金，以便接收与其相对权益成比例的流量。

  ## 结语
  上述各个组件共同构成了 Orchid。我们将这一切综合起来，创建一种全新的 VPN 产品，该产品利用去中心化的本质在多个提供商之间分配信任，最终为用户提供比当前市场更多的代理商和控制权。通过将去中心化设计与基于市场的激励结构相结合，我们相信用户可以保护自己的隐私并控制其数据，同时创造需求以支持健康的市场。

  我们预计，未来基于我们的协议发展的开源社区将致力于研发流量分析阻力、支付匿名、低波动极微支付、改进双重支付检测和预防、流量混淆、减小审查阻力、白名单保证金等方面的解决方案。

  由于政府和企业都试图控制我们的在线互动，所以 VPN 市场发展飞速。但是为了实现用户对 VPN 服务的期望，我们需要一种新的模型。Orchid 认为，以太坊区块链上的点对点市场和去中心化架构有助于为开创个人（而非组织）控制未来的在线互动新时代铺平道路。

  ## 关注 Orchid 最新动态
  如果您想随时了解最新的 Orchid 新闻，并率先测试网络，请[注册接收我们的新闻通讯](https://www.orchid.com/#newsletter-signup)，获取最新发布信息。

  网站: [www.orchid.com](https://www.orchid.com)

  Twitter: [https://twitter.com/OrchidProtocol](https://twitter.com/OrchidProtocol)

  Linkedin: [https://www.linkedin.com/company/orchidprotocol/](https://www.linkedin.com/company/orchidprotocol/)

  Telegram (Announcements): [https://t.me/officialorchidlabs](https://t.me/officialorchidlabs)

  Telegram (Community): [https://t.me/OrchidOfficial](https://t.me/OrchidOfficial)

  Facebook: [https://www.facebook.com/OrchidProtocol/](https://www.facebook.com/OrchidProtocol/)

  Medium: [https://medium.com/orchid-labs](https://medium.com/orchid-labs)

  Github: [https://github.com/OrchidTechnologies](https://github.com/OrchidTechnologies)

  Reddit: [https://www.reddit.com/r/orchid](https://www.reddit.com/r/orchid)
---
Orchid is a decentralized, market-based system for anonymous communication and virtual private networking, including a bandwidth market where node providers stake tokens to advertise their services using the Ethereum blockchain and receive payment in OXT (Orchid’s native cryptocurrency).

> Using a distributed system allows you, as a user, to distribute trust across multiple distinct VPN providers, thereby breaking apart the flow of your information so no single entity can see the entire picture.

In the Orchid marketplace, incentives are used to create economic security and reliability between clients and servers in a permissionless way. This peer-to-peer marketplace is dynamic; clients can select single- or multi-hop onion routed circuits by selecting nodes randomly weighted on stake and filtered on secondary desiderata (price, location, etc.). A single hop route has the benefits of a normal VPN connection, creating a tunnel to route your traffic over a public network or your ISP, while a multi-hop connection provides additional privacy benefits by securing your network data from any one provider.

Traditional VPNs today are limited; the centralized nature of their offering cannot compete with the distributed properties of combining multiple different providers to offer multi-hop level security. And even if a single company offers multiple hop VPN routes, there is still a single centralized entity you are placing your trust into. Using a distributed system allows you, as a user, to distribute trust across multiple distinct VPN providers, thereby breaking apart the flow of your information so no single entity can see the entire picture. Such a system is not possible when purchasing a VPN service from a single provider.

Staking aligns incentives against operator malfeasance, and linear stake weighting in particular neutralizes sybil attacks. A stochastic nanopayment solution scales transaction throughput, enabling a highly liquid bandwidth market without a trusted central party. Nanopayments on the scale of packets allow high frequency, trustless interactions by reducing the implicit floated balances between transactors to miniscule levels.

![Illustration of the lifecycle of OXT](/img/uploads/orchid-platform-illustration.png)

## Core Technology
Orchid’s technology is highly modular. Each component is intended to be somewhat separable, and to interact well with a particular role in the larger ecosystem. Abstractly, the system involves:

- Users who run the Orchid App
- Service providers who run the Orchid Server
- A protocol that intermediates client/server interactions
- Several smart contracts deployed to the Ethereum blockchain that support the economically sound and technically secure operation of the protocols

In pursuit of security, we have tended to remove features and design elements that we did not think would continue to function basically “as is” for many years.

![A fun illustration of OXT](/img/a-new-approach-decorative-illustration.png)
## Orchid Cryptocurrency (OXT)
OXT is expected to be a “pre-mined” cryptocurrency based on the ERC-20 standard that will be used to decentralize trust between buyers and sellers in the Orchid marketplace. It also functions as a tool to promote security and healthy market dynamics, as providers can adjust their OXT stake to remain competitive. At launch we intend there to be a limited supply of one billion (1,000,000,000). We do not intend ever to create any additional OXT.

## Orchid Protocol
The Orchid software is designed to use a custom VPN protocol, similar in scope to OpenVPN or WireGuard. The Orchid protocol is designed for high-performance networking and runs on top of WebRTC, a common web standard, widely used to transmit video and audio from inside browsers. Our protocol is intended to allow users to request access to remote network resources and pay for these resources using OXT via a nanopayments system.

## Orchid Server Design
Service providers on Orchid are anticipated to run a server similar to a typical VPN daemon for protocols such as OpenVPN, but which speaks the Orchid protocol. Orchid servers maintain registration information in a stake registry and provider directory. The stake registry is optimized to enable the Orchid client to automatically discover random servers on behalf of users in a decentralized environment, while the provider directory allows server nodes to register metadata such as geolocation or additional services offered. Collectively, the Orchid Servers make up the Network.

## The Orchid Network Design
Orchid uses a set of data structures stored on the Ethereum blockchain that allows clients to efficiently select bandwidth-sellers’ nodes.

Clients are expected to select nodes for proxy chains using a two-step process of random relative stake-weighted linear selection, followed by secondary constraint filtering. The first stage linear selection is performed by the scan function on the node directory tree. The App generates a random point locally and passes it in as the single argument to scan, which then descends down the node directory tree. The search terminates in the single unique leaf, or internode, whose stake segment intersects the chosen random point.

After selecting one or more nodes based on linear relative stake weighting, the app can then filter by additional criteria such as exit geolocation, latency (ping), price, custom node metadata tags, and arbitrary whitelists.

[Orchid’s Network: Random Selection + Stake Weighting](https://blog.orchid.com/orchids-network-random-selection-stake-weighting/)

![Orchid enabling a smartphone to connect to the world wide web](/img/oxt-illustration.png)

## The Orchid App Design
The Orchid App is a client similar to a typical VPN client for protocols such as OpenVPN, but which speaks the Orchid protocol. The Orchid network client is intended to go past the basic functionality offered by most VPN clients, with features such as the ability to analyze network traffic and to pick multiple providers in a multi-hop configuration. The Orchid client is accessible via iOS, Android, macOS, Linux, and (soon) Windows.

## Orchid Nanopayments Design
Orchid’s structure uses a new probabilistic nanopayment system designed to allow the system to scale to potentially millions of transactions per second, enabling decentralized payments on a per-packet basis. This nanopayment system is the foundation of the Orchid peer-to-peer bandwidth marketplace where clients pay Node operators OXT lottery tickets for proxy bandwidth. The system is designed to lower the transaction costs for small payments by amortizing transaction fees across many transactions and even across multiple parties.

See [Introducing Nanopayments](https://blog.orchid.com/introducing-nanopayments/) for more details.

## The Orchid Marketplace
The Orchid Market is a decentralized peer-to-peer (P2P) network, which allows users running the Orchid App to purchase bandwidth from one or more sellers running the Orchid server in order to form a proxy chain to a specific resource on the Internet (such as a website).

The main participant roles in the Orchid Market are:

- A user running the Orchid App who initiates proxy chain connections
- One or more relay nodes who forward encrypted traffic (optionally)
- An exit node who provides the final connection to an external destination (e.g., a website)
- A bandwidth seller who accepts nanopayments for traffic (either a relay or exit)

Bandwidth sellers register their nodes on the Ethereum blockchain and user clients select suitable nodes for routes through calls to Ethereum smart contracts. Orchid’s structure uses stake-weighting: sellers lock up OXT cryptocurrency to form stake deposits associated with their nodes in order to receive traffic in proportion to their relative stake.

## Conclusion
The various components described above collectively form Orchid. When we put the pieces together, we are in the process of creating a new VPN product that harnesses the nature of decentralization to distribute trust across multiple providers and ultimately give the user far more agency and control than is available on the current market. By combining a decentralized design with a market-based incentive structure, we believe that users can protect their privacy and control their data while creating demand to support a healthy marketplace.

We anticipate in the future that the open source community developing on our protocol will be working on solutions for traffic analysis resistance, payment anonymity, low-variance nanopayments, improved double-spend detection and prevention, traffic obfuscation, improved censorship resistance, whitelist surety bonds, and more.

As both governments and corporations attempt to control our online interactions, the VPN market is skyrocketing. But in order to achieve what users desire in a VPN service, we need a new model. At Orchid, we think that a peer-to-peer marketplace and decentralized architecture on the Ethereum blockchain can help pave the way for a new era of online interaction, where individuals, not organizations, control the future.

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