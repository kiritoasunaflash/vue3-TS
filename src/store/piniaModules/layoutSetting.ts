import { defineStore } from "pinia";
export const layoutSettingStore = defineStore("layoutSetting", {
  state: () => {
    return {
      //展开或收缩
      layoutFlag: false,
      //   是否刷新
      isRefresh: false,
    };
  },
  actions: {
    useRefresh() {
      this.isRefresh = !this.isRefresh;
    },
  },
});
