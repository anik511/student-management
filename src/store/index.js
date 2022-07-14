import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    electronics: null,
    fashion: null,
  },
  getters: {},
  mutations: {
    setElectronics(state, payload) {
      state.electronics = payload;
    },
  },
  actions: {
    getElectronics({ commit }) {
      let data = "adasfdydasa";
      commit("setElectronics", data);
    },
  },
  modules: {},
});
