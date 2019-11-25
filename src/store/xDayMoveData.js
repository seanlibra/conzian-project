export const xDayMoveData = {
  state: {
    Xdaymove: {
      id: '',
      value: '',
      page: ''
    }
  },
  mutations: {
    DAYMOVESTATES (state, status) {
      state.Xdaymove = status
    }
  },
  actions: {
    updateDaymove (context, status) {
      context.commit('DAYMOVESTATES', status)
    }
  }
}
