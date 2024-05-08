<script setup lang="ts">
import AboutUs from "@/components/homecomponents/AboutUs.vue";
import HomeImage from "@/components/homecomponents/HomeImage.vue";
import ResearchWord from "@/components/homecomponents/ResearchWord.vue";

import { ref } from "vue";

const renderingAbout = ref(false);

setTimeout(() => {
  renderingAbout.value = true;
}, 1000);
</script>

<template>
  <div v-if="renderingAbout" class="flex flex-col gap-10">
    <AboutUs :rendering-about="renderingAbout" />
    <HomeImage :rendering-about="renderingAbout" />
    <ResearchWord :rendering-about="renderingAbout" />
  </div>
</template>

<style scoped></style>
