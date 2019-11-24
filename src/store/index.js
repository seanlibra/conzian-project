import Vue from 'vue';
import Vuex from 'vuex'


Vue.use(Vuex);

export default new Vuex.Store({
state:{
  Xsummary:{},
  Xprofile:{},
  Xdaymove:{},
},
actions:{
  updateSummary(context,status){
    context.commit('SUMMARYSTATES',status)
  },
  updateProfile(context,status){
    context.commit('PROFILESTATES',status)
  },
  updateDaymove(context,status){
    context.commit('DAYMOVESTATES',status)
  },
  cleandata(context,state){
    context.commit('CLEAN',status)
  }

},
mutations:{
  SUMMARYSTATES(state,status){
   state.Xsummary = status
  },
  PROFILESTATES(state,status){
   state.Xprofile = status 
  },
  DAYMOVESTATES(state,status){
   state.Xdaymove = status
  },
  CLEAN(state,status){
    state.Xsummary = status
  }

}


})