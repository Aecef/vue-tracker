import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/Home", component: () => import("~App") },
  { path: "/DogsFed", component: () => import("@pages/DogsFed.vue") },
  { path: "/About", component: () => import("@pages/About.vue") },
  { path: "/Account/:id", component: () => import("@pages/Account.vue") },
  { path: "/Error/:error", component: () => import("@pages/Error.vue") },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
