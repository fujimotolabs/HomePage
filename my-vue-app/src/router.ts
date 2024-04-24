import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    component: async () => {
      return await import("@/views/Home.vue");
    },
  },
  {
    path: "/labMember",
    component: async () => {
      return await import("@/views/LabMemberContainer.vue");
    },
  },
];
export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
