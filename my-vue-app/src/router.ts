import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    component: async () => {
      return await import("@/views/HomeContainer.vue");
    },
    name: "home",
    icon: "md:home",
  },
  {
    path: "/Member",
    component: async () => {
      return await import("@/views/LabMemberContainer.vue");
    },
    name: "Member",
    icon: "md:",
  },
];
export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});
