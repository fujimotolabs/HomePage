<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { RouterLink, useRouter } from "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    // is optional
    icon?: string;
  }
}
defineProps<{
  links?: string[];
}>();

const routes = useRouter().options.routes;

defineEmits<{
  (e: "update:drawer"): void;
}>();
</script>

<template>
  <div>
    <div v-for="route in routes" :key="route.path">
      <v-list-item>
        <RouterLink :to="route.path" @click="$emit('update:drawer')">
          <div
            v-if="route.meta?.icon"
            class="flex , flex-row justify-center gap-5"
          >
            <FontAwesomeIcon :icon="route.meta.icon" />
            {{ route.name }}
          </div>
        </RouterLink>
      </v-list-item>
    </div>
  </div>
</template>

<style scoped></style>
