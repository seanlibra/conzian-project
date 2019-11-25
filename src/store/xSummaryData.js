export const xSummaryData = {
  state: {
    Xsummary: {
      id: '',
      value: '',
      page: ''
    }
  },
  mutations: {
    SUMMARYSTATES (state, status) {
      state.Xsummary = status
    }
  },
  actions: {
    updateSummary (context, status) {
      context.commit('SUMMARYSTATES', status)
    }
  }
}
