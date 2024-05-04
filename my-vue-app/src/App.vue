<script setup lang="ts">
import { ref } from "vue";
import SideBarItem from "@/components/sidebar/SideBarItem.vue";
import { RouterView } from "vue-router";
const drawer = ref(false);
</script>

<template>
  <v-app>
    <v-layout class="rounded-md overflow-hidden h-screen w-screen">
      <v-app-bar title="Application bar" />

      <div>
        <v-navigation-drawer v-model="drawer" temporary>
          <v-list>
            <SideBarItem />
          </v-list>
        </v-navigation-drawer>
      </div>
      <v-main class="h-full w-full overflow-auto">
        <RouterView v-slot="{ Component, route }">
          <transition
            enter-active-class="animate__animated animate__backInDown"
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
