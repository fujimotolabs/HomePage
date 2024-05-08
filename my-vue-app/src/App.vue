<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import SideBar from "./components/sidebar/SideBar.vue";
const drawer = ref(false);
</script>

<template>
  <v-app>
    <v-layout class="rounded-md overflow-hidden h-screen w-screen">
      <v-app-bar>
        <v-app-bar-nav-icon
          ><button @click="drawer = !drawer">
            <FontAwesomeIcon icon="list" /></button
        ></v-app-bar-nav-icon>
      </v-app-bar>

      <SideBar :drawer="drawer" @update:drawer="drawer = !drawer" />
      <v-main class="h-full w-full overflow-auto bg-slate-100">
        <RouterView v-slot="{ Component, route }">
          <transition
            enter-active-class="animate__animated animate__fadeInUp"
            leave-active-class="animate__animated animate__fadeOut"
          >
            <div :key="route.fullPath">
              <component :is="Component" />
            </div>
          </transition>
        </RouterView>
      </v-main>
    </v-layout>
  </v-app>
</template>

<style scoped>
@media (max-width: 600px) {
  .mobile-hide {
    display: none;
  }
}
</style>
