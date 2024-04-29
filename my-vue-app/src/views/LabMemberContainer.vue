<script setup lang="ts">
import { Student, Grade, LabMember, LabMembers } from "@/type";

const items: LabMembers = [
  {
    type: "Student",
    kanaName: "スギモト エイ",
    kanjiName: "杉本 英",
    grade: Grade.M1,
  },
  {
    type: "Student",
    kanaName: "サカタ ヤマト",
    kanjiName: "坂田 倭都",
    grade: Grade.M1,
  },
  {
    type: "Student",
    kanaName: "オオシカ ショウイチ",
    kanjiName: "大鹿 祥一",
    grade: Grade.M1,
  },
];

const headers: { title: string; key: keyof Omit<Student, "type"> }[] = [
  { title: "名前", key: "kanjiName" },
  { title: "フリガナ", key: "kanaName" },
  { title: "学年", key: "grade" },
];
</script>

<template>
  <div>
    <div class="text-4xl">学生一覧</div>
    <v-data-table-virtual :headers="headers" :items="items">
      <template v-slot:headers>
        <tr class="bg-blue-500">
          <th v-for="header in headers" :key="header.title" class="text-white">
            <span class="font-bold"> {{ header.title }}</span>
          </th>
        </tr>
      </template>
      <template v-slot:item="{ item, index }">
        <tr
          v-if="item.type === 'Student'"
          :class="{ 'bg-slate-200': index % 2 != 0 }"
        >
          <td>{{ item.kanjiName }}</td>
          <td>{{ item.kanaName }}</td>
          <td>{{ item.grade }}</td>
        </tr>
      </template>
    </v-data-table-virtual>
  </div>
</template>
