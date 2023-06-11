import { createStore } from 'vuex'

export default createStore({
  state: {
    sharedVariable: true
  },
  getters: {},
  mutations: {
    setSharedVariable (state, value) {
      state.sharedVariable = value
    }
  },
  actions: {},
  modules: {}
})
