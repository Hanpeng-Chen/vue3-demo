import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Mine from "../views/Mine.vue";

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/home",
      name: "Home",
      component: Home,
    },
    {
      path: "/mine",
      name: "Mine",
      component: Mine,
    },
  ],
});

export default router;
