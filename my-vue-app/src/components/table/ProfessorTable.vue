<script setup lang="ts">
import { Professor } from "@/type";
import { VDataTableVirtual } from "vuetify/lib/components/index.mjs";

defineProps<{
  items: Professor[];
  headers: { title: string; key: keyof Omit<Professor, "type"> }[];
}>();
type SortItem = {
  key: keyof Omit<Professor, "type">;
  order?: "asc" | "desc";
};
const sortItems: SortItem[] = [{ key: "kanaName", order: "asc" }];
</script>
<template>
  <div>
    <VDataTableVirtual
      :sort-by="sortItems"
      :headers="headers"
      :items="items"
      :mobile="false"
    >
      <template #headers>
        <tr class="bg-blue-500">
          <th v-for="header in headers" :key="header.title" class="text-white">
            <div class="font-bold">{{ header.title }}</div>
          </th>
        </tr>
      </template>
      <template #item="{ item, index }">
        <tr
          v-if="item.type === 'Professor'"
          :class="{ 'bg-slate-200': index % 2 != 0 }"
        >
          <td>{{ item.kanjiName }}</td>
          <td>{{ item.kanaName }}</td>
          <td>{{ item.researchField }}</td>
        </tr>
      </template>
    </VDataTableVirtual>
  </div>
</template>
