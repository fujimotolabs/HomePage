<script setup lang="ts">
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <v-app>
    <v-layout class="rounded-md">
      <v-app-bar title="Application bar"></v-app-bar>

      <v-navigation-drawer>
        <v-list>
          <v-list-item>
            <router-link to="/">Go to Home</router-link>
          </v-list-item>
          <v-list-item>
            <router-link to="/labMember">Go to Lab Member</router-link>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <router-view v-slot="{ Component, route }">
          <transition name="fade" mode="out-in">
            <div :key="route.fullPath">
              <component :is="Component" />
            </div>
          </transition>
        </router-view>
      </v-main>
    </v-layout>
  </v-app>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  will-change: opacity;
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
