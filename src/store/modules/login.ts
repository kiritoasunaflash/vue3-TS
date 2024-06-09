export default {
  namespaced: true,
  state: {
    token: "0111",
  },
  mutations: {
    increment(state, val) {
      state.token += val;
    },
  },
  actions: {},
};
