<template>
  <div>
    <div v-for="[path, name] in linkMap" :key="path">
      <v-list-item>
        <RouterLink :to="path"> {{ name }}</RouterLink>
      </v-list-item>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, useRouter } from "vue-router";

defineProps<{
  links?: string[];
}>();

const router = useRouter();

const allLinks: string[] = router.getRoutes().map((route) => route.path);
const allLinksName = router.getRoutes().map((route) => route.name);
const linkMap = new Map<string, string>();
for (let i = 0; i < allLinks.length; i++) {
  linkMap.set(allLinks[i], allLinksName[i] as string);
}
</script>

<style scoped></style>
