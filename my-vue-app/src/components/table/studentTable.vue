<script setup lang="ts">
import { LabMembers, Student } from "@/type";

defineProps<{
  items: LabMembers;
  headers: {
    title: string;
    key: keyof Omit<Student, "type">;
    mobileHide: boolean;
  }[];
}>();
type SortItem = {
  key: keyof Omit<Student, "type">;
  order?: "asc" | "desc";
};
const sortItems: SortItem[] = [{ key: "grade", order: "desc" }];
</script>
<template>
  <div>
    <v-data-table-virtual
      v-model:sort-by="sortItems"
      :headers="headers"
      :items="items"
      :mobile="false"
    >
      <template #headers>
        <tr class="bg-blue-500">
          <th
            v-for="header in headers"
            :key="header.title"
            class="text-white"
            :class="{ 'mobile-hide': header.mobileHide }"
          >
            <span class="font-bold"> {{ header.title }}</span>
          </th>
        </tr>
      </template>
      <template #item="{ item, index }">
        <tr
          v-if="item.type === 'Student'"
          :class="{
            'bg-slate-200': index % 2 != 0,
          }"
        >
          <td>{{ item.kanjiName }}</td>
          <td>{{ item.kanaName }}</td>
          <td>{{ item.grade }}</td>
          <td class="mobile-hide">{{ item.researchField }}</td>
        </tr>
      </template>
    </v-data-table-virtual>
  </div>
</template>

<style scoped>
@media (max-width: 600px) {
  .mobile-hide {
    display: none;
  }
}
</style>
