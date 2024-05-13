<script setup lang="ts">
import AboutPage from "@/components/researchdetail/AboutPage.vue";
import ContentsDetail from "@/components/researchdetail/ContentsDetail.vue";
import {
  fujimotoDetail,
  katumaDetail,
} from "@/components/researchdetail/content";
</script>

<template>
  <div class="flex flex-col gap-y-16">
    <AboutPage id="fujimoto" />
    <ContentsDetail
      :title="fujimotoDetail.title"
      :content="fujimotoDetail.content"
      :projects="fujimotoDetail.projects"
      :src-image="fujimotoDetail.srcImage"
    />
    <ContentsDetail
      id="katuma"
      :title="katumaDetail.title"
      :content="katumaDetail.content"
      :projects="katumaDetail.projects"
      :src-image="katumaDetail.srcImage"
    />
  </div>
</template>
<style></style>
