import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./styles/element/index.scss";
import App from "./App.vue";
import router from "./router";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import "virtual:svg-icons-register";
import globalComponents from "@/components/index";
import axios from "axios";
import "@/styles/reset.scss";
import store from "./store";
import pinia from "./store/pinia";
const app = createApp(App);

app.use(router);
app.use(globalComponents);
//vuex
app.use(store);
// pinia
app.use(pinia);
app.use(ElementPlus, {
  locale: zhCn,
});
app.mount("#app");
