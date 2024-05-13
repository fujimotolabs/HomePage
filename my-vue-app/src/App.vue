<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";
import SideBar from "./components/sidebar/SideBar.vue";
import AppHeader from "./components/appbar/AppHeader.vue";
const drawer = ref(false);
</script>

<template>
  <v-app>
    <AppHeader v-model:drawer="drawer" />

    <SideBar :drawer="drawer" @update:drawer="drawer = !drawer" />
    <v-main class="h-full w-full bg-slate-100">
      <RouterView v-slot="{ Component, route }">
        <transition
          leave-active-class="animate__animated animate__fadeOut"
          enter-to-class="animate__animated animate__fadeIn"
          appear
          mode="out-in"
        >
          <div :key="route.fullPath">
            <component :is="Component" />
          </div>
        </transition>
      </RouterView>
    </v-main>
  </v-app>
</template>

<style scoped>
@media (max-width: 600px) {
  .mobile-hide {
    display: none;
  }
}
</style>
