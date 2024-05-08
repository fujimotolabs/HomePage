<script setup lang="ts">
defineProps<{
  renderingAbout: boolean;
}>();
</script>

<template>
  <div>
    <div
      class="flex justify-center"
      :class="{
        'animate__animated animate__fadeInRightBig': renderingAbout,
      }"
    >
      <v-sheet elevation="16" class="w-max h-full">
        <img src="../../../public/lab5-01.png" class="scale-100" />
      </v-sheet>
    </div>
  </div>
</template>
