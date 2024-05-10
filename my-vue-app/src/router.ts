import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    component: async () => {
      return await import("@/views/HomeContainer.vue");
    },
    name: "home",
    meta: {
      icon: "home",
    },
  },
  {
    path: "/Member",
    component: async () => {
      return await import("@/views/LabMemberContainer.vue");
    },
    name: "Member",
    meta: {
      icon: "users",
    },
  },
  {
    path: "/ResearchDetail",
    component: async () => {
      return await import("@/views/ResearchDetailContainer.vue");
    },
    name: "ResearchDetail",
    meta: {
      icon: "flask",
    },
  },
];
export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});
