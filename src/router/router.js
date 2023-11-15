import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/Home", component: () => import("@pages/Home.vue") },
  { path: "/DogsFed", component: () => import("@pages/DogsFed.vue") },
  { path: "/About", component: () => import("@pages/About.vue") },
  { path: "/Account/:id", component: () => import("@pages/Account.vue") },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
