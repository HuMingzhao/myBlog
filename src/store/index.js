import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showLogin: false
  },
  mutations: {
    SET_SHOW_LOGIN: (state, showLogin) => {
      state.showLogin = showLogin
    }
  },
  actions: {
  },
  modules: {
  },
  getters
})
