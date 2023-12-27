import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("@pages/Future.vue") },
  { path: "/DogsFed", component: () => import("@pages/DogsFed.vue") },
  { path: "/About", component: () => import("@pages/About.vue") },
  { path: "/Account/:id", component: () => import("@pages/Account.vue") },
  { path: "/Error/:error", component: () => import("@pages/Error.vue") },
  { path: "/Decide", component: () => import("@pages/Decide.vue") },
  { path: "/Education", component: () => import("@pages/Education.vue") },
  { path: "/Experience", component: () => import("@pages/Experience.vue") },
  // { path: "/Future", component: () => import("@pages/Future.vue") },
  { path: "/Hobbies", component: () => import("@pages/Hobbies.vue") },
  { path: "/Projects", component: () => import("@pages/Projects.vue") },
  { path: "/Assets", component: () => import("@assets") },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
