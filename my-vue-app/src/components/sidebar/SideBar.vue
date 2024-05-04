<script setup lang="ts">
import { computed } from "vue";
import SideBarItem from "./SideBarItem.vue";

const props = defineProps<{
  drawer: boolean;
}>();
const emits = defineEmits<{
  (e: "update:drawer", value: boolean): void;
}>();
const toggle = computed({
  get: () => props.drawer,
  set: (value: boolean) => {
    emits("update:drawer", value);
  },
});
</script>
<template>
  <div>
    <v-navigation-drawer v-model="toggle" temporary touchless>
      <v-list>
        <SideBarItem @update:drawer="emits('update:drawer', false)" />
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
