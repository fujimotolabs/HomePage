import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    component: async () => {
      return await import("@/views/HomeContainer.vue");
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
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});
