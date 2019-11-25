import Vue from 'vue'
import Router from 'vue-router'
import page from '@/router/page.js'
import Board from '@/router/main.js'
Vue.use(Router)

export default new Router({
  routes: [
    ...Board,
    ...page
  ]
})
