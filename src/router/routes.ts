export const constRoutes = [
  {
    path: "/",
    name: "layout",
    component: () => import("@/layout/index.vue"),
    redirect: "/home",
    meta: {
      title: "layout",
      flag: true,
      icon: "Star",
    },
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: "首页",
          flag: true,
          icon: "House",
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
      flag: false,
      icon: "Location",
    },
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404/404.vue"),
    meta: {
      title: "404",
      flag: false,
      icon: "Lock",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404", // 直接写路径
    name: "Any",
    meta: {
      title: "任意",
      flag: false,
      icon: "Compass",
    },
  },
  {
    path: "/screen",
    name: "Screen",
    component: () => import("@/views/screen/index.vue"),
    meta: {
      title: "数据大屏",
      flag: true,
      icon: "Monitor",
    },
  },
  {
    path: "/acl",
    name: "Acl",
    component: () => import("@/layout/index.vue"),
    meta: {
      title: "权限管理",
      flag: true,
      icon: "Lock",
    },
    children: [
      {
        path: "/acl/user",
        name: "User",
        component: () => import("@/views/acl/user/index.vue"),
        meta: {
          title: "用户管理",
          flag: true,
          icon: "User",
        },
      },
      {
        path: "/acl/role",
        name: "Role",
        component: () => import("@/views/acl/role/index.vue"),
        meta: {
          title: "角色管理",
          flag: true,
          icon: "Avatar",
        },
      },
      {
        path: "/acl/permission",
        name: "Permission",
        component: () => import("@/views/acl/permission/index.vue"),
        meta: {
          title: "菜单管理",
          flag: true,
          icon: "TakeawayBox",
        },
      },
    ],
  },
  {
    path: "/shop",
    name: "Shop",
    component: () => import("@/layout/index.vue"),
    meta: {
      title: "商品管理",
      flag: true,
      icon: "Lock",
    },
    children: [
      {
        path: "/shop/attr",
        name: "Attr",
        component: () => import("@/views/shop/attr/index.vue"),
        meta: {
          title: "属性管理",
          flag: true,
          icon: "Aim",
        },
      },
      {
        path: "/shop/brand",
        name: "Brand",
        component: () => import("@/views/shop/brand/index.vue"),
        meta: {
          title: "品牌管理",
          flag: true,
          icon: "ShoppingCartFull",
        },
      },
      {
        path: "/shop/sku",
        name: "Sku",
        component: () => import("@/views/shop/sku/index.vue"),
        meta: {
          title: "sku",
          flag: true,
          icon: "Scissor",
        },
      },
      {
        path: "/shop/spu",
        name: "Spu",
        component: () => import("@/views/shop/spu/index.vue"),
        meta: {
          title: "spu",
          flag: true,
          icon: "Flag",
        },
      },
    ],
  },
];
