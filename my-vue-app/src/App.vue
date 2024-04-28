<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <v-app>
    <v-layout class="rounded-md">
      <v-app-bar title="Application bar"></v-app-bar>

      <v-navigation-drawer>
        <v-list>
          <v-list-item title="Navigation drawer"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <RouterView />
      </v-main>
    </v-layout>
  </v-app>
</template>
