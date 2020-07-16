import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    posts: {
      name: "",
      category: "",
      code: "",
      price: ""
    },
    formData: [],
    show: false
  },
  getters: {
    name: state => {
      return state.posts.name;
    },
    category: state => {
      return state.posts.category;
    },
    code: state => {
      return state.posts.code;
    },
    price: state => {
      return state.posts.price;
    },
    fdata: state => {
      return state.formData;
    }
  },
  mutations: {
    updateName: (state, payload) => {
      return (state.posts.name = payload);
    },
    updateCategory: (state, payload) => {
      return (state.posts.category = payload);
    },
    updateCode: (state, payload) => {
      return (state.posts.code = payload);
    },
    updatePrice: (state, payload) => {
      return (state.posts.price = payload);
    },
    updateFdata: (state, payload) => {
      return (state.formDate = payload);
    }
  },
  actions: {
    updateName: ({ commit }, payload) => {
      commit("updateName", payload);
    },
    updateCategory: ({ commit }, payload) => {
      commit("updateCategory", payload);
    },
    updateCode: ({ commit }, payload) => {
      commit("updateCode", payload);
    },
    updatePrice: ({ commit }, payload) => {
      commit("updatePrice", payload);
    },
    updateFdata: ({ commit }, payload) => {
      commit("updateFdata", payload);
    }
  }
});
