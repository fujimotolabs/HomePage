<script setup lang="ts">
import AboutPage from "@/components/researchdetail/AboutPage.vue";
import ContentsDetail from "@/components/researchdetail/ContentsDetail.vue";
import {
  fujimotoDetail,
  katumaDetail,
} from "@/components/researchdetail/content";
import { ref } from "vue";
const animation = ref(false);

setTimeout(() => {
  animation.value = true;
}, 1000);
</script>

<template>
  <div v-if="animation" class="flex flex-col gap-y-16">
    <AboutPage
      :class="{ 'animate__animated animate__fadeInLeftBig': animation }"
    />
    <ContentsDetail
      :id="fujimotoDetail.id"
      :title="fujimotoDetail.title"
      :content="fujimotoDetail.content"
      :projects="fujimotoDetail.projects"
      :src-image="fujimotoDetail.srcImage"
      :class="{ 'animate__animated animate__fadeInRightBig': animation }"
    />
    <ContentsDetail
      :id="katumaDetail.id"
      :title="katumaDetail.title"
      :content="katumaDetail.content"
      :projects="katumaDetail.projects"
      :src-image="katumaDetail.srcImage"
      :class="{ 'animate__animated animate__fadeInLiftBig': animation }"
    />
  </div>
</template>
<style></style>
