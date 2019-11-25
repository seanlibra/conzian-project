export const xProfileData = {
  state: {
    Xprofile: {
      id: '',
      value: '',
      page: ''
    }
  },
  mutations: {
    PROFILESTATES (state, status) {
      state.Xprofile = status
    }
  },
  actions: {
    updateProfile (context, status) {
      context.commit('PROFILESTATES', status)
    }
  }
}
