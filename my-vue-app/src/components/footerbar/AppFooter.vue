<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { RouterLink, useRouter } from "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    // is optional
    icon?: string;
  }
}

const routes = useRouter().options.routes;

defineEmits<{
  (e: "update:drawer"): void;
}>();

const addressList: { name: string; address: string }[] = [
  {
    name: "藤本居室",
    address: "B8棟209号室",
  },
  {
    name: "勝間居室",
    address: "B8棟207号室",
  },
  {
    name: "学生居室(藤)",
    address: "B8棟219号室",
  },
  {
    name: "学生居室(勝)",
    address: "B8棟205号室",
  },
];
</script>
<template>
  <v-sheet class="p-4" elevation="16">
    <div class="flex flex-col gap-y-10">
      <div class="flex flex-row justify-evenly w-full">
        <div
          v-for="route in routes"
          :key="route.path"
          class="md:scale-125 scale-100"
        >
          <RouterLink :to="route.path">
            <div v-if="route.meta?.icon" class="flex flex-row gap-5">
              <FontAwesomeIcon :icon="route.meta.icon" class="pt-1" />
              <div class="mobile-hide">{{ route.name }}</div>
            </div>
          </RouterLink>
        </div>
      </div>
      <div class="flex flex-col">
        <span class="text-center">
          大阪府立大学 工学研究科 知能情報工学分野 / 工学域 情報工学課程
        </span>
        <span class="text-center">
          大阪公立大学 情報学研究科 基幹情報学専攻 システム情報学分野 / 工学部
          情報工学科
        </span>
        <span class="text-center"> 研究室名 : 先進的計算基盤研究室 </span>
        <span class="text-center">
          大学住所 : 〒599-8531 大阪府堺市中区学園町1-1
        </span>
        <div v-for="item in addressList" :key="item.address">
          <div class="flex flex-row justify-evenly">
            <div>{{ item.name }}</div>
            <div>{{ item.address }}</div>
          </div>
        </div>
      </div>
    </div>
  </v-sheet>
</template>
<style scoped>
@media (max-width: 600px) {
  .mobile-hide {
    display: none;
  }
}
</style>
