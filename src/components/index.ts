import iconSvg from "./iconSvg.vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
const allGlobalComponents = { iconSvg };
export default {
  install(app) {
    Object.keys(allGlobalComponents).forEach((item) => {
      app.component(item, allGlobalComponents[item]);
    });
    // 全局注入icon图标
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
  },
};
