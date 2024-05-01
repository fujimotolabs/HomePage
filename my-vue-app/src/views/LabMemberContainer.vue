<script setup lang="ts">
import StudentTable from "@/components/table/studentTable.vue";
import { Student, Grade, LabMembers } from "@/type";

const items: LabMembers = [
  {
    type: "Student",
    kanaName: "スギモト エイ",
    kanjiName: "杉本 英",
    grade: Grade.M1,
    researchField: "高性能計算",
  },
  {
    type: "Student",
    kanaName: "サカタ ヤマト",
    kanjiName: "坂田 倭都",
    grade: Grade.M1,
    researchField: "高性能計算",
  },
  {
    type: "Student",
    kanaName: "オオシカ ショウイチ",
    kanjiName: "大鹿 祥一",
    grade: Grade.M1,
    researchField: "高性能計算",
  },
];

const headers: { title: string; key: Required<keyof Omit<Student, "type">> }[] =
  [
    { title: "名前", key: "kanjiName" },
    { title: "フリガナ", key: "kanaName" },
    { title: "学年", key: "grade" },
    { title: "研究分野", key: "researchField" },
  ];
</script>

<template>
  <div>
    <div class="text-3xl font-mono">
      学生一覧
    </div>

    <StudentTable
      :items="items"
      :headers="headers"
    />
  </div>
</template>
