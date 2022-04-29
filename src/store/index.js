import Vue from 'vue'
import Vuex from 'vuex'
// dynamic router permission control (Experimental)
// import permission from './modules/async-router'
import getters from './getters'
import app from './modules/app'
// default router permission control
import permission from './modules/permission'
import resource from './modules/resource'
import user from './modules/user'




Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    user,
    permission,
    resource
  },
  state: {
    userLevel: '1',
  },
  mutations: {
    set_userLevel(state, data) {
      state.userLevel = data
    },

  },
  actions: {

  },
  getters
})
