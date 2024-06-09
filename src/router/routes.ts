export const constRoutes = [
  {
    path: "/",
    name: "layout",
    component: () => import("@/layout/index.vue"),
    meta: {
      title: "layout",
      flag: true,
    },
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: "首页",
          flag: true,
        },
        children: [
          {
            path: "ceshi1",
            name: "ceshi1",
            component: () => import("@/views/home/index.vue"),
            meta: {
              title: "测试1",
              flag: true,
            },
          },
          {
            path: "ceshi2",
            name: "ceshi2",
            component: () => import("@/views/home/index.vue"),
            meta: {
              title: "测试2",
              flag: true,
            },
          },
        ],
      },
      {
        path: "ceshi",
        name: "ceshi",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: "测试",
          flag: true,
        },
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      title: "登录",
      flag: true,
    },
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: "首页",
          flag: true,
        },
      },
    ],
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404/404.vue"),
    meta: {
      title: "404",
      flag: false,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404", // 直接写路径
    name: "Any",
    meta: {
      title: "任意",
      flag: false,
    },
  },
];
