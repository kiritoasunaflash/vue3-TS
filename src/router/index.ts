import { createRouter, createWebHistory } from "vue-router";
import { constRoutes } from "./routes";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constRoutes,
  scrollBehavior (to, from, savedPosition) {
    return{
      top:0,
      left:0
    }
  }
});

export default router;
