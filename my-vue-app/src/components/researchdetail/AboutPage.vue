<script setup lang="ts">
const keyWords: string[] = [
  "GPU",
  "高速計算",
  "並列処理",
  "分散処理",
  "スマートフォン",
  "位置推定",
  "ウェアラブルデバイス",
  "センシング",
];
</script>

<template>
  <div>
    <v-sheet class="w-full h-full p-10" elevation="16">
      <div class="font-bold text-5xl mb-10 text-slate-600">Research Detail</div>
      <div class="flex flex-col gap-y-4">
        <span class="text-xl text-gray-500 font-sans"
          >GPUや並列処理を利用した高性能計算や, 分散計算をはじめとした,
          移動可能な情報機器を利用した情報処理技術（モバイルコンピューティング）についての研究活動を行っています.
        </span>
        <div class="flex flex-col gap-y-4">
          <p class="font-bold text-3xl">・キーワード</p>
          <div
            class="flex w-full md:flex-row flex-col md:justify-around gap-y-6"
          >
            <div
              v-for="word in keyWords"
              :key="word"
              class="font-bold font-sans text-xl"
            >
              {{ word }}
            </div>
          </div>
        </div>
      </div>
    </v-sheet>
  </div>
</template>
