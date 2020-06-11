import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {todoList: [
  //  {  id: 1, title: "Todo One", },
    //{ id: 2, title: "Todo Two",  },
        ],
  },
  getters: {    
    getTodoList: (state) => state.todoList,
  },
  mutations: {
    ADD_TASK(state, title) {
      if (state.todoList.map(todoList => todoList.title).indexOf(title) === -1) {
        console.log('add-mutation-',state.todoList.map(todoList => todoList.title).indexOf(title))
        state.todoList.push({ title})
      }
  },
  DELETE_TASK(state, title) {
    console.log('mutation-delete',state,title, state.todoList.indexOf(title))

    state.todoList.splice(state.todoList.indexOf(title), 1)
},
},
  actions: {
    addTask({ commit }, task) {
      console.log('store-addtask-',task)
      commit("ADD_TASK", task.title);
    },
    deleteTask({ commit }, title) {
      console.log('store-deletetask-',title)
      commit("DELETE_TASK", title)
    },
  },
  modules: {  }
})
