<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";
import SideBar from "./components/sidebar/SideBar.vue";
import AppHeader from "./components/appbar/AppHeader.vue";
import AppFooter from "./components/footerbar/AppFooter.vue";
const drawer = ref(false);
</script>

<template>
  <v-app>
    <AppHeader v-model:drawer="drawer" />

    <SideBar :drawer="drawer" @update:drawer="drawer = !drawer" />
    <v-main class="h-full w-full bg-slate-100">
      <RouterView v-slot="{ Component, route }">
        <Transition
          leave-active-class="animate__animated animate__fadeOut"
          enter-to-class="animate__animated animate__fadeIn"
          class="duration-500"
          appear
          mode="out-in"
        >
          <div :key="route.fullPath" class="flex flex-col gap-y-10">
            <component :is="Component" />
            <AppFooter />
          </div>
        </Transition>
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
