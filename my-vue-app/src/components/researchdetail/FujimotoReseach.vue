<script setup lang="ts">
import { ProjectWithUrl } from "@/type";

const projectWithUrl: ProjectWithUrl[] = [
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
];
</script>

<template>
  <v-sheet class="w-full h-full p-10" elevation="16">
    <div class="font-bold text-3xl mb-10 text-blue-400">
      高性能計算分野(藤本)
    </div>
    <div class="flex md:flex-row flex-col justify-between">
      <div class="font-sans text-xl text-slate-500">
        GPU(Graphics Processing Unit)は本来は描画処理専用のユニットでした．
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
        主にGPUによる計算の性能をできるだけ高めるような並列プログラミングを研究していきます．
      </div>
      <img src="../../../public/research01.jpg" width="400px" class="h-52" />
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
