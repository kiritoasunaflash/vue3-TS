import { defineStore } from "pinia";
import { constRoutes } from "@/router/routes";
export const menuStore = defineStore("menu", {
  state: () => {
    return {
      menuList: constRoutes,
    };
  },
});
