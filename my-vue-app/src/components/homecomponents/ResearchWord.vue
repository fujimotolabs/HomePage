<script setup lang="ts">
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { RouterLink } from "vue-router";
</script>

<template>
  <div>
    <v-sheet elevation="16" class="w-full h-full mb-16">
      <div class="font-bold text-3xl text-teal-700 m-10">Research Word</div>
      <v-expansion-panels multiple>
        <v-expansion-panel>
          <v-expansion-panel-title>
            <div class="font-bold text-xl">高性能計算</div>
            <template #actions="{ expanded }">
              <FontAwesomeIcon :icon="expanded ? faMinus : faPlus" />
            </template>
          </v-expansion-panel-title>
          <v-expansion-panel-text class="font-sans text-slate-600">
            GPUは多数のコアで構成されており, データ構造とアルゴリズムを工夫し,
            それらのコアにうまく処理を割り振ると様々なアルゴリズムが高速に実行できます．
            並列処理による高速化が容易な問題もあれば,
            とても難しい問題もあります．
            様々な問題を並列処理で高速に解く方法（並列アルゴリズム）の研究や,
            実際に高速に動作する並列プログラムを開発するための研究を行っています．
          </v-expansion-panel-text>
          <v-expansion-panel-text>
            <RouterLink to="/ResearchDetail#fujimoto" class="text-blue-500"
              >研究について詳しく
            </RouterLink>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title expand-icon="mdi-menu-down">
            <div class="font-bold text-xl">モバイルコンピューティング</div>
            <template #actions="{ expanded }">
              <FontAwesomeIcon :icon="expanded ? faMinus : faPlus" />
            </template>
          </v-expansion-panel-title>
          <v-expansion-panel-text class="font-sans text-slate-600">
            スマートフォンに代表されるモバイルデバイスの普及率が高まってきている現在，各デバイスがその場の情報をセンシングしながら相互接続することにより，
            様々な高度なサービスが期待されています．
            これを実現するためのセンシングや通信に関する様々な研究を行っています．
          </v-expansion-panel-text>
          <v-expansion-panel-text>
            <RouterLink to="/ResearchDetail#katuma" class="text-blue-500"
              >研究について詳しく
            </RouterLink>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-sheet>
  </div>
</template>
