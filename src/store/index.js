import { createStore } from 'vuex'

export default createStore({
  state: {
  },
  getters: {
    isCollapse(state) {return state.isCollapse;},
  },
  mutations: {
    CollapseClick(state) {state.isCollapse = !state.isCollapse;},
  },
  actions: {
  },
  modules: {
  }
})
