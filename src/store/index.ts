import { createStore } from "vuex";
import userInfoStore from "./modules/userInfo";
import loginStore from "./modules/login";
// import { userInfoStore } from "./piniaModules/userInfo";
// import { loginStore } from "./piniaModules/login";
const store = createStore({
  modules: {
    userInfoStore,
    loginStore,
  },
});
export default store;
