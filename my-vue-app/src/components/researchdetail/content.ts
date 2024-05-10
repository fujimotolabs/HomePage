import { ProjectWithUrl } from "@/type";

export const fujimotoDetail: {
  id: string;
  title: string;
  content: string;
  projects: ProjectWithUrl[];
  srcImage: string;
} = {
  id: "fujimoto",
  title: "高性能計算分野(藤本)",
  content: `GPU(Graphics Processing Unit)は本来は描画処理専用のユニットでした．
        ごく最近になって, GPUをC言語でプログラミングして，
        普通のコンピュータが行うような計算をGPUを使って行えるようになってきました．
        それにより， GPUによる高速計算が可能となりました．
        GPUは多数の小さなCPUの集合体のようなもので，
        例えば5120個のプロセッサを搭載しているものがあります．
        それを用いて適切にプログラミングすると，
        1つの大きな問題を5120人で協力して解くといったことが可能です．
        そのためには小CPUそれぞれが， いつ，
        何をすればよいかをプログラミングしなければいけないのですが，
        下手にプログラミングをするとかえって計算性能が落ちてしまうことにもなりかねないので，
        各アルゴリズムに合わせた独自の工夫が必要となってきます．
        高性能計算分野では，
        主にGPUによる計算の性能をできるだけ高めるような並列プログラミングを研究していきます．`,
  projects: [
    {
      url: "https://kaken.nii.ac.jp/ja/grant/KAKENHI-PROJECT-23500285/",
      projectName: "進化計算の高速化を実現するＧＰＧＰＵ基盤ソフトウェアの開発",
    },
    {
      url: "https://kaken.nii.ac.jp/ja/grant/KAKENHI-PROJECT-26330088/",
      projectName:
        "GPGPUプログラミング容易化のためのMapReduceアルゴリズム処理系の開発",
    },
    {
      url: "https://kaken.nii.ac.jp/ja/grant/KAKENHI-PROJECT-17K00171/",
      projectName:
        "複素母関数の多倍長精度計算に基づく組み合わせ最適化新解法の並列化",
    },
  ],
  srcImage: "/research01.jpg",
};

export const katumaDetail: {
  id: string;
  title: string;
  content: string;
  projects: ProjectWithUrl[];
  srcImage: string;
} = {
  id: "katuma",
  title: "分散計算・モバイルコンピューティング分野(勝間)",
  content: `近年，スマートフォン，スマートウォッチ，ヘッドマウントディスプレイなどの持ち運び可能なコンピュータが普及してきています．
        色々な人が装着しているこれらのコンピュータ，さらには建物に設置してあるようなコンピュータに至るまで，様々なコンピュータを互いに連携させることで，より高度な情報サービスが期待されています．
        例えば，リアルタイムに正確なナビゲーションを行ったり，ヘッドマウントカメラに映った様々な物の詳細な情報を瞬時に提示したり等が期待されていますが，これらを実現するためにはまだまだ多くの課題を解決していかなければいけません．
        当研究室の分散計算・モバイルコンピューティング分野では，移動を伴う多くのコンピュータがお互いに通信できる環境で，各コンピュータがどのように動けば全体としての目的の動作を効率的に達成できるかを考えていきます．
        主に無線ネットワーク環境を想定し，センサネットワーク，MANET（mobile adhocnetwork），車車間通信などに対して，位置推定，センシング，通信など効率化，高性能化するための方法を研究します．`,
  projects: [
    {
      url: "https://kaken.nii.ac.jp/ja/grant/KAKENHI-PROJECT-25730062/",
      projectName:
        "太陽光発電を用いた無線センサネットワーク長期間稼働のためのノードの移動手法",
    },
    {
      url: "https://kaken.nii.ac.jp/ja/grant/KAKENHI-PROJECT-15K15986/",
      projectName: "WSNにおける映像センシングでの被覆阻害問題への対策",
    },
    {
      url: "https://kaken.nii.ac.jp/ja/grant/KAKENHI-PROJECT-18K11270/",
      projectName:
        "山林における移動式カメラノードの導入による協調モニタリング方式の開発",
    },
  ],
  srcImage: "/research02.jpg",
};
