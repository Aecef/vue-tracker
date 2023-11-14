import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@pages/Home.vue";
import DogsFed from "@pages/DogsFed.vue";
import About from "@pages/About.vue";

const routes = [
  { path: "/Home", component: Home },
  { path: "/DogsFed", component: DogsFed },
  { path: "/About", component: About },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
