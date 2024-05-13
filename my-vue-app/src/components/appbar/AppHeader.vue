<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useRouter } from "vue-router";
import { VAppBar } from "vuetify/lib/components/index.mjs";
defineProps<{
  drawer: boolean;
}>();

const emits = defineEmits<{
  (e: "update:drawer", value: boolean): void;
}>();
const router = useRouter();
const goToHome = () => {
  router.push("/");
};
</script>

<template>
  <div>
    <VAppBar color="#d3d3d3">
      <v-app-bar-nav-icon>
        <button @click="emits('update:drawer', !drawer)">
          <FontAwesomeIcon icon="list" />
        </button>
      </v-app-bar-nav-icon>

      <v-spacer />
      <button @click="goToHome()">
        <img class="scale-50" src="/lablogo.gif" />
      </button>
    </VAppBar>
  </div>
</template>

<style></style>
