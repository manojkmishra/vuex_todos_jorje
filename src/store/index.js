import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {boxes: [] },
  getters: { getTodoList: (state) => state.todoList,  },
  mutations: {
    SwitchBoxes: (state, { fromIndex, toIndex }) => {
      state.boxes[fromIndex] = {
        index: fromIndex,
        items: state.boxes.splice(toIndex, 1, {
          index: toIndex,
          items: state.frames[fromIndex].items
        })[0].items
      };
    },
    newItemColumn: (state, itemProps) => {
      state.boxes[0].items.push({
        id: state.idCounter,
        props: itemProps
      });
      state.idCounter += 1;
    }
},
  actions: {
    moveFrameDown({ commit }, frameIndex) {
      commit('switchBoxes', { fromIndex: frameIndex, toIndex: frameIndex + 1 });
    },
    addBoxColumn({ commit }, item) {
      // Item is a default item type
      commit('newItemColumn', item);
    },
  },
  modules: {  }
})
