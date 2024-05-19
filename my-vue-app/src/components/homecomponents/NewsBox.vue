<script setup lang="ts">
import { someNews } from "@/data/NewsData";

const decodeDateToString = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return `${year}/${month}/${day}`;
};
</script>

<template>
  <v-sheet class="p-5 md:w-1/4">
    <div class="font-bold text-xl font-sans border-t-4 border-blue-500 w-full">
      News
    </div>
    <div v-for="news in someNews" :key="decodeDateToString(news.createdAt)">
      <div class="flex flex-row w-full justify-around gap-5">
        <p>{{ decodeDateToString(news.createdAt) }}</p>
        <p class="truncate">{{ news.title }}</p>
      </div>
    </div>
  </v-sheet>
</template>
