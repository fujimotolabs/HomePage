<script setup lang="ts">
import AboutUs from "@/components/homecomponents/AboutUs.vue";
import HomeImage from "@/components/homecomponents/HomeImage.vue";
import NewsBox from "@/components/homecomponents/NewsBox.vue";
import ResearchWord from "@/components/homecomponents/ResearchWord.vue";
</script>

<template>
  <div class="flex flex-col gap-10">
    <AboutUs />
    <div
      class="md:flex md:flex-row md:gap-3 md:justify-around flex flex-col gap-10 w-full"
    >
      <HomeImage />
      <NewsBox />
    </div>
    <ResearchWord />
  </div>
</template>

<style scoped></style>
