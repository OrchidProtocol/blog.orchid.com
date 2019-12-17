---
templateKey: blog-post
public: true
url: orchids-network-random-selection-stake-weighting
title: 'Orchid’s Network: Random Selection + Stake Weighting'
title_ja: 'オーキッドのネットワーク: ランダム選 択 + ステーク加重'
title_ko: 'Orchid 네트워크: 무작위 선택 + 지분 가중 방식'
title_zh: 'Orchid 网络：随机选择 + 权益加权'
date: 2019-10-9T18:47:36.651Z
description: 'When you wake up in the morning and flick on a light switch, do you pause to think about how many tiny fractions of a penny that electricity costs? Or do you just flick on the light so you don’t bump your head?'
description_ja: 'ビットコイン、イーサリアム、および他のほとんどの分散型システムと 同様に、オーキッドはオープンソース ソフトウェアから構築されたオー プン ネットワークとして設計されています。'
description_ko: 'Orchid 네트워크는 Orchid 서버 소프트웨어를 실행하는 제공자들로 구성됩니다. Orchid 는 사용자 소프트웨어가 대역폭 제공자를 선택하는 방식을 결정하는 핵심 규칙 세트로 무작위 선정 및 지분 가중을 활용하는 알고리즘을 채택했습니다. Orchid 의 디자인은 작업 증명에서 발전했으며 공격 모델과 사용자 경험을 모두 고려합니다.'
description_zh: '运行 Orchid Server 软件的提供商网络构成了 Orchid 网络。我们选择了构建一种算法，利用随机选择和权益加权作为确定用户软件如何选择提供商的核心规则集。我们的设计从工作量证明发展而来，同时考虑了攻击模型和用户体验。'
featuredpost: true
featuredimage: /img/random-selection-stake-weighting.png
tags:
  - Blockchain
  - Ethereum
  - VPN
body_ja: |-
  ビットコイン、イーサリアム、および他のほとんどの分散型システムと同様に、オーキッドはオープンソースソフトウェアから構築されたオープンネットワークとして設計されています。誰でもオーキッドノードソフトウェアをダウンロードして、リソースが許す限り多くのノードを実行できます。オープンな分散型システムでのシステム攻撃に対する実行可能な防御は、最終的に経済性です。システムは、攻撃者の攻撃コストがその攻撃者にとっての利益を上回るか、それとも実行するにはコストがかかりすぎる程度まで安全です。分散型システムは、これらのセキュリティパラメータを使用してネットワークを保護し、マイナーや参加者が見返りに稼ぐことができるインセンティブを提供します。現在、ほとんどのオープンブロックチェーンは次の 2 つのモデルのいずれかを使用しています。その一つはプルーフオブワークですが、これには電力が必要です。もう一つはプルーフオブステークで、これには調整作業とガバナンスが必要です。オーキッドのネットワークは、ステーク加重と呼ばれるプルーフオブステークの派生物を使用して、取引を決済するためのイーサリアムのコンセンサスと組み合わせたピアツーピア帯域幅契約を認証することが期待されています。

  これは、帯域幅プロバイダーがオーキッドのネットワークで商業用のオーキッドの暗号通貨 (OXT) をタイムロックされたデポジットにステーキングし、それによってアイデンティティを証明し、ステークデポジットの規模に比例したトラフィックを受信することを意味します。私たちは最初に、当初のホワイトペーパーでメダリオンとして説明されているプルーフオブワークの使用を検討した後、ステーク加重を使用するように設計を進化させました。私たちがプルーフオブワークのシステムから離れたのは以下の理由によるものです。

  - プルーフオブワークを使用すると、エンドユーザーに追加の計算負荷が発生する
  - プルーフオブワークに対する攻撃コストは、レンタル市場を想定しても、遅延を伴うステーク加重よりはるかに低い
  - 一般的なコンピューティングのレンタル市場はすでに存在しており、その流動性は、将来の OXT ステークデポジットレンタル市場で予想される流動性をはるかに上回っている

  ## オーキッドのネットワーク
  オーキッドのネットワークは、イーサリアムブロックチェーンに保存されるデータ構造のセットとして設計されており、クライアントが帯域幅販売者のノードを効率的に選択できるようにします。オーキッドのネットワークは基本的に、イーサリアムネットワーク上でオーキッド固有のシンプルなオーバーレイを形成します。

  大まかに言って、オーキッドのネットワークは次の主要な操作を提供することが期待されています。

  - 帯域幅プロバイダーがステーキングを介してノードを登録する手段
  - 帯域幅プロバイダーがカスタムサービスとメタデータを登録する方法
  - クライアントがカスタムサービスとメタデータのノードを照会する手段
  - ステークに比例する確率でランダムノードを選択する方法

  ステーク加重は、預け入れられたステーク全体のサイズに比例してオーキッドのネットワークの経済的セキュリティを拡大できるように使用されています。ステーク加重選択プロセス自体は、オンチェーンのツリーデータ構造を使用して実装されます。これは、クライアントがノードの選択をスケーラブルかつ信頼性不要の方法で他のノードにアウトソースできることを目的としており、軽量のクライアントが完全なノードディレクトリをダウンロード、保存または処理する必要性を回避します。

  ## ノードディレクトリツリー
  スキャン関数を効率的に実装するために、オンチェーンのバイナリ加重ツリーデータ構造を使用します。ツリー内の各ノードはステークエントリであることが期待されています。ステークエントリには、ツリーポインタと左右のサブツリーのステーク小計に加えて、ステーキー、金額、遅延が保存されます。この構造は実質的に、すべてのステークデポジット上にプレフィックスサムのツリーを形成し、各ノードでの単純な降下決定で特定のランダムポイントを含むサブツリー(またはノード間)を見つけられるようにします。指定されたランダムポイントを含む正確なノードを見つけるために必要なのはステップの対数のみです。

  ## ノードメタデータレジストリ
  ノードメタデータレジストリによって、プロバイダーがノードにメタデータを「タグ付け」できると期待されています。帯域幅プロバイダーはこれを使用して、ブロックチェーン上のノードに関連付けられたカスタムメタデータを保存し、サービスを宣伝できます。メタデータレジストリは、シンプルな手段を将来カスタム拡張できるように、汎用的な構造となっています。これは、ノードオペレーターが新しいサービスを宣伝できるようにするためのもので、クライアントはコードを更新せずに選択できます。

  地理など、特定の基準に基づいたサービスのフィルタリングに関心のあるオーキッドアプリユーザーは、タグを使用してそうすることができると期待されています。タグはプロバイダーによって追加されたメタデータの一部であるため、最終的にオーキッドアプリはプロバイダーが正直に行動しているかどうかを確認する必要があります。多くの場合、チェックは自動化されると予想しています。

  メタデータタグの例

  - **ジオロケーション。**プロバイダーは、クライアントが地域に基づいた選別を行えるように、特定の地域でサービスを宣伝できることが期待されます(一般的な VPN サービスに類似)。オーキッドアプリは、公開の IP データベースを使用して場所を確認します。
  - **レイテンシ（待ち時間）。**場合によっては、ユーザーはランダムに選択されたノードよりもレイテンシの短い接続を望みます。オーキッドアプリは、同じ公開 IP データベースを使用して、より短い距離のルートを見つけることにより、「推測とチェック」戦略を採用するように設計されています。最終的に、ルートが構築されたら実際のレイテンシを測定する必要があります。レイテンシがターゲットのしきい値よりも高い場合、別の新しいルートをサンプリングする必要があると予想されます。オーキッドルートとナノペイメントの軽量な性質により、高速ルート設定とパラレルルートテストが可能になると予想されています。
  - **価格。**プロバイダーは帯域幅の価格を設定すると予想されるため、クライアントは価格でフィルタリングできます。オーキッドアプリは、ユーザーの残高と、予算がどのくらいの期間持つはずかを表す目標に基づいて、現在の支出上限を決定する予算アルゴリズムを使用します。

  ## キュレーションリスト
  オーキッドアプリは、任意の出口ノードまたはリレーノードのリストに基づいてフィルタリングするようにも設計されています。これにより、実行可能なノードはカスタムサブセットに限定されます。公式のオーキッドアプリの初期リリースでは、この機能によって信頼できる VPN パートナーで構成されるデフォルトの出口ノードリストを使用し、悪意のある出口ノードからの特定の種類の攻撃 (SSL ダウングレード攻撃など) を防ぐことが期待されています。カスタマイズされたオーキッドクライアントは独自のリストを使用できますが、最終的には、広く知られたサードパーティがホワイトリストのキュレーターとして登場することが期待されています。キュレーションリストは、ステーキングによって提供される経済的インセンティブベースの信頼を、外部の評判による信頼で補完するための簡単な手段です。


  ## オーキッドで帯域幅を販売する方法
  オーキッドマーケットは、分散型アーキテクチャを使用することで、トークン化されたピアツーピアの商用ナノトランザクションを介して、ユーザーを帯域幅プロバイダーにつなげます。

  ![Orchid bandwidth process](/img/nanopayment-illustration)

  プロバイダーは帯域幅を販売するために、イーサリアムブロックチェーンにノードを登録し、クライアントはイーサリアムスマートコントラクトへの呼び出しを通じてノードを選択します。オーキッドアプリを実行しているユーザーは、プロキシチェーン接続を開始し、1 つ以上のリレーノードを経由して、出口ノードから目的地に接続します。クライアントは、確率的ナノペイメントを使用してパケットを転送する手数料を帯域幅プロバイダーに支払うと期待されています。販売者は、スマートコントラクトのファンクションコールを通じて、オーキッドトークン (OXT) と引き換えられるナノペイメントの当選チケットを受け取る場合があります。

  オーキッドネットワークにノードを登録するための要件は、OXT をステーキングすることです。ステークのサイズは、ステーク加重選択にとって非常に重要です。ステーキングされる OXT が多いほど、プロバイダーがオーキッドアプリユーザーからトラフィックのリクエストを受け取る確率が高くなります。


  ノードオペレーターとして稼ぐには 3 つのステップがあると予想されます。

  - **OXT の取得。**取引所から OXT トークンを購入するか、転送を通じてウォレットで OXT を受け取るか、ノードプロバイダーとして登録して OXT を獲得します。
  - **OXT のステーキング。**OXT トークンをノードディレクトリコントラクトにデポジットします
  - **提供する。**オーキッドアプリユーザーにサービスを販売します
  - **支払い。**プロバイダーが制御するウォレットで、サービスの対価として OXT による支払いを受け取ります

  ## ユーザーステークデポジット
  オーキッドアプリユーザーがネットワークに参加するには、帯域幅と引き換えにプロバイダーにチケットを発行するために、ナノペイメントスマートコントラクトに有効なデポジットが必要です。このデポジットのごく一部が、ユーザーのインセンティブがネットワーク全体のインセンティブと一致するように、ユーザーの「ステーク」としてエスクローに保持されます。

  ## ノードの選択方法
  アプリは、ランダムな相対ステーク加重線形選択と、それに続く 2 次制 約フィルタリングによる 2 段階プロセスを使用して、プロキシチェーンのノードを選択すると期待されています。第 1 段階の線形選択は、ノードディレクトリツリーのスキャン関数によって実行されるように設計されています。アプリはローカルにランダムなポイントを生成し、それをスキャンの単一引数として渡します。この引数は、ノードディレクトリツリーを下っていきます。この検索は、ステークセグメントが選択されたランダムポイントと交差する単一かつ一意のリーフ（またはノード間）で終了します。

  スマートコントラクトを使用してメインノードのスキャン関数を実装することにより、この選択プロセスは容易にサーバーノードに外部委託できます。クライアントは 1 つまたは複数のスキャン呼び出しを要求します。リモートサーバーノードが各スキャンをローカルで実行し、実行トレースの簡単な証拠を送り返します。

  線形の相対的なステークウェイティングに基づいて 1 つ以上のノードを選択した後、出口のロケーション、レイテンシ (ping)、価格、カスタムノードメタデータタグ、任意のホワイトリストなどの追加基準でクライアントがフィルターできるように設計されています。


  ## ステークの引き出し遅延
  オーキッドのステークデポジットは意図的な引き出し遅延制限の対象であるため、すぐに引き出すことはできません。引き出しの遅延は、重要なセキュリティ制限です。それは、オーキッドアプリの接続リクエストの大部分を取得しようとする攻撃者にとって障害となり、特に、システムの乗っ取り攻撃の防止に役立ちます。これは、攻撃者がデポジットステークの大部分を獲得し、クライアントを悪意のあるサーバーに誘導する攻撃です。悪意のあるサーバーは、意図的に貧弱な接続を提供し、トラフィックをログに記録して報告するか、アクティブな接続攻撃 (SSL ダウングレードなど) を試みます。

  システミックテイクオーバー攻撃に対する主な防御策は、OXT ステーク全体の大部分を取得しロックアップするコストを非常に高くすることだと考えています。引き出しの遅延がなければ、この障壁は単に十分な流動性にアクセスできないという問題になり、実際の攻撃の純コストはわずかです。

  十分に長い引き出し遅延は、攻撃者が最終的に攻撃を終了し、大規模な OXT ポジションを売却するまでに、追加の損失を発生させる可能性を高めます。その後、アプリソフトウェアは、引き出しの遅延に基づいてフィルタリングし、遅延がアプリのしきい値を満たしていないステークデポジットを無視します。オーキッドの最初のアプリのソフトウェアは、3 か月以上の引き出し遅延を受け入れますが、これを柔軟なパラメータにすることにより、将来のアプリ更新で、ハードフォーク同等物や関連する困難な調整をすることなく、このパラメータを変更できます。

  ## 結論
  ステークウェイトアプローチを採用して攻撃のインセンティブをなくし、オーキッドトークンに裏付けられたインセンティブのあるマーケットプレイスを作成することで、私たちは最終目標の達成に一歩近づきました。私たちの最終目標は、インターネットを世界中のユーザーにとってより開かれた包括的なスペースにすることです。オーキッドを使用してリソースを購入または販売する場合、オーキッドネットワークは、地理的な場所に関係なく、ユーザーにインターネットへのプライベートで安全なアクセスを提供するように設計されています。

  ## オーキッドの最新ニ
  ュースを常に入手するには、[ニュースレターに登録し](https://www.orchid.com/#newsletter-signup)、今年後半に開始されるネットワークを一番にお試しください。

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
  비트코인, 이더리움 및 대부분의 다른 분산 시스템과 마찬가지로 Orchid 는 오픈 소스 소프트웨어로 구축된 개방형 네트워크로 설계되어 있어, 누구나 Orchid 노드 소프트웨어를 다운로드하고 리소스가 허용하는 최대한의 노드를 실행할 수 있습니다. 개방형 분산 시스템의 경우 시스템 공격에 대한 방어가 본질적으로 매우 경제적입니다. 공격자가 부담하는 비용이 해당 공격자가 기대하는 이익보다 훨씬 더 높거나 실행 비용이 너무 많이 소요되도록 하는 방식으로 시스템 보안을 구현합니다. 분산 시스템은 이러한 보안 매개 변수를 사용하여 네트워크를 보호하고 그 대가로 채굴자 또는 참여자에게 인센티브를 제공합니다. 오늘날 대부분의 개방형 블록체인은 다음 두 가지 모델 중 하나를 사용합니다. 하나는 전기가 필요한 작업 증명이고, 다른 하나는 조정 작업 및 거버넌스가 필요한 지분 증명입니다. Orchid 네트워크는 지분 가중치라는 지분 증명의 파생 결과물을 사용하여 이더리움 합의와 결합된 P2P 대역폭 계약을 인증함으로써 거래를 청산합니다.

  이는 대역폭 제공자가 Orchid 네트워크(OXT)에서 상업적 목적으로 Orchid 암호 화폐를 시간 잠금 예치금 형태로 소유함으로써 신원을 증명하고 상대적 지분 규모에 비례하여 트래픽을 확보함을 의미합니다. 당초 기존 백서에서 메달리온으로 설명한 바 있는 작업 증명의 사용을 고려한 후 Orchid 의 디자인을 지분 가중 방식으로 발전시켰습니다. 시스템을 변경한 이유는 다음과 같습니다.

  - 작업 증명은 최종 사용자 입장에서 추가적인 연산 부담을 야기합니다.
  - 작업 증명은 대역폭 임대 시장에서조차 지연을 수반하는 지분 가중 방식에 비해 공격 비용이 훨씬 더 낮습니다.
  - 일반 컴퓨팅 임대 시장의 경우 유동성이 향후 OXT 지분 예치 임대 시장에서 예상되는 것보다 이미 훨씬 더 큽니다.

  ## Orchid 네트워크
  Orchid 네트워크는 클라이언트가 대역폭 판매자의 노드를 효율적으로 선택할 수 있도록 이더리움(Ethereum) 블록체인에 저장된 일련의 데이터 구조로 설계되었습니다. 기본적으로 이더리움 네트워크에서 간단한 Orchid 전용 오버레이를 형성합니다.

  더 높은 수준에서는 Orchid 네트워크가 다음과 같은 주요 작업까지 가능하게 할 것으로 예상됩니다.

  - 대역폭 제공자가 지분 소유를 통해 자신의 노드를 등록
  - 대역폭 제공자가 사용자 정의 서비스 및 메타 데이터를 등록
  - 클라이언트가 사용자 정의 서비스 및 메타 데이터에 대한 노드를 조회
  - 지분에 비례하는 확률로 랜덤 노드를 선택

  지분 가중 방식을 사용하면 Orchid 네트워크의 경제적인 보안이 총 예치 지분의 규모에 비례하여 확장될 수 있습니다. 지분 가중 방식의 선택 프로세스 자체는 클라이언트가 확장 가능한 무신뢰 방식으로 노드 선택을 다른 노드에 아웃소싱함으로써 사용량이 적은 클라이언트의 경우 전체 노드 디렉토리를 다운로드하거나 저장하거나 처리할 필요가 없는 온체인 트리 데이터 구조를 사용하여 구현됩니다.

  ## 노드 디렉토리 트리
  스캔 기능을 효율적으로 구현하기 위해 Orchid 는 온체인 이진 가중 트리 데이터 구조를 사용합니다. 트리의 각 노드는 왼쪽 및 오른쪽 하위 트리에 대한 트리 포인터 및 지분 소계에 더해 지분, 금액 및 지연을 저장하는 지분 입력 항목이 됩니다. 이 구조는 모든 지분 예치금에 대한 구간 합 트리를 효과적으로 형성하여 각 노드에서의 간단한 하강 결정을 통해 주어진 임의의 지점을 포함하는 하위 트리(또는 인터노드)를 찾을 수 있도록 해줍니다. 주어진 임의의 지점을 포함하는 정확한 노드를 찾는 데는 단계의 로그 수만 필요합니다.

  ## 노드 메타데이터 레지스트리
  노드 메타 데이터 레지스트리는 제공자가 메타 데이터로 노드에 '태그'를 지정할 수 있게 할 것으로 예상됩니다. 대역폭 제공자는 이를 사용하여 블록체인에 자신의 노드와 관련된 사용자 정의 메타데이터를 저장하고 서비스를 광고할 수 있습니다. 메타데이터 레지스트리는 향후 간단한 수단을 사용하여 사용자 정의 확장을 구현할 수 있도록 범용으로 구성됩니다. 이는 노드 운영자가 새로운 서비스를 광고 할 수 있도록 하기 위한 것으로, 클라이언트는 코드를 업데이트하지 않고서도 이들 서비스를 선택할 수 있습니다.

  지리적 위치와 같은 특정 기준에 따른 필터링 서비스에 관심이 있는 Orchid 앱 사용자는 태그를 사용하여 필터링을 수행 할 수 있을 것으로 기대됩니다. 태그가 제공자에 의해 추가되는 메타데이터의 일부이기 때문에 궁극적으로 Orchid 앱은 제공자가 정직하게 행동하는지 확인해야 합니다. 대부분의 경우 확인이 자동화될 것으로 예상합니다.

  메타데이터 태그의 예:


  - **지리적 위치:** 제공자는 클라이언트가 지리적 위치를 기준으로필터링할 수 있도록 특정 지역에서 서비스를 광고할 수 있어야합니다(전형적인 VPN 서비스와 유사). Orchid 앱은 퍼블릭 IP데이터베이스를 사용하여 위치를 확인합니다.
  - **지연 시간:** 경우에 따라 사용자는 무작위로 선택되는 노드보다 대기 시간이 더 짧은 연결을 원할 수 있을 것입니다. Orchid 앱은 동일한 퍼블릭 IP 데이터베이스를 사용하여 '추측 및 확인' 전략을 통해 거리가 더 짧은 경로를 찾도록 설계되었습니다. 궁극적으로, 경로가 구성되면 실제 대기 시간을 측정해야 합니다. 대기 시간이 목표 기준치보다 높을 경우 새로운 다른 경로를 샘플링해야 합니다. Orchid 의 경로 및 나노 지불이 지니는 경량성은 빠른 경로 설정 및 병렬 경로 테스트를 가능하게 할 것으로 예상됩니다.
  - **요금:** 제공자는 대역폭 요금을 설정해야 하며 클라이언트는 가격을 필터링할 수 있습니다. Orchid 앱은 예산 알고리즘을 사용하여 사용자의 잔액과 예산 지속 기간을 나타내는 목표 기간을 바탕으로 현재 지출 한도를 결정합니다.

  ## 선별 목록
  Orchid 앱은 임의의 종료 또는 릴레이 노드 목록을 기준으로 필터링하도록 설계되어 있어 실행 가능한 노드를 사용자 정의 하위 세트로 제한합니다. 공식 Orchid 앱의 초기 릴리스는 이 기능을 통해 신뢰할 수 있는 VPN 파트너로 구성된 기본 종료 노드 목록을 사용하여 악의적인 종료 노드(예: SSL 다운 그레이드 공격)로부터 이루어지는 특정 유형의 공격을 방지합니다. 맞춤형 Orchid 클라이언트는 자신의 목록을 사용할 수 있으며, 결국 잘 알려진 타사가 화이트리스트 큐레이터로 등장할 것으로 예상됩니다. 선별 목록은 지분 소유에 의해 제공되는 경제적, 인센티브 기반의 신뢰를 보완하기 위해 외부 평판/신뢰를 가져오는 간단한 수단입니다.

  ## Orchid 네트워크 상에서 대역폭을 판매하는 방법
  Orchid 시장은 분산 아키텍처를 사용하여 토큰화된 P2P 상용 나노 트랜잭션을 통해 사용자를 대역폭 제공자에게 연결합니다.

  ![Orchid bandwidth process](/img/nanopayment-illustration)

  ## Nanopayments
  대역폭을 판매하기 위해 제공자는 이더리움 블록체인에 노드를 등록하고, 클라이언트는 이더리움 스마트 계약에 대한 호출을 통해 서비스를 선택합니다. 그런 다음 Orchid 앱을 실행하는 사용자가 프록시 체인 연결을 시작합니다. 프록시 체인은 종료 노드 전에 있는 하나 이상의 릴레이 노드를 통해 대상으로 연결됩니다. 클라이언트는 확률적 나노 지불을 사용하여 패킷을 전달하기 위해 대역폭 제공자에게 비용을 지불해야 합니다. 간혹 판매자가 스마트 계약 기능 호출을 통해 Orchid 토큰(OXT)으로 교환할 수 있는 나노 지불 티켓을 받기도 합니다.

  Orchid 네트워크에 노드를 등록하기 위해서는 OXT 지분을 소유해야 합니다. 지분 규모는 지분 가중 방식 선택에 있어 매우 중요하며, OXT 지분이 많을수록 제공자가 Orchid 앱 사용자로부터 트래픽 요청을 받을 확률이 높아집니다.

  노드 운영자가 수익을 얻기 위해서는 다음과 같은 3 단계를 거쳐야 합니다.

  - **OXT 획득:** 거래소에서 OXT 토큰을 구매하거나 송금을 통해 지갑에 OXT 를 받거나 노드 제공자로 등록하여 OXT 를 얻습니다.
  - **OXT 지분 소유:** OXT 토큰을 노드 디렉토리 계약에 예치합니다.
  - **제공:** Orchid 앱 사용자에게 서비스를 판매합니다.
  - **결제:** 제공자의 관리 지갑을 통해 서비스에 대한 OXT 대금을 수령합니다.

  ## 사용자 지분 예치
  Orchid 앱 사용자가 네트워크에 참여하려면 대역폭에 대한 대금으로 제공자에게 티켓을 발급할 수 있도록 나노 지불 스마트 계약에 유효한 예치금이 있어야 합니다. 이 예치금 중 일정 부분은 인센티브를 네트워크 전체의 인센티브와 맞추기 위해 사용자 "지분"으로서 에스크로에 보관됩니다.

  ## 노드 선택 방법
  앱은 이차 제약 조건 필터링이 수반되는 2 단계 무작위 상대적 지분 가중 방식 선형 선택 프로세스를 사용하여 프록시 체인에 대한 노드를 선택하게 됩니다. 1 단계 선형 선택은 노드 디렉토리 트리의 스캔 기능에 의해 수행되도록 설계되어 있습니다. 앱이 로컬에서 임의의 지점을 생성하여 스캔할 단일 인수로 전달한 다음 노드 디렉토리 트리로 내립니다. 지분 세그먼트가 선택된 임의의 지점과 교차하는 단일 고유 리프 내에서 또는 노드 사이에서 검색이 종료됩니다.

  스마트 계약을 사용하여 기본 노드 스캔 기능을 구현하면 선택 프로세스를 서버 노드로 쉽게 아웃소싱할 수 있습니다. 클라이언트가 하나 이상의 스캔 호출을 요청하면 원격 서버 노드가 로컬에서 각 스캔을 실행하고 실행 추적에 대한 간단한 증명을 반송합니다.

  선형 상대 지분 가중치를 바탕으로 하나 이상의 노드를 선택한 후 클라이언트가 종료 위치, 대기 시간(ping), 요금, 사용자 정의 노드 메타데이터 태그 및 무작위 화이트리스트와 같은 추가 기준을 사용하여 필터링할 수 있도록 설계되어 있습니다.

  ## 지분 인출 지연
  Orchid 지분 예치금은 즉시 인출할 수 없습니다. 예치금에는 의도적으로 인출 지연 요건이 적용됩니다. 인출 지연은 중요한 보안 제약 수단입니다. 인출 지연은 Orchid 앱 연결 요청 중 많은 부분을 획득하고자 시도하는 공격자를 저지하는 역할을 합니다. 특히, 체계적 인수 공격을 방지하는 데 도움이 됩니다. 체계적 인수 공격이란 공격자가 전체 예치금 지분 중 상당 부분을 획득한 다음 클라이언트를 악의적인 서버로 유도하여 의도적으로 불량한 연결을 제공하고 트래픽을 기록하고 보고하거나 능동적 연결 공격(예: SSL 다운그레이드)을 시도하는 공격을 가리킵니다.

  체계적 인수 공격에 대한 주요 방어책은 총 OXT 지분의 상당 부분을 획득하고 잠그는 데 소요되는 비용을 높게 만들어 비용 장벽을 형성하는 것입니다. 인출 지연이 없다면 이러한 장벽이 실제 순 공격 비용이 거의 발생하지 않는 단순한 유동성 확보 문제가 됩니다.

  인출 지연이 충분히 길면 공격자가 최종적으로 공격을 종료하고 다량의 OXT 포지션을 매도할 때 추가 손실을 입을 가능성이 높습니다. 그런 다음 앱 소프트웨어가 인출 지연을 기준으로 필터링하여 앱 기준치를 충족하지 않는 지연 시간을 가지는 지분 예치금을 무시하게 됩니다. Orchid 의 초기 앱 소프트웨어는 3 개월 이상의 인출 지연을 허용하지만, 유연한 매개 변수화를 통해 향후 앱 업데이트 시에 하드 포크 및 관련 조정의 어려움 없이 매개 변수를 변경할 수 있습니다.


  ## 결론
  Orchid 는 공격을 무력화하는 지분 가중 방식을 채택하고 Orchid 토큰을 기반으로 하는 인센티브 시장을 조성함으로써 전 세계 사용자에게 보다 개방적이고 포괄적인 인터넷 공간을 만든다는 우리의 궁극적인 목표에 한걸음 더 다가갔습니다. Orchid 네트워크는 Orchid 를 사용하여 리소스를 구매하거나 판매하려는 사용자에게 지리적 위치에 관계없이 프라이버시 및 보안이 보장되는 인터넷 액세스를 제공하도록 설계되어 있습니다. 

  ## 최신 Orchid 뉴스를
  수신하려면 [ 뉴스 레터 신청](https://www.orchid.com/#newsletter-signup) 을 하십시오. 그리고 올해 말에 출시될 Orchid 네트워크를 가장 먼저 사용하는 기회를 가져 보십시오.

  웹 사이트: [www.orchid.com](https://www.orchid.com/)

  Twitter: [https://twitter.com/OrchidProtocol](https://twitter.com/OrchidProtocol)

  Linkedin: [https://www.linkedin.com/company/orchidprotocol/](https://www.linkedin.com/company/orchidprotocol/)

  Telegram (공지 사항): [https://t.me/officialorchidlabs](https://t.me/officialorchidlabs)

  Telegram (커뮤니티): [https://t.me/OrchidOfficial](https://t.me/OrchidOfficial)

  Facebook: [https://www.facebook.com/OrchidProtocol/](https://www.facebook.com/OrchidProtocol/)

  Medium: [https://medium.com/orchid-labs](https://medium.com/orchid-labs)

  Github: [https://github.com/OrchidTechnologies](https://github.com/OrchidTechnologies)

  Reddit: [https://www.reddit.com/r/orchid](https://www.reddit.com/r/orchid)
body_zh: |-
  像比特币、以太坊和大多数其他去中心化系统一样，Orchid 也设计为以开源软件为基础的开放式网络；任何人都可以下载 Orchid节点软件，并在资源允许的情况下运行尽可能多的节点。在开放式去中心化系统中，防御系统攻击的可行措施最终归根于经济性，即系统的安全程度足以确保攻击者的攻击成本超过攻击所得的收益，或者任何攻击的执行成本都过于高昂。去中心化系统使用这些安全参数保护其网络安全并提供激励机制，让矿工或参与者可以赚取回报。当今大多数开放式区块链使用以下两种模型之一：工作量证明（需要耗电）；或权益证明，需要协调工作和治理。Orchid 网络将使用权益证明的衍生形式（称为权益加权）验证点对点带宽协议并结合了以太坊的共识机制结算交易。

  这意味着，带宽提供商将 Orchid 网络上的商用 Orchid 加密货币(OXT) 质押到时间锁定的保证金中，以证明身份并接收与相对质押保证金规模成比例的流量。我们最初考虑使用工作量证明（我们的原始白皮书中称之为“Medallion”），但后来发展为使用权益加权的设计。我们之所以放弃原来的系统是因为：


  - 工作量证明给最终用户造成了额外的计算负担
  - 即使假定在租赁市场中，工作量证明的攻击成本也远低于延迟权益加权的攻击成本
  - 一般的计算租赁市场的相对流动性已经远高于我们对未来任何 OXT 质押保证金租赁市场的预期

  ## Orchid 网络
  Orchid 网络设计为存储在以太坊区块链上的一组数据结构，使客户端可以高效地选择带宽销售商的节点。本质上，它形成了覆盖在以太坊网络上的一个 Orchid 特有的简单网络。

  总体看来，Orchid 网络主要发挥以下作用：

  - 为带宽提供商提供了通过质押注册其节点的手段
  - 为带宽提供商提供了注册自定义服务和元数据的方法
  - 为客户端提供了查询自定义服务和元数据节点的手段
  - 提供了一种选择随机节点且概率与权益成比例的方法

  使用权益加权是为了让 Orchid 网络的经济安全性与存入的总质押金规模成线性比例增长。权益加权选择过程本身是使用链上树数据结构实现的，意在让客户端能以可扩展的去信任方式将节点的选择外包给其他节点，使得轻量客户端不必再下载、存储或处理完整的节点目录。

  ## 节点目录树
  为了高效实现扫描功能，我们使用了链上二进制加权树数据结构。树中的每个节点都是一个权益项，存储了权益、数量和延迟，以及左和右子树的树指针和权益小计。这种结构有效地形成了基于所有质押保证金之上的一个前缀和树，支持在每个节点进行简单的下降决策，找到包含给定随机点的子树（或节点间）；只需要对数级数量的步骤就能找到包含给定随机点的准确节点。

  ## 节点元数据注册表
  节点元数据注册表将允许提供商使用元数据“标记”节点。带宽提供商可以使用它存储与他们在区块链上的节点关联的自定义元数据并宣传服务。元数据注册表采用一般性结构，以便未来能简单地执行自定义延展。这样做是为了让节点运营商能宣传新服务，然后客户端无需更新代码即可选择这些服务。

  如果 Orchid App 用户想要基于特定条件（例如地理）筛选服务，也能使用标签达到目的。由于标签是提供商添加的元数据片段，所以 Orchid App 最终必须检查提供商是否诚实行事。在许多情况下，我们希望自动化执行检查。

  元数据标签示例：


  - **地理位置：** 提供商将能够在特定区域中宣传其服务，因此客户端可以根据位置进行筛选（类似于典型的 VPN 服务）。Orchid App 将使用公共 IP 数据库确认位置。
  - **延迟：** 在某些情况下，用户希望连接的延迟低于随机选择的节点。Orchid App 采用了“猜测和检查”策略，使用同一公共 IP 数据库查找距离较短的路线。最终，路线建立后，必须测量实际的延迟。如果延迟高于目标阈值，就必须尝试一条全新的不同路线。Orchid 路线和极微支付本质上是轻量型的，所以可快速设置和并行测试路线。
  - **价格：** 提供商将能够设置其带宽价格，而客户端可以根据价格进行筛选。Orchid App 旨在使用预算编制算法，根据用户的余额和代表预算持续时长的目标时间跨度来确定当前的支出上限。

  ## 策划清单
  Orchid App 还可根据任意出口或中继节点清单进行筛选，从而将可行节点限制到自定义子集中。Orchid App 的官方初始版本将使用此功能，利用包含受信任 VPN 合作伙伴的默认出口节点清单防止恶意出口节点发起的特定类型的攻击（例如 SSL 降级攻击）。定制的 Orchid 客户端可以使用自己的清单，最终我们期望著名的第三方成为白名单策划人。策划清单是引入外部声誉信任的一种简单方法，可补充通过质押实现的基于激励的经济信任。


  ## 如何在 Orchid 上出售带宽
  Orchid 市场使用去中心化架构，通过令牌化的点对点商业极微交易将用户与带宽提供商联系起来。

  ![Orchid bandwidth process](/img/nanopayment-illustration)

  提供商在以太坊区块链上注册节点来销售带宽，客户端通过调用以太坊智能合约来选择节点。然后，运行 Orchid App 的用户启动代理链连接，后者将通过一个或多个中继节点才连接到目的地的出口节点。客户端将使用概率极微支付向带宽提供商支付转发数据包的费用。有时候，卖方有望获得极微支付中奖彩币，可通过调用智能合约功能兑换为 Orchid 代币 (OXT)。

  在 Orchid 网络中注册节点需要质押 OXT。在权益加权选择过程中，质押规模至关重要，质押的 OXT 越多，提供商就越可能收到Orchid App 用户的流量请求。

  我们预计，节点运营商可通过三个步骤赚钱：

  - **获取 OXT：** 从交易所购买 OXT 代币或者通过转账将 OXT 接收到钱包中，或者通过注册为节点提供商赚取 OXT。
  - **质押 OXT：** 将 OXT 代币存入节点目录合约。
  - **提供服务：** 向 Orchid App 用户出售服务。
  - **付款：** 用提供商控制的钱包接收服务的 OXT 付款。

  ## 用户质押保证金
  Orchid App 用户要想加入网络，必须在极微支付智能合约中存入有效的保证金，以便向提供商发出代币以换取带宽。此保证金的一小部分将作为用户“质押金”交给第三方存管，以使其激励措施与整个网络保持一致。


  ## 如何选择节点
  应用程序将通过两个步骤为代理链选择节点，先进行随机的相对权益加权线性选择，然后按次级约束筛选。第一阶段的线性选择由节点目录树上的扫描功能执行。App 在本地生成一个随机点，将其作为单个参数传递下去，然后沿节点目录树向下扫描该参数。搜索终止于权益段与选定的随机点相交的单个唯一叶（或节点间）。

  通过使用智能合约实现主节点扫描功能，可将选择过程轻松外包给服务器节点。客户端请求一个或多个扫描调用，远程服务器节点在本地执行每个扫描，并发回执行跟踪的简单证明。

  在基于线性相对权益加权机制选择一个或多个节点之后，按照设计客户端可以按其他标准进行筛选，例如出口位置、延迟 (ping)、价格、自定义节点元数据标签和任意白名单。


  ## 质押撤回延迟
  Orchid 质押保证金不能立即撤回，而是受到故意撤回延迟限制。撤回延迟是一种重要的安全限制。它给试图获取大部分 OrchidApp 连接请求的攻击者造成了障碍。特别是，它有助于防止系统性接管攻击。在这种攻击中，攻击者会获取很大一部分的总质押保证金，然后将客户端导向恶意服务器，这些服务器故意提供不良的连接、日志和报告流量或尝试发起主动连接攻击（例如 SSL 降级）。

  我们认为，防范系统性接管攻击的主要措施是，建立高成本壁垒，让攻击者无法轻松获取和锁定大部分的 OXT 总质押金。如果没有撤回延迟，这一壁垒就弱化为流动性充足与否的问题，攻击的实际净成本就会非常小。

  如果撤回延迟足够长，那么攻击者最终结束攻击并出售大仓位的OXT 时，就更可能受到额外的损失。然后，App 软件将根据撤回延迟进行筛选，忽略延迟未达到 App 阈值的质押保证金。Orchid 的初始 App 软件将接受三个月或更长时间的撤回延迟，但是灵活的参数化机制支持将来的 App 更新软件更改此参数，而不会造成硬分叉和相关的协调难题。

  ## 结语
  我们采用权益加权方法打击攻击行为并创建了由 Orchid 代币支持的激励市场，朝着我们的最终目标又迈进了一步。这个目标就是 让Internet 成为一个更加开放和包容的全球用户空间。无论您想使用Orchid 购买还是出售资源，Orchid 网络都能让全球任何地点的用户私密安全地访问 Internet。

  ## 追随 Orchid 之旅
  如果您想及时了解最新的 Orchid 新闻，请[请注册接收我们的新闻通讯](https://www.orchid.com/#newsletter-signup)率先试用今年晚些时候启动的网络。

  网站: [www.orchid.com](https://www.orchid.com/)

  Twitter: [https://twitter.com/OrchidProtocol](https://twitter.com/OrchidProtocol)

  Linkedin: [https://www.linkedin.com/company/orchidprotocol/](https://www.linkedin.com/company/orchidprotocol/)

  Telegram (Announcements): [https://t.me/officialorchidlabs](https://t.me/officialorchidlabs)

  Telegram (Community): [https://t.me/OrchidOfficial](https://t.me/OrchidOfficial)

  Facebook: [https://www.facebook.com/OrchidProtocol/](https://www.facebook.com/OrchidProtocol/)

  Medium: [https://medium.com/orchid-labs](https://medium.com/orchid-labs)

  Github: [https://github.com/OrchidTechnologies](https://github.com/OrchidTechnologies)

  Reddit: [https://www.reddit.com/r/orchid](https://www.reddit.com/r/orchid)
---
Like Bitcoin, Ethereum, and most other decentralized systems, Orchid is designed as an open network built from open-source software; anyone can download the Orchid node software and run as many nodes as their resources permit. The viable defenses against systemic attacks in an open decentralized system are ultimately economic — a system is secure to the extent that the cost of an attack to an attacker outweighs the benefits to that attacker, or is too costly to execute regardless. Decentralized systems use these security parameters to secure their networks and provide incentives by which miners or participants can earn in return. Most open blockchains today use one of two models: proof-of-work, which requires electricity; or proof-of-stake, which requires coordination efforts and governance. The Orchid Network is expected to use a derivative of proof-of-stake, called stake weighting, to authenticate peer-to-peer bandwidth agreements combined with Ethereum’s consensus to settle transactions.

This means that bandwidth providers stake Orchid cryptocurrency for commercial use on the Orchid Network (OXT) in time-locked deposits to prove identity and receive traffic in proportion to relative stake deposit size. We evolved our design to use stake-weighting after originally considering using proof-of-work, which is described in our original white paper as Medallions. We moved away from that system because:

- Proof-of-work creates an additional compute burden on end users
- Proof-of-work has far lower attack costs than stake-weighting with delay, even assuming rental markets
- General compute rental markets already exist with far more relative liquidity than we expect will exist in any future OXT stake deposit rental markets

## The Orchid Network
The Orchid Network is designed to be a set of data structures stored on the Ethereum blockchain that allows clients to efficiently select bandwidth sellers’ nodes. Essentially, it forms a simple Orchid-specific overlay on the Ethereum network.

At a high level, the Orchid Network is expected to provide the following key operations:

- A means for bandwidth providers to register their nodes via staking
- A method for bandwidth providers to register custom services and metadata
- A means for clients to query nodes for custom services and metadata
- A method for selecting a random node, with probability proportional to stake

The use of stake-weighting is intended to allow the economic security of the Orchid Network to scale linearly with the size of the total deposited stake. The stake-weighted selection process itself is implemented using an on-chain tree data structure, which is intended to allow a client to outsource the selection of nodes to other nodes in a scalable trustless manner, avoiding the need for lightweight clients to ever download, store, or process the complete node directory.

## Node directory tree
To implement the scan function efficiently, we use an on-chain binary weighted tree data structure. Each node in the tree is expected to be a stake entry, which stores a stakee, an amount, and a delay, in addition to the tree pointers and stake subtotals for the left and right subtrees. This structure effectively forms a prefix sum tree over all the stake deposits, allowing a simple descent decision at each node to find the subtree (or internode) containing a given random point; finding the exact node containing the given random point is expected to require only a logarithmic number of steps.

## Node metadata registry
The Node metadata registry is anticipated to allow providers to ‘tag’ nodes with metadata. Bandwidth providers can use this to store custom metadata associated with their nodes on the blockchain and advertise services. The metadata registry is structured to be generic in order to enable a simple means for future custom extensions. This is intended to allow node operators to advertise new services, which clients can then select for without code updates.

Orchid App users interested in filtering service based on certain criteria, such as geography, are expected to be able to use tags to do so. Since tags are pieces of metadata added by providers, ultimately the Orchid App must check whether the provider is acting honestly. In many cases, we expect the checks will be automated.

Examples of Metadata Tags:

- **Geolocation**: Providers are expected to be able to advertise their service in a particular region so that clients can filter based on location (similar to a typical VPN service). The Orchid App will use a public IP database to confirm the location.
- **Latency**: In some cases users will desire connections with lower latency than randomly chosen nodes. The Orchid App is designed to employ a ‘guess-and-check’ strategy by using the same public IP database to find routes with a shorter distance. Ultimately, the actual latency must be measured once a route is constructed. If the latency is higher than the target threshold, we expect that a new, different route must be sampled. The lightweight nature of Orchid routes and nanopayments is anticipated to allow for fast route setup and parallel route testing.
- **Price**: Providers are anticipated to set their bandwidth prices and the client can filter on price. The Orchid App intends to use a budgeting algorithm to determine a current spending cap based on the user’s balance and a target timespan representing how long the budget should last.

## Curated lists
The Orchid App is designed to also filter based on arbitrary exit or relay node lists, which limits the viable nodes to a custom subset. Initial releases of the official Orchid App is expected to use this feature to prevent certain kinds of attacks from malicious exit nodes (e.g. SSL downgrade attacks) by using a default exit node list consisting of trusted VPN partners. Customized Orchid clients can use their own lists, and eventually we expect well known third parties to emerge as whitelist curators. Curated lists are a simple means for the importation of external reputational trust to supplement the economic, incentive-based trust provided by staking.

## How to sell bandwidth on Orchid
The Orchid Market uses a decentralized architecture to connect users to bandwidth providers via tokenized, peer-to-peer commercial nano-transactions.

![Orchid bandwidth process](/img/nanopayment-illustration)

## Nanopayments
To sell bandwidth, providers register nodes on the Ethereum blockchain, which clients select through calls to Ethereum smart contracts. The user running the Orchid App then initiates proxy chain connections, which connect through one or more relay nodes before an exit node to their destination. Clients are expected to pay bandwidth providers to forward packets using probabilistic nanopayments. Occasionally the seller is expected to receive a winning nanopayment ticket which they redeem for Orchid Tokens (OXT) through a smart contract function call.

A requirement for registering a node in the Orchid Network is to stake OXT. The size of the stake is crucial for the stake-weighted selection and the more OXT that is staked, the greater the probability that the provider will receive requests for traffic from the Orchid App users.

We anticipate that there are three steps to earning as a Node operator:

- **Acquire OXT**: Buy OXT tokens from an exchange or recieve OXT in a wallet through transfer, or earn OXT by registering as a node provider.
- **Stake OXT**: Deposit OXT tokens into the node directory contract
- **Provide**: Sell services to the Orchid App users
- **Payment**: Receive OXT payment for services in a provider controlled wallet

## User stake deposit
For Orchid App users to join the network, they must have a valid deposit in the nanopayment smart contract in order to issue tickets to a provider in exchange for bandwidth. A small portion of this deposit is intended to be held in escrow as a user “stake” to align their incentives with that of the network as a whole.

## How nodes are selected
Apps are expected to select nodes for proxy chains using a two-step process of random relative stake-weighted linear selection followed by secondary constraint filtering. The first stage linear selection is designed to be performed by the scan function on the node directory tree. The App generates a random point locally and passes it on as the single argument to scan, which then descends down the node directory tree. The search terminates in the single unique leaf — or internode — whose stake segment intersects the chosen random point.

Using a smart contract to implement the main node scan function allows the selection process to be easily outsourced to server nodes. A client requests one or more scan calls and a remote server node executes each scan locally and send back simple proofs of the execution trace.

After selecting one or more nodes based on linear relative stake weighting, it is designed such that the client can then filter by additional criteria such as exit location, latency (ping), price, custom node metadata tags, and arbitrary whitelists.

## Stake withdrawal delay
Orchid stake deposits can not be withdrawn immediately; they are subject to an intentional withdrawal delay limitation. The withdrawal delay is an important security restriction. It creates an obstacle for attackers attempting to acquire a large portion of Orchid App connection requests. In particular, it helps prevent a systemic takeover attack. This is an attack in which an adversary acquires a large fraction of the total deposit stake and then directs clients to malicious servers, which provide intentionally poor connections, log and report traffic, or attempt active connection attacks (e.g. SSL downgrades).

We believe the main defense against systemic takeover attacks is the high cost barrier to acquiring and locking up a significant fraction of the total OXT stake. Without a withdrawal delay, this barrier becomes simply an issue of access to sufficient liquidity, with little actual net cost to an attack.

A sufficiently long withdrawal delay is more likely to create an additional loss for the attacker when they finally end the attack and sell their large OXT position. The App software then filters based on withdrawal delay, ignoring stake deposits with delays that do not meet the App threshold. Orchid’s initial App software will accept withdrawal delays of three months or greater, but the flexible parameterization allows future App updates to change this parameter without the equivalent of a hard fork and associated coordination difficulties.

## Conclusion
By adopting a stake-weighting approach to disincentivize attacks and creating an incentivized marketplace backed by the Orchid Token, we’re one step closer to achieving our ultimate goal: making the Internet a more open, inclusive space for users around the world. Whether you want to purchase or sell resources using the Orchid, the Orchid Network is designed to give users private and secure access to the internet, regardless of geographic location. If you would like to stay up to date with the latest Orchid news, sign up for our newsletter and be the first to try the network when it launches later this year.

## Follow the Orchid journey
If you want to keep current on the latest Orchid news and be among the first to test out the network, [sign up for our newsletter](https://www.orchid.com/#newsletter-signup) to receive launch updates.

Website: [www.orchid.com](https://www.orchid.com/)

Twitter: [https://twitter.com/OrchidProtocol](https://twitter.com/OrchidProtocol)

Linkedin: [https://www.linkedin.com/company/orchidprotocol/](https://www.linkedin.com/company/orchidprotocol/)

Telegram (Announcements): [https://t.me/officialorchidlabs](https://t.me/officialorchidlabs)

Telegram (Community): [https://t.me/OrchidOfficial](https://t.me/OrchidOfficial)

Facebook: [https://www.facebook.com/OrchidProtocol/](https://www.facebook.com/OrchidProtocol/)

Medium: [https://medium.com/orchid-labs](https://medium.com/orchid-labs)

Github: [https://github.com/OrchidTechnologies](https://github.com/OrchidTechnologies)

Reddit: [https://www.reddit.com/r/orchid](https://www.reddit.com/r/orchid)