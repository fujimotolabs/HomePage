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

const scrollToTop = () => {
  window.scrollTo(0, 0);
};
</script>
<template>
  <v-sheet>
    <div class="flex flex-col gap-y-10">
      <div class="flex flex-row justify-evenly w-full scale-125">
        <div v-for="route in routes" :key="route.path">
          <RouterLink :to="route.path + '#top'">
            <div
              v-if="route.meta?.icon"
              class="flex flex-row gap-5"
              @click="() => scrollToTop()"
            >
              <FontAwesomeIcon :icon="route.meta.icon" class="pt-1" />
              {{ route.name }}
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
      </div>
    </div>
  </v-sheet>
</template>
