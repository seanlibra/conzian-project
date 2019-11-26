// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import 'vuetify/dist/vuetify.min.css'
import store from './store'
import axios from 'axios'
axios.defaults.baseURL = 'https://i1qfr4wu4i.execute-api.us-east-1.amazonaws.com/dev/'
Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
