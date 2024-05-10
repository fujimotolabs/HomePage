<script setup lang="ts">
import AboutPage from "@/components/researchdetail/AboutPage.vue";
import FujimotoReseach from "@/components/researchdetail/FujimotoReseach.vue";
import { ref } from "vue";
const animation = ref(false);

setTimeout(() => {
  animation.value = true;
}, 1000);
</script>

<template>
  <div class="flex flex-col gap-y-16">
    <AboutPage
      :class="{ 'animate__animated animate__fadeInLeftBig': animation }"
    />
    <FujimotoReseach
      :class="{ 'animate__animated animate__fadeInRightBig': animation }"
    />
  </div>
</template>
<style></style>
