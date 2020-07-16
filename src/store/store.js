import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    tableData: []
  },
  mutations: {
    addUser(state, payload) {
      console.log(state);
      state.tableData = state.tableData.concat(payload.data);
    }
  },
  actions: {
    addUser({ commit }, payload) {
      commit("addUser", payload);
    }
  }
});