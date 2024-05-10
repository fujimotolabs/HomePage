<script setup lang="ts">
import { ProjectWithUrl } from "@/type";

const projectWithUrl: ProjectWithUrl[] = [
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
];
</script>

<template>
  <v-sheet class="w-full h-full p-10" elevation="16">
    <div class="font-bold text-3xl mb-10 text-blue-400">
      分散計算・モバイルコンピューティング分野(勝間)
    </div>
    <div class="flex md:flex-row flex-col justify-between">
      <div class="font-sans text-xl text-slate-500">
        近年，スマートフォン，スマートウォッチ，ヘッドマウントディスプレイなどの持ち運び可能なコンピュータが普及してきています．
        色々な人が装着しているこれらのコンピュータ，さらには建物に設置してあるようなコンピュータに至るまで，様々なコンピュータを互いに連携させることで，より高度な情報サービスが期待されています．
        例えば，リアルタイムに正確なナビゲーションを行ったり，ヘッドマウントカメラに映った様々な物の詳細な情報を瞬時に提示したり等が期待されていますが，これらを実現するためにはまだまだ多くの課題を解決していかなければいけません．
        当研究室の分散計算・モバイルコンピューティング分野では，移動を伴う多くのコンピュータがお互いに通信できる環境で，各コンピュータがどのように動けば全体としての目的の動作を効率的に達成できるかを考えていきます．
        主に無線ネットワーク環境を想定し，センサネットワーク，MANET（mobile ad
        hoc
        network），車車間通信などに対して，位置推定，センシング，通信など効率化，高性能化するための方法を研究します．
      </div>
      <img src="../../../public/research02.jpg" width="400px" class="h-52" />
    </div>
    <div class="pt-10 flex flex-col gap-y-4">
      <div v-for="item in projectWithUrl" :key="item.projectName">
        <a :href="item.url" class="hover:underline text-blue-700">{{
          item.projectName
        }}</a>
      </div>
    </div>
  </v-sheet>
</template>
<style></style>
