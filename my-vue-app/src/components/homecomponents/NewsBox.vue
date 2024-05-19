<script setup lang="ts">
import { someNews } from "@/data/NewsData";

const decodeDateToString = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}/${month}/${day}`;
};
</script>

<template>
  <v-sheet class="p-6 md:w-1/4 h-80 overflow-hidden">
    <div class="font-bold text-xl font-sans border-t-4 border-blue-500 w-full">
      News
    </div>
    <div v-for="news in someNews" :key="decodeDateToString(news.createdAt)">
      <div class="gird grid-flow-col border-b-2 border-b-slate-300">
        <p>{{ decodeDateToString(news.createdAt) }}</p>
        <router-link v-if="news.url" :to="news.url">
          <p>{{ news.title }}</p>
        </router-link>
        <p v-else>{{ news.title }}</p>
      </div>
    </div>
  </v-sheet>
</template>
