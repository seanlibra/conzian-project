import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Xsummary: {
      id: '',
      value: '',
      page: ''
    },
    Xprofile: {
      id: '',
      value: '',
      page: ''
    },
    Xdaymove: {
      id: '',
      value: '',
      page: ''
    }
  },
  actions: {
    updateSummary (context, status) {
      context.commit('SUMMARYSTATES', status)
    },
    updateProfile (context, status) {
      context.commit('PROFILESTATES', status)
    },
    updateDaymove (context, status) {
      context.commit('DAYMOVESTATES', status)
    }
  },
  mutations: {
    SUMMARYSTATES (state, status) {
      state.Xsummary = status
    },
    PROFILESTATES (state, status) {
      state.Xprofile = status
    },
    DAYMOVESTATES (state, status) {
      state.Xdaymove = status
    }
  }
})
