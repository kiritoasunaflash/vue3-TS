import iconSvg from "./iconSvg.vue";
const allGlobalComponents = { iconSvg };
export default {
  install(app) {
    Object.keys(allGlobalComponents).forEach((item) => {
      app.component(item, allGlobalComponents[item]);
    });
  },
};
