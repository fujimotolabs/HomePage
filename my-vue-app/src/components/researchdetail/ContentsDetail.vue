<script setup lang="ts">
import { ProjectWithUrl } from "@/type";

defineProps<{
  title: string;
  content: string;
  projects: ProjectWithUrl[];
  srcImage: string;
}>();
</script>

<template>
  <v-sheet class="w-full h-full" elevation="16">
    <div class="font-bold text-3xl mb-10 text-blue-400 font-sans">
      {{ title }}
    </div>
    <div class="flex md:flex-row flex-col justify-evenly">
      <div class="font-sans text-lg text-slate-500 md:w-1/2">
        {{ content }}
      </div>
      <img :src="srcImage" class="mobile-layout" />
    </div>
    <div class="flex flex-col gap-y-4">
      <div v-for="item in projects" :key="item.projectName">
        <a :href="item.url" class="hover:underline text-blue-700">
          {{ item.projectName }}
        </a>
      </div>
    </div>
  </v-sheet>
</template>
<style scoped>
@media (max-width: 768px) {
  .mobile-layout {
    width: 200px;
    height: 300px;
  }
}
</style>
