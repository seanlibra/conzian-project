import Vue from 'vue'
import Vuex from 'vuex'
import { xSummaryData } from '@/store/xSummaryData.js'
import { xProfileData } from '@/store/xProfileData.js'
import { xDayMoveData } from '@/store/xDayMoveData.js'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    SummaryMod: xSummaryData,
    ProfileMod: xProfileData,
    DayMoveMod: xDayMoveData
  },
  state: {
  },
  actions: {
  },
  mutations: {
  }
})
