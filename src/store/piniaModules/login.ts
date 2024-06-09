import { defineStore } from "pinia";
import { getLoginApi } from "@/api/user";
import { setToken, getToken } from "@/utils/setUseInfo";
export const loginStore = defineStore("login", {
  state: () => {
    return {
      token: getToken("token") || null,
    };
  },

  actions: {
    async userLogin(data) {
      const resLogin = await getLoginApi(data);
      console.log(resLogin.data.code);
      if (resLogin.data.code == 200) {
        this.token = resLogin.data.data.token;
        setToken(this.token);
        console.log(resLogin.data.data.token);
        return "ok";
      } else {
        console.log(111);
        return Promise.reject(new Error(resLogin.data.data.message));
      }
    },
    getters: {},
  },
});
