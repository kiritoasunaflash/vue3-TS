export const constRoutes = [
  {
    path: "/",
    name: "layout",
    component: () => import("@/layout/index.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404/404.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404", // 直接写路径
    name: "Any",
  },
];
