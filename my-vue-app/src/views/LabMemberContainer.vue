<script setup lang="ts">
import StudentTable from "@/components/table/studentTable.vue";
import { Student, Professor } from "@/type";
import { students, professors } from "@/data/LabMembers";
import ProfessorTable from "@/components/table/ProfessorTable.vue";

const studentHeaders: {
  title: string;
  key: Required<keyof Omit<Student, "type">>;
  sortable: boolean;
}[] = [
  { title: "名前", key: "kanjiName", sortable: true },
  { title: "カナ名", key: "kanaName", sortable: true },
  { title: "学年", key: "grade", sortable: true },
  { title: "研究分野", key: "researchField", sortable: true },
];
const professorHeaders: {
  title: string;
  key: Required<keyof Omit<Professor, "type">>;
  sortable: boolean;
}[] = [
  { title: "名前", key: "kanjiName", sortable: true },
  { title: "カナ名", key: "kanaName", sortable: true },
  { title: "研究分野", key: "researchField", sortable: true },
];
</script>

<template>
  <div>
    <div class="flex flex-col gap-3">
      <div class="text-3xl font-bold flex justify-center">Professor</div>
      <ProfessorTable :items="professors" :headers="professorHeaders" />
      <div class="text-3xl font-bold flex justify-center">Student</div>
      <StudentTable :items="students" :headers="studentHeaders" />
    </div>
  </div>
</template>
