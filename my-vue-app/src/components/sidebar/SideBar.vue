<script setup lang="ts">
import SideBarItem from "./SideBarItem.vue";
</script>

<template>
  <div>
    <v-navigation-drawer>
      <v-list>
        <SideBarItem />
      </v-list>
    </v-navigation-drawer>
    <SideBarItem />
  </div>
</template>
